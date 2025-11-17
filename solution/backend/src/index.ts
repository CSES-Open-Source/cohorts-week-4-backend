import express from "express";
import cors from "cors";
import counter from "./routes/counter";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// Connect to database
mongoose
  .connect("mongodb://127.0.0.1:27017/counter")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

app.get("/", (_req, res) => {
  res.send("Hello, Express + TypeScript!");
});
// Routes
app.use("/counters", counter);

app.listen(PORT, () => {
  console.log("Server listening on http://localhost:" + PORT);
});
