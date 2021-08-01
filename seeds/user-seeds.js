const { User } = require('../models');

const userData = [{
        username: 'Ayomide',
        password: 'password'

    },
    {
        username: 'Ayomikun',
        password: 'password'
    },
    {
        username: 'Ayomiposi',
        password: 'password'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;