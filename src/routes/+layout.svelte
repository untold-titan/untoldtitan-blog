<div class="primaryB topbar">
    <div class="title">
        <h1>Titan</h1>
        <p>Software Developer</p>
    </div>
    <div class="nav">
        <button>Home</button>
        <button>Who?</button>
        <button>The Lab</button>
    </div>
</div>

<slot />

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
        margin-right: 40px;
        background-color: #3d717c;
        color: #ffffff;
    }

    /* Actual styles related to the topbar */
    .topbar {
        width: 100%;
        height: fit-content;
        display: flex;
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
</style>
