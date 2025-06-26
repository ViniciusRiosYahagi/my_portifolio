<script lang="ts">
	import { navItems } from '$lib/data/data';
	import { Button } from '$lib/components';
	import { MenuIcon } from '$lib/components/icons';
	import { slide } from 'svelte/transition';
	import { gsapFrom } from '$lib/utils/gsap';

	let y = $state(0);
	let x = $state(0);
	let isOpen = $state(false);
</script>

<svelte:window bind:scrollY={y} />
<svelte:body bind:clientWidth={x} />

<header class={`fixed top-0 z-99 w-full p-5 duration-300 bg-[var(--bg-color)] ${y > 0 ? 'shadow-2xl' : ''}`}>
	<nav {@attach gsapFrom({ translateY: -50, duration: 0.5, opacity: 0})} class="flex items-center justify-around text-[var(--primary)]">
		<div>
			<a href="/">
				<h1 class="text-3xl text-[var(--secondary)] lg:text-5xl">矢作</h1>
			</a>
		</div>

		{#if x <= 1023}
			<MenuIcon {isOpen} onclick={() => (isOpen = !isOpen)} />
		{:else}
			<ul class="flex gap-3">
				{#each navItems as { text, href }}
					<a {href}>
						<li
							class="border-b-1 border-b-transparent duration-300 hover:border-b-[var(--secondary)]"
						>
							{text}
						</li>
					</a>
				{/each}
			</ul>
			<Button href="Vinicius-Yahagi-Rios.pdf" download="Vinicius-Yahagi-Rios.pdf">Resume</Button>
		{/if}
	</nav>
</header>

{#if isOpen}
	<div class="fixed inset-0 top-19 z-99 bg-[var(--bg-color)]" transition:slide>
		<ul class="flex h-full flex-col items-center justify-center gap-3">
			{#each navItems as { text, href }}
				<a {href}>
					<li
						class="border-b-2 border-b-transparent text-lg text-[var(--primary)] duration-300 hover:border-b-[var(--secondary)]"
					>
						{text}
					</li>
				</a>
			{/each}
			<Button href="Vinicius-Yahagi-Rios.pdf" download="Vinicius-Yahagi-Rios.pdf">Resume</Button>
		</ul>
	</div>
{/if}
