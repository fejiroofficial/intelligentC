const axios = require('axios');

export const createPost = async (title) => {
  try {
    const { data } = await axios.post('http://localhost:5000/newpost', { title });
    return data;
  } catch (error) {
    return error.response.data;
  }
};
