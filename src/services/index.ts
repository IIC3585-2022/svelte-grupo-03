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

export async function getRandomFO() {
  try {
    const getOperation = async () => {
      await axios.get(`https://www.foaas.com/operations`).then(
        response => {
          const operation = response.data[Math.floor(Math.random() * response.data.length)];
          return operation;
        }
      );
    }

    const getSpecOperation = async (operation) => {
      let myUrl = '';
      operation.fields?.forEach((field) => {
        myUrl += `/${field.text}`
      })
      await axios.get(`https://www.foaas.com${myUrl}`).then(
        response => {
          return response.data.message;
        }
      );
    }
  } catch (error) {
    console.error(error);
  }
}
