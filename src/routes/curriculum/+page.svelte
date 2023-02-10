<script>
	import PageSection from '$lib/layout/PageSection.svelte';
	import PageTitle from '$lib/layout/PageTitle.svelte';
	import Seo from '$lib/layout/Seo.svelte';
</script>

<Seo
	title="Curriculum"
	desc="데이터에 대한 다양한 전문성을 갖추고, 이를 활용한 프로젝트를 진행합니다."
/>

<PageTitle>
	<span slot="title">Curriculum</span>
	<span slot="desc">
		데이터에 대한 다양한 경험과 전문성을 갖추고, 이를 활용하여 실제 프로젝트를 진행합니다.
	</span>
	<img src="/images/curriculum.jpeg" alt="curriculum" slot="image" />
</PageTitle>
<PageSection>
	<span slot="title">신입 회원</span>
	<span slot="desc">합격 이후 팀을 배정받기 전까지의 활동입니다.</span>
</PageSection>
<PageSection>
	<span slot="title">정규 회원</span>
	<span slot="desc">팀을 배정받은 이후의 활동입니다.</span>
</PageSection>
<div class="placeholder" />

<style>
	img {
		width: 100%;
		height: 400px;
		object-fit: cover;
		object-position: 50% 40%;
	}

	div.placeholder {
		height: 100px;
	}
</style>
