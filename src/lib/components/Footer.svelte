<script>
  const footerItems = [
  {name: 'Github', href: "/"},
  {name: 'Gitprojects', href: "/"},
  {name: 'Googledocs', href: "/"}
];
</script>
<footer>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80236.93230320029!2d-114.24097500273436!3d51.06408939999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716f9268a69e81%3A0xb1db5e68bd61e28!2sSouthern%20Alberta%20Institute%20of%20Technology!5e0!3m2!1sen!2sca!4v1701280759048!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
  width: 200px;
}
footer {
  background-color: #000000;
  border-radius: 20px;
  width: 100%;
  color: #ffff;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-family: 'DM Serif Display', serif;
}
svg {
  stroke:#ffff;
  fill: #ffff;
}

svg:hover {
  fill: #ffff;
  stroke: #ffff;
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