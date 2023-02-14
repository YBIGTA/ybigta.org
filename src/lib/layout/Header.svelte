<script>
	import { ExternalLinks, InternalLinks } from '$lib/constants/links';
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
			<MenuGroup id="about-menu">
				About
				<svelte:fragment slot="submenus">
					<Menu type="sub" href={InternalLinks.AboutUs}>About Us</Menu>
					<Menu type="sub" href={InternalLinks.Curriculum}>Curriculum</Menu>
					<Menu type="sub" href={InternalLinks.Recruiting}>Recruiting</Menu>
				</svelte:fragment>
			</MenuGroup>
			<Menu type="main" target="_blank" href={ExternalLinks.Archive}>Archive</Menu>
			<MenuGroup id="wiki-menu">
				Wiki
				<svelte:fragment slot="submenus">
					<Menu type="sub" target="_blank" href={ExternalLinks.DataEngineeringWiki}>
						Data Engineering
					</Menu>
					<Menu type="sub" target="_blank" href={ExternalLinks.DataScienceWiki}>Data Science</Menu>
					<Menu type="sub" target="_blank" href={ExternalLinks.DataAnalyticsWiki}
						>Data Analytics</Menu
					>
				</svelte:fragment>
			</MenuGroup>
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

		padding: 0rem var(--horiz-padding-main);
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
