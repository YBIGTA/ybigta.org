<script lang="ts">
	export let target = '_self';
	export let href = '';
	export let name = '';
	export let imageSrc = '';
</script>

<a {target} {href}>
	<img alt={name} src={imageSrc} />
	<div class="text">
		<h6 class="name">{name}</h6>
		<i class="bi bi-arrow-right-circle-fill" />
	</div>
</a>

<style lang="scss">
	@use '$styles/variables.scss' as *;

	a {
		display: flex;
		width: 100%;
		aspect-ratio: 3/2;
		padding: 2rem;

		position: relative;
		background-color: var(--color-surface-background);
		@media (prefers-color-scheme: light) {
			box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
		}
		border-radius: 0.5rem;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 0.5rem;
		position: absolute;
		top: 0;
		left: 0;
		filter: brightness(0.7);
	}

	.text {
		z-index: 10;
		margin: 0;
		margin-top: auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #fff;
		width: 100%;

		.name {
			@include heading3;
			font-weight: 600;
		}
		i {
			font-size: 2rem;
		}
	}
</style>
