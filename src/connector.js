// Import the 'mysql2' module for MySQL database connectivity
var mysql = require('mysql2');



// Create a MySQL connection using connection parameters
var con = mysql.createConnection({
    host: "HOST12",
    user: "USERNAME",
    password: "PASSWORD1",
    database: "DATABASE",
    port:"PORT" // Port number for the MySQL server
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
