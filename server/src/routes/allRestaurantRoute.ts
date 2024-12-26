// in this route, we will handle the request made by a general user
//  in the restaurantRoute.ts file, we will handle the request made by the restaurant owner/ a particular USERx

import express from "express";
import { param } from "express-validator";
import allRestaurantController from "../controllers/allRestaurantController";

export const router = express.Router();

router.get(
  "/search/:city",
  param("city")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("City paramenter must be a valid string"),
  allRestaurantController.searchRestaurant as any
);
