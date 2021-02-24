
import mongoose from 'mongoose'



const taskSchema = new mongoose.Schema({
    taskTitle:{
        type:String,
        required:[true,'Task Title is required']
    },
    taskDescription:{
        type:String,
        required:[true,'Task Description is required'],
        maxlength:100
    },
    taskPriority:{
        type:String,
        required:[true,'Priority please!']
    },
     
    createdOn:{
         type:Date,
         default:Date.now
    }
    
        


})

const Task = mongoose.model('Task',taskSchema);

export default Task;