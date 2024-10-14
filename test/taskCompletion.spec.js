const { test, expect } = require('@playwright/test');
const usersService = require('../src/api/usersService');
const taskValidator = require('../src/validation/taskValidator');

/**
 * Test that FanCode city users have completed more than 50% of their tasks
 *
 * This test retrieves the list of users from FanCode city, then for each user,
 * it retrieves their todo list and validates that they have completed more than 50% of their tasks.
 *
 * @example
 * ```
 * // Example output:
 * The user John Doe, with a user ID 123, has completed the task of 60%
 * The user Jane Doe, with a user ID 456, has completed the task of 70%
 * ...
 * ```
 */
test('Validate that FanCode city users have completed more than 50% of their tasks', async () => {

  const users = await usersService.getUsersInFanCode(); // Get the users list who is from the FanCode city.

  try {
    for (const user of users) {
      /**
       * Get the user's ToDo details from users who come from the FanCode city.
       *
       * @param {number} userId - The ID of the user
       * @returns {Promise<Todo[]>} - A promise that resolves to an array of todo items
       */

      const todos = await usersService.getUserTodos(user.id);

      /**
       * Validate that the user has completed more than 50% of their tasks
       *
       * @param {Todo[]} todos - The array of todo items
       * @returns {{ completionPercentage: number, isAboveThreshold: boolean }} - An object with the completion percentage and a boolean indicating if it's above the threshold
       */

      const isValid = taskValidator.validateCompletion(todos);

      const { completionPercentage, isAboveThreshold } = isValid; // Structured the return object from the above call.

      console.log(`The user ${user.name}, with a user ID ${user.id}, has completed the task of ${completionPercentage}% `);

      expect(isAboveThreshold).toBeTruthy();
    }
  } catch (error) {

    console.error(error);

  }
  
});
