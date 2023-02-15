<section>
	<h3>
		<slot name="title" />
	</h3>
	{#if $$slots.desc}
		<p>
			<slot name="desc" />
		</p>
	{/if}
	{#if $$slots.content}
		<slot name="content" />
	{/if}
</section>

<style lang="scss">
	@use '$styles/variables.scss' as *;

	section {
		width: 100%;
		padding: 4rem var(--horiz-padding-main) 2rem var(--horiz-padding-main);
	}
	p {
		@include body1;
		font-weight: 400;
		margin-top: -0.5rem;
		color: var(--color-subtitle);
	}
	h3 {
		@include heading3;
		font-weight: 700;
		margin-bottom: 1.5rem;
		color: var(--color-title);
	}
</style>
