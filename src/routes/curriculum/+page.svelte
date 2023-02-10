<script>
	import Seo from '$lib/layout/Seo.svelte';
</script>

<Seo title="Curriculum" />
<section>
	<h2>Curriculum</h2>
	<p>데이터에 대한 다양한 경험과 전문성을 갖추고, 이를 활용하여 실제 프로젝트를 진행합니다.</p>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		width: 100%;
		padding: 4rem 3rem;

		background-color: rgb(103, 184, 255);
		color: #fff;
	}

	h2 {
		font-size: 2.5rem;
		font-weight: 700;
		margin-bottom: 1rem;
	}

	p {
		font-size: 1.25rem;
		font-weight: 400;
		line-height: 1.5;
		text-align: center;
	}
</style>
