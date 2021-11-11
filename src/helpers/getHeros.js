const axios = require("axios");

export const getHeros = async (search) => {
  const baseUrl = `https://www.superheroapi.com/api.php/10225085271536820/search/${search}`;

  try {
    const data = await axios.get(baseUrl);
    return data;
  } catch (error) {
    console.log(error);
  }
};
