<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import * as view from "./views";
  import NavBar from "./components/NavBar.svelte";
</script>

<Router>
  <NavBar />
  <main>
    <Route path="/" component={view.TheWelcome} />
    <Route path="/dad-jks" component={view.DadJoke} />
    <Route path="/geek-jks" component={view.GeekJoke} />
    <Route path="/foaas" component={view.FOAAS} />
    <Route path="/favourites" component={view.Favourites} />
  </main>
</Router>

<style>
  @media (max-width: 640px) {
    main {
      max-width: none;
      margin: 0;
    }
  }
</style>
