exports.up = function(knex) {
    return knex.schema

    // Users
    .createTable('users', tbl => {
        tbl.increments();
        tbl.string('username', 128)
            .notNullable()
            .unique();
        tbl.string('password', 128)
            .notNullable();
        tbl.integer('role')
            .notNullable();
        tbl.string('city');
    })

    // Trucks
    .createTable('trucks', tbl => {
        tbl.increments();
        tbl.integer('operator_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl.string('name');
        tbl.string('description');
        tbl.string('cuisine');
        tbl.string('imageUrl');
        tbl.string('city');
    })

    // Menu
    .createTable('menu', tbl => {
        tbl.increments();
        tbl.integer('truck_id')
            .notNullable()
            .references('id')
            .inTable('trucks')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl.string('name')
            .notNullable();
        tbl.float('price')
            .notNullable();
    })

    // Favorite Trucks
    .createTable('favorite_trucks', tbl => {
        tbl.increments();
        tbl.integer('diner_id')
           .references('id')
           .inTable('users');
        tbl.integer('truck_id')
           .references('id')
           .inTable('trucks');
    })

    // Reviews
    .createTable('reviews', tbl => {
        tbl.increments();
        tbl.integer('truck_id')
           .notNullable()
           .references('id')
           .inTable('trucks')
           .onDelete('CASCADE')
           .onUpdate('CASCADE');
        tbl.integer('user_id')
           .notNullable()
           .references('id')
           .inTable('users')
           .onDelete('CASCADE')
           .onUpdate('CASCADE');
        tbl.integer('rating')
           .notNullable();
        tbl.text('review')
           .notNullable();
    })
  };
  
  exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('reviews')
    .dropTableIfExists('favorite_trucks')
    .dropTableIfExists('menu')
    .dropTableIfExists('trucks')
    .dropTableIfExists('users');
  };