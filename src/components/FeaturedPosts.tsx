import Link from 'next/link';
import { formatDate } from '@/utils/blogUtils';
import type { BlogListItem } from '@/types/blog';

interface FeaturedPostsProps {
  latestPosts: BlogListItem[];
  featuredPosts: BlogListItem[];
}

function PostCard({ post }: { post: BlogListItem }) {
  return (
    <Link
      href={post.category ? `/${post.category}/${post.slug}` : `/blog/${post.slug}`}
      className="group block"
    >
      <article className="flex h-full flex-col rounded-xl border border-gray-100 bg-white p-6 transition-all duration-200 hover:border-gray-200 hover:shadow-md">
        <div className="mb-3 flex items-center gap-3">
          {post.category && (
            <span className="text-xs font-medium uppercase tracking-wider text-gray-400">
              {post.category}
            </span>
          )}
          <span className="text-xs text-gray-400">{formatDate(post.date)}</span>
        </div>
        <h3 className="mb-2 text-lg font-semibold text-gray-900 transition-colors group-hover:text-blue-600">
          {post.title}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-500 line-clamp-3">
          {post.description}
        </p>
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-gray-50 px-2.5 py-0.5 text-xs text-gray-500 ring-1 ring-gray-200">
                {tag}
              </span>
            ))}
          </div>
        )}
      </article>
    </Link>
  );
}

export default function FeaturedPosts({ latestPosts, featuredPosts }: FeaturedPostsProps) {
  const hasFeatured = featuredPosts.length > 0;
  const hasLatest = latestPosts.length > 0;

  return (
    <div className="px-4">
      {hasFeatured && (
        <section className="mb-16">
          <div className="mb-8 flex items-center gap-4">
            <h2 className="text-2xl font-semibold text-gray-900">Featured</h2>
            <div className="flex-1 border-t border-gray-100" />
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      {hasLatest && (
        <section>
          <div className="mb-8 flex items-center gap-4">
            <h2 className="text-2xl font-semibold text-gray-900">Latest</h2>
            <div className="flex-1 border-t border-gray-100" />
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      {!hasFeatured && !hasLatest && (
        <div className="py-10 text-center text-gray-400">No posts yet.</div>
      )}
    </div>
  );
}
