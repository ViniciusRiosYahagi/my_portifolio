<script lang="ts">
	import type { Snippet } from 'svelte';

	interface ButtonProps {
		href?: string;
		download?: string;
		children: Snippet;
		onclick?: (e: Event) => void
	}

	let { href, download, children, onclick }: ButtonProps = $props();
</script>

{#if href}
	<a
		{href}
		target="_blank"
		rel="noopener noreferrer"
		class="cursor-pointer rounded border-1 border-[var(--secondary)] p-2 text-[var(--primary)] duration-300 hover:translate-y-1 "
		{download}
	>
		{@render children()}
	</a>
{:else}
	<button
		{onclick}
		class="cursor-pointer rounded border-1 border-[var(--secondary)] p-2 text-[var(--primary)] duration-300 hover:translate-y-1"
	>
		{@render children()}
	</button>
{/if}
