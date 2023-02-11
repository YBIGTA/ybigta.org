<script>
	import PageSection from '$lib/layout/PageSection.svelte';
	import { marked } from 'marked';
	import Glossaries from './Glossaries.svelte';

	const glossaries = [
		'**팀 세션** : 팀 배정 이후, 각 팀별로 좀 더 자세한 내용을 다루는 세션을 진행합니다.',
		'**컨퍼런스** : YBIGTA 활동의 ‘꽃’이라고도 할 수 있는 컨퍼런스는 매 학기 말 진행되며, DA, DS, DE 학회원들로 구성된 팀이 서로 다른 주제로 프로젝트를 진행하고 결과를 공유합니다. '
	];
</script>

<PageSection>
	<span slot="title">정규 커리큘럼</span>
	<span slot="desc">팀을 배정받은 이후의 활동입니다.</span>
	<div class="content" slot="content">
		<img
			id="curriculum-2"
			class="content-curriculum"
			src="/images/curriculum/main.png"
			alt="curriculum"
		/>
		<Glossaries>
			<svelte:fragment slot="content">
				{#each glossaries as glossary}
					<li>{@html marked(glossary)}</li>
				{/each}
			</svelte:fragment>
		</Glossaries>
	</div>
</PageSection>

<style>
	div.content {
		width: 100%;
		margin-top: 1rem;
	}
	img {
		width: 100%;
	}
</style>
