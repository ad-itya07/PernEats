import express from "express";
import {
  jwtCheck,
  jwtParseUserAndAuth0IdToRequest,
} from "../middlewares/authMiddleware";
import orderController from "../controllers/orderController";

export const router = express.Router();

router.post(
  "/checkout/create-checkout-session",
  jwtCheck,
  jwtParseUserAndAuth0IdToRequest as any,
  orderController.createCheckoutSession as any
);

router.post("/checkout/webhook", orderController.stripeWebhookHandler as any);
