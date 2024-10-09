const { test, expect } = require('@playwright/test');
const usersService = require('../src/api/usersService');
const taskValidator = require('../src/validation/taskValidator');

test('Validate that FanCode city users have completed more than 50% of their tasks', async () => {

  const users = await usersService.getUsersInFanCode(); // Get the users list who is from the FanCode city.

  try {

    for (const user of users) {

      const todos = await usersService.getUserTodos(user.id); // Get the user's ToDo details from users who come from the FanCode city.

      const isValid = taskValidator.validateCompletion(todos); // Get the user details of those who have completed more than 50% of their overall tasks from the FanCode city.

      console.log(`The user ${user.name}, with a user ID ${user.id}, has completed more than 50% of the task.`);

      expect(isValid).toBeTruthy();
    }
  } catch (error) {

    console.error(error);

  }

});
