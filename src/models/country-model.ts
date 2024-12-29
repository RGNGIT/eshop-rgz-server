import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { VehicleMark } from './vehicle-mark-model';

@Table
export class Country extends Model {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({type: DataType.STRING})
  name: string;

  @Column({type: DataType.STRING})
  abbr: string;

  @HasMany(() => VehicleMark)
  vehicle_marks: VehicleMark[];
}