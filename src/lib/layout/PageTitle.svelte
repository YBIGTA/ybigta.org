<section class="page-title">
	<h2>
		<slot name="title" />
	</h2>
	{#if $$slots.desc}
		<p>
			<slot name="desc" />
		</p>
	{/if}
	{#if $$slots.image}
		<div class="image-container">
			<slot name="image" />
		</div>
	{/if}
</section>

<style lang="scss">
	@use '$styles/variables.scss' as *;
	section {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		padding-top: 4rem;
	}
	h2 {
		@include heading1;
		font-weight: 700;
		margin: 0 var(--horiz-padding-main);
		margin-bottom: 1rem;
		color: var(--color-title);
	}
	p {
		@include body1;
		font-weight: 400;
		color: var(--color-subtitle);
		margin: 0 var(--horiz-padding-main);
	}

	.image-container {
		margin-top: 1rem;
	}
</style>
