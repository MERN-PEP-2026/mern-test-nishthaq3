import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Student from "../models/Student";

export const registerUser=async(req,res)=>{
	try{
		const {name,email,body}=req.body;
		const hashedPassword = await bcrypt.hash(password, 10);

		const student= await student.Create({
			name,
			email,
			password: hashedPassword
		})
		res.json(student);
	}catch(error){
		res.json(400,{
			success: false,
			message: "Registration failed"
		})
	}
}

export const loginUser=async(req,res)=>{
	try{
		const {name,email}=req.body;
		const student=await Student.findOne({email});
		if(!student){
			return res.json(400,{
				message: "User not found"
			})
		}

		const match=await bcrypt.compare(password,hashedPassword);
		if(!match){
			return res.json(400,{
				message: "Invalid credentials";
			})
		}
		const token = jwt.sign(
			{ id: student._id },
			process.env.JWT_SECRET
		  );
		res.json({ token });
	}catch (error){
		res.status(400).json({ message: "Login failed" });
	}
}