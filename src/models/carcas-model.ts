import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Vehicle } from './vehicle-model';

@Table
export class Carcas extends Model {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING })
  name: string;

  @HasMany(() => Vehicle)
  vehicles: Vehicle[];
}