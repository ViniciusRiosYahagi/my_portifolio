<script lang="ts">
	import { navItems } from '$lib/data/data';
	import { Button } from '$lib/components';

	let y = $state(0);
</script>

<svelte:window bind:scrollY={y} />

<header class={`fixed top-0 z-99 w-full p-5 duration-300 ${y > 0 ? 'shadow-2xl' : ''}`}>
	<nav class="flex items-center justify-between text-[var(--primary)]">
		<div>
			<a href="/">
				<h1 class="text-5xl text-[var(--secondary)]">矢作</h1>
			</a>
		</div>

		<ul class="flex gap-3">
			{#each navItems as { text, href }}
				<a {href}>
					<li
						class="border-b-2 border-b-transparent duration-300 hover:border-b-[var(--secondary)]"
					>
						{text}
					</li>
				</a>
			{/each}
		</ul>

		<Button href="Vinicius-Yahagi-Rios.pdf" download="Vinicius-Yahagi-Rios.pdf">Resume</Button>
	</nav>
</header>
