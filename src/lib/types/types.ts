import type { Snippet } from 'svelte';

export interface TextProps {
  title?: string;
  id: string;
  children: Snippet;
  isColumn?: boolean;
  isCenter?: boolean;
}

export interface ButtonProps {
		href?: string;
		download?: string;
		children: Snippet;
		onclick?: (e: Event) => void;
	}

export interface TagsProps {
  tags: string[]; 
  subtitle?: string ;
}

