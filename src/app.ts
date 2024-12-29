import express from 'express';
import { apiPort } from './config';
import defineRouter from './routes';
import cors from "cors";
import bodyParser from "body-parser";
import initializeSequelizeInstanse from './sequelize';

const app = express();
const router = express.Router();

const corsOpt = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

export default () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true, limit: "100mb" }));
  app.use(cors(corsOpt));
  app.use('/api', router);
  defineRouter(router);
  initializeSequelizeInstanse();

  app.listen(apiPort, () => { console.log(`Server started at ${apiPort}`); });
}