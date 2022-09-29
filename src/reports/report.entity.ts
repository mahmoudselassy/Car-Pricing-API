import { User } from 'src/users/user.entity';
import { PrimaryGeneratedColumn, Entity, Column, ManyToOne } from 'typeorm';
@Entity()
export class Report {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  price: number;
  @Column({ default: false })
  approved: boolean;
  @Column()
  make: string;
  @Column()
  model: string;
  @Column()
  year: number;
  @Column()
  lat: number;
  @Column()
  lng: number;
  @Column()
  mileage: number;
  @ManyToOne(() => User, (user) => user.reports)
  user: User;
}
