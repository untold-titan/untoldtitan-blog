<script>
  import { fly } from "svelte/transition";
    import Sidebar from "./Components/Sidebar.svelte";
    import Goals from "./Pages/Goals.svelte";
    import Projects from "./Pages/Projects.svelte";
  import {currentPage} from "./stores";

  let page = "Goals";
  currentPage.subscribe(value => {
    page = value;
  })
  let homepage = false;
</script>

<!-- #region Title Page -->
{#if homepage != true}
  <div class="title-main" out:fly={{ x: 1500, opacity: 100 }}>
    <div class="title">
      <div>
        <h1 class="name cool-text">Titan - Software Developer</h1>
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
  <Sidebar/>
{/if}
{#if homepage && page == "Goals"}
  <Goals/>
{/if}

{#if homepage && page == "Projects"}
  <Projects/>
{/if}
<style>
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
</style>
