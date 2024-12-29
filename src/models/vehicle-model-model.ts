import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { VehicleMark } from './vehicle-mark-model';
import { Vehicle } from './vehicle-model';

@Table
export class VehicleModel extends Model {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING })
  name: string;

  @Column({ type: DataType.STRING })
  short_name: string;

  @ForeignKey(() => VehicleMark)
  @Column({ type: DataType.INTEGER })
  vehicle_mark_id: number;

  @BelongsTo(() => VehicleMark)
  vehicle_mark: VehicleMark;

  @HasMany(() => Vehicle)
  vehicles: Vehicle[];
}