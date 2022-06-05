<script lang="ts">
  import type { Content } from '../interfaces/joke';
  import { getRandomDadJoke } from '../services';

  import JokeCard from '../components/JokeCard.svelte';
  import AddFavouriteButton from '../components/AddFavouriteButton.svelte';

  // export let location: Object;

  let joke = <Content>{};

  function loadJoke() {
    joke.value = 'Loading...';
    getRandomDadJoke().then((data) => {
      joke = data;
    });
  }
</script>

<!-- <main> -->
<h1>Random Dad Joke</h1>
<div class="actions">
  <button on:click={loadJoke}>Load Joke</button>
  <AddFavouriteButton handleClick={() => console.log('desu ne')} />
</div>
<JokeCard {joke} />
<!-- </main> -->
