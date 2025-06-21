<script>
	import { Hero, TextSection , Section} from '$lib/components';
	import TextLoop from '$lib/components/TextLoop.svelte';
	import { aboutMe } from '$lib/data/section';
</script>

<main>
	<Hero />
	<Section id="about" title="About Me">
		<TextLoop texts={aboutMe}/>
	</Section>
</main>
