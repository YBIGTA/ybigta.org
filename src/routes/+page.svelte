<script>
	import { ExternalLinks, InternalLinks } from '$lib/constants/links';
	import PageSection from '$lib/layout/PageSection.svelte';
	import Seo from '$lib/layout/Seo.svelte';
	import ActivityPreview from './components/ActivityPreview.svelte';
	import MissionHero from './components/MissionHero.svelte';
	import TeamPreview from './components/TeamPreview.svelte';

	const TeamInfos = [
		{
			name: 'Data Engineering',
			desc: '데이터 분석의 근간이 되는 데이터 플랫폼을 이루는 기술 및 활용 방법에 대해 공부합니다.',
			imageSrc: '/images/home/teams/data_engineering_team.png'
		},
		{
			name: 'Data Science',
			desc: '딥러닝(CV, NLP), 머신러닝, 강화학습 등의 주제와 관련된 주요 논문들과 모델을 공부하고 구현합니다.',
			imageSrc: '/images/home/teams/data_science_team.png'
		},
		{
			name: 'Data Analytics',
			desc: '데이터 기반의 의사결정을 위한 문제 정의 및 전처리부터 시각화까지 데이터 분석의 All-Rounder를 지향합니다.',
			imageSrc: '/images/home/teams/data_analytics_team.png'
		}
	];

	const ActivityInfos = [
		{
			name: '컨퍼런스',
			href: ExternalLinks.Conference,
			target: '_blank',
			imageSrc: '/images/home/activities/conference.jpeg'
		},
		{
			name: '스터디',
			href: ExternalLinks.Study,
			target: '_blank',
			imageSrc: '/images/home/activities/study.png'
		},
		{
			name: '커리큘럼',
			href: InternalLinks.Curriculum,
			imageSrc: '/images/home/activities/curriculum.png'
		}
	];
</script>

<Seo title="Home" />
<MissionHero />
<PageSection>
	<span slot="title">활동</span>
	<div class="activities" slot="content">
		{#each ActivityInfos as activityInfo (activityInfo.name)}
			<ActivityPreview {...activityInfo} />
		{/each}
	</div>
</PageSection>
<PageSection>
	<span slot="title">팀</span>
	<div class="teams" slot="content">
		{#each TeamInfos as teamInfo (teamInfo.name)}
			<TeamPreview {...teamInfo} />
		{/each}
	</div>
</PageSection>
<div class="placeholder" />

<style lang="scss">
	@use '$styles/variables.scss' as *;

	.placeholder {
		width: 100%;
		height: 100px;
	}
	.container {
		margin: 0 auto;
	}
	.activities {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(min(400px, calc(100vw - 2rem)), 1fr));
		gap: 1rem;
	}
	.teams {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(min(500px, calc(100vw - 2rem)), 1fr));
		gap: 1rem;
	}
</style>
