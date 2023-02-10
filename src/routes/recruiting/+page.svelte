<script>
	import Seo from '$lib/layout/Seo.svelte';
	import PageSection from '$lib/layout/PageSection.svelte';
	import PageTitle from '$lib/layout/PageTitle.svelte';
	import RecruitingProcess from './components/RecruitingProcess.svelte';
	import Requisites from './components/Requisites.svelte';
	import FAQ from './components/FAQ.svelte';
	import ApplySection from './components/ApplySection.svelte';
</script>

<Seo title="Recruiting" />
<PageTitle>
	Recruiting
	<img src="/images/recruiting.jpeg" alt="recruiting" slot="image" />
</PageTitle>
<PageSection>
	<h3 slot="title">지원 자격</h3>
	<Requisites slot="content" />
</PageSection>
<PageSection>
	<span slot="title">Process</span>
	<RecruitingProcess slot="content" />
</PageSection>
<PageSection>
	<span slot="title">FAQ</span>
	<FAQ slot="content" />
</PageSection>
<div class="placeholder" />

<!-- <ApplySection /> -->
<style lang="scss">
	img {
		width: 100%;
		height: 400px;
		object-fit: cover;
	}

	.apply-section {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 2rem;
		padding: 4rem 3rem 4rem 3rem;
		background-color: aliceblue;

		h6 {
			font-size: 2rem;
			font-weight: 700;
		}

		button {
			width: 200px;
			height: 50px;
			border: none;
			border-radius: 8px;
			background-color: black;
			color: white;
			font-size: 1.2rem;
			font-weight: 500;
			cursor: pointer;
		}
	}

	div.placeholder {
		width: 100%;
		height: 2rem;
	}
</style>
