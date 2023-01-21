<script>
  import { fade, fly } from "svelte/transition";

  let homepage = false;
</script>

<!-- #region Title Page -->
{#if homepage != true}
  <div class="title-main" out:fly={{ x: 1500, opacity: 100 }}>
    <div class="title">
      <div>
        <h1 class="name">Titan - Software Developer</h1>
      </div>
    </div>
    <div class="title">
      <button
        class="arrow-button"
        on:click={() => {
          homepage = true;
        }}
        ><img
          class="arrow-img"
          src="/arrow.png"
          alt="arrow pointing to the right"
        /></button
      >
    </div>
  </div>
{/if}
<!-- #endregion -->

{#if homepage}
  <div class="sidebar-opener" />
  <button class="sidebar-button">Menu</button>
  <div class="home" in:fade={{ delay: 400 }}>
    <div class="goals">
      <div class="goals-title">
        <h1>Goals</h1>
      </div>
      <p>To develop high quality software</p>
      <p>To leave a positive mark on those I work with</p>
      <p>To make most of my work open to the public</p>
      <p>Have fun doing it!</p>
      <div class="hint">
        <h3 class="hint-hint">Need a hint?</h3>
        <p class="hint-text">Hover over the right side...</p>
      </div>
    </div>
  </div>
{/if}

<style>
  .hint-text{
    display: none;
  }
  .hint-hint:hover + .hint-text{
    display: block;
  }
  .hint{
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    font-size: 15px;
    text-align: center;
    margin-top: 30px;
  }
  .goals-title {
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
  }
  .goals {
    width: fit-content;
    font-size: 25px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15%;
  }
  .home {
    width: 100%;
    height: 100vh;
  }
  .sidebar-opener:hover + .sidebar-button {
    display: block;
  }
  .sidebar-button:hover {
    display: block;
  }
  .sidebar-button {
    display: none;
    position: absolute;
    top: 45%;
    left: calc(100% - 150px);
    border-radius: 75px;
    width: 100px;
    height: 75px;
    font-size: 20px;
  }
  .sidebar-opener {
    position: absolute;
    left: calc(100% - 200px);
    width: 200px;
    height: 100vh;
  }
  .name:hover {
    background: linear-gradient(90deg, blue, #00ff00, blue, #00ff00);
    background-size: 300%, 100%;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    animation: gradient-ani 2s infinite linear;
  }

  @keyframes gradient-ani {
    0% {
      background-position: 0%, 0%;
    }
    100% {
      background-position: 100%, 0%;
    }
  }

  .title-main {
    margin-top: 25%;
  }
  .title {
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
  }
  .arrow-img {
    position: static;
    width: 50px;
  }

  @keyframes button-hover {
    from {
      width: 100px;
      height: 70px;
    }
    to {
      width: 120px;
      height: 90px;
    }
  }
  @keyframes button-unhover {
    to {
      width: 100px;
      height: 70px;
    }
    from {
      width: 120px;
      height: 90px;
    }
  }

  .arrow-button {
    width: 100px;
    height: 70px;
    animation-name: button-unhover;
    animation-duration: 0.75s;
  }

  .arrow-button:hover {
    width: 120px;
    height: 90px;
    animation-name: button-hover;
    animation-duration: 0.5s;
  }
</style>
