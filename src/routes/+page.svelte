<main>
<header>
  <section class="hero">
    <div class="hero-content">
      <h1>Blog Page Placeholder</h1>
    </div>
    <a href="https://github.com/HazyInk/CPNT200-GroupProject#readme" class="button">Button</a>
  </section>
</header>
</main>


<script>
  export let data;
  let { Blog_Post } = data;
  let { Blog_Post_Self } = data;

</script>

<div class="maintext">
{#each data.Blog_Post as Blog_Post}
<div class="blog">
  <!-- Links the blogpost to a different part using the ids of the blogpost-->
  <a href="/blogs/{Blog_Post.id}" class="flex flex-col p-4">
    <h1>{Blog_Post.title}</h1>
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

  
  {#each data.Blog_Post_Self as Blog_Self }
  <div class="blog">
    <a href="/{Blog_Self.id}">
      <div class="title"><h1>Self Introduction</h1></div>
      <h2>{Blog_Self.name}</h2>
      <h3>Click Me for More</h3>
    </a>
  </div>  
  {/each}



</div>
<style>
  :global(body){
        background-color: rgb(243, 235, 255);
    }
    .blog {
      padding-top: 2rem;
      padding-left: 10rem;
      padding-right: 10rem;
      padding-bottom: 2rem;
    }

  .button{
  border-radius: 10px;
  padding:10px;
  border-radius:10px;
  background: rgb(70,70,70);
background: linear-gradient(0deg, rgba(70,70,70,1) 0%, rgba(133,133,133,1) 53%, rgba(236,236,236,1) 100%);
  color:#ffffff;
  
  text-decoration:none;
  border-style: groove;
}
.button:hover {
  background: #ffffff;
  background: rgb(70,70,70);
background: linear-gradient(184deg, rgba(70,70,70,1) 0%, rgba(133,133,133,1) 53%, rgba(236,236,236,1) 100%);
  color: #ffffff;
}
  .hero{
    font-family: 'Nova Square', sans-serif;
  border-radius: 10px;
  background: url(placeholder.jpg);
  
  text-align:center;
  background-size:cover;
  background-position:center;
  height: 400px;
  color:#fff8eb;
}
.hero-content{
  padding: 5rem;
  margin-inline:auto;
}
  .maintext {
    text-align: center;
    font-family: 'Nova Square', sans-serif;
    text-decoration: none;
  }

  a {
    text-decoration: none;
    color: black;
  }
  a:hover {
    color: rgb(45, 59, 139);
  }
</style>