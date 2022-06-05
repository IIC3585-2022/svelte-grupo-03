<script setup lang="ts">
  import { getRandomFO } from "../services";
  import { postJoke } from "../stores";

  import type { Content } from "../interfaces/joke";
  import { newContent } from "../helpers/joke";

  import JokeCard from "../components/JokeCard.svelte";
  import AddFavouriteButton from "../components/AddFavouriteButton.svelte";

  let joke: Content;

  const loadFO = (): null => {
    getRandomFO().then((responses) => {
      joke = newContent("modificar el texto");
    });
    return null;
  };

  const saveFO = (): null => {
    postJoke(joke);
    return null;
  };
</script>

<!-- <main> -->
<h1>F-Off Generator</h1>
<div class="actions">
  <button on:click={loadFO}>Load F-Off</button>
  <AddFavouriteButton handleClick={saveFO} />
</div>
<JokeCard {joke} />
<!-- </main> -->
