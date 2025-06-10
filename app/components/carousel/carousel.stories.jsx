import { Carousel } from '~/components/carousel';
import { StoryContainer } from '../../../.storybook/story-container';

export default {
  title: 'Carousel',
};

export const Images = () => (
  <StoryContainer>
    <Carousel
      style={{ maxWidth: 800, width: '100%' }}
      placeholder="/static/articles/modern-styling-in-react-banner-placeholder.jpg"
      images={[
        {
          src: '/static/articles/modern-styling-in-react-banner.jpg',
          alt: 'Neon pink and blue lights',
        },
        {
          src: '/static/articles/hello-world-banner-placeholder.jpg',
          alt: 'Geometric blue shapes',
        },
      ]}
      width={1920}
      height={1080}
    />
  </StoryContainer>
);
