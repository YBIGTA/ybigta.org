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
		padding: 1.5rem 0rem;
		a {
			font-size: 1.125rem;
			font-weight: 500;
			padding: 8px 16px;
			border-radius: 4px;
			&:hover,
			&:focus {
				background-color: #f5f5f5;
			}
		}
	}
	li.sub {
		font-size: 1rem;
		font-weight: 400;
		padding: 8px 16px;
		border-radius: 4px;
		&:hover,
		&:focus {
			background-color: #f5f5f5;
		}
	}
</style>
