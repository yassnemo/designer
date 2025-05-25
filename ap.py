import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from flask import Flask, jsonify
from datetime import datetime

# content_based_recommender.py
class ContentBasedRecommender:
    def __init__(self):
        self.movies_df = None
        self.tfidf = None
        self.tfidf_matrix = None
        self.similarity_matrix = None

    def _combine_features(self, row):
        features = []
        if 'genres' in row and row['genres']:
            genres = row['genres'].split()
            features.extend([g for g in genres for _ in range(3)])
        if 'overview' in row and row['overview']:
            features.append(row['overview'])
        if 'cast' in row and row['cast']:
            cast_list = row['cast'].split()[:5]
            features.extend([c for c in cast_list for _ in range(2)])
        if 'director' in row and row['director']:
            features.extend([row['director']] * 3)
        if 'keywords' in row and row['keywords']:
            features.append(row['keywords'])
        return ' '.join(features)

    def fit(self, movies_df):
        self.movies_df = movies_df
        self.tfidf = TfidfVectorizer(
            stop_words='english',
            ngram_range=(1, 2),
            min_df=2,
            max_features=5000
        )
        combined_features = self.movies_df.apply(self._combine_features, axis=1)
        self.tfidf_matrix = self.tfidf.fit_transform(combined_features)
        self.similarity_matrix = cosine_similarity(self.tfidf_matrix)

    def get_similar_movies(self, movie_id, top_n=10):
        movie_idx = self.movies_df.index[self.movies_df['id'] == movie_id].tolist()[0]
        sim_scores = list(enumerate(self.similarity_matrix[movie_idx]))
        sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)[1:top_n+1]
        movie_indices = [i[0] for i in sim_scores]
        return self.movies_df.iloc[movie_indices][['id', 'title']].to_dict('records')

# hybrid_recommender.py
class HybridRecommender:
    def __init__(self, content_recommender, diversity_factor=0.1):
        self.content_recommender = content_recommender
        self.diversity_factor = diversity_factor
        self.movies_df = content_recommender.movies_df
        self.user_data = {}

    def _get_quiz_based_recommendations(self, quiz_answers):
        filtered_df = self.movies_df.copy()
        if 'genres' in quiz_answers:
            genre_list = quiz_answers['genres']
            filtered_df = filtered_df[filtered_df['genres'].apply(
                lambda x: any(g in x.split() for g in genre_list))]
        if 'recency' in quiz_answers:
            current_year = datetime.now().year
            if quiz_answers['recency'] == 'recent':
                filtered_df = filtered_df[filtered_df['release_year'] >= current_year - 5]
            elif quiz_answers['recency'] == 'classic':
                filtered_df = filtered_df[filtered_df['release_year'] < 2000]
        if 'duration' in quiz_answers:
            if quiz_answers['duration'] == 'short':
                filtered_df = filtered_df[filtered_df['runtime'] < 100]
            elif quiz_answers['duration'] == 'medium':
                filtered_df = filtered_df[(filtered_df['runtime'] >= 100) & (filtered_df['runtime'] <= 150)]
            else:
                filtered_df = filtered_df[filtered_df['runtime'] > 150]
        return filtered_df.sort_values(by=['popularity', 'vote_average'], ascending=False).head(10)

    def get_recommendations(self, user_id, top_n=10):
        user_data = self.user_data.get(user_id, {})
        liked_movies = user_data.get('liked_movies', [])
        watched_movies = user_data.get('watched_movies', [])
        all_similar_movies = {}
        for movie_id in liked_movies[-3:]:
            similar_movies = self.content_recommender.get_similar_movies(movie_id, top_n=20)
            for movie in similar_movies:
                if movie['id'] in watched_movies or movie['id'] in liked_movies:
                    continue
                movie['similarity'] = self.content_recommender.similarity_matrix[
                    self.movies_df.index[self.movies_df['id'] == movie_id].tolist()[0],
                    self.movies_df.index[self.movies_df['id'] == movie['id']].tolist()[0]
                ]
                if movie['id'] in all_similar_movies:
                    current_score = all_similar_movies[movie['id']]['relevance_score']
                    new_score = current_score + (movie['similarity'] * (1 - current_score * self.diversity_factor))
                    all_similar_movies[movie['id']]['relevance_score'] = new_score
                else:
                    movie['relevance_score'] = movie['similarity']
                    all_similar_movies[movie['id']] = movie
        sorted_movies = sorted(all_similar_movies.values(), key=lambda x: x['relevance_score'], reverse=True)
        return sorted_movies[:top_n]

# app.py
app = Flask(__name__)
movies_df, content_recommender, hybrid_recommender = None, None, None

def load_movie_data():
    global movies_df, content_recommender, hybrid_recommender
    movies_df = pd.read_csv('tmdb_movies.csv')  # Placeholder for TMDB API data
    content_recommender = ContentBasedRecommender()
    content_recommender.fit(movies_df)
    hybrid_recommender = HybridRecommender(content_recommender)

load_movie_data()

@app.route('/recommendations/similar/<int:movie_id>')
def get_similar(movie_id):
    recs = content_recommender.get_similar_movies(movie_id)
    return jsonify(recs)

@app.route('/recommendations/personalized/<int:user_id>')
def get_personalized(user_id):
    recs = hybrid_recommender.get_recommendations(user_id)
    return jsonify(recs)

if __name__ == '__main__':
    app.run(debug=True)