import { AppDataSource } from "../data-source";
import { Aula } from "../entities/Aula";

export const aulaRepository = AppDataSource.getRepository(Aula)