

import dotenv from "dotenv";
import app from "./index";
import mongoose from "mongoose";

dotenv.config({ path: "./server/config.env" });


const port = process.env.PORT;

const DB = process.env.DATABASE;
mongoose.connect(DB,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }).then(()=> console.log(" Db connection done successfully"));

const server = app.listen(port, () =>
  process.stdout.write(`Listening on port ${port} ...\n******************** \n`)
);






















/*import dotenv from "dotenv";
import app from "./index";
import mongoose from "mongoose";

dotenv.config({ path: './variables/config.env' });




const DB = process.env.DATABASE;

mongoose.connect(DB,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }).then(()=> console.log(" Db connection done successfully"));


const port = process.env.PORT;
const server = app.listen(port, () =>
  process.stdout.write(`Listening on port ${port} ...\n******************** \n`)
); */