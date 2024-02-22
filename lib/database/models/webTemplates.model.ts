import { Schema, models, model } from "mongoose";

export interface WebTemplate {
  title: string;
  description: string;
  price: number;
  isPremium: boolean;
}

const webTemplateSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  isPremium: { type: Boolean, required: true },
});

export const WebTemplate = models?.WebTemplateModel || model(
  "WebTemplate",
  webTemplateSchema,
);
