import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import analyzeRoutes from './routes/analyze.js';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/analyze', analyzeRoutes);

app.listen(5000, () => console.log('Backend running on port 5000'));
