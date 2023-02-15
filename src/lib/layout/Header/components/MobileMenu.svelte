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
	@use '$styles/variables.scss' as *;
	li {
		width: 100%;
		&.main {
			font-weight: 700;
			@include heading3;
		}

		&.sub {
			font-weight: 400;
			@include heading5;
		}

		a {
			display: block;
			width: 100%;
			text-align: start;
			color: var(--color-title);
		}
	}
</style>
