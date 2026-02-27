import mongoose from "mongoose";

const studentSchema= new mongoose.Schema({
	name:{
		type: String,
		require: [true, "Please enter your name"]
	},
	email:{
		type: String,
		require: [true, "Please enter your email"],
		unique: true
	},
	password:{
		type: String
	}
})
export default mongoose.model("Student",studentSchema);