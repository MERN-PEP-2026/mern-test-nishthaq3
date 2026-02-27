import mongoose from "mongoose";

const courseSchema= new mongoose.Schema({
	courseName:{
		type: String
	},
	description:{
		type: String
	},
	instructor:{
		type: String
	},
	createdAt:{
		type: Date,
		default: Date.now
	}
})
export default mongoose.model("Course",courseSchema);