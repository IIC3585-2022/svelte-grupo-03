<script lang="ts">
  import type { Content } from "../interfaces/joke";
  export let joke: Content;
  export let from: string;
</script>

<div class="joke-card">
  <p>
    <strong>{joke?.value || "Request a joke!"}</strong>
  </p>
  {#if from !== ""}
    <div>
      <p>{from}</p>
    </div>
  {/if}
</div>

<style>
  .joke-card {
    width: 40ch;
    margin: 1rem 0;
    color: #333;
    display: flex;
    padding: 1rem;
    border-radius: 4px;
    flex-direction: row;
    background-color: white;
    border: solid 1px lightgray;
    box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.2);
  }
</style>
