<script>
	import { ExternalLinks, InternalLinks } from '$lib/constants/links';
	import Menu from './DesktopMenu.svelte';
	import MenuGroup from './DesktopMenuGroup.svelte';
</script>

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
				<Menu type="sub" target="_blank" href={ExternalLinks.DataAnalyticsWiki}>Data Analytics</Menu
				>
			</svelte:fragment>
		</MenuGroup>
	</ul>
</nav>

<style lang="scss">
	nav {
		margin: 0 auto;
		@media screen and (max-width: 1024px) {
			display: none;
		}
	}

	.menu-list {
		display: flex;
		justify-content: flex-end;
		gap: 4px;
	}
</style>
