import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1602846369559 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'images',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'path',
                    type: 'varchar',
                },
                {
                    // Precisamos salvar o id do orfanato pois o relacionamento é muitos para um
                    // Muitas imagens para um orfanato
                    name: 'orphanage_id', 
                    type: 'integer',
                }
            ],
            foreignKeys: [
                {
                    name: 'ImageOrphanage', // Facilita na hora de deletar a chave estrangeira
                    columnNames: ['orphanage_id'], // Nome da coluna que armazena o relacionamento
                    referencedTableName: 'orphanages', // Qual tabela ela se relaciona
                    referencedColumnNames: ['id'], // Coluna na tabela de orfanatos que está relacionando
                    onUpdate: 'CASCADE', // O que fazer quando modificar o id do orfanato? CASCADE altera para todas as imagens
                    onDelete: 'CASCADE', // Deleta as imagens caso o orfanato seja deletado
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('images');
    }

}
