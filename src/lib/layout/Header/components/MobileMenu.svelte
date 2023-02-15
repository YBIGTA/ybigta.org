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
	li.main {
		font-size: 2rem;
		font-weight: 700;
		line-height: 1.2;
	}

	li.sub {
		font-size: 1.2rem;
		font-weight: 400;
		line-height: 1.2;
	}
</style>
