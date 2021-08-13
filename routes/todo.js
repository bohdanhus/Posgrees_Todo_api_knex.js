import Router from 'express';
import {todoController} from '../controller/todoController.js'

const router = new Router()


router.post('/:listId', (req, res) => {
    let result = todoController.createTask(req.params.listId, req.body)
    res.send(result);

});
router.get('/', (req, res) => {
    let result = todoController.getTasks(req.query.listId)
    res.send(result);
});
router.get('/:id', (req, res) => {
    let result = todoController.getTask(req.query.listId, req.body.id)
    res.send(result);
});
router.patch('/', function (req, res) {
    let result = todoController.updateTask(req.query.listId, req.body.id, Boolean(req.body.done));
    res.send(result);
});
router.put('/', function (req, res) {
    let result = todoController.rewriteTask(req.query.listId, req.body.id, req.body);
    res.send(result);
});
router.delete('/:id', (req, res) => {
    let result = todoController.deleteTask(req.params.id, req.body)
    res.send(result);
});

export default router
