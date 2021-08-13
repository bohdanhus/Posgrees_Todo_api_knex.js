import express from "express";
import collection from './collection.js'
import dashboard from './dashboard.js'
import tasks from './todo.js'

const router = express.Router()

router.use('/collection', collection)
router.use('/dashboard', dashboard)
router.use('/knex/lists', tasks)

export default router