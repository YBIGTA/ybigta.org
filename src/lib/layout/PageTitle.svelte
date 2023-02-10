<section class="page-title">
	<h2>
		<slot />
	</h2>
	{#if $$slots.image}
		<slot name="image" />
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
		margin: 0 3rem;
		margin-bottom: 1rem;
	}
</style>
