<script>
  import Post from "../../components/Blog-Post.svelte";
  import Loading from "../../components/Loading.svelte";
  import Pocketbase from "pocketbase";
  import { onMount } from "svelte";

  let posts = [];
  onMount(() => {
    const client = new Pocketbase("https://cataclysmpocket.tech/");
    client.records
      .getFullList("blog_posts", 200 /* batch size */, {
        sort: "-created",
      })
      .then((res) => {
        res.forEach(item=>{
          posts.push({
            "title":item.title,
            "description":item.description,
            "content":item.content
          })
        })
        posts = posts;
      })
      .catch((err) => {
        console.log(err);
      });
  });
</script>

<h1>The Golb</h1>
<div class="posts secondary">
  {#if posts != 0}
    {#each posts as post}
      <Post {...post} />
    {/each}
  {:else}
    <div class="center">
      <Loading />
    </div>
  {/if}
</div>

<style>
  .posts {
    margin-top: 30px;
    padding-top: 4px;
    padding-bottom: 4px;
  }
  h1 {
    text-align: center;
    margin-top: 50px;
  }
</style>
