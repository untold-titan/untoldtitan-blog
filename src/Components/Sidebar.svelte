<script>
  import { slide } from "svelte/transition";
  import {currentPage} from "../stores";
  let sidebarOpen = false;
  function close(){
    sidebarOpen = false;
  }
</script>

<div class="sidebar-opener" />
<button
  class="sidebar-button"
  on:click={() => {
    sidebarOpen = !sidebarOpen;
  }}>Menu</button
>
{#if sidebarOpen}
  <div class="sidebar" transition:slide>
    <button
      class="close"
      on:click={() => {
        sidebarOpen = !sidebarOpen;
      }}>X</button
    >
    <div class="pages">
      <div class="buttons">
        <button on:click={() => {currentPage.set("Goals"); close()}} class="nav-button">Goals</button>
        <button on:click={() => {currentPage.set("Projects"); close()}} class="nav-button">Projects</button>
        <button on:click={() => {currentPage.set("Blog"); close()}} class="nav-button">Blog</button>
        <button on:click={() => {currentPage.set("Contact"); close()}} class="nav-button">Contact</button>
      </div>
      <p>More pages coming soon</p>
    </div>
    <div class="socials">
      <a href="https://github.com/untold-titan/"
        ><img alt="GitHub Logo" src="/GitHub.png" /></a
      >
      <a href="https://discord.gg/Muaepz4u9G"
        ><img alt="Discord Logo" src="/Discord.png" /></a
      >
    </div>
  </div>
{/if}

<style>
  p {
    font-size: 20px;
    margin-top: 50px;
    text-align: center;
  }
  a {
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
  }
  .buttons{
    width: 300px;
    margin-left: auto;
    margin-right: auto;
  }
  .pages{
    margin-top: 100px;
  }
  .nav-button{
    margin-top: 30px;
    width: 300px;
    height: 40px;
    animation: none;
  }
  .nav-button:hover{
    width:300px;
    height: 40px;
  }
  .socials {
    display: flex;
    width: 400px;
    position: absolute;
    margin-bottom: 30px;
    bottom: 0;
  }
  img {
    width: 50px;
    height: 50px;
  }
  .close {
    font-size: 30px;
    align-self: flex-end;
    background-color: #1e1e1e;
  }
  .sidebar {
    position: absolute;
    right: 0px;
    width: 400px;
    height: 100vh;
    background-color: #1e1e1e;
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
    right: 50px;
    border-radius: 75px;
    font-size: 20px;
  }
  .sidebar-opener {
    position: absolute;
    left: calc(100% - 200px);
    width: 200px;
    height: 100vh;
  }
</style>
