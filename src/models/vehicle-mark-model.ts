import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { Country } from './country-model';
import { VehicleModel } from './vehicle-model-model';

@Table
export class VehicleMark extends Model {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING })
  name: string;

  @Column({ type: DataType.STRING })
  short_name: string;

  @ForeignKey(() => Country)
  @Column({ type: DataType.INTEGER })
  country_id: number;

  @BelongsTo(() => Country)
  country: Country;

  @HasMany(() => VehicleModel)
  vehicle_models: VehicleModel[];
}