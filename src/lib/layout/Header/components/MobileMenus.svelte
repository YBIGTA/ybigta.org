<script lang="ts">
	import { ExternalLinks, InternalLinks } from '$lib/constants/links';
	import { fly } from 'svelte/transition';
	import MobileMenu from './MobileMenu.svelte';
	import MobileMenuGroup from './MobileMenuGroup.svelte';

	export let active = false;

	const enum MenuGroup {
		About = 'about',
		Wiki = 'wiki'
	}

	let openedMenu: MenuGroup | undefined;
	const toggleMenu = (menu: MenuGroup) => {
		if (openedMenu === menu) {
			openedMenu = undefined;
		} else {
			openedMenu = menu;
		}
	};

	function toggleBodyScroll(node: HTMLElement) {
		document.body.style.overflow = 'hidden';
		return {
			destroy() {
				document.body.style.overflow = 'auto';
			}
		};
	}
</script>

{#if active}
	<div class="menus" use:toggleBodyScroll transition:fly={{ y: 200, duration: 500 }}>
		<ul>
			<MobileMenuGroup
				open={openedMenu === MenuGroup.About}
				on:click={() => {
					toggleMenu(MenuGroup.About);
				}}
			>
				<span slot="title">About</span>
				<svelte:fragment slot="submenus">
					<MobileMenu type="sub" href={InternalLinks.AboutUs}>About Us</MobileMenu>
					<MobileMenu type="sub" href={InternalLinks.Curriculum}>Curriculum</MobileMenu>
					<MobileMenu type="sub" href={InternalLinks.Recruiting}>Recruiting</MobileMenu>
				</svelte:fragment>
			</MobileMenuGroup>
			<MobileMenu type="main" target="_blank" href={ExternalLinks.Archive}>Archive</MobileMenu>
			<MobileMenuGroup
				open={openedMenu === MenuGroup.Wiki}
				on:click={() => {
					toggleMenu(MenuGroup.Wiki);
				}}
			>
				<span slot="title">Wiki</span>
				<svelte:fragment slot="submenus">
					<MobileMenu type="sub" target="_blank" href={ExternalLinks.DataEngineeringWiki}
						>Data Engineering</MobileMenu
					>
					<MobileMenu type="sub" target="_blank" href={ExternalLinks.DataScienceWiki}
						>Data Science</MobileMenu
					>
					<MobileMenu type="sub" target="_blank" href={ExternalLinks.DataAnalyticsWiki}
						>Data Analytics</MobileMenu
					>
				</svelte:fragment>
			</MobileMenuGroup>
		</ul>
	</div>
{/if}

<style lang="scss">
	div.menus {
		position: absolute;
		height: calc(100vh - 5rem);
		top: 5rem;
		left: 0;
		width: 100vw;
		background-color: var(--color-background);
		color: var(--color-title);

		padding: 2rem var(--horiz-padding-main);
	}

	ul {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		gap: 1.5rem;
	}
</style>
