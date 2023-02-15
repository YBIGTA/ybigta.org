<script>
	import { page } from '$app/stores';
	import Seo from '$lib/layout/Seo.svelte';

	const pageTitleObj = {
		404: 'Page Not Found',
		500: 'Internal Server Error'
	};

	let title = 'Error Page';
	if ($page.status === 404) {
		title = pageTitleObj[404];
	} else if ($page.status === 500) {
		title = pageTitleObj[500];
	}
</script>

<Seo {title} />
<div class="container">
	{#if $page.status === 404}
		<h2>404</h2>
		<p>Page not found</p>
	{:else if $page.status === 500}
		<h2>500</h2>
		<p>Internal server error</p>
	{:else}
		<h2>{$page.status}</h2>
		<p>Error</p>
	{/if}
</div>

<style>
	.container {
		width: 100%;
		height: var(--min-height-main);

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
	}
	h2 {
		font-size: 6rem;
		font-family: 'FacebookLetterFaces', 'Pretendard Variable', Pretendard, -apple-system, sans-serif;
		color: var(--color-title);
	}
	p {
		font-size: 1.5rem;
		font-weight: 500;
		color: var(--color-text);
	}
</style>
