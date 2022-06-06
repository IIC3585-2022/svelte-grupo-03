<script lang="ts">
  import jokeArray, { deleteJoke } from "../stores";
  import type { Content } from "../interfaces/joke";
  import JokeCard from "../components/JokeCard.svelte";

  // const jokesLength = getLength();
  let favouriteJokes: Array<Content>;
  let jokesLength: number;

  jokeArray.subscribe((jokes) => (favouriteJokes = jokes));

  jokeArray.subscribe((jokes) => (jokesLength = jokes.length));
  const sIfPlural = jokesLength === 1 ? "joke" : "jokes";
</script>

<h1>Favourites</h1>
<h3>
  You have <strong>{jokesLength}</strong>
  {sIfPlural} stored
</h3>
<div class="joke-vault">
  {#each favouriteJokes as joke (joke.id)}
    <div class="joke-section">
      <button on:click={() => deleteJoke(joke.id)}> Delete </button>
      <li>{joke.type}: <JokeCard {joke} /></li>
    </div>
  {/each}
</div>

<style>
  strong {
    color: slateblue;
  }

  .joke-vault {
    display: flex;
    flex-direction: column-reverse;
    margin: auto;
    overflow-y: scroll;
    width: 60ch;
  }

  .joke-section {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    margin: 1rem 0;
  }

  button {
    color: white;
    background-color: red;
    border: 2px solid;
    width: fit-content;
  }
</style>
