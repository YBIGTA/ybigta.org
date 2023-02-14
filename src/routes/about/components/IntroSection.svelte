<script>
	import { marked } from 'marked';

	const paragraph1 =
		'와이빅타는 연세 빅데이터의 약어로, 다양한 배경의 열정있는 사람들이 데이터라는 공통된 관심사를 가지고 모여 만들어나갈 미래를 꿈꿉니다.';
	const paragraph2 =
		'2012년, **"구글에서 사용한다는 데이터 분산처리를 직접 해보고 싶다."** 라는 생각에서 시작된 와이빅타는 \
    이후 다양한 전공을 가진 호기심 많고, 열정있는 사람들끼리 모여 \
    분산처리•모델링•시각화 등 데이터를 다루는 다양한 기술을 공유하고 이를 이용한 프로젝트들을 진행하는 학회로 발전했습니다.';
	const paragraph3 =
		'와이빅타는 데이터 분야의 발전과 함께 다양한 모습으로 변화해 왔습니다. \
    단순히 선배가 후배에게 데이터 관련 지식들을 알려주던 동아리 수준을 넘어 현업의 데이터 처리 프로세스를 반영한 3개의 팀(DE, DS, DA)을 만들었습니다. \
    각 팀에서는 세분화된 세션과 스터디를 통해 구성원들이 자신의 관심사에 맞는 분야에 대한 전문성을 기르고, \
    컨퍼런스를 통해 다른 팀와 협업할 수 있는 프로젝트를 진행합니다.';

	const paragraph4 =
		'지금까지 340명 이상의 학회원이 거쳐간 와이빅타는 앞으로도 데이터 분야에서의 정체성을 고민하며\
    데이터 산업을 바꿔나갈 전문가들을 양성하기 위해 노력할 것입니다.';
</script>

<section>
	<h2>
		<span>Shape the Future of Data</span>
		<span>with a Community of Enthusiasts</span>
	</h2>
	<article id="about-ybigta">
		{@html marked(paragraph1)}
		{@html marked(paragraph2)}
		{@html marked(paragraph3)}
		{@html marked(paragraph4)}
	</article>
</section>

<style lang="scss">
	@use '../../../styles/tokens/color.scss' as color;

	section {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		gap: 3rem;

		padding: 5rem 3rem 7rem 3rem;

		@media (prefers-color-scheme: light) {
			background-color: color.$neutral-50;
		}
	}

	h2 {
		font-size: 2.5rem;
		font-weight: 700;
		line-height: 1.3;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		color: var(--color-title);
	}

	#about-ybigta :global(p) {
		text-align: start;
		width: 100%;
		max-width: 760px;
		font-size: 1.2rem;
		font-weight: 300;
		line-height: 1.3;

		color: var(--color-text);

		margin-top: 1.5rem;
		white-space: pre-line;
		word-break: keep-all;
	}

	#about-ybigta :global(p:first-of-type) {
		margin-top: 0;
	}

	#about-ybigta :global(strong) {
		font-weight: 600;
	}
</style>
