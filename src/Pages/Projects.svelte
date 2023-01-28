<script>

    import { fade, fly } from "svelte/transition";

</script>
<div class="home" in:fade={{ delay: 400 }} out:fly={{ x: -1500, opacity: 100 }}>
    <div class="title">
        <h1 class="cool-text">Projects</h1>
    </div>

</div>

<style>
    .title{
        width: fit-content;
        margin-left: auto;
        margin-right: auto;
    }
</style>