<script>
	export let name = '';
	export let desc = '';
	export let imageSrc = '';
</script>

<article class="team">
	<section class="text">
		<h4>{name}</h4>
		<p>{desc}</p>
	</section>
	<section class="image">
		<img src={imageSrc} alt={name} loading="lazy" />
	</section>
</article>

<style lang="scss">
	@use '$styles/variables.scss' as *;

	.team {
		position: relative;
		background-color: var(--color-surface-background);
		@media (prefers-color-scheme: light) {
			box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
		}
		aspect-ratio: 9/4;
		border-radius: 0.5rem;
		overflow: hidden;
	}
	section.text {
		width: 50%;
		height: 100%;
		padding: 1rem;

		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 0.5rem;

		h4 {
			@include heading6;
			color: var(--color-title);
			font-weight: 700;
		}
		p {
			@include body2;
			color: var(--color-subtitle);
			word-break: keep-all;
		}
	}
	section.image {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: 0.5rem;
		}
	}
</style>
