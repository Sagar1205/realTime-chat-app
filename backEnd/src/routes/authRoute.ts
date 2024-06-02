import express from "express";
import { login, logout, signup, getMe } from "../controllers/authController.js";
import protectRoute from "../middleware/protectRoute.js"

const router = express.Router()

router.get("/login", login)

router.get("/logout", logout)

router.get("/signup", signup)

router.get("/me", protectRoute, getMe)

export default router