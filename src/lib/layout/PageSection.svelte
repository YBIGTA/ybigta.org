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

<style>
	section {
		width: 100%;
		padding: 4rem 3rem 2rem 3rem;
	}
	p {
		font-size: 1.25rem;
		font-weight: 400;
		line-height: 1.5;
		margin-top: -0.5rem;
		color: var(--color-subtitle);
	}
	h3 {
		font-size: 2.5rem;
		font-weight: 700;
		margin-bottom: 1.5rem;
		color: var(--color-title);
	}
</style>
