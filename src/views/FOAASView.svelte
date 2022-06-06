<script setup lang="ts">
  import {
    getRandomOperation,
    getPreview,
    getSpecOperation } from "../services";
  import { postJoke } from "../stores";

  import type { Content, Operation, Field } from "../interfaces/joke";
  import { newContent, newField, newOperation } from "../helpers/joke";

  import FoaasCard from "../components/FoaasCard.svelte";
  import AddFavouriteButton from "../components/AddFavouriteButton.svelte";

  let joke: Content = { value: "" };
  let preview: Content = { value: "" };
  let operation = { fields: [], url: "" }
  let loading1: boolean = false;
  let loadingPreview = false;
  let loadedPreview = false;
  let myUrl = '';
  let inputs: HTMLCollectionOf<Element>;
  let from = '';

  const loadOperation = async () => {
    joke.value = '';
    from = '';
    loading1 = true;
    loadingPreview = true;
    await getRandomOperation()
      .then((data) => {
        let myFields = data?.fields.map(field =>{
          return newField(field.name, field.type, field.text)
        })
        operation = newOperation(data?.name, data?.url, myFields);
        console.log(operation);
        ;
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally( async () => {
        loading1 = false;
        await getPreview(operation.url).then(
          (data) => {
            console.log(data)
            preview.value = data?.message;
            console.log(preview.value)
          }
        ).catch((err) => {
          console.log(err.message);
        }).finally(() => {
          loadingPreview = false;
          loadedPreview = true;
        })
      })
  };

  const loadSpecOperation = async () => {
    joke.value = 'Loading your F-Off';
    myUrl = '/' + operation.url.split('/')[1];
    console.log(myUrl);
    inputs = document.getElementsByClassName('field-input')
    for (var i = 0; i < inputs.length; i++) {
      myUrl = myUrl + `/${inputs[i].value}`;
    }
    console.log(myUrl);
    getSpecOperation(myUrl).then((result) => {
      joke.value = result?.message;
      from = document.getElementById("From").value;
    }).catch((err) => {
      console.log(err.message);
    });
  };

  const saveFO = (): null => {
    postJoke(joke);
    return null;
  };
</script>

<!-- <main> -->
<h1>F-Off Generator</h1>
<div class="actions">
  <button on:click={ loadOperation }>Load Random F-off</button>
  <AddFavouriteButton handleClick={ saveFO } />
</div>
{#if loading1}
  <p>Loading...</p>
{/if}
{#each operation.fields as field}
  <div class="field">
    <p>{field?.name}:</p><input class="field-input" id={field.name}>
  </div>
{/each}
{#if loadingPreview}
  <p>Loading Preview...</p>
{/if}
{#if !loadingPreview}
  <p>{preview.value}</p>
{/if}
{#if loadedPreview}
  <button on:click={ loadSpecOperation }>Load your F-Off</button>
{/if}

<FoaasCard { joke } { from } />
<!-- </main> -->

<style>
  .field {
    display: flex;
    flex-direction: row;
    margin: 10px 0;
    align-items: center;
  }

  .field-input {
    margin: 0 0 0 10px;
  }
</style>