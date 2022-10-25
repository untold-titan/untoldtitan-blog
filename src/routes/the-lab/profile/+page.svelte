<script>
    import { userStore } from "../../../stores";
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    import Pocketbase from "pocketbase";
    import Experiment from "../../../components/Experiment.svelte"
    const client = new Pocketbase("https://cataclysmpocket.tech");
    let user = 0;
    userStore.subscribe((val) => {
        if (val != 0) {
            user = val;
            console.log(user);
        }
    });
    let experiments;
    let width;
    let ignore = false;
    onMount(() => {
        if (user == 0) {
            goto("/the-lab");
            console.error("You must be logged in to view this page!!");
        } else {
            //Get all experiments that are currently open
            client.records
            .getFullList("experiments", 200)
            .then((val) => {
                console.log("Retreived Experiments from Backend");
                    console.log(val);
                    experiments = val;
                })
                .catch((error) => {
                    console.warn("An error occured!");
                    console.warn(error);
                });
        }
        width = screen.width;
    });
</script>

{#if width < 640}
    {#if ignore == false}
        <p class="warning">
            You shouldn't be here. I'm currently working on the mobile version
            of The Lab, but currently it's functionality is very limited. If you
            don't care, feel free to continue, but be prepared for bugs, issues
            and weird page renders.
        </p>
        <div class="center">
            <button on:click={() => (ignore = true)}
                >I don't care, LET ME INNNN</button
            >
        </div>
    {/if}
{/if}
<!-- User must be logged in no matter WHAT. -->
{#if (user != 0 && width > 640) || (ignore == true && user != 0)}
    <div class="flex">
        <div class="profile secondary centerText">
            <img src="/profile.jpg" alt="profile" class="pfp" />
            <h1>{user.profile.name}</h1>
        </div>
        <div class="right-side">
            <h1>Open Experiments</h1>
            <div class="experiments">
                <Experiment/> 
                <Experiment/> 
                <Experiment/> 
                <Experiment/> 
            </div>
        </div>
    </div>
{/if}

<style>
    .experiments{
        display: flex;
        height: 35%;
        overflow-x: scroll;
    }

    .right-side {
        width: 80%;
        margin-left:30px;
    }

    .pfp {
        width: 80%;
        border-radius: 1000px;
    }

    h1 {
        margin-top: 15px;
        margin-bottom: 10px;
    }
    .centerText {
        text-align: center;
    }

    .flex {
        display: flex;
    }

    .secondary {
        padding-top: 10px;
        width: 15%;
        border: 0;
        border-top: 2px;
        border-color: grey;
        border-style: solid;
        height: calc(100vh - 82px);
    }

    .profile {
        width: 15%;
    }

    .warning {
        padding: 15px;
    }

    .care {
        margin-left: auto;
        margin-right: auto;
    }
</style>
