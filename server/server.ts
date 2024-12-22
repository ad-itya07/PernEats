import express, { Response, Request } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { router as userRoute } from "./src/routes/userRoute";
import mongoose from "mongoose";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log("Connected to database."))

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/health", (req: Request, res: Response) => {
  res.send({message: "Server is up and running"});
});

app.use("/api/user", userRoute);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
