import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { LocalityType } from './locality-type-model';
import { Address } from './address-model';

@Table
export class Locality extends Model {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING })
  name: string;

  @ForeignKey(() => LocalityType)
  @Column({ type: DataType.INTEGER })
  locality_type_id: number;

  @BelongsTo(() => LocalityType)
  locality_type: LocalityType;

  @HasMany(() => Address)
  addressess: Address[];
}