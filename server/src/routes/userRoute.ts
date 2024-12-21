import express from "express";
import userController from "../controllers/userController";
import { jwtCheck } from "../middlewares/authMiddleware";

export const router = express.Router()

router.post("/create-user", jwtCheck, userController.createUser as any);
