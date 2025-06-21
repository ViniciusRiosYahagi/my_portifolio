<script lang="ts">
	interface PropsText {
		texts: string[];
	}

	let { texts }: PropsText = $props();
</script>

{#each texts as text, id}
	<p
		class={id === texts.length - 1
			? 'mb-3 ml-6 max-w-7xl text-2xl text-[var(--secondary)]'
			: 'mb-3 ml-6 max-w-7xl text-2xl text-[var(--primary)]'}
	>
		{text}
	</p>
{/each}
