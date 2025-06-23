<script>
	import { Hero, Section, Tags } from '$lib/components';
	import { aboutMe, techs, projects } from '$lib/data/data';
</script>

<main class="px-35">
	<Hero />
	<!-- About-->
	<Section id="about" title="About Me" isColumn={true}>
		{#each aboutMe as text}
			<ul>
				<li class="mb-3 text-balance">{text}</li>
			</ul>
		{/each}
		<Tags tags={techs.frontend} subtitle="Front-End" />
		<Tags tags={techs.backend} subtitle="Back-End" />
		<Tags tags={techs.tools} subtitle="Tools" />
	</Section>

	<!-- Projects -->
	<Section id="projects" title="Projects">
		{#each projects as { tags, name, date, text, href }}
			<a class="flex w-96 flex-col justify-between gap-3 rounded border p-4" {href}>
				<div class="flex flex-col gap-3">
					<p class="text-3xl">{name}</p>
					<p>{text}</p>
					<p>Date: {date}</p>
				</div>
				<Tags {tags} />
			</a>
		{/each}
	</Section>

	<!--  -->
</main>
