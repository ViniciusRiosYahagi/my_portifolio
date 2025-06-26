<script lang="ts">
	import { Button, Section } from '$lib/components';
	import { heroInfos } from '$lib/data/data';
	import { Github } from '$lib/components/icons';
	import { gsapFrom } from '$lib/utils/gsap';
	let { ...props } = $props();
</script>

<Section {...props} id="home">
	<div class="w-full max-w-xs lg:max-w-sm">
		<img
			{@attach gsapFrom({ opacity: 0, duration: 0.5, ease: 'back.inOut', translateX: -50 })}
			class="w-full rounded lg:h-auto"
			src="https://avatars.githubusercontent.com/u/136207802?v=4"
			alt="vinicius"
		/>
	</div>

	<div
		{@attach gsapFrom({ opacity: 0, duration: 1, ease: 'power3.inOut', translateX: -50 })}
		class="hidden h-96 border-l-1 border-[var(--secondary)] lg:block"
	></div>

	<div class="flex flex-col gap-3">
		<div>
			<h2
				{@attach gsapFrom({ opacity: 0, duration: 1.5, ease: 'power3.inOut', translateX: 50 })}
				class="text-center text-2xl text-[var(--primary)] uppercase lg:text-left lg:text-4xl"
			>
				{heroInfos.name}
				<span class="text-[var(--secondary)]">{heroInfos.middleName}</span>
				{heroInfos.lastName}
			</h2>
			<h1
				{@attach gsapFrom({ opacity: 0, duration: 2, ease: 'power3.inOut', translateX: 50 })}
				class="text-center text-3xl text-[var(--secondary)] lg:text-left lg:text-6xl"
			>
				{heroInfos.career}
			</h1>
			<p
				{@attach gsapFrom({ opacity: 0, duration: 2.5, ease: 'power3.inOut', translateX: 50 })}
				class="text-center text-pretty text-[var(--primary)] lg:text-left"
			>
				{heroInfos.shortDescription}
			</p>
		</div>

		<div
			{@attach gsapFrom({ opacity: 0, duration: 3, ease: 'power3.inOut', translateX: 50 })}
			class="flex justify-center gap-3 lg:justify-start"
		>
			<Github />
			<Button href="Vinicius-Yahagi-Rios.pdf" download="Vinicius-Yahagi-Rios.pdf"
				>Donwload CV</Button
			>
		</div>
	</div>
</Section>
