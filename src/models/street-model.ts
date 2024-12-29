import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { StreetType } from './street-type-model';
import { Address } from './address-model';

@Table
export class Street extends Model {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING })
  name: string;

  @ForeignKey(() => StreetType)
  @Column({ type: DataType.INTEGER })
  street_type_id: number;

  @BelongsTo(() => StreetType)
  street_type: StreetType;

  @HasMany(() => Address)
  addresses: Address[];
}