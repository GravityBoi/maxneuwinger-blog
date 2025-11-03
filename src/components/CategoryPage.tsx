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
    <section className="mx-auto max-w-4xl px-4 py-20">
      {/* <header className="mb-12 flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
        <p className="text-gray-600">
          {hasPostswr
            ? `Browse ${posts.length} ${category} stor${posts.length > 1 ? 'ies' : 'y'}.`
            : 'No published posts yet—check back soon.'}
        </p>
      </header> */}

      {hasPosts ? (
        <div className="space-y-10">
          {posts.map((post) => (
            <article key={post.slug} className="border-b border-gray-200 pb-10">
              <Link href={`/${category}/${post.slug}`} className="group block">
                <h2 className="text-2xl font-semibold text-gray-900 transition-colors group-hover:text-blue-600">
                  {post.title}
                </h2>
                <div className="mt-3 flex items-center text-sm text-gray-500">
                  <span>{formatDate(post.date)}</span>
                </div>
                <p className="mt-4 text-gray-600">{post.description}</p>
                {post.tags.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600"
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
        <div className="rounded-lg border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
          <p className="text-gray-500">No {category} posts yet. Create one under content/{category}/.</p>
        </div>
      )}
    </section>
  );
}
