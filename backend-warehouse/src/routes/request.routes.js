import express from "express";
import {
  createStorageRequest,
  getAllRequests,
  updateRequestStatus,
} from "../controllers/request.controller.js";

const router = express.Router();

router.post("/", createStorageRequest);          // user
router.get("/", getAllRequests);                 // admin
router.put("/:id/status", updateRequestStatus);  // admin

export default router;
