<script lang="ts">
	import { Footer, Header } from '$lib/components';
	import { dev } from '$app/environment';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import '../app.css';

	injectAnalytics({ mode: dev ? 'development' : 'production' });
	let { children } = $props();
</script>

<Header />
{@render children()}
<Footer />
