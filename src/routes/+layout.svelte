<script>
	import '$styles/global.scss';
	import '$styles/reset.css';
	import Header from '$lib/layout/Header/Header.svelte';
	import Footer from '$lib/layout/Footer/Footer.svelte';
</script>

<Header />
<main>
	<slot />
</main>
<Footer />

<style>
	main {
		min-height: var(--min-height-main);
	}
</style>
