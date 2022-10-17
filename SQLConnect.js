const mysql = require('mysql');
const MySQLObj = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'food',
    port: 3388,
};

const client = mysql.createConnection(MySQLObj);

function SQLConnect(sql, arr, callback) {
    // setInterval(() => {
    client.query(sql, arr, (error, result) => {
        if (error) {
            console.log(error);
            // return;
            SQLConnect(sql, arr, callback);
        }
        callback(result);
    });
    // }, 120000);
}

module.exports = SQLConnect;
