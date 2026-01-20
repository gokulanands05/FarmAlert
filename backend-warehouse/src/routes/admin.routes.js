import express from "express";
import { loginAdmin } from "../controllers/admin.controller.js";
import { protectAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/login", loginAdmin);

// protected admin route
router.get("/dashboard", protectAdmin, (req, res) => {
  res.json({ message: "Admin authenticated" });
});

export default router;
