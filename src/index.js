const axios = require('axios');

async function getRandomFact(keyword) {
  try {
    const response = await axios.get(`https://api.example.com/facts?query=${keyword}`);
    console.log(`Fun fact about ${keyword}: ${response.data.fact}`);
  } catch (error) {
    console.error('Error fetching the fun fact:', error);
  }
}

module.exports = getRandomFact;
