import { Schema, model, models } from "mongoose";

export interface Course {
  title: string;
  description: string;
  price: number;
  duration: string;
}


const CourseSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
});

const Course = models?.Course || model(
  "Course",
  CourseSchema,
);

export default Course;
