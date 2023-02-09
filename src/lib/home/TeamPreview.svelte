<li>
	<div class="img" />
	<article>
		<h6>
			<slot name="team_name" />
		</h6>
		<p>
			<slot name="team_desc" />
		</p>
	</article>
</li>

<style>
	li {
		display: flex;
		flex-direction: column;

		flex: 1 1 auto;
		width: 20rem;
		aspect-ratio: 1/1;

		box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
	}

	.img {
		width: 100%;
		height: 50%;
		flex: 1 1 auto;
		background-color: #000;
	}

	article {
		height: 50%;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		background-color: white;
	}

	article > h6 {
		font-size: 1.25rem;
		font-weight: 500;
	}

	article > p {
		flex: 1 1 auto;
		overflow: hidden;
		color: #888;
		word-break: keep-all;
		line-height: 1.2;
	}
</style>
