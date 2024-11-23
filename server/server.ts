import express , {Response , Request} from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config()

const port = process.env.PORT || 5000
const app = express();

app.use(express.json())
app.use(cors())

app.get("/" , async (req : Request, res : Response) => {})

app.listen(port, () => {
    console.log(`App running on port: ${port}`);
})