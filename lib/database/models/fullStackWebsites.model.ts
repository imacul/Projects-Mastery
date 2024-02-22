import mongoose, { Schema, models, model } from "mongoose";

export interface FullStackWebsite {
  title: string;
  description: string;
  price: number;
  technologies: string[];
}

const FullStackWebsiteSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  technologies: { type: [String], required: true },
});

const FullStackWebsite =
  models?.FullStackWebsite || model(
    "FullStackWebsite",
    FullStackWebsiteSchema,
  );

  export default FullStackWebsite;