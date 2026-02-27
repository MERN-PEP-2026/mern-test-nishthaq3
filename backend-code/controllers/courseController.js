import Course from "../models/Course.js";

export const createCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.json(course);
  } catch (error) {
    res.status(400).json({ message: "Error creating course" });
  }
};

export const getCourses = async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
};

export const deleteCourse = async (req, res) => {
  await Course.findByIdAndDelete(req.params.id);
  res.json({ message: "Course deleted" });
};