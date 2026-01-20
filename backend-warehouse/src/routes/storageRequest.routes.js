import express from "express";
import { protectAdmin } from "../middleware/authMiddleware.js";
import StorageRequest from "../models/StorageRequest.js";

const router = express.Router();

// ✅ GET all storage requests (ADMIN)
router.get("/", protectAdmin, async (req, res) => {
  try {
    const requests = await StorageRequest.find().sort({ createdAt: -1 });
    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch requests" });
  }
});

// ✅ UPDATE request status
router.patch("/:id", protectAdmin, async (req, res) => {
  try {
    const { status } = req.body;

    const updated = await StorageRequest.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: "Failed to update status" });
  }
});

export default router;
