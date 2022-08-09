import { Request, Response } from 'express'
import { aulaRepository } from '../repositories/aulaRepository'
import { assuntoRepository } from '../repositories/assuntoRepository'
import { videoRepository } from '../repositories/videoRepository'

export class AulaController {
    async create(req: Request, res: Response) {
        const { name, description } = req.body

        try {
            const newAula = aulaRepository.create({ name, description })
            await aulaRepository.save(newAula)

            return res.status(201).json(newAula)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Server Error' })

        }
    }

    async createVideo(req: Request, res: Response) {
        const { title, url } = req.body
        const { idAula } = req.params

        try {
            const aula = await aulaRepository.findOneBy({ id: Number(idAula) })

            if (!aula) {
                return res.status(404).json({ message: 'Classroom not found' })

            }

            const newVideo = videoRepository.create({
                title,
                url,
                aula,
            })

            await videoRepository.save(newVideo)

            return res.status(201).json(newVideo)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Server Error' })
        }
    }

    async aulaAssunto(req: Request, res: Response) {
        const { assunto_id } = req.body
        const { idAula } = req.params

        try {
            const aula = await aulaRepository.findOneBy({ id: Number(idAula) })

            if (!aula) {
                return res.status(404).json({ message: 'ClassRoon not found' })
            }

            const assunto = await assuntoRepository.findOneBy({
                id: Number(assunto_id),
            })

            if (!assunto) {
                return res.status(404).json({ message: 'Discipline not found' })
            }

            const aulaUpdate = {
                ...aula,
                assuntos: [assunto],
            }

            await aulaRepository.save(aulaUpdate)

            return res.status(204).send()
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Server Error' })
        }
    }

    async list(req: Request, res: Response) {
        try {
            const aulas = await aulaRepository.find({
                relations: {
                    assuntos: true,
                    videos: true,
                },
            })

            return res.json(aulas)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Server Error' })
        }
    }
}