import { Column, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Aula } from "./Aula";

@Entity('assuntos')
export class Assunto {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text' })
    name: string

    @ManyToMany(() => Aula, aula => aula.assuntos)
    @JoinTable({
        name: 'aula_assunto',
        joinColumn: {
            name: 'aula_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'aula_id',
            referencedColumnName: 'id',
        },
    })
    aulas: Aula[]
}
