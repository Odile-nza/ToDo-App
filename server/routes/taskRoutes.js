import express from  'express'
import * as taskControl from '../controllers/taskController'

const taskRouter = express.Router();

taskRouter
.route("/")
.post(taskControl.createTask)
.get(taskControl.getAllTasks);

taskRouter
.route("/:id")
.get(taskControl.getTask)
.delete(taskControl.deleteTask)
.patch(taskControl.updateTask);

export default taskRouter;