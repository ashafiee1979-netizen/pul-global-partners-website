import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(): MDXComponents {
  return {
    h2: (props) => <h2 {...props} />,
    h3: (props) => <h3 {...props} />,
    a: (props) => <a {...props} />,
  };
}
