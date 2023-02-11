<script>
	import PageSection from '$lib/layout/PageSection.svelte';
	import PageTitle from '$lib/layout/PageTitle.svelte';
	import Seo from '$lib/layout/Seo.svelte';
	import MainCurriculum from './components/MainCurriculum.svelte';
	import NewbieCurriculum from './components/NewbieCurriculum.svelte';
</script>

<Seo
	title="Curriculum"
	desc="데이터에 대한 다양한 전문성을 갖추고, 이를 활용한 프로젝트를 진행합니다."
/>

<div class="container">
	<PageTitle>
		<span slot="title">Curriculum</span>
		<span slot="desc">
			데이터에 대한 다양한 경험과 전문성을 갖추고, 이를 활용하여 실제 프로젝트를 진행합니다.
		</span>
		<img id="page-cover" src="/images/curriculum/cover.jpeg" alt="curriculum" slot="image" />
	</PageTitle>
	<NewbieCurriculum />
	<MainCurriculum />
</div>
<div class="placeholder" />

<style lang="scss">
	div.container {
		max-width: 1200px;
		margin: 0 auto;
	}
	img#page-cover {
		width: 100%;
		aspect-ratio: 16 / 6;
		object-fit: cover;
		object-position: 50% 40%;
	}

	div.placeholder {
		height: 100px;
	}
</style>
