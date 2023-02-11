<script>
	import PageSection from '$lib/layout/PageSection.svelte';
	import { marked } from 'marked';
	import Glossaries from './Glossaries.svelte';

	const glossaries = [
		'**교육 세션** : 신입기수 대상으로 학회 활동에 있어서 기본이 되는 내용들에 대해서 교육을 진행합니다. 내용은 파이썬 기초부터 데이터 분석, 머신러닝, 딥러닝 등 다양한 분야를 다룹니다.',
		'**신입기수 프로젝트** : 매년 여름방학, 겨울방학 신입기수 교육세션이 종료된 후 신입기수 학회원들을 대상으로 약 2주 간 진행되는 팀 프로젝트입니다. 신입기수 학회원들이 4~5명씩 팀을 이루어 교육세션에서 배운 내용을 바탕으로 프로젝트를 진행합니다.',
		'**팀 배정** : 신입기수 프로젝트가 종료된 후, 학회원들을 분야별로 팀을 배정합니다.'
	];
</script>

<PageSection>
	<span slot="title">신입 커리큘럼</span>
	<span slot="desc">합격 이후 팀을 배정받기 전까지의 활동입니다.</span>
	<div class="content" slot="content">
		<img src="/images/curriculum/new.png" alt="curriculum" />
		<Glossaries>
			<svelte:fragment slot="content">
				{#each glossaries as glossary}
					<li>{@html marked(glossary)}</li>
				{/each}
			</svelte:fragment>
		</Glossaries>
	</div>
</PageSection>

<style lang="scss">
	div.content {
		width: 100%;
		margin-top: 1rem;
	}
	img {
		width: 100%;
		max-width: 720px;
	}
</style>
