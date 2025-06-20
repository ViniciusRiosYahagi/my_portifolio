<script lang="ts">
	let { texts, title, id } = $props();
</script>

<section class="items-left flex h-screen w-full flex-col justify-center" {id}>
	<div class="border-l-4 border-[var(--secondary)]">
		<h1 class="text-left text-8xl text-[var(--secondary)] mb-5 ml-6">{title}</h1>
		<div class="text-[var(--primary)] ml-6 text-2xl">
		{#each texts as text }
			<p class="mb-5">{text}</p>
		{/each}
		</div>
	</div>
</section>
