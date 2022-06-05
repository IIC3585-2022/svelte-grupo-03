<script lang="ts">
  import { Link } from 'svelte-routing';
</script>

<nav>
  <Link to="/">Home</Link>
  <Link to="/dad-jks">Dad Jokes</Link>
  <Link to="/foaas">F-Off</Link>
  <Link to="/geek-jks">Geek</Link>
  <Link to="/favourites">Favourites</Link>
</nav>

<style>
  nav {
    height: 1.5em;
    width: 100%;
    color: white;
    display: flex;
    max-width: 100%;
    max-height: 6rem;
    min-height: 3rem;
    background-color: black;
  }

  :global(a) {
    height: 100%;
    flex-grow: 1;
    display: flex;
    color: white;
    max-width: 15ch;
    font-weight: bold;
    padding: 0 0.125rem;
    align-items: center;
    text-decoration: none;
    justify-content: center;
  }

  :global(a):hover {
    text-decoration: none;
    background-color: var(--accent);
  }
</style>
