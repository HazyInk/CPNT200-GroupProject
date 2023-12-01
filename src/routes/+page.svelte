<main>
<header>
  <section class="hero">
    <div class="hero-content">
      <h1>Blog Page Placeholder</h1>
      <a href="" class="button">Button</a>
    </div>
  </section>
</header>

<div class="maintext">
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</div>
</main>


<script>
  export let data;
  let { Blog_Post } = data;
</script>

<div class="maintext">
{#each data.Blog_Post as Blog_Post}
    <h1>{Blog_Post.title}
    </h1>
    <h2>
      {Blog_Post.Author}
    </h2>
    <h2>Published on: {Blog_Post.published_date}</h2>
    <div>
      {Blog_Post.content_area}
    </div>
    <div>
      <h2>Summary</h2>
      <p>
        {Blog_Post.summary}
      </p>
    </div>
    <div>
      <h2>
        Tags:
      </h2>
      <p>
        {Blog_Post.blog_tags}
      </p>
    </div>
  {/each}
</div>

<style>
  :global(body){
        background-color: #fff2c4;
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
    font-family: 'DM Serif Display', serif;
  border-radius: 10px;
  background: url(placeholder.jpg);
  
  text-align:center;
  background-size:cover;
  background-position:center;
  height: 500px;
  color:#fff8eb;
}
.hero-content{
  padding:100px;
  margin-inline:auto;
}
  .maintext {
    text-align: center;
    font-family: 'DM Serif Display', serif;
  }
</style>