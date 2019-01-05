'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');
const Database = use('Database');
const Type = use('App/Models/Type');
const User = use('App/Models/User');
const Product = use('App/Models/Product');

class UserSeeder {
  async run() {
    await User.query().delete();

    await Database.table('users').insert(
        [{
          username: 'test',
          email: 'test@test.com',
          password: 'test',
          created_at: Database.fn.now()
        },
          {
            username: 'admin',
            email: 'admin@test.com',
            password: 'admin',
            created_at: Database.fn.now(),

          }

        ]
    )
  }
}

module.exports = UserSeeder
