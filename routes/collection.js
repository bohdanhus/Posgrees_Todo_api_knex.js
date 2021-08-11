import Router from 'express';
import {todoController} from '../controller/todoController.js'

const router = new Router()


router.get('/today', (req, res) => {
    todoController.getCollectionOfTaskForToday(req, res)
});

export default router