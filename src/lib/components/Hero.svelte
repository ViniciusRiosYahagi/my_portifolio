<script lang="ts">
	const heroInfos = $state([
		{
			name: 'Vinicius',
			middleName: '矢作',
			lastName: 'Rios',
			career: 'Full-Stack Web Developer',
			shortDescription:
				'I’ve been working as a web developer for 3 years, with a special interest in the Svelte ecosystem. I enjoy creating modern, clean, and functional websites, focusing not only on user experience but also on writing clear and efficient code.'
		}
	]);
</script>

<section class="relative flex h-screen items-center justify-center gap-6">
	<div>
		<img
			class="size-fit rounded"
			src="https://avatars.githubusercontent.com/u/136207802?v=4"
			alt="vinicius"
		/>
	</div>

	<div class="h-115 border-l-3 border-[var(--secondary)]"></div>

	<div class="flex flex-col gap-3">
		<h2 class="text-3xl text-[var(--primary)] uppercase lg:text-6xl">
			{heroInfos[0].name}
			<span class="text-[var(--secondary)]">{heroInfos[0].middleName}</span>
			{heroInfos[0].lastName}
		</h2>
		<h1 class="text-5xl text-[var(--secondary)] lg:text-8xl">{heroInfos[0].career}</h1>
		<p class="max-w-4xl text-balance text-[var(--primary)]">{heroInfos[0].shortDescription}</p>
	</div>
</section>
