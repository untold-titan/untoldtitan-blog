<script>  
    import { faker } from "@faker-js/faker";

    //Props
    export let title = "Blog Post Title";
    export let description = "One line of description";
    export let content = faker.lorem.paragraphs(10);

    let open = false;

    function openBlog() {
        open = true;
    }
    function closeBlog(){
        open = false;
    }
</script>

<button class="post tritary" on:click={openBlog}>
    <h2>{title}</h2>
    <p>{description}</p>
</button>

{#if open == true}
    <div class="content secondary">
        <button class="close" on:click={closeBlog}>X</button>
        <div class="overflow">
            {content}
        </div>
    </div>
{/if}

<style>
    .post {
        display: flex;
        margin-left: 5px;
        margin-right: 5px;
        border-top: 1px;
        border-bottom: 1px;
        border-color: darkgrey;
        border-width: 1px;
        border-style: solid none;
        width: calc(100% - 8px);
        height: 75px;
    }
    .content {
        position: absolute;
        top: 25%;
        left: 33%;
        width: 33%;
        height: 50%;
        padding: 40px;
    }
    .overflow {
        height: 100%;
        overflow-y: auto;
    }
    .close {
        width: 40px;
        height: 40px;
        position: absolute;
        right: 4px;
        top: 4px;
        border-radius: 15px;
    }
    h2 {
        margin-left: 10%;
    }
    p {
        margin-top: 20px;
        margin-left: auto;
        margin-right: auto;
    }
</style>
