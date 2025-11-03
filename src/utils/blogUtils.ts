import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { formatDistanceToNow } from 'date-fns';
import type { BlogPost, BlogListItem, PostCategory } from '../types/blog';

const contentDirectory = path.join(process.cwd(), 'content');

function getCategories(): string[] {
  if (!fs.existsSync(contentDirectory)) return [];
  return fs.readdirSync(contentDirectory, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
}

export function getBlogPosts(category?: PostCategory): BlogListItem[] {
  const categoriesToScan = category ? [category] : getCategories();
  let allPosts: BlogListItem[] = [];

  for (const cat of categoriesToScan) {
    const categoryPath = path.join(contentDirectory, cat);
    if (fs.existsSync(categoryPath)) {
      const fileNames = fs.readdirSync(categoryPath).filter(name => name.endsWith('.mdx'));

      const postsInCategory = fileNames.map(fileName => {
        const fullPath = path.join(categoryPath, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        const slug = fileName.replace(/\.mdx$/, '');
        return {
          slug,
          title: data.title || 'Untitled',
          date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
          description: data.description || '',
          tags: data.tags || [],
          featured: data.featured || false,
          image: data.image || null,
          category: cat as PostCategory,
        };
      });
      allPosts.push(...postsInCategory);
    }
  }

  return allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPost(slug: string, category: PostCategory): BlogPost | null {
  if (!category) return null;

  const fullPath = path.join(contentDirectory, category, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    title: data.title || 'Untitled',
    date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
    description: data.description || '',
    tags: data.tags || [],
    featured: data.featured || false,
    image: data.image || null,
    category,
    author: {
      name: data.author?.name || 'Max Neuwinger',
      image: data.author?.image || '/images/avatar.jpg',
    },
    githubUrl: data.githubUrl || null,
    liveUrl: data.liveUrl || null,
    technologies: data.technologies || [],
  };
}


export function getLatestPosts(count: number = 3): BlogListItem[] {
  const posts = getBlogPosts();
  return posts.slice(0, count);
}

export function getFeaturedPosts(): BlogListItem[] {
  const posts = getBlogPosts();
  return posts.filter(post => post.featured);
}

export function getAllTags(): string[] {
  const posts = getBlogPosts();
  const tagSet = new Set<string>();

  posts.forEach(post => {
    if (Array.isArray(post.tags)) {
      post.tags.forEach(tag => tagSet.add(tag));
    }
  });

  return Array.from(tagSet).sort();
}

export function formatDate(date: string): string {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}

export function getPostsByCategory(category: PostCategory): BlogListItem[] {
  return getBlogPosts(category);
}
