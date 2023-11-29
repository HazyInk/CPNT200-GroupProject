<img id = "hero" src="personal.png" alt="alt">

<div class="maintext">
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</div>


<script>
  export let data;
  let { Blog_Post } = data;
</script>

<div class="maintext">
{#each data.Blog_Post as Blog_Post}
    <h1>{Blog_Post.Author}
    </h1>
  {/each}
</div>

<style>
  .maintext {
    text-align: center;
  }
  img {
    border-radius: 1rem;
    height: 500px;
    width: 1450px;
  }
</style>