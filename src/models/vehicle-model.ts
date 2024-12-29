import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { VehicleModel } from './vehicle-model-model';
import { Carcas } from './carcas-model';
import { Color } from './color-model';
import { VehicleType } from './vehicle-type-model';
import { Registration } from './registration-model';

@Table
export class Vehicle extends Model {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.DATE })
  release_date: Date;

  @Column({ type: DataType.STRING })
  engine_number: string;

  @ForeignKey(() => VehicleType)
  @Column({ type: DataType.INTEGER })
  vehicle_type_id: number;

  @BelongsTo(() => VehicleType)
  vehicle_type: VehicleType;

  @ForeignKey(() => VehicleModel)
  @Column({ type: DataType.INTEGER })
  vehicle_model_id: number;

  @BelongsTo(() => VehicleModel)
  vehicle_model: VehicleModel;

  @ForeignKey(() => Carcas)
  @Column({ type: DataType.INTEGER })
  carcas_id: number;

  @BelongsTo(() => Carcas)
  carcas: Carcas;

  @ForeignKey(() => Color)
  @Column({ type: DataType.INTEGER })
  color_id: number;

  @BelongsTo(() => Color)
  color: Color;

  @HasMany(() => Registration)
  registrations: Registration[];
}