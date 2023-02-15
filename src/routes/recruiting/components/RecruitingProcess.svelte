<script>
	const process = [
		{
			title: '1. 지원서 작성',
			desc: '자신의 데이터 분야에 대한 열정이 드러날 수 있도록 자유롭게 작성해주세요.'
		},
		{
			title: '2. 서류 평가',
			desc: '작성해주신 지원서를 바탕으로 1차 합격 여부를 결정합니다. 결과와 면접 일정을 알려드립니다.'
		},
		{
			title: '3. 면접',
			desc: '작성해주신 지원서 내용과 지원하고자 하는 분야를 바탕을 궁금한 점을 물어봅니다.'
		},
		{
			title: '4. 합격 통보',
			desc: 'OT 일자 및 합격/불합격 여부를 알려드립니다.'
		}
	];
</script>

<ul>
	{#each process as item}
		<li>
			<h6>{item.title}</h6>
			<p>{item.desc}</p>
		</li>
	{/each}
</ul>

<style lang="scss">
	@use '$styles/variables.scss' as *;
	ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		gap: 1rem;
	}

	li {
		flex: 1 0 12rem;
		flex-shrink: unset;

		border: 1px solid #ccc;
		border-radius: 1rem;

		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		padding: 1rem;

		h6 {
			@include heading6;
			font-weight: 500;
			margin-bottom: 1rem;
			word-break: keep-all;
			color: var(--color-title);
		}
		p {
			word-break: keep-all;
			color: var(--color-text);
			@include body1;
		}
		&:hover {
			background-color: var(--color-primary);
			h6 {
				color: #fff;
			}
			p {
				color: #fff;
			}
		}
	}
</style>
