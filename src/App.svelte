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
    const camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.01,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ canvas: canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.append(renderer.domElement);

    //Will be needed to import ship
    // const loader = new GLTFLoader();
    // const dracoLoader = new DRACOLoader();
    // dracoLoader.setDecoderPath("/examples/jsm/libs/draco");
    // loader.setDRACOLoader(dracoLoader);
    // loader.load("/TestingCube.gltf", function (gltf) {
    //   scene.add(gltf.scene);
    // },(progress)=>{console.log(progress)},(error)=>{console.log(error)});

    const grid = new THREE.GridHelper(100, 100, 0x00ff00, 0x00ff00);
    scene.add(grid);

    camera.position.set(0, 2, 10);

    const ship = new THREE.Mesh(
      new THREE.BoxGeometry(1, 0.5, 2),
      new THREE.MeshBasicMaterial()
    );
    scene.add(ship);

    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);

    let w = false;
    let s = false;

    function keyDownHandler(e) {
      if (e.key == "w") {
        w = true;
      }
      if (e.key == "s") {
        s = true;
      }
    }

    function keyUpHandler(e) {
      if (e.key == "w") {
        w = false;
      }
      if (e.key == "s") {
        s = false;
      }
    }

    let acceleration = 0;


    let speed = .15;
    let accelerationForward = 0.007;
    let accelerationReverse = 0.005;
    let drag = 0.003;

    //Acceleration
    function movement(){
      if(w && acceleration < speed){
        acceleration += accelerationForward;
      }
      if(s && acceleration > -speed){
        acceleration -= accelerationReverse;
      }
      if(w != true && s != true){
        if(acceleration <= speed + 1 && acceleration >= 0){
          acceleration -= drag;
          if(acceleration < 0){
            acceleration = 0;
          }
        }
        if(acceleration >= -speed - 1 && acceleration <= 0 ){
          acceleration += drag;
          if(acceleration > 0){
            acceleration = 0;
          }
        }
      }
    }

    function animate() {
      movement()
      ship.position.z -= acceleration;
      //Parented Camera to Ship.
      camera.position.x = ship.position.x;
      camera.position.y = ship.position.y + 2;
      camera.position.z = ship.position.z + 10;
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();
    width = window.innerWidth;
    height = window.innerHeight;
  });
</script>

<canvas bind:this={canvas} {width} {height} />
