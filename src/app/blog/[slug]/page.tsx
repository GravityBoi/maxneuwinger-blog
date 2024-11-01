// src/app/blog/[slug]/page.tsx
import { getBlogPost, formatDate } from '@/utils/blogUtils';
import { compileMDX } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // Await params here
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const { content } = await compileMDX({
    source: post.content,
    options: { parseFrontmatter: true }
  });

  return (
    <article className="max-w-4xl mx-auto px-4 py-20">
      {/* Post Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center mb-6">
          <div className="relative w-10 h-10 mr-3">
            <Image
              src={post.author.image}
              alt={post.author.name}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <div>
            <div className="font-medium">{post.author.name}</div>
            <div className="text-sm text-gray-500">
              {formatDate(post.date)} · {post.readingTime}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags && post.tags.map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>
      {/* Post Content */}
      <div className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-a:text-blue-600">
        {content}
      </div>
    </article>
  );
}
