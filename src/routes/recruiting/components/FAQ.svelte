<script>
	import { marked } from 'marked';
	import CollapsableQuestion from './CollapsableQuestion.svelte';

	const faqs = [
		{
			question: '코딩 경험이 없고 프로그램을 다룰 줄 모르는데 지원해도 되나요?',
			answer:
				'YBIGTA에서는 방학 동안 신입기수 교육세션과 다양한 스터디를 통해 python 기초 등을 공부하실 수 있는 기회가 있습니다.\n프로그래밍 경험이 없으시더라도 **충분한 열정을 가지신 분**이라면 모두 지원이 가능합니다!'
		},
		{
			question: '방학 교육세션은 전체 필참인가요?',
			answer:
				'교육세션은 전체 참여가 원칙이나, 불가피한 사정으로 인한 결석은 사전에 운영진에게 말씀해주시면 됩니다.\n다만, 잦은 결석의 경우 학회 회칙에 의한 불이익이 있을 수 있습니다.'
		},
		{
			question: '학회 면접일에 일정이 있어서, 비대면이나 다른 날 면접은 불가할까요?',
			answer:
				'지원자 평가 과정의 형평성을 고려하여 안내드린 시간 이외의 추가 면접은 불가합니다.\n다만, 면접일에 일정이 있어서 참석이 불가능하신 경우 면접일 전날까지 면접 일정을 변경할 수 있습니다.'
		}
	];
</script>

<ul class="faq">
	{#each faqs as faq}
		<CollapsableQuestion>
			<svelte:fragment slot="question">{faq.question}</svelte:fragment>
			<svelte:fragment slot="answer">{@html marked(faq.answer)}</svelte:fragment>
		</CollapsableQuestion>
	{/each}
</ul>

<style lang="scss">
	ul {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
