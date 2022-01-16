import express from "express";
import { createServer } from "http";

const app = express();

const http = createServer(app);

// server listening
const PORT = process.env.PORT || 5000;

http.listen(PORT, () => {
  console.log("Server is listening on port", PORT);
});