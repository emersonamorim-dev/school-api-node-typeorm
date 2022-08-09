import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { Video } from './Video'
import { Assunto } from './Assunto'

@Entity('aulas')
export class Aula {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text' })
    name: string

    @Column({ type: 'text', nullable: true })
    description: string

    @OneToMany(() => Video, video => video.aula)
    videos: Video[]

    @ManyToMany(() => Assunto, assunto => assunto.aulas)
    assuntos: Assunto[]

}