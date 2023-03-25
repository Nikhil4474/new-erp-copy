exports.up = function(knex) {
    return knex.schema.createTable('users', function(table) {
        table.increments('id');
        table.string('name');
        table.string('email').unique();
        table.timestamp('email_verified_at').nullable();
        table.string('password');
        table.string('remember_token');
        table.timestamps();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};