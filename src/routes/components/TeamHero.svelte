<script>
	import TeamPreview from './TeamPreview.svelte';
</script>

<section>
	<h3>Teams</h3>
	<ul>
		<TeamPreview>
			<span slot="team_name">Data Engineering</span>
			<span slot="team_desc">
				데이터 분석의 근간이 되는 데이터 플랫폼을 이루는 기술 및 활용 방법에 대해 공부합니다.
			</span>
		</TeamPreview>
		<TeamPreview>
			<span slot="team_name">Data Science</span>
			<span slot="team_desc">
				딥러닝(CV, NLP), 머신러닝, 강화학습 등의 주제와 관련된 주요 논문들과 모델을 공부하고
				구현합니다.
			</span>
		</TeamPreview>
		<TeamPreview>
			<span slot="team_name">Data Analytics</span>
			<span slot="team_desc">
				데이터 기반의 의사결정을 위한 문제 정의 및 전처리부터 시각화까지 데이터 분석의 All-Rounder를
				지향합니다.
			</span>
		</TeamPreview>
	</ul>
</section>

<style>
	section {
		width: 100%;
		display: flex;
		flex-direction: column;
		padding: 3rem 3rem 4rem 3rem;
		gap: 2rem;
		background-color: var(--color-background);
	}

	h3 {
		font-size: 2rem;
		font-weight: 600;
		color: var(--color-title);
	}

	ul {
		width: 100%;
		display: flex;
		justify-content: space-between;
		gap: 2rem;
	}
</style>
