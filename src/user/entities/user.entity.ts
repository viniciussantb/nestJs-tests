import { Column, PrimaryGeneratedColumn } from "typeorm";

export class User {
  
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'name', type: String })
  name!: string;

  @Column({ name: 'username', type: String })
  username!: string;

  @Column({ name: 'password', type: String })
  password!: string;
}
