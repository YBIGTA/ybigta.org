<script>
	import Menu from './components/Menu.svelte';
	import MenuGroup from './components/MenuGroup.svelte';
</script>

<header>
	<h1>
		<a href="/">
			<img alt="ybigta logo" src="/icons/ybigta-text.svg" />
		</a>
	</h1>
	<nav>
		<ul class="menu-list">
			<MenuGroup>
				About
				<svelte:fragment slot="submenus">
					<Menu type="sub" href="/about">About Us</Menu>
					<Menu type="sub" href="/curriculum">Curriculum</Menu>
					<Menu type="sub" href="/recruiting">Recruiting</Menu>
				</svelte:fragment>
			</MenuGroup>
			<Menu href="/archive">Archive</Menu>
			<Menu href="/wiki">Wiki</Menu>
		</ul>
	</nav>
</header>

<style lang="scss">
	header {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 5rem;

		padding: 0rem 3rem;
		// background-color: var(--color-header-background);
		color: var(--color-title);
		border-bottom: 1px solid var(--color-border);

		background-color: var(--color-header-background);
		backdrop-filter: blur(8px);

		position: sticky;
		top: 0;
		left: 0;
		z-index: 20;
	}

	h1 {
		position: absolute;
		img {
			height: 2.5rem;
		}
	}

	nav {
		margin: 0 auto;
	}

	.menu-list {
		display: flex;
		justify-content: flex-end;
		gap: 4px;
	}
</style>
