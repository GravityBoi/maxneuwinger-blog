// src/app/[category]/[slug]/page.tsx
import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import { compileMDX } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import { mdxComponents } from '@/mdx-components';
import { formatDate, getBlogPost } from '@/utils/blogUtils';
import type { PostCategory } from '@/types/blog';

type RouteParams = {
  slug: string;
  category: PostCategory;
};

export async function generateStaticParams() {
  const contentDirectory = path.join(process.cwd(), 'content');
  const categories = fs
    .readdirSync(contentDirectory)
    .filter((entry) => fs.statSync(path.join(contentDirectory, entry)).isDirectory());

  const paths: Array<{ category: string; slug: string }> = [];

  categories.forEach((category) => {
    const postsDirectory = path.join(contentDirectory, category);
    const filenames = fs.readdirSync(postsDirectory);

    filenames.forEach((filename) => {
      paths.push({
        category,
        slug: filename.replace(/\.mdx?$/, ''),
      });
    });
  });

  return paths;
}

export default async function PostPage({ params }: { params: Promise<RouteParams> }) {
  const { slug, category } = await params;

  const post = getBlogPost(slug, category);

  if (!post) {
    notFound();
  }

  const { content, frontmatter } = await compileMDX({
    source: post.content,
    components: mdxComponents,
    options: { parseFrontmatter: true },
  });

  const metadata = { ...post, ...frontmatter } as typeof post & Record<string, unknown>;
  const authorName = typeof metadata.author?.name === 'string' ? metadata.author.name : 'Max Neuwinger';
  const authorImage = typeof metadata.author?.image === 'string' ? metadata.author.image : '/favicon.ico';
  const tags = Array.isArray(metadata.tags) ? metadata.tags : [];

  return (
    <article className="mx-auto max-w-4xl px-4 py-20">
      <header className="mb-8">
        <h1 className="mb-4 text-4xl font-bold">{metadata.title}</h1>
        <div className="mb-6 flex items-center">
          <div className="relative mr-3 h-10 w-10">
            <Image
              src={authorImage}
              alt={authorName}
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
          </div>
          <div>
            <div className="font-medium">{authorName}</div>
            <div className="text-sm text-gray-500">{formatDate(metadata.date)}</div>
          </div>
        </div>
        {tags.length > 0 && (
          <div className="mb-8 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>
      <div className="prose prose-lg max-w-none">{content}</div>
    </article>
  );
}
