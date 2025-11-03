import Link from 'next/link';
import { formatDate } from '@/utils/blogUtils';
import type { BlogListItem } from '@/types/blog';

interface FeaturedPostsProps {
  latestPosts: BlogListItem[];
  featuredPosts: BlogListItem[];
}

function PostCard({ post, variant }: { post: BlogListItem; variant: 'featured' | 'latest' }) {
  const categoryStyles =
    variant === 'featured'
      ? 'text-sm font-semibold uppercase tracking-wide text-purple-700'
      : 'text-sm font-medium uppercase tracking-wide text-blue-600';

  const cardStyles =
    variant === 'featured'
      ? 'bg-gradient-to-r from-blue-100 to-purple-100'
      : 'bg-white';

  const hoverStyles =
    variant === 'featured'
      ? 'hover:shadow-xl'
      : 'hover:shadow-lg';

  const titleStyles =
    variant === 'featured'
      ? 'text-2xl font-bold group-hover:text-purple-800'
      : 'text-xl font-semibold group-hover:text-blue-600';

  const tagStyles =
    variant === 'featured'
      ? 'bg-purple-200 text-purple-800'
      : 'bg-gray-100 text-gray-600';

  return (
    <Link
      href={post.category ? `/${post.category}/${post.slug}` : `/blog/${post.slug}`}
      className="group block"
    >
      <article
        className={`${cardStyles} rounded-xl shadow-lg transition-transform duration-200 ${hoverStyles}`}
      >
        <div className="p-6 md:p-7">
          {post.category && <div className={`${categoryStyles} mb-2`}>{post.category}</div>}
          <div className="mb-3 flex items-center text-sm text-gray-600">
            <span>{formatDate(post.date)}</span>
          </div>
          <h3 className={`${titleStyles} mb-3`}>{post.title}</h3>
          <p className="mb-4 line-clamp-3 text-gray-700">{post.description}</p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className={`rounded-full px-3 py-1 text-sm ${tagStyles}`}>
                {tag}
              </span>
            ))}
          </div>
        </div>
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
          <h2 className="mb-8 text-3xl font-bold text-purple-700">Featured Posts</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredPosts.map((post) => (
              <PostCard key={post.slug} post={post} variant="featured" />
            ))}
          </div>
        </section>
      )}

      {hasLatest && (
        <section>
          <h2 className="mb-8 text-3xl font-bold text-blue-700">Latest Posts</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post) => (
              <PostCard key={post.slug} post={post} variant="latest" />
            ))}
          </div>
        </section>
      )}

      {!hasFeatured && !hasLatest && (
        <div className="py-10 text-center text-gray-500">No blog posts available.</div>
      )}
    </div>
  );
}
