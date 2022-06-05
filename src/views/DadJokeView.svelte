<script lang="ts">
  import { getRandomDadJoke } from '../services';
  import { postJoke } from '../stores';

  import type { Content } from '../interfaces/joke';
  import { newContent } from '../helpers/joke';

  import JokeCard from '../components/JokeCard.svelte';
  import AddFavouriteButton from '../components/AddFavouriteButton.svelte';

  // export let location: Object;

  let joke: Content = { value: '' };
  let error: string;
  let aviso: string;

  const loadJoke = (): null => {
    joke.value = 'Loading...';
    error = '';
    aviso = '';
    getRandomDadJoke()
      .then((data) => {
        joke = newContent(data?.joke);
      })
      .catch((err) => {
        error = err.message;
      });
    return null;
  };

  const saveJoke = (): null => {
    if (joke?.value) {
      postJoke(joke);
      aviso = 'Joke added to favourites';
    } else {
      error = '*No joke to add to favourites';
    }
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
