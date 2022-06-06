<script setup lang="ts">
  import { getRandomOperation } from "../services";
  import { getRandomFO } from "../services";
  import { postJoke } from "../stores";

  import type { Content, Operation, Field } from "../interfaces/joke";
  import { newContent, newField, newOperation } from "../helpers/joke";

  import JokeCard from "../components/JokeCard.svelte";
  import AddFavouriteButton from "../components/AddFavouriteButton.svelte";

  let joke: Content = { value: "" };
  let operation = { fields: [] }
  let loading1: boolean = false;
  let loaded1 = false;
  let loading2: Content = { value: "" };

  const loadOperation = async () => {
    loading1 = true;
    await getRandomOperation()
      .then((data) => {
        let myFields = data?.fields.map(field =>{
          return newField(field.name, field.type, field.text)
        })
        let operation = newOperation(data?.name, data?.url, myFields);
        console.log(operation);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        loading1 = false;
        loaded1 = true;
      });
  }

  const loadFO = (): null => {
    joke.value = "Loading..."
    getRandomFO().then((response) => {
      joke.value = "";
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
  <button on:click={ loadOperation }>Load F-Off</button>
  <AddFavouriteButton handleClick={ saveFO } />
</div>
{#if loading1}
  <p>Loading...</p>
{/if}
{#if loaded1}
  {#each operation.fields as field}
    <p>{field?.name}</p>
    {console.log(field.name)}
  {/each}
{/if}
<JokeCard { joke } />
<!-- </main> -->
