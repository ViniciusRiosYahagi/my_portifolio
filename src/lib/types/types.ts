import type { Snippet } from 'svelte';


export interface PropsText {
  title?: string;
  id: string;
  children: Snippet;
  isColumn?: boolean;
  isCenter?: boolean;
}
