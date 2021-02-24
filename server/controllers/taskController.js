
import Task from '../models/TaskModel';
import catchAsync from '../utils/catchAsync';


export const createTask = catchAsync(async (req,res,next)=>{

  const newTask = await Task.create(req.body);


  res.status(201).json({
      status:'success',
      message:'Task successfully created',
      data:{
        
          newTask
      }
  })
})
 
export const getAllTasks = catchAsync(async (req,res,next)=>{

  const tasks = await Task.find({}).sort({
     createdOn:-1
  }

  )
  
  res.status(200).json({
    status:'success',
    data:{
      tasks
    }
  });
})


export const getTask = catchAsync(async (req,res,next)=>{

  const task= await Task.findById(req.params.id)

  res.status(200).json({
      status:'success',
      data:{
          task
      }
    })
})


export const deleteTask =  catchAsync(async (req,res,next)=>{

  const task = await Task.findByIdAndDelete(req.params.id)

  res.status(200).json({
      status:'success',
      message:'task successfully deleted',
      data:{}
    })
})

export const updateTask = catchAsync(async (req,res,next)=>{

    const task=await Task.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidator:true
    })
    req.requestTime=new Date().toISOString();
    res.status(200).json({
        success:true,
        message:'Task successfully edited',
        updatedOn:req.requestTime,
        data: {
          task
        }

    })

})
