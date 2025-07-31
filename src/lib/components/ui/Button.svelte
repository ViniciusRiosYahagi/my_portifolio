<script lang="ts">
	import type { ButtonProps } from '$lib/types/types';
	
	let { href, download, children, onclick, ...props }: ButtonProps = $props();
</script>

{#if href}
	<a
		{href}
		{download}
		{...props}
		target="_blank"
		rel="noopener noreferrer"
		class="cursor-pointer rounded border-1 border-[var(--secondary)] p-3 text-[var(--primary)] duration-300 hover:translate-y-1 flex flex-col justify-between"
	>
		{@render children()}
	</a>
{:else}
	<button
		{onclick}
		{...props}
		class="cursor-pointer rounded border-1 border-[var(--secondary)] p-2 text-[var(--primary)] duration-300 hover:translate-y-1"
	>
		{@render children()}
	</button>
{/if}
