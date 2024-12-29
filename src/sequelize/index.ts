import { Sequelize } from "sequelize-typescript";
import { sequelizeConfig } from "../config";
import { Address, Carcas, Color, Country, Document, Locality, LocalityType, Registration, Street, StreetType, User, Vehicle, VehicleMark, VehicleModel, VehicleType } from '../models';

export default async () => {
  const sequelize = new Sequelize(sequelizeConfig);

  sequelize.addModels([
    Address,
    Carcas,
    Color,
    Country,
    Document,
    Locality,
    LocalityType,
    Registration,
    Street,
    StreetType,
    User,
    Vehicle,
    VehicleMark,
    VehicleModel,
    VehicleType
  ]);

  await sequelize.sync({ alter: true });

  return sequelize;
}
