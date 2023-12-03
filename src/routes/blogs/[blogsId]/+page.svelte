<script>
  export let data
 
  let { Blog_Post } = data
</script>

{#each Blog_Post as Blog_Post}
<div class="text">
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


<style>
  a {
    text-decoration: none;
    color: black;
  }
  a:hover {
    color: rgb(132, 112, 169);
  }

  .text {
    text-align: center;
    font-family: 'Nova Square', sans-serif;
    text-decoration: none;
    padding-top: 2rem;
      padding-left: 10rem;
      padding-right: 10rem;
      padding-bottom: 2rem;
  }
</style>