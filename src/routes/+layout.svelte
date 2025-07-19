<script lang="ts">
	import { Footer, Header } from '$lib/components';
	import '../app.css';

	let { children } = $props();
</script>

<Header />
{@render children()}
<Footer />
