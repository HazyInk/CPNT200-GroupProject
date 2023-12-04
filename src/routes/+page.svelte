<main>
<header>
  <section class="hero">
    <div class="hero-content">
      <h1>Blog Page Placeholder</h1>
    </div>
  </section>
</header>
</main>


<script>
  export let data;
  let { Blog_Post } = data;
  let { Blog_Post_Self } = data;

</script>

<div class="maintext">
{#each data.Blog_Post_Self as Blog_Self }
<div class="blog">
  <a href="/{Blog_Self.id}">
    <div class="title"><h1>Self Introduction</h1></div>
    <h2>{Blog_Self.name}</h2>
    <h3>Click Me for More</h3>
  </a>
</div>  
{/each}

{#each data.Blog_Post as Blog_Post}
<div class="blog">
  <!-- Links the blogpost to a different part using the ids of the blogpost-->
  <a href="/blogs/{Blog_Post.id}" class="flex flex-col p-4">
    <h1>Reviews</h1>
    <h2>{Blog_Post.title}</h2>
    <h2>{Blog_Post.Author}</h2>
    <h2>Published on: {Blog_Post.published_date}</h2>
      <h2>Summary:</h2>
      <p>{Blog_Post.summary}</p>
      <h2>Tags:</h2>
      <p>{Blog_Post.blog_tags}</p>
      <h3> Click Us For More</h3>
    </a>
      
    </div>
  {/each}



</div>
<style>
.blog {
  padding-top: 2rem;
  padding-left: 10rem;
  padding-right: 10rem;
  padding-bottom: 2rem;
}

.hero{
  color:#fff8eb;

  font-family: 'Nova Square', sans-serif;

  height: 400px;
  border-radius: 10px;
  
  text-align:center;
  background: url(../../static/placeholder.jpg);
  background-size:cover;
  background-position:center;
}

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

.hero-content{
  padding: 10rem;

  margin-inline:auto;
  font-size: x-large;
}

.maintext {
  font-family: 'Nova Square', sans-serif;

  text-align: center;
  text-decoration: none;
}

:global(body){
  background-color: rgb(243, 235, 255);
}
</style>