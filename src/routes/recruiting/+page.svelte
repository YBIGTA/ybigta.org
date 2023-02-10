<script>
	import Seo from '$lib/layout/Seo.svelte';
	import PageSection from '$lib/layout/PageSection.svelte';
	import PageTitle from '$lib/layout/PageTitle.svelte';
	import RecruitingProcess from './components/RecruitingProcess.svelte';
</script>

<Seo title="Recruiting" />
<PageTitle>
	Recruiting
	<img src="/images/recruiting.jpeg" alt="recruiting" slot="image" />
</PageTitle>
<PageSection>
	<h3 slot="title">지원 자격</h3>
	<ul slot="content" class="requisites">
		<li>빅데이터 분석 및 처리에 관심이 있는 분</li>
		<li>1년 이상 활동 가능한 분</li>
		<li>연세대학교 학생(학부/대학원, 학년, 전공 무관)/</li>
	</ul>
</PageSection>
<PageSection>
	<span slot="title">Process</span>
	<RecruitingProcess slot="content" />
</PageSection>
<PageSection>
	<span slot="title">FAQ</span>
</PageSection>

<style lang="scss">
	img {
		width: 100%;
		height: 400px;
		object-fit: cover;
	}

	ul.requisites {
		list-style: disc;
		li {
			margin-left: 1rem;
			font-size: 1.2rem;
			line-height: 1.3;
			margin-bottom: 0.5rem;
			&:last-child {
				margin-bottom: 0;
			}
		}
	}
</style>
