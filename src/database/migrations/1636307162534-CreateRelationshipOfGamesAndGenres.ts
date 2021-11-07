import { MigrationInterface, QueryRunner, Table } from "typeorm";

const tableName = "genres_games";

export class CreateRelationshipOfGamesAndGenres1636307162534 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: tableName,
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "game_id",
            type: "uuid",
          },
          {
            name: "genre_id",
            type: "uuid",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKGameGenre",
            referencedTableName: "games",
            referencedColumnNames: ["id"],
            columnNames: ["game_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
          {
            name: "FKGenreGame",
            referencedTableName: "genres",
            referencedColumnNames: ["id"],
            columnNames: ["genre_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(tableName);
  }
}
