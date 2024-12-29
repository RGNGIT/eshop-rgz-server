import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Address } from './address-model';
import { Document } from './document-model';
import { Registration } from './registration-model';

@Table
export class User extends Model {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING })
  name: string;

  @Column({ type: DataType.STRING })
  last_name: string;

  @Column({ type: DataType.STRING })
  middle_name: string;

  @Column({ type: DataType.DATE })
  dob: Date;

  @Column({ type: DataType.STRING })
  passport_serial: string;

  @Column({ type: DataType.STRING })
  passport_number: string;

  @Column({ type: DataType.STRING })
  issued: string;

  @Column({ type: DataType.DATE })
  issue_date: Date;

  @HasMany(() => Address)
  addresses: Address[];

  @HasMany(() => Address)
  addressess: Address[];

  @HasMany(() => Document)
  documents: Document[];

  @HasMany(() => Registration)
  registrations: Registration[];
}