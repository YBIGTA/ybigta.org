<script>
	import Seo from '$lib/layout/Seo.svelte';
	import PageSection from './components/PageSection.svelte';
	import PageTitle from './components/PageTitle.svelte';
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
	<ul slot="content" class="process">
		<li>
			<h6>서류 평가</h6>
			<p>자신의 데이터 분야에 대한 열정이 드러날 수 있도록 자유롭게 작성해주세요.</p>
		</li>
		<li>
			<h6>면접</h6>
			<p>작성해주신 지원서 내용과 지원하고자 하는 분야를 바탕을 궁금한 점을 물어봅니다.</p>
		</li>
		<li>
			<h6>합격 통보</h6>
			<p>OT 일자 및 합격/불합격 여부를 알려드립니다.</p>
		</li>
	</ul>
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

	ul.process {
		display: flex;
		justify-content: flex-start;
		gap: 1rem;
		li {
			width: 260px;
			aspect-ratio: 12/8;

			border: 1px solid #ccc;
			border-radius: 16px;

			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: flex-start;
			padding: 32px;
			h6 {
				font-size: 1.5rem;
				font-weight: 500;
				text-align: center;
				margin-bottom: 1rem;
			}
			p {
				word-break: keep-all;
				color: #666;
				line-height: 1.2;
			}
			&:hover {
				background-color: rgb(0, 109, 205);
				h6 {
					color: white;
				}
				p {
					color: #fbfbfb;
				}
			}
		}
	}
</style>
