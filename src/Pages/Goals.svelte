<script>
    import { fade, fly } from "svelte/transition";
</script>

<div class="home" in:fade={{ delay: 400 }} out:fly={{ x: -1500, opacity: 100 }}>
    <div class="goals">
        <div class="goals-title">
            <h1 class="cool-text">Goals</h1>
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

<style>
    .hint-text {
        display: none;
    }
    .hint-hint:hover + .hint-text {
        display: block;
    }
    .hint {
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
</style>
