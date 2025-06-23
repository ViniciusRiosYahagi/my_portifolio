<script lang="ts">
	import { navItems } from '$lib/data/data';
</script>

<header class="fixed top-0 z-99 w-full px-16 py-4 shadow-2xl">
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
						class="border-b-2 border-b-transparent duration-300 hover:border-b-[var(--secondary)] uppercase"
					>
						{text}
					</li>
				</a>
			{/each}
		</ul>
	</nav>
</header>
