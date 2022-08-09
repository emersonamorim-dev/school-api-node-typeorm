import { Router } from 'express'
import { AulaController } from './controllers/AulaController'
import { AssuntoController } from './controllers/AssuntoController'

const routes = Router()

routes.post('/assunto', new AssuntoController().create)
routes.post('/aula', new AulaController().create)
routes.get('/aula', new AulaController().list)
routes.post('/aula/:idAula/create', new AulaController().createVideo)
routes.post('/aula/:idAula/assunto', new AulaController().aulaAssunto)
export default routes
