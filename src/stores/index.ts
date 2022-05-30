import { writable } from 'svelte/store';
import type { Content } from '../interfaces/joke';

const jokeArray = writable<Array<Content>>([]);
const maxJokeId = writable(0);

export const postJoke = (joke) => {
    joke.id = getNewId();
    jokeArray.update((jokes) => {
        return [...jokes, joke];
    });
};

export const clearJokes = () => {
    jokeArray.set([]);
};

export const deleteJoke = (id) => {
    jokeArray.update((jokes) => {
        return jokes.filter(joke => joke.id !== id);
    });
}

const getNewId = () => {
    maxJokeId.update((id) => {
        return id + 1;
    });
    return maxJokeId;
};

export default jokeArray;
