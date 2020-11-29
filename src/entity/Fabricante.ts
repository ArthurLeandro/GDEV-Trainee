import { Medicamentos } from "./Medicamentos";
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";

@Entity()
export class Fabricante {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne((type) => Medicamentos, (medicamento) => medicamento.fabricante)
  medicamento: Medicamentos;
}
