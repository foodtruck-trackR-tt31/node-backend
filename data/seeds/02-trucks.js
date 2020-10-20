exports.seed = function(knex) {
    return knex('trucks').insert([
      {
        operator_id: 1,
        cuisine: 'Dessert',
        city: 'Friendship'
      },
      {
        operator_id: 1,
        cuisine: 'Fried food',
        city: 'Mystic'
      },
      {
        operator_id: 2,
        cuisine: 'Italian',
        city: 'Newport'
      }
    ]);
  };