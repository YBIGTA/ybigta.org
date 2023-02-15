<script>
	import { getAccordion } from '$lib/animations/getAccordion';

	const accordion = getAccordion('38px');

	export let open = false;
</script>

<li class="menugroup" use:accordion={open}>
	<button class="title" type="button" on:click>
		<slot name="title" />
	</button>
	<ul class="submenus" class:open>
		<slot name="submenus" />
	</ul>
</li>

<style lang="scss">
	.title {
		font-size: 2rem;
		font-weight: 600;
		line-height: 1.2;
		color: var(--color-title);

		cursor: pointer;
		width: 140px;
		text-align: start;
	}

	.menugroup {
		display: flex;
		width: 100%;
	}

	.submenus {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-top: 1rem;

		opacity: 0;
		transition: opacity 0.3s ease-in-out;
		&.open {
			opacity: 1;
		}
	}
</style>
