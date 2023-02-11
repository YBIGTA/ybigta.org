<ul class="glossaries">
	<slot name="content" />
</ul>

<style lang="scss">
	ul.glossaries {
		margin-top: 2rem;
		margin-left: 2rem;
		list-style: disc;
		padding: 0;
		font-size: 1.2rem;
		line-height: 1.2;

		:global(li) {
			margin-bottom: 1rem;
			word-break: keep-all;

			&:last-child {
				margin-bottom: 0;
			}

			:global(strong) {
				font-weight: 600;
			}
		}
	}
</style>
