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
	section {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		padding-top: 4rem;
	}
	h2 {
		font-size: 4rem;
		font-weight: 700;
		line-height: 1.5;
		margin: 0 var(--horiz-padding-main);
		color: var(--color-title);
	}
	p {
		font-size: 1.25rem;
		font-weight: 400;
		line-height: 1.5;
		color: #444;
		margin: 0 var(--horiz-padding-main);
		color: var(--color-subtitle);
	}

	.image-container {
		margin-top: 1rem;
	}
</style>
