'use strict'

const Database = use('Database');
const User = use('App/Models/User');

class UserSeeder {
    async run() {
        await User.query().delete();

        const Users = [
            {
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
        await User.createMany(Users)
    }
}

module.exports = UserSeeder