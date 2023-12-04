<script>
  const footerItems = [
  {name: 'Github', href: "https://github.com/HazyInk/CPNT200-GroupProject"},
  {name: 'Gitprojects', href: "https://github.com/users/HazyInk/projects/5"},
  {name: 'Googledocs', href: "https://docs.google.com/document/d/1R6fcox4HRMVbZqfHp--8djweU30OU-66LRDmomFtEIc/edit?usp=sharing"}
];
</script>
<section class="w-full bg-black h-12">
<footer>
  <iframe title="" src="https://calendar.google.com/calendar/embed?src=reillysheapaston%40gmail.com&ctz=America%2FEdmonton" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
<ul>
  {#each footerItems as {name, href}}
  <li><a {href}>{name}</a></li>
  {/each}
</ul>
<p>&copy;Ashkie, Reilly & Emily</p>
</footer>
</section>

<style>
iframe {
  border: #000000;

  padding: 2rem;
  border-radius: 20px;
  height: 200px;
  width: 300px;
}

footer {
  background-color: #000000;
  color: #ffff;

  font-family: 'Nova Square', sans-serif;
  
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
}

ul{
  display: flex;
  justify-self: flex-end;
  list-style-type: none;
}

li {
  padding: 1rem;
}

a {
  color: #ffff;

  padding: 0.4rem;
  border-radius: 5%;
}

a:hover{
  background: #000000;
  background: #707070;
}

footer {
  background-color: #000000;
  color: #ffff;

  font-family: 'Nova Square', sans-serif;

  width: 100%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
}
</style>