<script>
	import { navItems } from '$lib/data/section';
</script>

<header class="fixed top-0 w-full p-15 z-99">
	<nav class="flex justify-between items-center text-[var(--primary)]">
			<div>
				<a href="/">
					<h1 class="text-7xl text-[var(--secondary)]">矢作</h1>
				</a>
			</div>

			<ul class="flex gap-3">
				{#each navItems as { text, href }}
					<a {href}>
						<li class="text-3xl border-b-2 border-b-transparent hover:border-b-[var(--secondary)] duration-300">{text}</li>
					</a>
				{/each}
			</ul>
	</nav>
</header>
