class TaskValidator {
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
