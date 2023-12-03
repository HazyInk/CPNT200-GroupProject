<script>
  export let data
 
  let { Blog_Post } = data
</script>

{#each Blog_Post as Blog_Post}
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
{/each}