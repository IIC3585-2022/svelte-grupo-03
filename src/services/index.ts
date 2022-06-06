import axios from "axios";


export async function getRandomGeekJoke() {
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

export async function getRandomOperation() {
  try {
    const { data } = await axios.get(`https://www.foaas.com/operations`);
    const operation = data[Math.floor(Math.random() * data.length)];
    return operation;
  } catch (error) {
    console.error(error);
  }
}

export async function getPreview(url: string){
  try {
    const { data } = await axios.get(`https://www.foaas.com${url}`);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getSpecOperation(url: string) {
  try {
      const { data } = await axios.get(`https://www.foaas.com${url}`)
      return data;
  } catch (error) {
    console.error(error);
  }
}
