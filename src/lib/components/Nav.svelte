<script>
  const navItems = [
    {name: 'Home', href: "/"},
    {name:'Self Introductions', href:'#self-intros'},
    {name:'Reviews', href: '#reviews'}
  ];
</script>

<header>
  <div>
<svg fill="#ffffff" width="30px" height="30px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M172.2 226.8c-14.6-2.9-28.2 8.9-28.2 23.8V301c0 10.2 7.1 18.4 16.7 22 18.2 6.8 31.3 24.4 31.3 45 0 26.5-21.5 48-48 48s-48-21.5-48-48V120c0-13.3-10.7-24-24-24H24c-13.3 0-24 10.7-24 24v248c0 89.5 82.1 160.2 175 140.7 54.4-11.4 98.3-55.4 109.7-109.7 17.4-82.9-37-157.2-112.5-172.2zM209 0c-9.2-.5-17 6.8-17 16v31.6c0 8.5 6.6 15.5 15 15.9 129.4 7 233.4 112 240.9 241.5.5 8.4 7.5 15 15.9 15h32.1c9.2 0 16.5-7.8 16-17C503.4 139.8 372.2 8.6 209 0zm.3 96c-9.3-.7-17.3 6.7-17.3 16.1v32.1c0 8.4 6.5 15.3 14.8 15.9 76.8 6.3 138 68.2 144.9 145.2.8 8.3 7.6 14.7 15.9 14.7h32.2c9.3 0 16.8-8 16.1-17.3-8.4-110.1-96.5-198.2-206.6-206.7z"/></svg>
  </div>
  <nav>
    <ul>
      {#each navItems as {name, href}}
      <li><a {href}>{name}</a></li>
      {/each}
    </ul>
  </nav>
</header>

<style>
  header {
    background: #000000;

    font-family: 'Nova Square', sans-serif;

    height: 100%;
  
    display: flex;
    justify-content: space-between;
    text-align: end;
    align-items: center;
  }

  ul {
    text-decoration: none;
    display: flex;
    justify-content: space-around;
    list-style-type: none;
    margin-right: 1rem;
  }

li {
  color: #ffffff;

  padding-left: 2rem;

  font-size: 20px;
  font-style: bold;
  text-decoration: none;
}

a {
  color: #ffffff;

  padding: 0.5rem;

  font-style: none;
  text-decoration: none;
  font-style: bold;
}

  a:hover {
    color:#ffffff;
    background: #707070;

    border-radius: 5%;
  }

  svg {
    padding-left: 1rem;
  }

header {
  background: #000000;

  font-family: 'Nova Square', sans-serif;

  display: flex;
  justify-content: space-between;
  text-align: end;
  align-items: center;
}
</style>