// src/app/[category]/[slug]/page.tsx
import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
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
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeHighlight],
      },
    },
  });

  const metadata = { ...post, ...frontmatter } as typeof post & Record<string, unknown>;
  const authorName = typeof metadata.author?.name === 'string' ? metadata.author.name : 'Max Neuwinger';
  const tags = Array.isArray(metadata.tags) ? metadata.tags : [];

  return (
    <article className="mx-auto max-w-3xl px-4 py-20">
      <header className="mb-10 border-b border-gray-100 pb-8">
        {metadata.category && (
          <div className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-400">
            {metadata.category as string}
          </div>
        )}
        <h1 className="mb-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
          {metadata.title}
        </h1>
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <span>{authorName}</span>
          <span>·</span>
          <span>{formatDate(metadata.date)}</span>
        </div>
        {tags.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full bg-gray-50 px-2.5 py-0.5 text-xs text-gray-500 ring-1 ring-gray-200">
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
