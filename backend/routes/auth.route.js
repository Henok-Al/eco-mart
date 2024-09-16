import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  Login,
  Logout,
  Signup,
  refreshToken,
  getProfile,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", Signup); //localhost: 5000/api/auth/signup
router.post("/login", Login);
router.post("/logout", Logout);
router.post("/refresh-token", refreshToken);
router.post("/profile", protectRoute, getProfile);

export default router;
