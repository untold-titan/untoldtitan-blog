<script>
    import { goto } from "$app/navigation";
    import { userStore } from "../stores";
    import { onMount } from "svelte";
    let user = 0;
    let width;
    userStore.subscribe((value) => {
        if (value != 0) {
            user = value;
        }
    });

    onMount(() => {
        width = screen.width;
    });
</script>

<div class="secondary topbar">
    <div class="title">
        <h1>Titan</h1>
        <p>Software Developer</p>
    </div>
    <div class="nav">
        {#if width < 640}
            <button>Menu</button>
        {:else}
            <button on:click={() => goto("/")} class="topbar-buttons"
                >Home</button
            >
            <button on:click={() => goto("/blog")} class="topbar-buttons"
                >Blog</button
            >
            {#if user == 0}
                <button on:click={() => goto("/the-lab")} class="topbar-buttons"
                    >The Lab</button
                >
            {:else}
                <button
                    on:click={() => goto("/the-lab/profile")}
                    class="topbar-buttons">{user.profile.name}</button
                >
            {/if}
        {/if}
    </div>
</div>
<!-- This div is needed to space out the topbar. -->
<div class="topbar-spacer" />

<slot />

<!-- <div class="footer-spacer" /> -->

<!-- <div class="footer secondary">
    <p>This site was built with Svelte</p>
    <p>Designed with the help of my awesome friends!</p>
</div> -->
<style>
    /* The Global Theme */
    :global(.primary) {
        background-color: #038e96;
    }
    :global(.secondary) {
        background-color: #3c4048;
    }
    :global(.tritary) {
        background-color: #868686;
    }
    :global(.quad) {
        background-color: #eaeaea;
    }
    :global(.center) {
        margin-left: auto;
        margin-right: auto;
        width: fit-content;
    }
    /* :global(div) {
        color: #ffffff;
    } */
    /* From Spara's Headquarters Alt-Art. */

    /* Turns out theres a "User Agent Stylesheet" that ships with the browser. I need to override it */
    :global(body) {
        margin: 0;
        font-family: "Montserrat", sans-serif;
        color: #ffffff;
    }
    :global(h1) {
        margin: 0;
    }
    :global(p) {
        margin: 0;
    }
    :global(button) {
        padding: 7px 15px;
        border: 0;
        border-radius: 2px;
        background-color: #3d717c;
        color: #ffffff;
        font-family: "Montserrat", sans-serif;
    }

    /* Firefox */
    :global(*) {
        scrollbar-width: thin;
        scrollbar-color: #004a4e #dfe9eb;
    }

    /* Chrome, Edge and Safari */
    :global(*::-webkit-scrollbar) {
        width: 10px;
        width: 10px;
    }

    :global(*::-webkit-scrollbar-track) {
        border-radius: 5px;
        background-color: #888888;
    }

    :global(*::-webkit-scrollbar-track:hover) {
        background-color: #888888;
    }

    :global(*::-webkit-scrollbar-track:active) {
        background-color: #888888;
    }

    :global(*::-webkit-scrollbar-thumb) {
        border-radius: 6px;
        background-color: #004a4e;
    }

    :global(*::-webkit-scrollbar-thumb:hover) {
        background-color: #003f42;
    }

    :global(*::-webkit-scrollbar-thumb:active) {
        background-color: #003235;
    }

    .topbar-spacer {
        height: 70px;
    }

    /* Actual styles related to the topbar */
    .topbar {
        width: 100%;
        height: 70px;
        display: flex;
        position: fixed;
        top: 0;
    }

    .topbar-buttons {
        margin-right: 40px;
    }

    .title {
        padding-left: 15px;
        padding-top: 5px;
        padding-bottom: 5px;
    }

    .nav {
        margin-left: auto;
        margin-right: 1%;
        margin-top: 20px;
    }

    /* .footer {
        height: 75px;
        margin-top: 50px;
        padding-top: 35px;
        text-align: center;
        position: fixed;
        bottom: 0;
        width: 100%;
    } */
</style>
