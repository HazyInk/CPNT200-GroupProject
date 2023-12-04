<script>
  const footerItems = [
  {name: 'Github', href: "https://github.com/HazyInk/CPNT200-GroupProject"},
  {name: 'Gitprojects', href: "https://github.com/users/HazyInk/projects/5"},
  {name: 'Googledocs', href: "https://docs.google.com/document/d/1R6fcox4HRMVbZqfHp--8djweU30OU-66LRDmomFtEIc/edit?usp=sharing"}
];
</script>
<footer>
  <iframe title="" src="https://calendar.google.com/calendar/embed?src=reillysheapaston%40gmail.com&ctz=America%2FEdmonton" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
<ul>
  {#each footerItems as {name, href}}
  <li><a {href}>{name}</a></li>
  {/each}
</ul>
<p>&copy;Ashkie, Reilly & Emily</p>
</footer>

<style>
iframe {
  padding: 2rem;
  border: #000000;
  border-radius: 20px;
  height: 200px;
  width: 300px;
}
footer {
  background-color: #000000;
  border-radius: 20px;
  width: 100%;
  color: #ffff;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-family: 'Nova Square', sans-serif;
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
  list-style-type: none;
  text-decoration: none;
  color: #ffff;
  padding: 0.4rem;
  border-radius: 20%;
}

a:hover{
  background: #000000;
  background: #707070;
}
</style>