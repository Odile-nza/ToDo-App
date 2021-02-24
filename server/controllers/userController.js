import User from '../models/userModel';
import catchAsync from '../utils/catchAsync';

export const createUser = catchAsync(async (req,res,next)=>{

    const newUser = await User.create(req.body);

    res.status(201).json({
        status:'success',
        data:{
            newUser
        }
    })
})


export const getAllUsers = catchAsync(async (req,res,next)=>{
    let query;
    const reqQuery={...req.query}
    
    const users = await User.find();

    res.status(200).json({
      status:'success',
      data:{
        users
      }
    })
})


export const getUser = catchAsync(async (req,res,next)=>{

    const user = await User.findById(req.params.id)

    res.status(200).json({
        status:'success',
        data:{
            users
        }
      })
})


export const deleteUser =  catchAsync(async (req,res,next)=>{

    const user = await User.findByIdAndDelete(req.params.id)

    res.status(200).json({
        status:'success',
        data:{
            user
        }
      })
})

export const updateUser = catchAsync(async (req,res,next)=>{

    const user = await User.findByIdAndUpdate(req.params.id)

    res.status(200).json({
        status:'success',
        data:{
            user
        }
      })
})