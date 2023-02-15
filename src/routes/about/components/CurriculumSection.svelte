<script>
	import { InternalLinks } from '$lib/constants/links';
</script>

<section>
	<h2>What We Do</h2>
	<a href={InternalLinks.Curriculum}>
		<button type="button">Explore Our Curriculum</button>
	</a>
</section>

<style lang="scss">
	@use '$styles/variables.scss' as *;
	section {
		width: 100%;
		padding: 4rem 3rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 2rem;
	}

	h2 {
		@include heading2;
		font-weight: 700;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		color: var(--color-title);
	}

	button {
		@include heading4;
		background-color: var(--color-primary);
		color: #fff;
		font-weight: 700;
		padding: 1rem 2rem;
		border: none;
		border-radius: 0.5rem;
		cursor: pointer;
		transition: all 0.2s ease-in-out;
	}
</style>
