<script>
    import { goto } from "$app/navigation";
    export let name = "Experiment Title";
    export let description = "A description";
    export let location = "/the-lab/experiments";

</script>

<div class="container secondary">
    <div class="button-cont center">
        <button on:click={goto(location)}>Take me there!</button>
    </div>
    <h1>{name}</h1>
    <p>{description}</p>
</div>

<style>
    h1 {
        padding-left: 30px;
    }

    p {
        padding-top: 10px;
        padding-left: 30px;
    }

    button {
        margin: 0;
    }

    .button-cont {
        position: relative;
        top: 225px;
    }

    .container {
        min-width: 500px;
        max-width: 500px;
        margin-right: 30px;
        margin-bottom: 5px;
        /* height: 40%;  - Inherited from container*/
        border-radius: 50px;
    }
</style>
