import StorageRequest from "../models/StorageRequest.js";

// GET all requests
export const getAllStorageRequests = async (req, res) => {
  try {
    const requests = await StorageRequest.find().sort({ createdAt: -1 });
    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch requests" });
  }
};

// UPDATE request status
export const updateStorageRequestStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const updated = await StorageRequest.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: "Failed to update request" });
  }
};
