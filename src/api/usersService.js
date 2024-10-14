const apiClient = require('./apiClient');

/**
 * UsersService class provides methods to interact with user data.
 * It uses the apiClient to make API calls to retrieve user information.
 */
class UsersService {
  /**
   * Retrieves a list of users who are located within a specific geographic region.
   * The region is defined by latitude between -40 and 5, and longitude between 5 and 100.
   * 
   * @async
   * @returns {Promise<Array>} A promise that resolves to an array of user objects.
   * 
   * @example
   * const usersService = new UsersService();
   * const usersInFanCode = await usersService.getUsersInFanCode();
   * console.log(usersInFanCode);
   */

  async getUsersInFanCode() {
    const users = await apiClient.get('/users'); // Get the user details.

    try {
      return users.filter(user => {
        const lat = parseFloat(user.address.geo.lat); // Filter the lat details from the user details.
        const lng = parseFloat(user.address.geo.lng); // Filter the lng details from the user details.
        return lat >= -40 && lat <= 5 && lng >= 5 && lng <= 100;  // Return the data's which user have a lat between -40 to 5 and  lng between 5 to 100.
      });
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  /**
   * Retrieves a list of todos for a specific user.
   * 
   * @async
   * @param {number} userId The ID of the user.
   * @returns {Promise<Array>} A promise that resolves to an array of todo objects.
   * @example
   * const usersService = new UsersService();
   * const userTodos = await usersService.getUserTodos(1);
   * console.log(userTodos);
   */
  
  async getUserTodos(userId) {
    try {
      return await apiClient.get('/todos', { userId }); // Return the user todo details based on the user  id.
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

module.exports = new UsersService();
