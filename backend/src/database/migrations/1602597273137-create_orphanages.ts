import { name } from "express";
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1602597273137 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({ 
      name : 'orphanages' ,
      columns : [
        { 
          name: 'id',
          type: 'integer',
          unsigned: true,  // Indica que essa coluna não pode ser negativa
          isPrimary: true,  //Primary Key
          isGenerated: true, //Coluna será gerada automaticamente
          generationStrategy: 'increment'
        },
        { 
          name: 'name',
          type: 'varchar'
        },
        { 
          name: 'latitude',
          type: 'decimal',
          scale: 10,       // Números antes e depois da virgula
          precision: 2,
        },
        { 
          name: 'longitude',
          type: 'decimal',
          scale: 10,       // Números antes e depois da virgula
          precision: 2,
        },
        { 
          name: 'about',
          type: 'text'
        },
        { 
          name: 'instructions',
          type: 'text'
        },
        {
          name: 'opening_hours',
          type: 'varchar'
        },
        { 
          name: 'open_on_weekends',
          type: 'boolean',
          default: false
        }
       
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('orphanages')
  }

}
