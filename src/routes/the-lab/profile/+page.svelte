<script>
    import {userStore} from "../../../stores";
    import {goto} from "$app/navigation"
    import { onMount } from "svelte";
    let user;
    onMount(()=>{
        userStore.subscribe(val =>{
            if(val != 0){
                user = val
            }
            else{
                //Lier, you haven't logged in
                goto("/the-lab")
            }
        })
    })
    </script>

<h1>So you've been logged in.</h1>