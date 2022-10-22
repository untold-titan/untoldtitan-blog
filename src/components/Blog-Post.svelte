<script>
    function clicked(){
        console.log("Clicked")
    }
</script>

<button class="post tritary" on:click={clicked}>
   <h2>Blog Post Title</h2>
   <p>One liner description</p>
</button>

<div class="content secondary">
    <button>X</button>
    Blog Post Content
</div>

<style>
    .post{
        display:flex;
        margin-left: 5px;
        margin-right: 5px;
        border-top: 1px;
        border-bottom: 1px;
        border-color: darkgrey;
        border-width: 1px;
        border-style: solid none;
        width:calc(100% - 8px);
        height: 75px;
    }
    .content{
        position: absolute;
        top: 25%;
        left: 33%;
        width: 33%;
        height:50%;

    }
    h2{
        margin-left: 10%;
    }
    p{
        margin-top:20px;
        margin-left: auto;
        margin-right: auto;
    }
</style>