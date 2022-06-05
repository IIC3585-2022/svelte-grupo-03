import { writable } from 'svelte/store';
import type { Content } from '../interfaces/joke';

const jokeArray = writable<Array<Content>>([]);
const maxJokeId = writable(0);

let latestId: number;


export const getLength = () => latestId + 1;

maxJokeId.subscribe((id) => {
    latestId = id;
})

export const postJoke = (joke: Content) => {
    joke.id = getNewId();
    jokeArray.update((jokes) => {
        return [...jokes, joke];
    });
    console.log(jokeArray);
};

export const clearJokes = () => {
    jokeArray.set([]);
};

export const deleteJoke = (id: number) => {
    jokeArray.update((jokes) => {
        return jokes.filter(joke => joke.id !== id);
    });
}

const getNewId = () => {
    maxJokeId.update((id) => {
        return id + 1;
    });
    return latestId;
};

export default jokeArray;
