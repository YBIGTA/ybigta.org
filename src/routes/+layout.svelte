<script>
	import '$styles/global.scss';
	import '$styles/reset.css';
	import Header from '$lib/layout/Header.svelte';
	import Footer from '$lib/layout/Footer.svelte';
</script>

<Header />
<main>
	<slot />
</main>
<Footer />

<style>
	main {
		min-height: calc(100vh - 5rem - 12rem);
	}
</style>
