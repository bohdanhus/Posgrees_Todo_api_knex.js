import Router from 'express';
import {todoController} from '../controller/todoController.js'

const router = new Router()


router.get('/', (req, res) => {
    todoController.getTasksForToday(req, res)
});

export default router