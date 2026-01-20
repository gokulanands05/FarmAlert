import mongoose from "mongoose";
import StorageRequest from "../models/StorageRequest.js";

/* CREATE REQUEST (already working) */
export const createStorageRequest = async (req, res) => {
  try {
    const data = {
      ...req.body,
      warehouseId: new mongoose.Types.ObjectId(req.body.warehouseId),
    };

    const request = await StorageRequest.create(data);

    res.status(201).json({
      message: "Storage request submitted successfully",
      request,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to submit request",
      error,
    });
  }
};

/* 🔥 GET ALL REQUESTS (ADMIN) */
export const getAllRequests = async (req, res) => {
  try {
    const requests = await StorageRequest.find().sort({ createdAt: -1 });
    res.json(requests);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

/* 🔥 UPDATE STATUS (APPROVE / REJECT) */
export const updateRequestStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!["Approved", "Rejected"].includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const request = await StorageRequest.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    res.json({
      message: `Request ${status}`,
      request,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
