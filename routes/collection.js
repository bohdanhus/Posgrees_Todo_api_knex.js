import Router from 'express';
import {todoController} from '../controller/todoController.js'

const router = new Router()


router.get('/today', (req, res) => {
    todoController.getCollection(req, res)
});

export default router