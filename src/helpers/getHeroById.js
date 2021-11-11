const axios = require("axios");

export const getHeroById = async (id) => {
  const baseUrl = `https://www.superheroapi.com/api.php/10225085271536820/${id}`;
  try {
    const data = await axios.get(baseUrl);
    return data;
  } catch (error) {
    console.log(error);
  }
};
