// src/components/FeaturedPosts.tsx

import Link from 'next/link';
import { formatDate } from '@/utils/blogUtils';
import type { BlogListItem } from '@/types/blog';

interface FeaturedPostsProps {
  latestPosts: BlogListItem[];
  featuredPosts: BlogListItem[];
}

export default function FeaturedPosts({ latestPosts, featuredPosts }: FeaturedPostsProps) {
  const renderPost = (post: BlogListItem) => (
    <Link
      key={post.slug}
      href={post.category ? `/${post.category}/${post.slug}` : `/blog/${post.slug}`}
      className="group block"
    >
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:-translate-y-1">
        <div className="p-6">
          {post.category && (
            <div className="text-sm font-medium text-blue-600 mb-2 uppercase tracking-wide">
              {post.category}
            </div>
          )}
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <span>{formatDate(post.date)}</span>
            <span className="mx-2">·</span>
            <span>{post.readingTime}</span>
          </div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600">
            {post.title}
          </h3>
          <p className="text-gray-600 line-clamp-2 mb-4">
            {post.description}
          </p>
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
        </div>
      </div>
    </Link>
  );

  return (
    <div className="px-4">
      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && (
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Featured Posts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => renderPost(post))}
          </div>
        </div>
      )}

      {/* Latest Posts Section */}
      {latestPosts.length > 0 && (
        <div>
          <h2 className="text-3xl font-bold mb-8">Latest Posts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post) => renderPost(post))}
          </div>
        </div>
      )}

      {/* Show message if no posts */}
      {latestPosts.length === 0 && featuredPosts.length === 0 && (
        <div className="text-center text-gray-500 py-10">
          No blog posts available.
        </div>
      )}
    </div>
  );
}