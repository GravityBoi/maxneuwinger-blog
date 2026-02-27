import Link from 'next/link';
import { getBlogPosts, formatDate } from '@/utils/blogUtils';
import type { PostCategory } from '@/types/blog';

interface CategoryPageProps {
  category: PostCategory;
  title: string;
}

export default function CategoryPage({ category, title }: CategoryPageProps) {
  const posts = getBlogPosts(category);
  const hasPosts = posts.length > 0;

  return (
    <section className="mx-auto max-w-3xl px-4 py-20">
      <header className="mb-12">
        <h1 className="text-3xl font-semibold text-gray-900">{title}</h1>
        <p className="mt-2 text-sm text-gray-400">
          {hasPosts ? `${posts.length} post${posts.length !== 1 ? 's' : ''}` : 'No posts yet'}
        </p>
      </header>

      {hasPosts ? (
        <div className="divide-y divide-gray-100">
          {posts.map((post) => (
            <article key={post.slug} className="py-8 first:pt-0">
              <Link href={`/${category}/${post.slug}`} className="group block">
                <div className="mb-1 text-xs text-gray-400">{formatDate(post.date)}</div>
                <h2 className="text-xl font-semibold text-gray-900 transition-colors group-hover:text-blue-600">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{post.description}</p>
                {post.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-gray-50 px-2.5 py-0.5 text-xs text-gray-500 ring-1 ring-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="py-16 text-center text-sm text-gray-400">
          No posts yet. Check back soon.
        </div>
      )}
    </section>
  );
}
