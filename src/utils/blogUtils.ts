// src/utils/blogUtils.ts

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { formatDistanceToNow } from 'date-fns';
import type { BlogPost, BlogListItem, PostCategory, Category } from '../types/blog';

const postsDirectory = path.join(process.cwd(), 'content');

export function getBlogPosts(category?: PostCategory): BlogListItem[] {
  if (!fs.existsSync(postsDirectory)) {
    console.error('Posts directory does not exist:', postsDirectory);
    return [];
  }

  let fileNames: string[] = [];
  
  if (category) {
    // If category is specified, only look in that category directory
    const categoryPath = path.join(postsDirectory, category);
    if (fs.existsSync(categoryPath)) {
      const categoryFileNames = fs.readdirSync(categoryPath)
        .filter(name => name.endsWith('.mdx'))
        .map(name => path.join(category, name));
      fileNames.push(...categoryFileNames);
    } else {
      console.error('Category path does not exist:', categoryPath);
    }
  } else {
    // Get files from root first
    const rootFileNames = fs.readdirSync(postsDirectory)
      .filter(name => name.endsWith('.mdx'));
    fileNames.push(...rootFileNames);

    // Then get files from each category directory
    const categories: Category[] = ['projects', 'writing', 'meditation'];
    categories.forEach((cat) => {
      const catPath = path.join(postsDirectory, cat);
      if (fs.existsSync(catPath)) {
        const catFiles = fs.readdirSync(catPath)
          .filter(name => name.endsWith('.mdx'))
          .map(name => path.join(cat, name));
        fileNames.push(...catFiles);
      } else {
        console.error('Category path does not exist:', catPath);
      }
    });
  }

  // Debugging: Log the fileNames array
  console.log('Found MDX files:', fileNames);

  const allPostsData: BlogListItem[] = fileNames.map((fileName) => {
    try {
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      // Extract category and slug from the file path
      const parsedPath = path.parse(fileName);
      const slug = parsedPath.name;
      const fileCategory = parsedPath.dir ? parsedPath.dir : undefined;

      const wordCount = matterResult.content.split(/\s+/g).length;
      const readingTime = `${Math.ceil(wordCount / 200)} min read`;

      const post: BlogListItem = {
        slug,
        title: matterResult.data.title || 'Untitled',
        date: matterResult.data.date ? new Date(matterResult.data.date).toISOString() : new Date().toISOString(),
        description: matterResult.data.description || '',
        tags: Array.isArray(matterResult.data.tags) ? matterResult.data.tags : [],
        readingTime,
        featured: matterResult.data.featured ? Boolean(matterResult.data.featured) : false,
        image: matterResult.data.image || null,
        category: matterResult.data.category || fileCategory,
      };
      
      return post;
    } catch (error) {
      console.error(`Error processing file ${fileName}:`, error);
      return null;
    }
  }).filter((post): post is BlogListItem => post !== null);

  return allPostsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPost(slug: string, category?: PostCategory): BlogPost | null {
  try {
    let fullPath: string;
    if (category) {
      fullPath = path.join(postsDirectory, category, `${slug}.mdx`);
    } else {
      // Try to find in root first
      fullPath = path.join(postsDirectory, `${slug}.mdx`);
      
      // If not in root, check categories
      if (!fs.existsSync(fullPath)) {
        const categories: Category[] = ['projects', 'writing', 'meditation'];
        for (const cat of categories) {
          const categoryPath = path.join(postsDirectory, cat, `${slug}.mdx`);
          if (fs.existsSync(categoryPath)) {
            fullPath = categoryPath;
            break;
          }
        }
      }
    }

    if (!fs.existsSync(fullPath)) {
      console.error('Post file does not exist:', fullPath);
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    const wordCount = matterResult.content.split(/\s+/g).length;
    const readingTime = `${Math.ceil(wordCount / 200)} min read`;

    // Extract category from path
    const relativePath = path.relative(postsDirectory, fullPath);
    const parsedPath = path.parse(relativePath);
    const fileCategory = parsedPath.dir ? parsedPath.dir : undefined;

    return {
      slug,
      content: matterResult.content,
      title: matterResult.data.title || 'Untitled',
      date: matterResult.data.date ? new Date(matterResult.data.date).toISOString() : new Date().toISOString(),
      description: matterResult.data.description || '',
      tags: Array.isArray(matterResult.data.tags) ? matterResult.data.tags : [],
      readingTime,
      featured: matterResult.data.featured ? Boolean(matterResult.data.featured) : false,
      image: matterResult.data.image || null,
      category: matterResult.data.category || fileCategory || 'uncategorized',
      author: {
        name: matterResult.data.author?.name || 'Max Neuwinger',
        image: matterResult.data.author?.image || '/images/avatar.jpg',
      },
    };
  } catch (error) {
    console.error('Error reading blog post:', error);
    return null;
  }
}


// Your existing helper functions remain the same
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

// New helper function to get posts by category
export function getPostsByCategory(category: PostCategory): BlogListItem[] {
  return getBlogPosts(category);
}