<script>
  export let data

  let { Blog_Post_Self } = data
</script>

<div class="text">
{#each Blog_Post_Self as selfblog }
<a href="/">
  <h1>{selfblog.name}</h1>
</a>
  
{/each}
</div>

<style>
  a {
    text-decoration: none;
    color: black;
  }
  a:hover {
    color: rgb(45, 59, 139);
  }

  .text {
    text-align: center;
    font-family: 'Nova Square', sans-serif;
    text-decoration: none;
    padding-top: 2rem;
      padding-left: 10rem;
      padding-right: 10rem;
      padding-bottom: 25rem;
  }
</style>