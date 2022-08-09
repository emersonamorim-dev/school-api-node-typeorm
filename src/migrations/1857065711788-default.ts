
import { MigrationInterface, QueryRunner } from "typeorm";

export class default1857065711788 implements MigrationInterface {
    name = 'default1857065711788'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "videos" ("id" SERIAL NOT NULL, "title" text NOT NULL, "url" text NOT NULL, "aula_id" integer, CONSTRAINT "PK_e4c86c0cf95aff16e9fb8220f6b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "aulas" ("id" SERIAL NOT NULL, "name" text NOT NULL, CONSTRAINT "PK_0368a2d7c215f2d0458a54933f2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "videos" ADD CONSTRAINT "FK_64bb2d8544299bbde670698ac37" FOREIGN KEY ("aula_id") REFERENCES "aulas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "videos" DROP CONSTRAINT "FK_64bb2d8544299bbde670698ac37"`);
        await queryRunner.query(`DROP TABLE "aulas"`);
        await queryRunner.query(`DROP TABLE "videos"`);
    }

}