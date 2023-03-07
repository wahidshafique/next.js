import type { MDXComponents } from 'mdx/types'

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => {
      return (<h1 onClick={() => { console.log(1} } style={{ fontSize: "100px" }}>{children}</h1>);
    },
    ...components,
  }
}
