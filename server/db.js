const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    password: 'admin',
    host: 'localhost',
    database: 'perntodo',
    port: 5432,
});

module.exports = pool;