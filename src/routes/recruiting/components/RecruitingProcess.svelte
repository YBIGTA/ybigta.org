<ul>
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

<style lang="scss">
	ul {
		display: flex;
		justify-content: flex-start;
		gap: 1rem;
	}

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
</style>
