<script lang="ts">
	import type { PropsText } from '$lib/types/types';

	let { id, title, children, isColumn = false, isCenter = true, ...props }: PropsText = $props();
	let x = $state(0);
</script>

<svelte:body bind:clientWidth={x} />

<section
	{...props}
	class={`flex flex-col items-center gap-6 p-5 text-[var(--primary)] lg:min-h-screen lg:max-w-7xl lg:flex-row ${isCenter ? 'justify-center' : 'justify-start'}`}
	{id}
>
	{#if title}
		<div
			class={`flex gap-3 border-l-1 border-[var(--secondary)] pl-6 ${isColumn ? 'flex-col' : 'flex-row'}`}
		>
			<h1 class="text-2xl text-[var(--secondary)] lg:text-6xl">{title}</h1>
			{#if title}
				{@render children()}
			{/if}
		</div>
	{:else}
		{@render children()}
	{/if}
</section>
