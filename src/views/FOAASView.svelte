<script setup lang="ts">
  import { getRandomFO } from "../services";
  import JokeCard from "../components/JokeCard.svelte";
  import AddFavouriteButton from "../components/AddFavouriteButton.svelte";

  let joke = "";

  function loadFO() {
    joke = "Loading";
    getRandomFO().then((responses) => {
      console.log(responses);
      joke = responses.foaas.data.message;
    });
  }
</script>

<!-- <main> -->
<h1>F-Off Generator</h1>
<div class="actions">
  <button on:click={loadFO}>Load F-Off</button>
  <AddFavouriteButton handleClick={() => console.log("desu ne")} />
</div>
<JokeCard {joke} />
<!-- </main> -->
