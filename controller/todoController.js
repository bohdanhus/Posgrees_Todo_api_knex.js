import TaskModel from '../model/task.js'

class TodoController {
    createTask(listId, body) {
        return TaskModel.createTask(listId, body);
    }

    getTasks(listId) {
        return TaskModel.getTasks(listId);
    }

    getTask(listId, id) {
        return TaskModel.getTask(listId, id);
    }

    updateTask(listId, taskId, body) {
        return TaskModel.updateTask(listId, taskId, body);
    }

    rewriteTask(listId, taskId, body) {
        return TaskModel.rewriteTask(listId, taskId, body);
    }

    deleteTask(id, body) {
        return TaskModel.deleteTask(listId, body);
    }
}

export const todoController = new TodoController();
