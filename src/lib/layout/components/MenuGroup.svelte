<script lang="ts">
	import { createPopper } from '@popperjs/core';
	import { onMount } from 'svelte';

	let active = false;
	export let id = '';

	onMount(() => {
		const menu = document.getElementById(id);
		const menuGroup: HTMLDivElement | null = document.querySelector(`#${id} > .submenu`);

		if (!menu || !menuGroup) return;

		const popper = createPopper(menu, menuGroup, {
			placement: 'bottom-start',
			modifiers: [
				{
					name: 'offset',
					options: {
						offset: [0, 0]
					}
				}
			]
		});

		const showPopper = () => {
			active = true;
			popper.update();
		};
		const hidePopper = () => {
			active = false;
		};

		const showEvents = ['mouseenter', 'focus'];
		const hideEvents = ['mouseleave', 'blur'];

		showEvents.forEach((event) => {
			menu.addEventListener(event, showPopper);
		});
		hideEvents.forEach((event) => {
			menu.addEventListener(event, hidePopper);
		});
	});
</script>

<li {id} class="menu" tabindex="0" role="button">
	<span class="menu__title">
		<slot />
	</span>
	<div class="submenu" class:active>
		<ul>
			<slot name="submenus" />
		</ul>
	</div>
</li>

<style lang="scss">
	@use '../../../styles/tokens/color.scss' as color;

	@media (prefers-color-scheme: dark) {
		.menu__title:hover,
		.menu__title:focus {
			background-color: color.$neutral-700;
		}
	}
	@media (prefers-color-scheme: light) {
		.menu__title:hover,
		.menu__title:focus {
			background-color: color.$neutral-200;
		}

		.submenu {
			box-shadow: 0px 5px 5px 5px rgba(0, 0, 0, 0.05);
		}
	}

	.menu {
		padding: 1.5rem 0rem;
	}

	.menu__title {
		font-size: 1.125rem;
		font-weight: 500;
		padding: 8px 16px;
		border-radius: 4px;
	}

	.submenu {
		width: 200px;
		background-color: var(--color-surface-background);
		display: none;
		padding: 16px;
		border-radius: 4px;
		&.active {
			display: block;
		}
		ul {
			display: flex;
			flex-direction: column;
			gap: 8px;
		}
	}
</style>
