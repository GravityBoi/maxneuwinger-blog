// src/types/blog.ts

export type PostCategory = 'projects' | 'writing' | 'meditation' | undefined;

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
  tags: string[];
  readingTime: string;
  featured?: boolean;
  image?: string | null;
  category?: PostCategory;
  author: {
    name: string;
    image: string;
  };
}

export interface BlogListItem {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  readingTime: string;
  featured?: boolean;
  image?: string | null;
  category?: PostCategory;
}