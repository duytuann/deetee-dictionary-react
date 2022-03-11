import express from "express";
const router = express.Router();

import handleDB, { word_list } from "../models/handleDB.model.js";

router.get("/dictionary/:word", async (req, res) => {
  const word = req.params.word;
  const gloss = await handleDB(word);
  res.json(gloss);
});

router.get("/wordlist", (req, res) => {
  res.json(word_list);
});

export default router;
