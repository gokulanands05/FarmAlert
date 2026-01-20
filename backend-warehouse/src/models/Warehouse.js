import mongoose from "mongoose";

const warehouseSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    city: { type: String, required: true },
    area: { type: String, required: true },
    storage: { type: String },
    price: { type: String },
    latitude: Number,
    longitude: Number,
  },
  { timestamps: true }
);

export default mongoose.model("Warehouse", warehouseSchema);
