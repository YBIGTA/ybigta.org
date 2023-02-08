<script>
	export let href = '';
</script>

<li>
	<a {href} target="_blank" rel="noreferrer">
		<slot name="icon" />
	</a>
</li>
