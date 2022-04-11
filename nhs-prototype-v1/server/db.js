const Pool=require("pg").Pool;

const pool= new Pool({
    user: "postgres",
    password: "Go@lie2004",
    host: "localhost",
    port: 5432,
    database: "nhsdb"

}) 

module.exports = pool;