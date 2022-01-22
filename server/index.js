import express from "express";
import { createServer } from "http";
import routes from "./routes/index.js";

const app = express();

const http = createServer(app);

// Database
// import "./config/db.config";

// Middleware
app.use(express.json());

// Routes
app.use("/api", routes.homeRouter);
app.use("/api", routes.dictionaryRouter);

// server listening
const PORT = process.env.PORT || 5000;
http.listen(PORT, () => {
  console.log("Server is listening on port", PORT);
});
