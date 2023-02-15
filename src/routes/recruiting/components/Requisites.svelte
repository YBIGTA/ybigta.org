<script>
	const requirements = [
		'빅데이터 분석 및 처리에 관심이 있는 분',
		'1년 이상 활동 가능한 분',
		'연세대학교 학생(학부/대학원, 학년, 전공 무관)'
	];
</script>

<ul>
	{#each requirements as requirement}
		<li>{requirement}</li>
	{/each}
</ul>

<style lang="scss">
	@use '$styles/variables.scss' as *;
	ul {
		list-style: disc;
	}
	li {
		@include heading6;
		margin-left: 1rem;
		margin-bottom: 0.5rem;
		color: var(--color-subtitle);
		&:last-child {
			margin-bottom: 0;
		}
	}
</style>
