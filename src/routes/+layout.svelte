<script>
    import { goto } from "$app/navigation";
</script>

<div class="primaryB topbar">
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

<slot />

<div class="footer primaryB">
    <p>This site was built with Svelte</p>
    <p>Designed with the help of my awesome friends!</p>
</div>

<style>
    /* The Global Theme */
    :global(.primaryB) {
        background-color: #1b3059;
    }
    :global(.secondaryB) {
        background-color: #395273;
    }
    :global(.primaryG) {
        background-color: #143840;
    }
    :global(.secondaryG) {
        background-color: #2d5949;
    }
    :global(.accent) {
        background-color: #f2e3c4;
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

    /* Actual styles related to the topbar */
    .topbar {
        width: 100%;
        height: fit-content;
        display: flex;
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
        height: 200px;
        margin-top: 50px;
        padding-top: 75px;
        text-align: center;
    }
</style>
