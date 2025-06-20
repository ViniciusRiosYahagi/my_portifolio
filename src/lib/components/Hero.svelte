<script>
	import { michelleImage } from '$lib/assets/images';

	let kanji = $state('矢作');

	function over() {
		kanji = 'Yahagi';
	}
	
	function leave() {
		kanji = '矢作';
	}
</script>

<section class="relative h-screen">
	<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
		<img
			class="rounded-full lg:size-full border-2 border-[var(--secondary)]"
			src="https://avatars.githubusercontent.com/u/136207802?v=4"
			alt="vinicius"
		/>
	</div>

	<div class="absolute top-4/5">
		<div>
			<h2 class="text-4xl text-[var(--primary)] lg:text-6xl">
				Vinicius
				{#key kanji}
					<span
						class="text-[var(--secondary)]"
						role="button"
						onmouseenter={over}
						onmouseleave={leave}
						tabindex="0"
					>
						{kanji}
					</span>
				{/key}
				Rios
			</h2>
		</div>
		<h1 class="text-5xl text-[var(--secondary)] lg:text-8xl">Full-Stack Web Developer</h1>
	</div>
</section>
