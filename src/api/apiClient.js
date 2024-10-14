const axios = require('axios');
require('dotenv').config();

/**
 * APIClient class that makes GET requests to an API.
 *
 * The API endpoint URL is constructed by concatenating the `BASE_URL` environment variable with the provided `endpoint` parameter.
 * @class APIClient
 *
 */
class APIClient {

  /**
   * Makes a GET request to the API.
   *
   * @param {string} endpoint - The API endpoint to request (e.g. `/users`, `/todos`)
   * @param {object} [params={}] - Optional query parameters to include in the request
   * @returns {Promise<object|null>} - The response data or null if an error occurs
   * 
   * @example
   * const apiClient = new APIClient();
   * const users = await apiClient.get('/users'); // GET http://jsonplaceholder.typicode.com
   * const user = await apiClient.get('/users/1', { id: 1 }); // GET http://jsonplaceholder.typicode.com/users/id=1
   * 
   */

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
