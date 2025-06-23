<script lang="ts">
	import { Button } from '$lib/components';
	import { heroInfos } from '$lib/data/data';
	import { Github } from '$lib/components/icons';
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

	<div class="flex flex-col items-start gap-3">
		<h2 class="text-3xl text-[var(--primary)] uppercase lg:text-5xl">
			{heroInfos.name}
			<span class="text-[var(--secondary)]">{heroInfos.middleName}</span>
			{heroInfos.lastName}
		</h2>
		<h1 class="text-5xl text-[var(--secondary)] lg:text-7xl">{heroInfos.career}</h1>
		<p class="max-w-4xl text-balance text-[var(--primary)]">{heroInfos.shortDescription}</p>

		<div class="flex gap-3">
			<Github />
			<Button href="Vinicius-Yahagi-Rios.pdf" download="Vinicius-Yahagi-Rios.pdf">Donwload CV</Button>
		</div>
	</div>
</section>
