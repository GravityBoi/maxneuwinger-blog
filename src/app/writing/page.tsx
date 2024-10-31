// src/app/writing/page.tsx
import { getBlogPosts, formatDate } from '@/utils/blogUtils';
import Link from 'next/link';
import type { PostCategory } from '@/types/blog';

export default function WritingPage() {
  const category: PostCategory = 'writing';
  const posts = getBlogPosts(category);

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8">Writing</h1>
      
      {/* Writing posts list */}
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-gray-200 pb-8">
            <Link href={`/writing/${post.slug}`}>
              <div className="group">
                <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{formatDate(post.date)}</span>
                  <span className="mx-2">·</span>
                  <span>{post.readingTime}</span>
                </div>
                <p className="text-gray-600 mb-4">{post.description}</p>
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          </article>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center text-gray-500 py-10">
          No writing posts found. Create your first post in the content/blog/writing directory.
        </div>
      )}
    </div>
  );
}
