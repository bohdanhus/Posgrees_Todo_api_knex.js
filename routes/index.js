import express from "express";
import collection from './collection.js'
import employees from './employees.js'
import dashboard from './dashboard.js'
import lists from './lists.js'
import todo from './todo.js'

const router = express.Router()

router.use('/collection', collection)
router.use('/dashboard', dashboard)
router.use('/employees', employees)
router.use('/lists', lists)
router.use('/todo', todo)

export default router