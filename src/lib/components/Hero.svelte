<script lang="ts">
	import { Button, Section } from '$lib/components';
	import { heroInfos } from '$lib/data/data';
	import { Github } from '$lib/components/icons';
</script>

<Section id="home">
	<div class="w-full max-w-xs lg:max-w-sm">
		<img
			class="lg:h-auto w-full rounded"
			src="https://avatars.githubusercontent.com/u/136207802?v=4"
			alt="vinicius"
		/>
	</div>

	<div class="hidden h-96 border-l-3 border-[var(--secondary)] lg:block"></div>

	<div class="flex flex-col gap-3">
		<div>
			<h2 class="text-center text-2xl text-[var(--primary)] uppercase lg:text-left lg:text-4xl">
				{heroInfos.name}
				<span class="text-[var(--secondary)]">{heroInfos.middleName}</span>
				{heroInfos.lastName}
			</h2>
			<h1 class="text-center text-3xl text-[var(--secondary)] lg:text-left lg:text-6xl">
				{heroInfos.career}
			</h1>
			<p class="text-center text-balance text-[var(--primary)] lg:text-left">
				{heroInfos.shortDescription}
			</p>
		</div>

		<div class="flex justify-center gap-3 lg:justify-start">
			<Github />
			<Button href="Vinicius-Yahagi-Rios.pdf" download="Vinicius-Yahagi-Rios.pdf"
				>Donwload CV</Button
			>
		</div>
	</div>
</Section>
