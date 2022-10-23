<script>
    import { userStore } from "../../../stores";
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    let user = 0;
    userStore.subscribe((val) => {
        if (val != 0) {
            user = val;
            console.log(user)
        }
    });
    onMount(() => {
        if(user == 0){
            goto("/the-lab")
        }
    });
</script>

{#if user != 0}
    <div class="flex">
        <div class="profile secondary centerText">
            <img src="/profile.jpg" alt="profile" class="pfp"/>
            <h1>{user.profile.name}</h1>
        </div>
        <div>
            Experiments go here
        </div>
    </div>
{/if}

<style>
    .pfp{
        width: 80%;
        border-radius: 1000px;
        
    }

    h1{
        margin-top: 15px;
    }
    .centerText{
        text-align: center;
    }

    .flex{
        display: flex;
    }

    .secondary{
        padding-top: 10px;
        width: 15%;
        border: 0;
        border-top: 2px;
        border-color: grey;
        border-style:solid;
        height: calc(100vh - 82px);
    }

    
</style>
