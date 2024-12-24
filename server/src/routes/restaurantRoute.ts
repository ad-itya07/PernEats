import express from "express";
import { upload } from "../middlewares/uploadMulter";
import restaurantController from "../controllers/restaurantController";
import {
  jwtCheck,
  jwtParseUserAndAuth0IdToRequest,
} from "../middlewares/authMiddleware";
import { validateMyRestaurantRequest } from "../middlewares/validation";

export const router = express.Router();

router.get(
  "/",
  jwtCheck,
  jwtParseUserAndAuth0IdToRequest as any,
  restaurantController.getRestaurant as any
);

router.post(
  "/create",
  upload.single("imageFile"),
  validateMyRestaurantRequest as any,
  jwtCheck,
  jwtParseUserAndAuth0IdToRequest as any,
  restaurantController.createRestaurant as any
);
