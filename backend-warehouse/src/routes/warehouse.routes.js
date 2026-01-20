import express from "express";
import { getWarehousesByCity } from "../controllers/warehouse.controller.js";

const router = express.Router();

router.get("/", getWarehousesByCity);

export default router;
