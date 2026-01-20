import express from "express";
import cors from "cors";
import warehouseRoutes from "./routes/warehouse.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/warehouse", warehouseRoutes);

export default app;
