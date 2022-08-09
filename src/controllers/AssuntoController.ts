import { Request, Response } from 'express'
import { assuntoRepository } from '../repositories/assuntoRepository'

export class AssuntoController {
    async create(req: Request, res: Response) {
        const { name } = req.body

        if (!name) {
            return res.status(400).json({ message: ' Nome é obrigatório' })
        }

        try {
            const newAssunto = assuntoRepository.create({ name })

            await assuntoRepository.save(newAssunto)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Server Error' })
        }
    }

}