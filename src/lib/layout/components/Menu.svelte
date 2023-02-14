<script lang="ts">
	type MenuType = 'main' | 'sub';

	export let href = '';
	export let target = '_self';
	export let type: MenuType = 'main';
</script>

<li class={type}>
	<a {href} {target}>
		<slot />
	</a>
</li>

<style lang="scss">
	@use '$styles/tokens/color.scss' as color;

	@media (prefers-color-scheme: dark) {
		li.main a:hover,
		li.main a:focus {
			background-color: color.$neutral-700;
		}
		li.sub a:hover,
		li.sub a:focus {
			background-color: color.$neutral-600;
		}
	}

	@media (prefers-color-scheme: light) {
		li.main a:hover,
		li.main a:focus {
			background-color: color.$neutral-200;
		}

		li.sub a:hover,
		li.sub a:focus {
			background-color: color.$neutral-200;
		}
	}

	li.main {
		padding: 1.5rem 0rem;
		a {
			font-size: 1.125rem;
			font-weight: 500;
			padding: 8px 16px;
			border-radius: 4px;
		}
	}
	li.sub {
		a {
			display: block;
			padding: 8px 16px;
			border-radius: 4px;
		}
	}
</style>
