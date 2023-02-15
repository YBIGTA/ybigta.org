<script>
	import DesktopMenus from './components/DesktopMenus.svelte';
	import MobileMenus from './components/MobileMenus.svelte';

	let mobileMenuActive = false;
	function toggle() {
		mobileMenuActive = !mobileMenuActive;
	}
</script>

<header class:mobileMenuActive>
	<h1>
		<a href="/">
			<img alt="ybigta logo" src="/icons/ybigta-text.svg" />
		</a>
	</h1>
	<DesktopMenus />
	<button type="button" on:click={toggle}>
		<i class="bi bi-list" />
	</button>
	<MobileMenus active={mobileMenuActive} />
</header>

<style lang="scss">
	header {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 5rem;

		padding: 0rem var(--horiz-padding-main);
		color: var(--color-title);
		border-bottom: 1px solid var(--color-border);

		background-color: var(--color-header-background);
		backdrop-filter: blur(8px);

		position: sticky;
		top: 0;
		left: 0;
		z-index: 20;

		transition: background-color 0.3s ease-in-out;
		&.mobileMenuActive {
			background-color: var(--color-background);
		}
	}

	h1 {
		position: absolute;
		img {
			height: 2.5rem;
		}
	}

	button {
		background-color: transparent;
		border: none;
		cursor: pointer;
		padding: 0;
		margin: 0;
		margin-left: auto;
		font-size: 2.5rem;
		color: var(--color-title);

		@media screen and (min-width: 1024px) {
			display: none;
		}
	}
</style>
