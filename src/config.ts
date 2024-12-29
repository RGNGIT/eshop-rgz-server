import { Dialect } from "sequelize";

require('dotenv').config();

const {
  API_PORT,
  SQ_DIALECT,
  SQ_HOST,
  SQ_PORT,
  SQ_USERNAME,
  SQ_PASSWORD,
  SQ_DB
} = process.env;

export const sequelizeConfig = {
  dialect: SQ_DIALECT as Dialect,
  host: SQ_HOST,
  port: Number(SQ_PORT),
  username: SQ_USERNAME,
  password: SQ_PASSWORD,
  database: SQ_DB
}

export const apiPort = API_PORT;