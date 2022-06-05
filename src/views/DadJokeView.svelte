<script lang="ts">
  import { getRandomDadJoke } from "../services";
  import { postJoke } from "../stores";

  import type { Content } from "../interfaces/joke";
  import { newContent } from "../helpers/joke";

  import JokeCard from "../components/JokeCard.svelte";
  import AddFavouriteButton from "../components/AddFavouriteButton.svelte";

  // export let location: Object;

  let joke: Content;

  const loadJoke = (): null => {
    getRandomDadJoke().then((data) => {
      joke = newContent(data?.joke);
    });
    return null;
  };

  const saveJoke = (): null => {
    postJoke(joke);
    return null;
  };
</script>

<!-- <main> -->
<h1>Random Dad Joke</h1>
<div class="actions">
  <button on:click={loadJoke}>Load Joke</button>
  <AddFavouriteButton handleClick={saveJoke} />
</div>
<JokeCard {joke} />
<!-- </main> -->
