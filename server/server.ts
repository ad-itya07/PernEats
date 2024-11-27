import express, { Response, Request } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { router as userRoute } from "./src/routes/userRoute";

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/user", userRoute);

app.listen(port, () => {
  console.log(`App running on port: ${port}`);
});
