import kn from '../db.js';


class TodoController {
    getTasksForToday(req, res) {
        let nowDay = new Date(2021,7,11);
        let endDay = new Date(2021, 7, 11, 23, 59, 59);
        // else we can get date in getDate()
        kn('todo')
            .select('lists.title', kn.raw('COUNT(*)')).as('tasks')
            .innerJoin('lists', 'lists.id', 'todo.list_id')
            .where('done', false)
            .whereBetween('due_date', [nowDay, endDay])
             .groupBy('lists.title')
            .then((data) => {
                res.json(data)
                res.end()
            })
    }

    // getCollectionOfTaskForToday(req, res) {
    //     const collection = await db.query(`SELECT todo.id     AS todoid,
    //                                               todo.title  AS taskname,
    //                                               lists.id    AS listid,
    //                                               lists.title AS listname
    //                                        FROM todo
    //                                                 RIGHT JOIN lists ON todo.list_id = lists.id
    //                                        where todo.due_date = $1`, [new Date()]
    //     )
    //
    //         const result = {
    //             'collection for today': collection.rows
    //         }
    //         res.status(200);
    //         res.json(result);
    // }

    createTask(req, res) {
        const {id, title, done, due_date} = req.body
        kn('todo').insert({id: id, title: title, done: done, due_date: due_date}, "*")
            .catch((err) => {
                res.status(404);
                res.json(err);
            })
            .then((data) => {
                res.status(201);
                res.json(data);
            });
    }

    async getTasks(req, res) {
        const result = await kn.select().table('todo')
        res.status(200);
        res.json(result);
        res.end()
    }

    getTask(req, res) {
        kn("todo")
            .where('id', req.params.id)
            .catch((err) => {
                res.status(404);
                res.json(err);
            })
            .then((data) => {
                res.status(200);
                res.json(data);
            })
    }

    updateTask(req, res) {
        const {title, done, due_date} = req.body
        kn('todo')
            .where('id', req.params.id)
            .update({title: title, done: done, due_date: due_date}, '*')
        .catch((err) => {
            res.status(400);
            res.json(err)
        })
            .then((data) =>{
                res.status(201);
                res.json(data)
            })
    }

    deleteTask(req, res) {
        kn('todo')
            .where('id', req.params.id)
            .del()
            .catch((err) => {
                res.status(404)
                res.json(err)
            })
            .then(() => {
                res.status(200);
                res.end();
            })
    }
    // async getAllOpenTaskById(req, res) {
    //     const listId = parseInt(req.params.listId)
    //     if (!(req.query.all !== true)) {
    //
    //         const result = await db.query('SELECT * FROM todo WHERE listId=$1', [listId])
    //         results = result.rows;
    //     }
    //
    //
    //     const result = await db.query(`SELECT *
    //                                    FROM todo
    //                                    WHERE done = false
    //                                      AND listId = $1`, [listId])
    //     const a = result.rows
    //     if (a.length !== 0) {
    //         res.status(200);
    //         res.json(result.rows);
    //     } else {
    //         res.status(404);
    //         res.end('Not Found');
    //     }
    // }
}
    export  const todoController = new TodoController();
