import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Stats from 'three/examples/jsm/libs/stats.module';

export default class SceneInit {
	scene: THREE.Scene | undefined;
	private camera: THREE.PerspectiveCamera | undefined;
	private renderer: THREE.Renderer | undefined;
	private fov: number;
	private nearPlane: number;
	private farPlane: number;
	private canvasId: string;
	private clock: THREE.Clock | undefined;
	private stats: Stats | undefined;
	private controls: OrbitControls | undefined;
	private ambientLight: THREE.AmbientLight | undefined;
	private directionalLight: THREE.DirectionalLight | undefined;

	constructor(canvasId: string) {
		// NOTE: Core components to initialize Three.js app.
		this.scene = undefined;
		this.camera = undefined;
		this.renderer = undefined;

		// NOTE: Camera params;
		this.fov = 45;
		this.nearPlane = 1;
		this.farPlane = 1000;
		this.canvasId = canvasId;

		// NOTE: Additional components.
		this.clock = undefined;
		this.stats = undefined;
		this.controls = undefined;

		// NOTE: Lighting is basically required.
		this.ambientLight = undefined;
		this.directionalLight = undefined;
	}

	initialize() {
		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera(
			this.fov,
			window.innerWidth / window.innerHeight,
			1,
			1000
		);
		this.camera.position.z = 48;

		// NOTE: Specify a canvas which is already created in the HTML.
		const canvas = document.getElementById(this.canvasId);
		if (!canvas) throw new Error('Canvas not found!');

		this.renderer = new THREE.WebGLRenderer({
			canvas,
			// NOTE: Anti-aliasing smooths out the edges.
			antialias: true
		});
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		// this.renderer.shadowMap.enabled = true;
		document.body.appendChild(this.renderer.domElement);

		this.clock = new THREE.Clock();
		this.controls = new OrbitControls(this.camera, this.renderer.domElement);
		this.stats = Stats();
		document.body.appendChild(this.stats.dom);

		// ambient light which is for the whole scene
		this.ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
		this.ambientLight.castShadow = true;
		this.scene.add(this.ambientLight);

		// directional light - parallel sun rays
		this.directionalLight = new THREE.DirectionalLight(0xffffff, 2);
		// this.directionalLight.castShadow = true;
		this.directionalLight.position.set(0, 32, 64);
		this.scene.add(this.directionalLight);

		// if window resizes
		window.addEventListener('resize', () => this.onWindowResize(), false);

		// NOTE: Load space background.
		// this.loader = new THREE.TextureLoader();
		// this.scene.background = this.loader.load('./pics/space.jpeg');

		// NOTE: Declare uniforms to pass into glsl shaders.
		// this.uniforms = {
		//   u_time: { type: 'f', value: 1.0 },
		//   colorB: { type: 'vec3', value: new THREE.Color(0xfff000) },
		//   colorA: { type: 'vec3', value: new THREE.Color(0xffffff) },
		// };
	}

	animate() {
		// NOTE: Window is implied.
		// requestAnimationFrame(this.animate.bind(this));
		window.requestAnimationFrame(this.animate.bind(this));
		this.render();
		this.stats?.update();
		this.controls?.update();
	}

	render() {
		// NOTE: Update uniform data on each render.
		// this.uniforms.u_time.value += this.clock.getDelta();
		if (!this.renderer || !this.scene || !this.camera) return;
		this.renderer.render(this.scene, this.camera);
	}

	onWindowResize() {
		if (!this.camera || !this.renderer) return;

		this.camera.aspect = window.innerWidth / window.innerHeight;
		this.camera.updateProjectionMatrix();
		this.renderer.setSize(window.innerWidth, window.innerHeight);
	}
}
