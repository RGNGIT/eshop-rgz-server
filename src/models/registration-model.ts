import { Table, Column, Model, DataType, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { VehicleMark } from './vehicle-mark-model';
import { Vehicle } from './vehicle-model';
import { User } from './user-model';

@Table
export class Registration extends Model {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING })
  number: string;

  @Column({ type: DataType.DATE })
  date: Date;

  @ForeignKey(() => Vehicle)
  @Column({ type: DataType.INTEGER })
  vehicle_id: number;

  @BelongsTo(() => Vehicle)
  vehicle: Vehicle;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  user_id: number;

  @BelongsTo(() => User)
  user: User;
}