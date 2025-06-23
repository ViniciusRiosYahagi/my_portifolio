<script lang="ts">
	import type { Snippet } from 'svelte';

	interface PropsText {
		title: string;
		id: string;
		children: Snippet;
		isColumn?: boolean;
	}

	let { id, title, children, isColumn = false }: PropsText = $props();
</script>

<section class="flex h-screen w-full flex-wrap items-center gap-6" {id}>
	<div class="border-l-3 border-[var(--secondary)]">
		<h1 class="mb-6 ml-6 text-7xl text-[var(--secondary)]">{title}</h1>
		<div class={`ml-6 flex flex-wrap gap-3 text text-[var(--primary)] ${isColumn ? 'flex-col' : ''}`}>
			{@render children()}
		</div>
	</div>
</section>
