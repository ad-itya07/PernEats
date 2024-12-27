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

router.patch(
  "/order/:orderId/status",
  jwtCheck,
  jwtParseUserAndAuth0IdToRequest as any,
  restaurantController.updateOrderStatus as any
);

router.get(
  "/order",
  jwtCheck,
  jwtParseUserAndAuth0IdToRequest as any,
  restaurantController.getRestaurantOrders as any
);

router.post(
  "/create",
  upload.single("imageFile"),
  validateMyRestaurantRequest as any,
  jwtCheck,
  jwtParseUserAndAuth0IdToRequest as any,
  restaurantController.createRestaurant as any
);

router.put(
  "/update",
  upload.single("imageFile"),
  validateMyRestaurantRequest as any,
  jwtCheck,
  jwtParseUserAndAuth0IdToRequest as any,
  restaurantController.updateRestaurant as any
)
