<script>
	import ContactIcon from './components/ContactIcon.svelte';
	import KakaoLogo from './assets/KakaoLogo.svelte';
</script>

<footer>
	<div class="logo-container">
		<span class="logo">ybigta</span>
		<span class="copyright">
			&copy; 2023 연세대학교 빅데이터학회 Ybigta. All rights reserved.
		</span>
	</div>
	<ul class="contacts">
		<ContactIcon href="https://www.youtube.com/channel/UCRcHg9Ch34qikQi1xcnT8fw">
			<i slot="icon" class="bi bi-youtube" />
		</ContactIcon>
		<ContactIcon href="https://www.instagram.com/yonsei_ybigta">
			<i slot="icon" class="bi bi-instagram" />
		</ContactIcon>
		<ContactIcon href="https://www.facebook.com/yonseibigdata">
			<i slot="icon" class="bi bi-facebook" />
		</ContactIcon>
		<ContactIcon href="https://github.com/YBIGTA">
			<i slot="icon" class="bi bi-github" />
		</ContactIcon>
		<ContactIcon href="http://pf.kakao.com/_KxcxkBK">
			<KakaoLogo slot="icon" />
		</ContactIcon>
		<ContactIcon href="mailto:yonseibigdata@gmail.com">
			<i slot="icon" class="bi bi-envelope-fill" />
		</ContactIcon>
	</ul>
</footer>

<style lang="scss">
	footer {
		width: 100%;
		background-color: var(--color-footer-background);
		color: var(--color-title);
		border-top: 1px solid var(--color-border);

		padding: 3rem var(--horiz-padding-main);

		display: flex;
		flex-wrap: wrap-reverse;
		justify-content: space-between;
		align-items: center;
		gap: 2rem;
	}

	.logo-container {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.75rem;

		.logo {
			font-family: 'FacebookLetterFaces', sans-serif;
			font-size: 2rem;
		}

		.copyright {
			font-size: 0.8rem;
		}
	}

	ul {
		display: flex;
		align-items: center;
		font-size: 1.25rem;
		gap: 1.5rem;
	}
</style>
