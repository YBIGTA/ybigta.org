<script lang="ts">
	import * as THREE from 'three';
	import { onMount } from 'svelte';
	import { GLTFLoader, type GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
</script>

<section id="mission-section">
	<span class="first">Shape the Future of Data</span>
	<span class="second">with a Community of Enthusiasts</span>
</section>

<style>
	section {
		width: 100%;
		min-height: calc(100vh - 5rem);
		background-color: #316db2;
		padding: 8rem 3rem;
		position: relative;

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		gap: 1.5rem;

		color: white;
		font-weight: 600;
	}

	span {
		/* z-index: 10; */
	}

	.first {
		font-size: 4.25rem;
	}
	.second {
		font-size: 3rem;
	}
</style>
