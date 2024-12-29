import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from './user-model';
import { Street } from './street-model';
import { Locality } from './locality-model';

@Table
export class Address extends Model {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING })
  house_number: string;

  @Column({ type: DataType.STRING })
  appartment_number: string;

  @Column({ type: DataType.STRING })
  index: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  user_id: number;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => Street)
  @Column({ type: DataType.INTEGER })
  street_id: number;

  @BelongsTo(() => Street)
  street: Street;

  @ForeignKey(() => Locality)
  @Column({ type: DataType.INTEGER })
  locality_id: number;

  @BelongsTo(() => Locality)
  locality: Locality;
}