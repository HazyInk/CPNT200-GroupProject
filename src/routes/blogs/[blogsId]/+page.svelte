<script>
  export let data
  let { Blog_Post_Self } = data
  let { Blog_Post } = data
</script>

{#each Blog_Post as Blog_Post}
<div class="text">
  <!--Returns the user back to home page using the link /-->
  <a href="/">
    <h1>{Blog_Post.title}</h1>
    <h2>{Blog_Post.Author}</h2>
    <h2>Published on: {Blog_Post.published_date}</h2>
      {Blog_Post.content_area}
      <h2>Summary:</h2>
      <p>{Blog_Post.summary}</p>
      <h2>Tags:</h2>
      <p>{Blog_Post.blog_tags}</p>
  </a>
</div>
{/each}

{#each Blog_Post_Self as blogself }
  <a href="/">
  <h1>{blogself.name}</h1>
  </a>
  
{/each }




<style>
a {
  color: black;

  text-decoration: none;
}
a:hover {
  color: rgb(45, 59, 139);
}

a:focus {
  color: rgb(65, 90, 237);
}

.text {
  font-family: 'Nova Square', sans-serif;

  padding-top: 5rem;
  padding-left: 10rem;
  padding-right: 10rem;
  padding-bottom: 5rem;

  text-align: center;
  text-decoration: none;
}
</style>