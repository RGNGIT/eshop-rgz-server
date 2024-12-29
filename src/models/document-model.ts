import { Table, Column, Model, DataType, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from './user-model';

@Table
export class Document extends Model {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING })
  serial: string;

  @Column({ type: DataType.STRING })
  number: string;

  @Column({ type: DataType.STRING })
  issued: string;

  @Column({ type: DataType.DATE })
  issued_date: Date;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  user_id: number;

  @BelongsTo(() => User)
  user: User;
}