<script lang="ts">
	import type { Snippet } from 'svelte';

	interface ButtonProps {
		href?: string;
		download?: string;
		children: Snippet;
	}

	let { href, download, children }: ButtonProps = $props();
</script>

{#if href}
	<a
		{href}
		class="cursor-pointer rounded border-2 border-[var(--secondary)] p-2 text-[var(--primary)] duration-300 hover:translate-y-1"
		{download}
	>
		{@render children()}
	</a>
{:else}
	<button
		class="cursor-pointer rounded border-2 border-[var(--secondary)] p-2 text-[var(--primary)] duration-300 hover:translate-y-1"
	>
		{@render children()}
	</button>
{/if}
