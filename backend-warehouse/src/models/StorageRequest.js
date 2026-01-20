import mongoose from "mongoose";

const storageRequestSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true },
    phone: { type: String, required: true },
    city: { type: String, required: true },
    warehouseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Warehouse",
      required: true,
    },
    message: { type: String },
    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

const StorageRequest = mongoose.model(
  "StorageRequest",
  storageRequestSchema
);

export default StorageRequest;
