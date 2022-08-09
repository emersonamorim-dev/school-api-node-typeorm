import { AppDataSource } from "../data-source";
import { Assunto } from "../entities/Assunto";

export const assuntoRepository = AppDataSource.getRepository(Assunto)