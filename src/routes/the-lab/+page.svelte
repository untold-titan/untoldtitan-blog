<script>
    import * as THREE from "three";
    import { onMount } from "svelte";
    import { FBXLoader } from "three/addons/loaders/FBXLoader.js";
    import Pocketbase from "pocketbase";
    import { userStore } from "../../stores";
    import {goto} from "$app/navigation"

    let username;
    let password;
    let passwordConfirm;
    let email;
    let errorText = "";
    let user = {};
    let loginStatus = 0; //0 - None, 1 - Sign up, 2 - Login
    let canvas;

    //ThreeJS
    onMount(() => {
        const camera = new THREE.PerspectiveCamera(70, 1, 0.01, 1000);
        const scene = new THREE.Scene();
        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            canvas: canvas,
        });

        camera.position.z = 10;
        let flask;
        const loader = new FBXLoader();
        loader.load(
            "/Flask.fbx",
            (obj) => {
                obj.traverse((child) => {
                    if (child.material) {
                        child.material = new THREE.MeshBasicMaterial({
                            wireframe: true,
                            color: 0x00ffff,
                        });
                    }
                });
                obj.scale.set(0.007, 0.007, 0.007);
                scene.add(obj);
                flask = obj;
            },
            undefined,
            (error) => {
                console.log(error);
            }
        );

        const sun = new THREE.DirectionalLight(0xffffff, 10);
        scene.add(sun);

        function animate() {
            if (flask != undefined) {
                flask.rotation.x += 0.01;
                flask.rotation.z -= 0.02;
            }
            requestAnimationFrame(animate);

            renderer.render(scene, camera);
        }

        animate();
    });
    //Pocketbase
    const client = new Pocketbase("https://cataclysmpocket.tech/");
    const signUp = () => {
        if (
            username != "" &&
            password != "" &&
            password == passwordConfirm &&
            email != ""
        ) {
            // create user
            client.users
                .create({
                    email: email,
                    password: password,
                    passwordConfirm: passwordConfirm,
                })
                .then((val) => {
                    console.log(val);
                    user = val;
                    client.records.update("profiles", user.profile.id, {
                        name: username,
                    });
                    client.users.requestVerification(user.email);
                    userStore.set(user);
                    goto("/the-lab/profile")
                })
                .catch((error) => {
                    console.log(error);
                    errorText = error;
                });
        }
    };

    const login = () => {
        client.users
            .authViaEmail(email, password)
            .then((yay) => {
                userStore.set(yay);
                goto("/the-lab/profile")
            })
            .catch((error) => {
                console.log(error);
                errorText = error;
            });
    };
</script>

<h1>The Lab</h1>
<div class="content">
    <p class="info">
        Welcome to The Lab. This is the experimental part of my website, and
        where I host/play with my experiments that I create. If you're
        interested in taking part, please create an account or log in!
    </p>
    <div class="secondary login-form">
        <div class="buttons">
            <button
                on:click={() => {
                    loginStatus = 1;
                }}>Sign Up</button
            >
            <button
                on:click={() => {
                    loginStatus = 2;
                }}>Login</button
            >
        </div>
        {#if loginStatus == 0}
            <div class="center">
                <canvas bind:this={canvas} width="1000" height="1000" />
            </div>
        {:else if loginStatus == 1}
            <div class="form">
                <h2>Sign Up</h2>
                <ul>
                    <li>
                        <p>Username</p>
                        <input type="text" bind:value={username} />
                    </li>
                    <li>
                        <p>Email</p>
                        <input type="email" bind:value={email} />
                    </li>
                    <li>
                        <p>Password</p>
                        <input type="password" bind:value={password} />
                    </li>
                    <li>
                        <p>Confirm Password</p>
                        <input type="password" bind:value={passwordConfirm} />
                    </li>
                    <li>
                        <button on:click={signUp}>Sign me UP!</button>
                    </li>
                </ul>
                <p class="error">{errorText}</p>
            </div>
        {:else if loginStatus == 2}
            <div class="form">
                <h2>Login</h2>
                <ul>
                    <li>
                        <p>Email</p>
                        <input type="email" bind:value={email} />
                    </li>
                    <li>
                        <p>Password</p>
                        <input type="password" bind:value={password} />
                    </li>
                    <li>
                        <button on:click={login}>Log me IN!</button>
                    </li>
                </ul>
                <p class="error">{errorText}</p>
            </div>
        {/if}
    </div>
</div>

<style>
    h1 {
        margin-top: 30px;
        text-align: center;
        font-size: 45px;
    }

    input {
        display: inline-block;
        border: 0;
        border-radius: 5px;
    }
    ul {
        padding: 0;
        list-style: none;
        width: fit-content;
        margin: 0 auto;
    }

    .center {
        width: fit-content;
        margin-left: auto;
        margin-right: auto;
    }

    canvas {
        width: 300px;
        height: 300px;
        margin-left: auto;
        margin-right: auto;
    }

    h2 {
        text-align: center;
    }

    li {
        margin-top: 15px;
    }

    button {
        margin: 0 30px;
    }

    .content {
        margin: 35px 300px;
    }

    .buttons {
        width: fit-content;
        margin: 35px auto;
    }

    .error {
        color: red;
        margin-top: 20px;
        text-align: center;
    }

    .login-form {
        width: 100%;
        height: 450px;
        padding-top: 1px;
        padding-bottom: 15px;
        margin-top: 30px;
        border-radius: 35px;
    }
    @media screen and (max-width: 640px){
        .content{
            margin: 35px 0px;
        }
        
        .info{
            padding: 15px;
        }
    }
</style>
