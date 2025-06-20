<script>
	import { Hero, TextSection } from '$lib/components';
	import { aboutMe } from '$lib/data/section';
</script>

<main class="px-20">
	<Hero />
	<TextSection title="About Me" id="about" texts={aboutMe}/>
</main>
