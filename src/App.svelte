<script>
  import { slide, fade } from "svelte/transition";

  let homepage = false;
</script>

{#if homepage != true}
  <div class="title">
    <div>
      <h1>Titan - Software Developer</h1>
    </div>
  </div>
  <div class="title">
    <button
      out:fade
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
{/if}
{#if homepage}
  <div in:fade={{ delay: 400 }}>
    <h1>Homepage</h1>
  </div>
{/if}

<style>
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
