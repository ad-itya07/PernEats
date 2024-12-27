import express from "express";
import {
  jwtCheck,
  jwtParseUserAndAuth0IdToRequest,
} from "../middlewares/authMiddleware";
import orderController from "../controllers/orderController";

export const router = express.Router();

router.get("/", jwtCheck, jwtParseUserAndAuth0IdToRequest as any, orderController.getMyOrders as any);

router.post(
  "/checkout/create-checkout-session",
  jwtCheck,
  jwtParseUserAndAuth0IdToRequest as any,
  orderController.createCheckoutSession as any
);

router.post("/checkout/webhook", orderController.stripeWebhookHandler as any);
