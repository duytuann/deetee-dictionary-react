import express from "express";
import { createServer } from "http";
import cors from "cors";

import routes from "./routes/index.js";

// Database
// import "./config/db.config";

// Middleware
const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", routes.dictionaryRouter);

// create Server
const http = createServer(app);

// server listening
const PORT = process.env.PORT || 5000;
http.listen(PORT, () => {
  console.log("Server is listening on port", PORT);
});
