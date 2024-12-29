import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Locality } from './locality-model';

@Table
export class LocalityType extends Model {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING })
  name: string;

  @HasMany(() => Locality)
  localities: Locality[];
}