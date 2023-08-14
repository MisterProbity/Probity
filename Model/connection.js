const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"library"
});
connection.connect();
console.log("database is connected!");
module.exports = connection.promise();