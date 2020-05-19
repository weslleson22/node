
exports.up = function(knex) {
    /**o metodo up sempre é responsavel pela criação da tabela do banco de dados */
    return knex.schema.createTable('ongs', function (table) {
       table.string('id').primary();
       table.string('name').notNullable();
       table.string('email').notNullable();
       table.string('whatsapp').notNullable();
       table.string('city').notNullable();
       table.string('uf', 2).notNullable();

    });
};

exports.down = function(knex) {
    /**metodo down é para desfazer as tabelas criadas */
   return knex.schema.dropTable('ongs'); 
};
