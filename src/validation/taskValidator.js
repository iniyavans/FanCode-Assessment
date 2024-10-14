/**
 * TaskValidator class
 */
class TaskValidator {
    /**
     * Calculate the completion percentage of a list of tasks
     * 
     * @param {Array<Todo>} todos - An array of Todo objects
     * @returns {number|null} The completion percentage as a number, or null if an error occurs
     * 
     * Example:
     * const todos = [
     *   { id: 1, completed: true },
     *   { id: 2, completed: false },
     *   { id: 3, completed: true }
     * ];
     * const completionPercentage = taskValidator.calculateCompletionPercentage(todos); // returns 66.67
     */
    
    calculateCompletionPercentage(todos) {
      try {
        const totalTasks = todos.length; // Get the total length of the total task, for a specific user.
  
        const completedTasks = todos.filter(todo => todo.completed).length; // Get the total length of completed task count, If completed is true.
  
        return (completedTasks / totalTasks) * 100; // Return the average percentage of task completed value.
  
      } catch (error) {
  
        console.error(error);
  
        return null;
      }
    }
  
    /**
     * Validate the completion percentage of a list of tasks
     * 
     * @param {Array<Todo>} todos - An array of Todo objects
     * @returns {Object|null} An object with completionPercentage and isAboveThreshold properties, or null if an error occurs
     * 
     * Example:
     * const todos = [
     *   { id: 1, completed: true },
     *   { id: 2, completed: false },
     *   { id: 3, completed: true }
     * ];
     * const validationResult = taskValidator.validateCompletion(todos); 
     * console.log(validationResult.completionPercentage); // 66.67
     * console.log(validationResult.isAboveThreshold); // true
     */
    validateCompletion(todos) {
      try {
  
        let completionPercentage = this.calculateCompletionPercentage(todos); // Get the completion percentage value of all the users.
  
        completionPercentage = parseFloat(completionPercentage.toFixed(2));  // Round to 2 decimal places
  
        return {
          completionPercentage, // Return the value of completed task percentage.
          isAboveThreshold: completionPercentage > 50
        };
  
      } catch (error) {
  
        console.error(error);
  
        return null;
      }
    }
  }
  
  module.exports = new TaskValidator();