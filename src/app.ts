import express from 'express';
import { apiPort } from './config';
import defineRouter from './routes';
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const router = express.Router();

const corsOpt = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

export default function startServer() {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true, limit: "100mb" }));
  app.use(cors(corsOpt));
  app.use('/api', router);
  defineRouter(router);
  
  app.listen(apiPort, () => { console.log(`Server started at ${apiPort}`); });
}