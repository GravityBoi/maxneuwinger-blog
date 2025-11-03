import type { MDXComponents } from 'mdx/types';
import { DetailedHTMLProps, HTMLAttributes, AnchorHTMLAttributes } from 'react';

export const mdxComponents: MDXComponents = {
  h1: ({ children }: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>
  ),
  h2: ({ children }: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <h2 className="text-3xl font-bold mt-8 mb-4">{children}</h2>
  ),
  h3: ({ children }: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <h3 className="text-2xl font-bold mt-6 mb-3">{children}</h3>
  ),
  h4: ({ children }: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <h4 className="text-xl font-bold mt-6 mb-3">{children}</h4>
  ),
  h5: ({ children }: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <h5 className="text-lg font-bold mt-4 mb-2">{children}</h5>
  ),
  h6: ({ children }: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <h6 className="text-base font-bold mt-4 mb-2">{children}</h6>
  ),
  p: ({ children }: DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>) => (
    <p className="text-gray-800 mb-4 leading-relaxed">{children}</p>
  ),
  strong: ({ children }: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) => (
    <strong className="font-bold">{children}</strong>
  ),
  em: ({ children }: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) => (
    <em className="italic">{children}</em>
  ),
  ul: ({ children }: DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>) => (
    <ul className="list-disc list-inside mb-4 ml-4 space-y-2">{children}</ul>
  ),
  ol: ({ children }: DetailedHTMLProps<HTMLAttributes<HTMLOListElement>, HTMLOListElement>) => (
    <ol className="list-decimal list-inside mb-4 ml-4 space-y-2">{children}</ol>
  ),
  li: ({ children }: DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement>) => (
    <li className="text-gray-800">{children}</li>
  ),
  a: (props: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) => (
    <a 
      href={props.href} 
      className="text-blue-600 hover:text-blue-800 underline"
      target={props.href?.startsWith('http') ? '_blank' : undefined}
      rel={props.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {props.children}
    </a>
  ),
  img: (props: DetailedHTMLProps<HTMLAttributes<HTMLImageElement>, HTMLImageElement>) => (
    <div className="my-8">
      <img
        {...props}
        className="rounded-lg"
      />
    </div>
  ),
  pre: ({ children }: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) => (
    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
      {children}
    </pre>
  ),
  code: ({ children }: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) => (
    <code className="bg-gray-100 px-1 rounded">{children}</code>
  ),
};
