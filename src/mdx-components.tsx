// src/mdx-components.tsx
import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import Link from 'next/link';

export const mdxComponents: MDXComponents = {
  img: (props) => (
    <Image
      {...props}
      alt={props.alt || ''}
      src={props.src || ''}
      width={800}
      height={600}
      style={{ width: '100%', height: 'auto' }}
    />
  ),
  a: (props) => <Link href={props.href || ''}>{props.children}</Link>,
  // Add any other custom components you need
};
