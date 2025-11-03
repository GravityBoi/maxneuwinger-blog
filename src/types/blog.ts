// src/types/blog.ts

// The Category type can now be a generic string, since it's determined by folder names
export type Category = string;
export type PostCategory = Category | undefined;

export interface BasePost {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  featured?: boolean;
  image?: string | null;
  category?: PostCategory;
  // Portfolio-specific fields (optional)
  githubUrl?: string | null;
  liveUrl?: string | null;
  technologies?: string[];
}

export interface BlogPost extends BasePost {
  content: string;
  author: {
    name: string;
    image: string;
  };
}

export interface BlogListItem extends BasePost {}
