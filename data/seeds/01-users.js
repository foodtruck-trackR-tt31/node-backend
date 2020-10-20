exports.seed = function(knex) {
    return knex('users').insert([
      {
        username: 'Casper',
        password: 'password1',
        role: 1,
        city: 'Friendship'
      },
      {
        username: 'Fatso',
        password: 'password2',
        role: 1,
        city: 'Portland'
      },
      {
        username: 'Stinkie',
        password: 'password3',
        role: 2,
        city: 'Mystic'
      },
      {
        username: 'Stretch',
        password: 'password4',
        role: 2,
        city: 'Newport'
      }
    ]);
  };