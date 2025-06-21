<script lang="ts">
	import type { Snippet } from 'svelte';

	interface PropsText {
		title: string;
		id: string;
		children: Snippet;
	}

	let { id, title, children }: PropsText = $props();
</script>

<section class="flex h-screen w-full flex-col items-center justify-center" {id}>
	<div class="border-l-3 border-[var(--secondary)]">
		<h1 class="mb-3 ml-6 text-7xl text-[var(--secondary)]">{title}</h1>
		{@render children()}
	</div>
</section>
