<script lang="ts">
	let { tags, subtitle }: { tags: string[]; subtitle?: string } = $props();
</script>

<div class="flex flex-col gap-3">
	<h1 class="text-3xl">{subtitle}</h1>
	<ul class="flex flex-wrap gap-2">
		{#each tags as tag}
			<li class="rounded border border-[var(--secondary)] p-2 text-center">{tag}</li>
		{/each}
	</ul>
</div>
