<script lang="ts">
	// import * as THREE from 'three';
	// import { onMount } from 'svelte';
	// import { GLTFLoader, type GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';

	// const CanvasId = 'logo-canvas';

	// onMount(() => {
	// 	const canvas = document.getElementById(CanvasId);
	// 	if (!canvas) return;

	// 	const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
	// 	renderer.setSize(window.innerWidth, window.innerHeight - 80);

	// 	const camera = new THREE.PerspectiveCamera(
	// 		45,
	// 		window.innerWidth / (window.innerHeight - 80),
	// 		1,
	// 		1000
	// 	);
	// 	camera.position.set(0, 3, 48);

	// 	const scene = new THREE.Scene();
	// 	// scene.background = new THREE.Color(0x316db2);
	// 	const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
	// 	ambientLight.castShadow = true;
	// 	scene.add(ambientLight);
	// 	const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
	// 	directionalLight.position.set(0, 32, 64);
	// 	scene.add(directionalLight);

	// 	let loadedModel: GLTF;
	// 	const loader = new GLTFLoader();
	// 	loader.load('/models/shiba/scene.gltf', (gltf) => {
	// 		loadedModel = gltf;
	// 		scene.add(loadedModel.scene);
	// 		loadedModel.scene.scale.set(10, 10, 10);
	// 		loadedModel.scene.position.set(0, 0, 0);
	// 		// loadedModel.scene.rotation.set(0, 0, 0);
	// 	});

	// 	function onWindowResize() {
	// 		camera.aspect = window.innerWidth / (window.innerHeight - 80);
	// 		camera.updateProjectionMatrix();
	// 		renderer.setSize(window.innerWidth, window.innerHeight - 80);
	// 	}
	// 	window.addEventListener('resize', onWindowResize, false);

	// 	function animate() {
	// 		requestAnimationFrame(animate);
	// 		renderer.render(scene, camera);
	// 	}
	// 	animate();
	// });
</script>

<section id="mission-section">
	<span class="first">Shape the Future of Data</span>
	<span class="second">with a Community of Enthusiasts</span>
	<!-- <canvas id={CanvasId} /> -->
</section>

<style>
	section {
		width: 100%;
		min-height: var(--min-height-main);
		padding: 8rem var(--horiz-padding-main);
		position: relative;

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		gap: 1.5rem;

		color: var(--color-title);
		font-weight: 600;

		background: url('/icons/logo.svg');
		background-repeat: no-repeat;
		background-position: center 70%;
		background-size: min(60%, 30rem);
	}

	canvas {
		position: absolute;
		top: 0;
		left: 0;
	}

	span {
		z-index: 10;
	}

	.first {
		font-size: 4.25rem;
	}
	.second {
		font-size: 3rem;
	}
</style>
