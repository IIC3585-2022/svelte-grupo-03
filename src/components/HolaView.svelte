<script setup lang="ts">

  const hello: string = "hello";

</script>

<h1>{ hello }</h1>
<div class="actions">
  <button on:click={ loadFO }>Load F-Off</button>
</div>

<style scoped>
h1 {
  color: red;
}
</style>