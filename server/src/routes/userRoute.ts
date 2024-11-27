import express from "express";
import UserController from "../controllers/userController";

export const router = express.Router()

router.post("/create-user", UserController.createUser)
