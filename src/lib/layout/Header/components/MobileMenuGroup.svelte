<script lang="ts">
	import { getAccordion } from '$lib/animations/getAccordion';
	import { isViewportWidthSmallerThan } from '$lib/utils/isViewportSmaller';
	import { onMount } from 'svelte';

	let defaultHeight = isViewportWidthSmallerThan(768) ? '40px' : '60px';
	let accordion: Function = () => {};
	$: accordion = getAccordion(defaultHeight);

	onMount(() => {
		window.addEventListener('resize', () => {
			defaultHeight = isViewportWidthSmallerThan(768) ? '40px' : '60px';
		});

		return {
			destroy() {
				window.removeEventListener('resize', () => {
					defaultHeight = isViewportWidthSmallerThan(768) ? '40px' : '60px';
				});
			}
		};
	});

	export let open = false;
</script>

<button on:click>
	<li class="menugroup" use:accordion={open}>
		<h6 class="title">
			<slot name="title" />
		</h6>
		<ul class="submenus" class:open>
			<slot name="submenus" />
		</ul>
	</li>
</button>

<style lang="scss">
	@use '$styles/variables.scss' as *;
	button {
		width: 100%;
		cursor: pointer;
	}
	.menugroup {
		display: flex;
		width: 100%;
	}

	.title {
		font-weight: 700;
		@include heading3;
		color: var(--color-title);

		cursor: pointer;
		text-align: start;
		@media (max-width: 768px) {
			width: 140px;
		}
		width: 160px;
	}

	.submenus {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-top: 0.6rem;

		opacity: 0;
		transition: opacity 0.3s ease-in-out;
		&.open {
			opacity: 1;
		}
	}
</style>
