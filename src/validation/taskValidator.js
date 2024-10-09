class TaskValidator {
    calculateCompletionPercentage(todos) {
        try {
            const totalTasks = todos.length;
            console.log(totalTasks);
            const completedTasks = todos.filter(todo => todo.completed).length;
            console.log(completedTasks);
            console.log((completedTasks / totalTasks) * 100);
            return (completedTasks / totalTasks) * 100;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    validateCompletion(todos) {
        try {
            const completionPercentage = this.calculateCompletionPercentage(todos);
            return completionPercentage >= 50;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = new TaskValidator();
