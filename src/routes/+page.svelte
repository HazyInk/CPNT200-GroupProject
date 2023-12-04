<main>
<header>
  <section class="hero">
    <div class="hero-content">
      <h1>Cpnt200-Blog</h1>
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
<section class="blogCard">
    <div class="title"><h1>Self Introduction</h1></div>
    <h2>{Blog_Self.name}</h2>
    <h2>{Blog_Self.quick_about}</h2>
    <h3>Click Me for More</h3>
  </section>
</a>
</div>  
{/each}

{#each data.Blog_Post as Blog_Post}
<div class="blog">
  <!-- Links the blogpost to a different part using the ids of the blogpost-->
  <a href="/blogs/{Blog_Post.id}" class="flex flex-col p-4">
    <section class="blogCard">
    <h1>Reviews</h1>
    <h2>{Blog_Post.title}</h2>
    <h2>{Blog_Post.Author}</h2>
    <h2>Published on: {Blog_Post.published_date}</h2>
      <h2>Summary:</h2>
      <p>{Blog_Post.summary}</p>
      <h2>Tags:</h2>
      <p>{Blog_Post.blog_tags}</p>
      <h3> Click Us For More</h3>
    </section>
    </a>
      
    </div>
    
  {/each}


  
  {#each data.Blog_Post_Self as Blog_Self }
  <div class="blog">
    <a href="/{Blog_Self.id}">
      <section class="blogCard">
      <div class="title"><h1>Self Introduction</h1></div>
      <h2>{Blog_Self.name}</h2>
      <h3>Click Me for More</h3>
    </section>
    </a>
  </div>  
  {/each}



</div>
<style>
  :global(body){
        background-color: rgb(243, 235, 255);
        margin: 0;
    }
    .blog {
      padding-top: 2rem;
      padding-left: 10rem;
      padding-right: 10rem;
      padding-bottom: 2rem;
      height: 100%;
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
  
  background: url(../../static/placeholder.jpg);
  
  text-align:center;
  background-size:cover;
  background-position:center;
  height: 400px;
  color:#fff8eb;
}
.hero-content{
  padding: 10rem;
  margin-inline:auto;
  font-size: x-large;
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
  .blogCard:hover {
    color: #BB6EC0;
    background-color: black;
  }

  .blogCard{
  max-width: 80ch;
  margin: auto;
  margin-top: .5rem;
  padding: 2rem;
  border-radius: 1rem;
  
  color: black;
  background-color: #BB6EC0;
  }
</style>