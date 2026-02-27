import jwt from "jsonwebtoken";
import Student from "../models/Student.js";

export const authorizeMW= async(req,res,next)=>{
	try{
		const token= req.headers.authorization?.split(" ")[1];

		if(!token){
			return res.status(401).json({ message: "Not authorized" });
		}
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
    	req.user = await Student.findById(decoded.id).select("-password");
		next();
	}catch (error){
		res.json({
			success: false,
			message: "Not authorized"
		})
	}
}