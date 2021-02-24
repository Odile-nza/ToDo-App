import express from "express";
import bodyParser from "body-parser";
import compression from "compression"
import userRouter from "./routes/userRoutes"
import AppError from './utils/appError';
import * as globalErrorHandler from './controllers/errorController'
import taskRouter from "./routes/taskRoutes";
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(compression())

app.get('/', (req,res)=>{res.status(200).send({
    status:200,
    message:'welcome to ToDo-App',
})})



app.use("/api/v1/users",userRouter)
app.use("/api/v1/Items",taskRouter)

app.all('*',(req,res,next)=>{

next(new AppError(`can't find ${req.originalUrl} on this server`,404)) 
})
 
app.use(globalErrorHandler.errorHandler);
export default app;