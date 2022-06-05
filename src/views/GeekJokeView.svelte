<script lang="ts">
    import { getRandomGeekJoke } from "../services";

    import JokeCard from "../components/JokeCard.svelte";
    import AddFavouriteButton from "../components/AddFavouriteButton.svelte";

    // export let location: Object;

    let joke = "";

    function loadJoke() {
        joke = "Loading...";
        getRandomGeekJoke().then((data) => {
            joke = data.joke;
        });
    }
</script>

<!-- <main> -->
<h1>Random Geek Joke</h1>
<div class="actions">
    <button on:click={loadJoke}>Load Joke</button>
    <AddFavouriteButton handleClick={() => console.log("desu ne")} />
</div>
<JokeCard {joke} />
<!-- </main> -->
