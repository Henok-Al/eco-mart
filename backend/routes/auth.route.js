import express from "express";
import { Login, Logout, Signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", Signup);//localhost: 5000/api/auth/signup
router.post("/login", Login);
router.post("/logout", Logout);

export default router;
