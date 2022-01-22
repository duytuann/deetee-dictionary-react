import express from "express";
const router = express.Router();

import handleDB from "../models/handleDB.model.js";

router.get("/dictionary/:word", async (req, res) => {
  const word = req.params.word;
  const gloss = await handleDB(word);
  res.json(gloss);
});

export default router;
