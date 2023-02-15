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
	li.main {
		font-weight: 700;
		@include heading3;
	}

	li.sub {
		font-weight: 400;
		@include heading5;
	}
</style>
