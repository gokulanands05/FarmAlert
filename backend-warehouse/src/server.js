import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import warehouseRoutes from "./routes/warehouse.routes.js";
import requestRoutes from "./routes/request.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import storageRequestRoutes from "./routes/storageRequest.routes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Warehouse Backend Running");
});

app.use("/api/warehouses", warehouseRoutes); // 🔥 VERY IMPORTANT
app.use("/api/requests", requestRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api", storageRequestRoutes);
app.use("/api/storage-requests", storageRequestRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
