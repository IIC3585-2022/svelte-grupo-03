<script lang="ts">
  import { getRandomDadJoke } from "../services";
  import { postJoke } from "../stores";

  import type { Content } from "../interfaces/joke";
  import { newContent } from "../helpers/joke";

  import JokeCard from "../components/JokeCard.svelte";
  import AddFavouriteButton from "../components/AddFavouriteButton.svelte";

  // export let location: Object;

  let joke: Content = { value: "" };
  let error: string;
  let aviso: string;
  let loading: boolean = false;

  const loadJoke = (): null => {
    error = "";
    aviso = "";
    loading = true;
    joke = { value: "Loading..." };
    getRandomDadJoke()
      .then((data) => {
        joke = newContent(data?.joke, "Dad Joke");
      })
      .catch((err) => {
        error = err.message;
      })
      .finally(() => {
        loading = false;
      });
    return null;
  };

  const saveJoke = (): null => {
    if (joke?.value && !loading) {
      postJoke(joke);
      aviso = "Joke added to favourites";
    } else {
      error = "*No joke to add to favourites";
    }
    return null;
  };
</script>

<h1>Random Dad Joke</h1>
<div class="actions">
  <button on:click={loadJoke}>Load Joke</button>
  <AddFavouriteButton handleClick={saveJoke} />
</div>
<JokeCard {joke} />
