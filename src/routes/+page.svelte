<!-- Home Page -->
<script>
  import Pocketbase from "pocketbase";
  import Post from "../components/Feed-Post.svelte";
  import { onMount } from "svelte";
  import * as THREE from "three";
  import Loading from "../components/Loading.svelte";
  let canvas;
  let width;
  let acknowledge = false;

  //three.js
  onMount(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, 300 / 300, 0.1, 1000); //FOV, Aspect Ratio, view frusturm. (what objs are visible)
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
    });
    const cone = new THREE.Mesh(
      new THREE.ConeGeometry(15, 15, 15),
      new THREE.MeshBasicMaterial({
        wireframe: true,
        color: 0x00ff00,
      })
    );
    const donut = new THREE.Mesh(
      new THREE.TorusGeometry(10, 5, 5, 5),
      new THREE.MeshBasicMaterial({
        wireframe: true,
        color: 0x00ffff,
      })
    );
    donut.position.setX(2);
    donut.position.setY(2);
    scene.add(cone);
    scene.add(donut);

    camera.position.setZ(30);

    function animate() {
      requestAnimationFrame(animate);
      cone.rotation.x += 0.01;
      cone.rotation.z += 0.02;
      cone.rotation.y += 0.03;
      donut.rotation.z += 0.03;
      donut.rotation.y += 0.02;
      donut.rotation.x += 0.03;
      
      renderer.render(scene, camera);
    }
    animate();
    width = screen.width;
  });
  let posts = [];
  //Pocketbase
  const client = new Pocketbase("https://cataclysmpocket.tech/");
  client.records
    .getFullList("posts", 200 /* batch size */, {
      sort: "-created",
    })
    .then((res) => {
      res.forEach((item) => {
        posts.push({
          title: item.title,
          body: item.body,
          imageURL: item.imageURL,
          linkText: item.linkText || "",
          linkURL: item.linkURL || "",
        });
      });
      posts = posts;
    })
    .catch((err) => {
      console.log(err);
    });
</script>

<head>
  <title>Titan's Blog</title>
</head>

{#if width < 640 && acknowledge == false}
  <div class="warning secondary">
    <p>
      Hey, just so you know, the mobile version of this site isn't complete yet,
      so expect to find bugs. If you notice anything you want fixed NOW, feel
      free to open an issue on github.
    </p>
    <div class="center">
      <button on:click={() => (acknowledge = true)}>Cool, thanks</button>
    </div>
  </div>
{/if}

<div class="main">
  <div class="flex">
    <h1 class="left">Do you like technology?</h1>
    <div class="container">
      <canvas bind:this={canvas} width="750" height="750" />
    </div>
  </div>
  <h2>If yes, then you'll like this site.</h2>
  <div class="spacer secondary">
    <h3>
      I'm Titan, and this is my humble site, where I write about things that
      interest me, in the wonderful world of tech.
    </h3>
    <h3>
      This site is where my blog/feed, experiments, and history are all located.
      Thank you for visiting, and let the experimentation commence!
    </h3>
    <h3>
      Also, this site is currently still under construction, so expect stupid
      things.
    </h3>
  </div>
  <h1>Recent Feed Posts</h1>
  <div class="flex secondary posts">
    {#if posts != 0}
      {#each posts as post}
        <Post {...post} />
      {/each}
    {:else}
      <div class="center">
        <Loading />
      </div>
    {/if}
  </div>
</div>

<style>
  h1 {
    margin-top: 125px;
    text-align: center;
    font-size: 50px;
  }

  h2 {
    text-align: center;
    font-size: 20px;
  }
  h3 {
    text-align: center;
    margin-top: 15px;
    font-size: 25px;
  }
  canvas {
    width: 300px;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
  }

  .warning {
    padding: 15px;
  }

  .spacer {
    margin: 75px 150px;
    padding: 30px 50px;
    border-radius: 35px;
  }

  .left {
    margin-left: 5%;
  }
  .flex {
    margin-top: 100px;
    display: flex;
  }
  .posts {
    padding: 30px 15px;
  }
  .container {
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
  }

  /* Media Queries */
  /* Mobile Devices */
  @media screen and (max-width: 640px) {
    .flex {
      display: block;
    }
    .spacer {
      border-radius: 0px;
      margin: 75px 0px;
    }
    .posts {
      padding: 35px 27px;
    }
  }
</style>
