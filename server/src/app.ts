import express from "express";

export const app = express();

app.get("/index",(req,res)=>{
    res.send("Index Route")
});
