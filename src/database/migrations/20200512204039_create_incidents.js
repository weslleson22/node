
exports.up = function(knex) {
    /**o metodo up sempre é responsavel pela criação da tabela do banco de dados */
    return knex.schema.createTable('incidents', function (table) {
        table.increments();
       table.string('title').notNullable();
       table.string('description').notNullable();
       table.string('value').notNullable();
       table.string('ong_id').notNullable();
       table.foreign('ong_id').references('id').inTable('ongs');
       
    });
};

exports.down = function(knex) {
    /**metodo down é para desfazer as tabelas criadas */
   return knex.schema.dropTable('incidents'); 
};
