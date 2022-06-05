<script lang="ts">
  export let handleClick: Function;
</script>

<button on:click={() => handleClick()}> Añadir a favoritos </button>

<style>
  button {
    color: gold;
    background-color: transparent;
    border: 2px solid gold;
    transition: background-color 100ms linear;
  }

  button:active {
    background-color: #fcfcfc;
  }
</style>
