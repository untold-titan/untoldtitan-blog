<script>
    import Post from "../../components/Blog-Post.svelte";

    onMount(() => {
    const client = new Pocketbase("https://cataclysmpocket.tech/");
    client.records
      .getFullList("posts", 200 /* batch size */, {
        sort: "-created",
      })
      .then((res) => {
        console.log(res);
        console.log(res[0]);
        posts = res;
      })
      .catch((err) => {
        console.log(err);
      });
  });
</script>

<h1>The Golb</h1>
<div class="posts secondary">
    <!-- Blog posts go here -->
    <Post/>
    <Post/>
    <Post/>
</div>

<style>
    .posts{
        margin-top:30px;
        padding-top: 4px;
        padding-bottom: 4px;
    }
    h1{
        text-align: center;
        margin-top: 50px;
    }

    p{
        margin-top: 15px;
        text-align:center;
    }
</style>