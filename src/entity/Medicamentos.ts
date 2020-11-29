import { ReacoesAdversas } from "./ReacoesAdversas";
import { Fabricante } from "./Fabricante";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  ManyToMany,
} from "typeorm";

@Entity()
export class Medicamentos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nomeMedicamento: string;

  @Column()
  telefoneSAC: string;

  @Column()
  preco: number;

  @Column()
  quantidadeComprimidos: number;

  @OneToOne((type) => Fabricante, (fabricante) => fabricante.medicamento, {
    cascade: true,
  })
  fabricante: Fabricante;

  @ManyToMany((type) => ReacoesAdversas, (rea) => rea.medicamentos)
  reacoes: ReacoesAdversas[];
}
