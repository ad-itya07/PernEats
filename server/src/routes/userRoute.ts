import express from "express";
import userController from "../controllers/userController";
import { jwtCheck, jwtParseUserAndAuth0IdToRequest } from "../middlewares/authMiddleware";
import { validateMyUserRequest } from "../middlewares/validation";

export const router = express.Router()

router.get("/", jwtCheck, jwtParseUserAndAuth0IdToRequest as any, userController.getCurrentUser as any);
router.post("/create-user", jwtCheck, userController.createUser as any);
router.put("/update-user", jwtCheck, jwtParseUserAndAuth0IdToRequest as any, validateMyUserRequest as any, userController.updateUser as any);
