<script>
    import { goto } from "$app/navigation";
</script>

<div class="secondary topbar">
    <div class="title">
        <h1>Titan</h1>
        <p>Software Developer</p>
    </div>
    <div class="nav">
        <button on:click={() => goto("/")} class="topbar-buttons">Home</button>
        <button class="topbar-buttons">Who?</button>
        <button on:click={() => goto("/the-lab")} class="topbar-buttons">The Lab</button>
    </div>
</div>
<!-- This div is needed to space out the topbar. -->
<div class="topbar-spacer"/>

<slot />

<div class="footer-spacer"/>

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
        background-color: #3C4048;
    }
    :global(.tritary) {
        background-color: #868686;
    }
    :global(.quad) {
        background-color: #EAEAEA;
    }
    /* :global(div) {
        color: #ffffff;
    } */
    /* From Spara's Headquarters Alt-Art. */

    /* Turns out theres a "User Agent Stylesheet" that ships with the browser. I need to override it */
    :global(body) {
        margin: 0;
        font-family: "Montserrat", sans-serif;
        color: #FFFFFF;
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

    .topbar-spacer{
        height: 60px;
    }

    .footer-spacer{
        height: 75px;
    }

    /* Actual styles related to the topbar */
    .topbar {
        width: 100%;
        height: fit-content;
        display: flex;
        position: fixed;
        top: 0;
    }

    .topbar-buttons{
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

    .footer {
        height: 75px;
        margin-top: 50px;
        padding-top: 35px;
        text-align: center;
        position: fixed;
        bottom: 0;
        width: 100%;
    }
</style>
