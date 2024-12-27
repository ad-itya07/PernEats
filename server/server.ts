import express, { Response, Request } from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { v2 as cloudinary } from "cloudinary";
import { router as userRoute } from "./src/routes/userRoute";
import { router as restaurantRoute } from "./src/routes/restaurantRoute";
import { router as allRestaurantRoute } from "./src/routes/allRestaurantRoute";
import { router as orderRoute } from "./src/routes/orderRoute";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log("Connected to database."));

cloudinary.config({
  cloud_name: process.env.CLODUINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLODUINARY_API_SECRET,
});

const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use("/api/order/checkout/webhook", express.raw({ type: "*/*" }));
app.use(express.json());

app.get("/health", (req: Request, res: Response) => {
  res.send({ message: "Server is up and running" });
});

app.use("/api/user", userRoute);
app.use("/api/restaurant", restaurantRoute);
app.use("/api/all/restaurant", allRestaurantRoute);
app.use("/api/order", orderRoute);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
