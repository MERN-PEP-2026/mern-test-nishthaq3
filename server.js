import express from "express";
import mongoose from "mongoose";

const app=express();
const PORT=3000;

app.get("/",(req,res)=>{
	res.send("Hello server!")
})
app.listen(PORT,()=>{
	console.log(`Server running on PORT ${PORT}`);
})