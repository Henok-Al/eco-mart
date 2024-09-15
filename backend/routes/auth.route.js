import express from "express";
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
router.post("/profile", getProfile);

export default router;
