<script>
  import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
  import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
  import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
  import * as THREE from "three";
  import { onMount } from "svelte";

  let canvas;
  let width = 1920;
  let height = 1080;

  onMount(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, window.innerWidth/window.innerHeight, 0.01, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvas });
    renderer.setSize(window.innerWidth,window.innerHeight);
    document.body.append(renderer.domElement);

    // const loader = new GLTFLoader();
    // const dracoLoader = new DRACOLoader();
    // dracoLoader.setDecoderPath("/examples/jsm/libs/draco");
    // loader.setDRACOLoader(dracoLoader);
    // loader.load("/TestingCube.gltf", function (gltf) {
    //   scene.add(gltf.scene);
    // },(progress)=>{console.log(progress)},(error)=>{console.log(error)});

    const grid = new THREE.GridHelper(100,100,0x0000FF, 0x00FF00)
    let controls = new OrbitControls(camera, renderer.domElement);
    
    scene.add(grid);
    
    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      controls.update();
    }
    animate();
    width = window.innerWidth;
    height = window.innerHeight;
  });
</script>

<canvas bind:this={canvas} width={width} height={height} />
