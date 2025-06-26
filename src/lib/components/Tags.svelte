<script lang="ts">
	import { gsapItems } from "$lib/utils/gsap";

	let { tags, subtitle }: { tags: string[]; subtitle?: string } = $props();
</script>

<div class="flex flex-col gap-3">
	<h1 class="text-3xl">{subtitle}</h1>
	<ul class="flex flex-wrap gap-2">
		{#each tags as tag, index}
			<li
				{@attach gsapItems({ translateY: -50 ,opacity: 0, duration: 0.5, delay: index * 0.2 })}
				class="rounded border-1 border-[var(--secondary)] p-2 text-center"
			>
				{tag}
			</li>
		{/each}
	</ul>
</div>
