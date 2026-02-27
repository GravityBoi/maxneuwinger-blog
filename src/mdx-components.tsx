import type { MDXComponents } from 'mdx/types';
import { DetailedHTMLProps, HTMLAttributes, AnchorHTMLAttributes, TableHTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from 'react';

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
    <p className="text-gray-600 mb-4 leading-relaxed">{children}</p>
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
    <li className="text-gray-600">{children}</li>
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
    <pre className="rounded-lg overflow-x-auto mb-6 text-sm leading-relaxed">
      {children}
    </pre>
  ),
  code: ({ children, className, ...props }: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) => {
    if (className) {
      // Code block inside <pre> — styled by highlight.js theme
      return <code className={className} {...props}>{children}</code>;
    }
    // Inline code
    return <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800" {...props}>{children}</code>;
  },
  table: ({ children }: DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>) => (
    <div className="overflow-x-auto my-6">
      <table className="min-w-full border-collapse border border-gray-300 text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }: DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>) => (
    <thead className="bg-gray-100">{children}</thead>
  ),
  tbody: ({ children }: DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>) => (
    <tbody className="divide-y divide-gray-200">{children}</tbody>
  ),
  tr: ({ children }: DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>) => (
    <tr className="hover:bg-gray-50 transition-colors">{children}</tr>
  ),
  th: ({ children }: DetailedHTMLProps<ThHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement>) => (
    <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900">{children}</th>
  ),
  td: ({ children }: DetailedHTMLProps<TdHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement>) => (
    <td className="border border-gray-300 px-4 py-2 text-gray-700">{children}</td>
  ),
  figure: ({ children }: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) => (
    <figure className="my-8">{children}</figure>
  ),
  figcaption: ({ children }: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) => (
    <figcaption className="mt-2 text-center text-xs text-gray-500 italic">{children}</figcaption>
  ),
};
