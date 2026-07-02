import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "Ok",
        service: "User-Service"
    });
});
export default app;
//# sourceMappingURL=app.js.map