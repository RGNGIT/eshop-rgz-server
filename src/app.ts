import express from 'express';
import { apiPort } from './config';

const app = express();

export default function startServer() {
  app.listen(apiPort, () => { console.log(`Server started at ${apiPort}`); });
}