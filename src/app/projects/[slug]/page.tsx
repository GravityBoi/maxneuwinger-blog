// src/app/projects/[slug]/page.tsx
import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import { mdxComponents } from '@/mdx-components';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { formatDate } from '@/utils/blogUtils';

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'content', 'projects');
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.mdx?$/, ''),
  }));
}

interface Metadata {
  title: string;
  date: string;
  description: string;
  author: {
    name: string;
    image: string;
  };
  tags: string[];
  readingTime: string;
}

export default async function ProjectsPostPage(props: { params: { slug: string } }) {
  const params = await props.params;
  const { slug } = params;

  const postFilePath = path.join(process.cwd(), 'content', 'projects', `${slug}.mdx`);

  if (!fs.existsSync(postFilePath)) {
    notFound();
  }

  const source = fs.readFileSync(postFilePath, 'utf8');

  const { content, frontmatter } = await compileMDX<Metadata>({
    source,
    components: mdxComponents,
    options: { parseFrontmatter: true },
  });

  const metadata = frontmatter;

  return (
    <article className="max-w-4xl mx-auto px-4 py-20">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{metadata.title}</h1>
        <div className="flex items-center mb-6">
          <div className="relative w-10 h-10 mr-3">
            <Image
              src={metadata.author.image}
              alt={metadata.author.name}
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
          </div>
          <div>
            <div className="font-medium">{metadata.author.name}</div>
            <div className="text-sm text-gray-500">
              {formatDate(metadata.date)} · {metadata.readingTime}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-8">
          {metadata.tags?.map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>
      <div className="prose prose-lg max-w-none">
        {content}
      </div>
    </article>
  );
}
