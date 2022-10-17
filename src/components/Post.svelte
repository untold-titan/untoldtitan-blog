<script>
    export let title = "Title go brrrr";
    export let body = "This is where blog posts go";
    export let imageURL = "/CursedTitan.png";
    export let linkText = "";
    export let linkURL = "";
</script>

<div>
    <img src={imageURL} alt="Cursed" />
    <h1>{title}</h1>
    <p>
        {body}
    </p>
    {#if linkText != "" && linkURL != ""}
        <a href={linkURL}>{linkText}</a>
    {/if}
</div>

<style>
    div {
        width: 30%;
        margin-left: 1.5%;
        margin-right: 1.5%;
        text-align: center;
    }
    img {
        width: 300px;
        height: 300px;
        border-radius: 50px;
        overflow: hidden;
    }
</style>
