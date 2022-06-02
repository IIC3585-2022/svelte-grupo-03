import axios from "axios";


export default async function getRandomGeekJoke() {
  try {
    const { data } = await axios.get(
      `https://geek-jokes.sameerkumar.website/api?format=json`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getRandomDadJoke() {
  try {
    const { data } = await axios.get("https://icanhazdadjoke.com/", {
      headers: { accept: "application/json" },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getRandomFO() {
  try {
    const { data } = await axios.get(`https://www.foaas.com/operations`);
    const operation = data[Math.floor(Math.random() * data.length)];
    const foaas = await axios.get(`https://www.foaas.com${operation.url}`);
    [...operation.fields.keys()].forEach((key) => {
      operation.fields[key].text = ":" + operation.fields[key].field;
    });
    console.log(operation);
    console.log(foaas);
    return { foaas: foaas, operation: operation };
  } catch (error) {
    console.error(error);
  }
}
