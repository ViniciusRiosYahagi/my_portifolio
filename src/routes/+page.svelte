<script>
	import { Hero, Section, Tags } from '$lib/components';
	import { Email, Linkedin, WhatsApp } from '$lib/components/icons';
	import { aboutMe, techs, projects } from '$lib/data/data';
</script>

<main class="lg:px-35">
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
			<a
				target="_blank"
				rel="noopener noreferrer"
				class="flex w-96 flex-col justify-between gap-3 rounded border-2 p-4 duration-300 hover:translate-y-1"
				{href}
			>
				<div class="flex flex-col gap-3">
					<p class="text-3xl">{name}</p>
					<p>{text}</p>
					<p>Date: {date}</p>
				</div>
				<Tags {tags} />
			</a>
		{/each}
	</Section>

	<!-- Contact -->
	<Section id="contact" title="Contact" isColumn={true}>
		<div class="flex flex-col items-start gap-6">
			<p class="max-w-4xl">
				I’m available for new projects and opportunities. If you have an idea, need someone to
				develop a modern and functional website, or just want to chat about a project, feel free to
				reach out!
			</p>

			<div class="flex gap-3">
				<Email />
				<Linkedin />
				<WhatsApp />
			</div>
		</div>
	</Section>
</main>
