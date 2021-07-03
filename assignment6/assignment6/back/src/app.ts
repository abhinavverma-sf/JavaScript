import express, {request, Request,Response} from 'express';
import dotenv from 'dotenv'
import {router} from "./routes/routes"
dotenv.config()
const app=express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use("/",router);

app.listen(process.env.PORT, ()=>{
    console.log(`Server is rocking at ${process.env.PORT}`)
});