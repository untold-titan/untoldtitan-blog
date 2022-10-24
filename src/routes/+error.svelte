<script>
    import { onMount } from "svelte";
    import * as THREE from "three";
    import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
    import {page} from "$app/stores"
    let canvas;
    onMount(() =>{
        const camera = new THREE.PerspectiveCamera(70,screen.width/screen.height,0.001,1000);
        const scene = new THREE.Scene();
        const renderer = new THREE.WebGLRenderer({
            canvas:canvas,
        })

        // const controls = new OrbitControls(camera,renderer.domElement);

        camera.position.z = 10

        const tube = new THREE.Mesh(new THREE.TorusGeometry(30,25,75,75),new THREE.MeshBasicMaterial({color:0x00ffff, wireframe:true}))
        tube.rotation.x += 90;
        camera.rotation.x += 90;
        camera.rotation.y += 45;

        scene.add(tube)

        function animate(){
            tube.rotation.y += 0.002
            tube.rotation.z += 0.001
            // controls.update(camera)
            requestAnimationFrame(animate)
            renderer.render(scene,camera)
        }
        animate();
    })
</script>

<canvas bind:this={canvas} width="1920" height="1080"></canvas>

<div class="info">
    <h1>Welcome to the void.</h1>
    <p>You aren't supposed to be here.</p>
    <h2>Click one of the buttons above to get back on track</h2>
</div>

<style>
    canvas{
        width:100%;
        height:calc(100vh - 74px);
        z-index: 0;
    }

    .info{
        z-index: 1;
        position: absolute;
        left: 45%;
        top:500px;
        color:lightgrey;
        text-align: center;
    }
</style>