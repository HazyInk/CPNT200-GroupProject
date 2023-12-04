<script>
  export let data

  let { Blog_Post_Self } = data
</script>

{#each Blog_Post_Self as selfblog }
<div class="text">
  <a href="/">
    <h1>{selfblog.title_who}</h1>
    <h2>{selfblog.name}</h2>
    <h2>{selfblog.released}</h2>
    <div>
      <p>
        {selfblog.about}
      </p>
      <h3>Tags:{selfblog.skills}</h3>
    </div>


  </a>
</div>
{/each}





<style>
a {
  text-decoration: none;
  color: black;
}
a:hover {
  color: rgb(45, 59, 139);
}

a:focus {
  color: rgb(65, 90, 237);
}

.text {
  font-family: 'Nova Square', sans-serif;

  padding-top: 10rem;
  padding-left: 10rem;
  padding-right: 10rem;
  padding-bottom: 10rem;

  text-align: center;
  text-decoration: none;
}
</style>