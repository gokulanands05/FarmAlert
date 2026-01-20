import Warehouse from "../models/Warehouse.js";

export const getWarehousesByCity = async (req, res) => {
  try {
    const { city } = req.query;

    let query = {};

    if (city) {
      query = {
        city: { $regex: `^${city}$`, $options: "i" } // ✅ case-insensitive
      };
    }

    const warehouses = await Warehouse.find(query);

    res.status(200).json(warehouses);
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};
