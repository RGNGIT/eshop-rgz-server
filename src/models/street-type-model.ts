import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Street } from './street-model';

@Table
export class StreetType extends Model {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING })
  name: string;

  @HasMany(() => Street)
  streets: Street[];
}