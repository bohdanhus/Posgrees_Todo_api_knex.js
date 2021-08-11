import {todoController} from "../controller/todoController.js";
import Router from 'express';

const router = new Router()

router.get('/:listId/tasks', (req, res) => {
    todoController.getAllOpenTaskById(req, res);
});

export default router;