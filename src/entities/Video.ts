import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn
} from "typeorm";
import { Aula } from "./Aula";

@Entity('videos')
export class Video {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text' })
    title: string

    @Column({ type: 'text' })
    url: string

    @ManyToOne(() => Aula, aula => aula.videos)
    @JoinColumn({ name: 'aula_id' })
    aula: Aula

}