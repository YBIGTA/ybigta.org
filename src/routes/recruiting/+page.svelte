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
<div class="container">
	<PageTitle>
		<span slot="title">Recruiting</span>
		<img src="/images/recruiting/cover.jpeg" alt="recruiting" slot="image" />
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
</div>
<div class="placeholder" />

<!-- <ApplySection /> -->
<style lang="scss">
	div.container {
		max-width: 1200px;
		margin: 0 auto;
	}
	img {
		width: 100%;
		aspect-ratio: 16 / 6;
		object-fit: cover;
	}

	div.placeholder {
		width: 100%;
		height: 2rem;
	}
</style>
