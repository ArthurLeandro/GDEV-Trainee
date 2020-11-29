import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Medicamentos } from "./Medicamentos";

@Entity()
export class ReacoesAdversas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  descricao: string;

  @OneToMany((type) => Medicamentos, (med) => med.reacoes)
  medicamentos: Medicamentos[];
}
