const apiClient = require('./apiClient');

class UsersService {
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
