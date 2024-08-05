import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import authRoutes from "./routes/authRoute.js";
import messageRoutes from "./routes/messageRoute.js";
import dotenv from "dotenv";
import { app, server } from "./socket/socket.js";
dotenv.config();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();
app.use(express.json()); //for parsing application/json
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
if (process.env.NODE_ENV !== "development") {
    app.use(express.static(path.join(__dirname, "/frontEnd/dist")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "frontEnd", "dist"));
    });
}
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
