<script>
  export let data

  let { Blog_Post_Self } = data
</script>

{#each Blog_Post_Self as selfblog }
<a href="/">
  <h1>{selfblog.name}</h1>
</a>
  
{/each}