<script>
	import { Hero, Section, Tags, Button } from '$lib/components';
	import { Email, Linkedin, WhatsApp } from '$lib/components/icons';
	import { aboutMe, techs, projects } from '$lib/data/data';
	import { gsapScroll, gsapFrom, gsapItems } from '$lib/utils/gsap';
</script>

<main class="flex flex-col items-center justify-center p-12 lg:p-0">
	<Hero {@attach gsapFrom({ opacity: 0, duration: 1, translateY: 100})}/>

	<Section
		{@attach gsapScroll()}
		id="about"
		title="About Me"
		isColumn={true}
	>
		{#each aboutMe as text}
			<ul>
				<li class=" max-w-7xl">{text}</li>
			</ul>
		{/each}
		<Tags tags={techs.frontend} subtitle="Front-End" />
		<Tags tags={techs.backend} subtitle="Back-End" />
		<Tags tags={techs.tools} subtitle="Tools" />
	</Section>

	<Section
		{@attach gsapScroll()}
		id="projects"
		title="Projects"
		isColumn={true}
	>
		<div class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
			{#each projects as { tags, name, date, text, href }, index}
				<Button {@attach gsapItems({ opacity: 0, duration: 0.3, delay: index * 0.2 })} {href}>
					<div class="flex flex-col gap-3">
						<p class="text-3xl">{name}</p>
						<p class="max-w-prose text-balance">{text}</p>
						<p>Date: {date}</p>
					</div>
					<Tags {tags} />
				</Button>
			{/each}
		</div>
	</Section>

	<Section
		{@attach gsapScroll()}
		id="contact"
		title="Contact"
		isColumn={true}
		isCenter={false}
	>
		<p class="text-balance">
			I’m available for new projects and opportunities. If you have an idea, need someone to develop
			a modern and functional website, or just want to chat about a project, feel free to reach out!
		</p>

		<div class="flex gap-3">
			<Email />
			<Linkedin />
			<WhatsApp />
		</div>
	</Section>
</main>
