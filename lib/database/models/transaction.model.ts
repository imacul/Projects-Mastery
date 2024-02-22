import { Schema, model, models, Document } from "mongoose";

interface Transaction extends Document {
  createdAt: Date;
  stripeId: string;
  amount: number;
  plan?: string;
  buyer: Schema.Types.ObjectId;
}

const TransactionSchema = new Schema<Transaction>({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  stripeId: {
    type: String,
    required: true,
    unique: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  plan: {
    type: String,
  },
  buyer: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const TransactionModel =
  models?.Transaction || model<Transaction>("Transaction", TransactionSchema);

export default TransactionModel;
