import express, { Request, Response } from "express";
import {client} from "@repo/db/client"

const app=express();
app.use(express.json());

app.get("/",async (req:Request,res:Response)=>{
    const user=await client.user.findFirst();
    res.json({
        user,
        message:"test endpoint ..."
    })
})

app.post("/",async (req:Request,res:Response)=>{
    const create=await client.user.create({
       data:{
           username:"amit",
           password:"hellotest"
        } 

    })
    res.json({
        message:"signup successful",
        id: create.id
    })
})
app.listen(3002);

