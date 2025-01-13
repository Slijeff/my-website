import { slugify, textContent } from '@/utils/blog';
import { Link as MuiLink, Paper, Typography } from '@mui/material';
import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    p: ({ children }) => (
      <Typography variant="body1" color="primary" lineHeight={1.5}>
        {children}
      </Typography>
    ),
    h1: ({ children }) => (
      <Typography
        variant="h3"
        fontWeight="bold"
        color="primary"
        id={slugify(children)}
        lineHeight={1}
        sx={{ my: 1 }}
      >
        {children}
      </Typography>
    ),
    h2: ({ children }) => (
      <Typography
        variant="h4"
        fontWeight="bold"
        color="primary"
        id={slugify(children)}
        lineHeight={1.5}
        sx={{ my: 1 }}
      >
        {children}
      </Typography>
    ),
    h3: ({ children }) => (
      <Typography
        variant="h5"
        fontWeight="bold"
        color="primary"
        id={slugify(children)}
        lineHeight={1.5}
        sx={{ my: 1 }}
      >
        {children}
      </Typography>
    ),
    blockquote: ({ children }) => {
      return (
        <Paper
          sx={{
            p: 2,
            backgroundColor: 'transparent',
            backdropFilter: 'blur(4px)',
            borderLeft: '3px solid var(--mui-palette-primary-lighter)',
          }}
        >
          <Typography
            variant="body1"
            color="primary.light"
            sx={{ fontStyle: 'italic' }}
          >
            {textContent(children)}
          </Typography>
        </Paper>
      );
    },
    a: ({ children, href }) => (
      <MuiLink component={Link} href={href} passHref>
        {children}
      </MuiLink>
    ),
    ...components,
  };
}
