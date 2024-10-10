import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class RideInfo{
    @PrimaryGeneratedColumn()
    id: number

   @Column()
   make: string

   @Column()
   model: string

   @Column()
   year: number

   @Column()
   type: string
    
   

}