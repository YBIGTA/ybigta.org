<script lang="ts">
	import { createPopper } from '@popperjs/core';
	import { onMount } from 'svelte';

	let active = false;

	onMount(() => {
		const menu = document.querySelector('.menu');
		const menuGroup: HTMLDivElement | null = document.querySelector('.submenu');

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

<li class="menu" tabindex="0" role="button">
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
	.menu {
		padding: 1.5rem 0rem;
	}

	.menu__title {
		font-size: 1.125rem;
		font-weight: 500;
		padding: 8px 16px;
		border-radius: 4px;
		&:hover,
		&:focus {
			background-color: #f5f5f5;
		}
	}

	.submenu {
		width: 200px;
		background-color: white;
		box-shadow: 0px 5px 5px 5px rgba(0, 0, 0, 0.05);
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
