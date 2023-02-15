<ul class="glossaries">
	<slot name="content" />
</ul>

<style lang="scss">
	@use '$styles/variables.scss' as *;
	ul.glossaries {
		margin-top: 2rem;
		margin-left: 2rem;
		list-style: disc;
		padding: 0;
		@include body1;

		:global(li) {
			margin-bottom: 1rem;
			word-break: keep-all;
			color: var(--color-text);

			&:last-child {
				margin-bottom: 0;
			}

			:global(strong) {
				font-weight: 600;
			}
		}
	}
</style>
