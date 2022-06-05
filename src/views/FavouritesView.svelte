<script lang="ts">
  import jokeArray, { getLength, deleteJoke } from "../stores";

  import type { Content } from "../interfaces/joke";

  import JokeCard from "../components/JokeCard.svelte";

  const jokesLength = getLength();
  const sIfPlural = jokesLength === 1 ? "joke" : "jokes";
  let favouriteJokes: Array<Content>;

  jokeArray.subscribe((jokes) => (favouriteJokes = jokes));
</script>

<h1>Favourites</h1>
<h3>
  You have <strong>{{ jokesLength }}</strong>
  {{ sIfPlural }} stored
</h3>
<div class="joke-vault">
  {#each favouriteJokes as joke (joke.id)}
    <button on:click={() => deleteJoke(joke.id)}> Delete </button>
    <li>{joke.type}: <JokeCard {joke} /></li>
  {/each}
</div>

<style scoped>
  strong {
    color: slateblue;
  }

  .joke-vault {
    /* border: 1px solid lightgray;
    border-radius: 8px; */
    display: flex;
    flex-direction: column-reverse;
    margin: auto;
    overflow-y: scroll;
    width: 60ch;
  }

  button {
    color: white;
    background-color: red;
    border: 2px solid;
    width: fit-content;
  }
</style>
