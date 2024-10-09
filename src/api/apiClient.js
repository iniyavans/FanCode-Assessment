const axios = require('axios');
require('dotenv').config();

class APIClient {

  async get(endpoint, params = {}) {
    try {
      const response = await axios.get(`${process.env.BASE_URL}${endpoint}`, { params });
      return response.data;
    } catch (error) {
      console.error(`Got a error with a ${endpoint}`, error);
      return null;
    }
  }
}

module.exports = new APIClient();
