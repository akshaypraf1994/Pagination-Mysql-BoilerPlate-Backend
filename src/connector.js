// Import the 'mysql2' module for MySQL database connectivity
var mysql = require('mysql2');

// Create a MySQL connection using connection parameters
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Akshay@1994",
    database: "test",
    port: 3306 // Port number for the MySQL server
});

// Establish a connection to the MySQL server
con.connect(function (err) {
    // Check for connection error
    if (err) {
        return console.log("failed to connect to MySQL server/database", err);
    } else {
        return console.log("Connection established with the database!");
    }
});

// Export the MySQL connection object to make it available to other modules
module.exports = con;
