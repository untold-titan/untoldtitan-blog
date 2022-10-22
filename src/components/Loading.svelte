<script>
    import { onMount } from "svelte";
    import * as THREE from "three";

    let canvas = {};

    onMount(() => {
        const cam = new THREE.PerspectiveCamera(70,1,0.01,1000);
        const scene = new THREE.Scene();
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true
        })

        cam.position.z = 30

        const ring1 = new THREE.Mesh(new THREE.TorusGeometry(15, 1, 15, 30,4.6),new THREE.MeshBasicMaterial({wireframe:true, color: 0x7DE5ED}));
        const ring2 = new THREE.Mesh(new THREE.TorusGeometry(10, 1, 15, 30,4.6),new THREE.MeshBasicMaterial({wireframe:true, color: 0x81C6E8}));
        const ring3 = new THREE.Mesh(new THREE.TorusGeometry(5, 1, 15, 30,4.6),new THREE.MeshBasicMaterial({wireframe:true, color: 0x5DA7DB}));
        const ball = new THREE.Mesh(new THREE.SphereGeometry(2,20,20), new THREE.MeshBasicMaterial({wireframe: true, color: 0x5837D0}));
        scene.add(ball)
        scene.add(ring1)
        scene.add(ring2)
        scene.add(ring3)

        ring1.rotation.z += 1;
        ring2.rotation.z += 2;
        ring3.rotation.z += 3;

        function animate(){
            requestAnimationFrame(animate)

            //3D spin animation
            // ring1.rotation.y += 0.02;
            // ring2.rotation.y += 0.04;
            // ring3.rotation.y += 0.06;
            // ring1.rotation.x -= 0.02;
            // ring2.rotation.x -= 0.04;
            // ring3.rotation.x -= 0.06;
            // ball.rotation.y += 1;
            //2D spin animation
            ring1.rotation.z += 0.02 + Math.random()/100;
            ring2.rotation.z += 0.04 + Math.random()/100;
            ring3.rotation.z += 0.06 + Math.random()/100;

            renderer.render(scene,cam);
        }
        animate()
    });
</script>

<canvas bind:this={canvas} width="1000" height="1000"/>

<style>
    canvas {
        width: 150px;
        height: 150px;
    }
</style>
