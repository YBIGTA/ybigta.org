<script>
	import Seo from '$lib/layout/Seo.svelte';
	import PageSection from '$lib/layout/PageSection.svelte';
	import PageTitle from '$lib/layout/PageTitle.svelte';
	import RecruitingProcess from './components/RecruitingProcess.svelte';
	import Requisites from './components/Requisites.svelte';
	import FAQ from './components/FAQ.svelte';
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

<style lang="scss">
	img {
		width: 100%;
		height: 400px;
		object-fit: cover;
	}
	div.placeholder {
		width: 100%;
		height: 100px;
	}
</style>
