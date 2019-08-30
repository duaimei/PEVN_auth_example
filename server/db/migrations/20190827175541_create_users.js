
exports.up = function(knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments('id');
    table.string('first_name', 250);
    table.string('last_name', 250);
    table.string('provider', 250);
    table.string('uid', 500);
    table.string('oauth_token', 500)
    table.timestamp('oauth_expires_at')
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at');
  })
};

exports.down = function(knex) {
  return knex.schema
      .dropTableIfExists('users')
};
