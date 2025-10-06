import express from "express"
import dotenv from "dotenv"
import cookieparser from "cookie-parser"

import authRoutes from "./routes/auth.routes.js"
import userRoutes from "./routes/user.routes.js"
import chatRoutes from "./routes/chat.routes.js"
import { connectDB } from "./lib/db.js";
dotenv.config();

const app = express();

app.use(cookieparser())
app.use(express.json());
const PORT = process.env.PORT

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/chat", chatRoutes)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    connectDB();
});