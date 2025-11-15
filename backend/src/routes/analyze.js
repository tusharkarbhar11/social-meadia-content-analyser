import express from 'express';
import { analyzeContent } from '../utils/analyzer.js';

const router = express.Router();

router.post('/', (req, res) => {
  const { text } = req.body;
  const result = analyzeContent(text);
  res.json(result);
});

export default router;
