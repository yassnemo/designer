import { formatTimecode, readingTime } from '~/utils/timecode';

export async function getPosts() {
  const modules = import.meta.glob('../articles.*.mdx', { eager: true });
  const build = await import('virtual:remix/server-build');

  const posts = await Promise.all(
    Object.entries(modules).map(async ([file, post]) => {
      let id = file.replace('../', 'routes/').replace(/\.mdx$/, '');
      let slug = build.routes[id].path;
      if (slug === undefined) throw new Error(`No route for ${id}`);

      // Skip posts without frontmatter or required fields
      if (!post.frontmatter || !post.frontmatter.title || !post.frontmatter.date) {
        return null;
      }

      const text = await import(`../articles.${slug}.mdx?raw`);
      const readTime = readingTime(text.default);
      const timecode = formatTimecode(readTime);

      return {
        slug,
        timecode,
        frontmatter: post.frontmatter,
      };
    })
  );

  // Filter out null entries (posts without proper frontmatter)
  const validPosts = posts.filter(post => post !== null);

  return sortBy(validPosts, post => post.frontmatter.date, 'desc');
}

function sortBy(arr, key, dir = 'asc') {
  return arr.sort((a, b) => {
    const aValue = key(a);
    const bValue = key(b);
    
    // Handle undefined or null values
    if (aValue === undefined || aValue === null) return 1;
    if (bValue === undefined || bValue === null) return -1;
    
    const res = compare(aValue, bValue);
    return dir === 'asc' ? res : -res;
  });
}

function compare(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}
