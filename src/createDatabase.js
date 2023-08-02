c// Import the 'connector' module to establish a database connection
let con = require('./connector');

// Import the 'data' module that contains sample data for the orders
let data = require('./data');

// Define an async function 'a' that performs database setup and operations
let a = async (err) => {
    // Check for connection error
    if (err) return console.log("failed to connect to mysql server/ database", err);
    else {
        // Drop the 'orders' table if it exists
        await new Promise((resolve, reject) => {
            con.query('DROP TABLE IF EXISTS orders', (err) => {
                if (err) reject(err)
                else {
                    resolve(1)
                }
            })
        });

        // Create the 'orders' table
        await new Promise((resolve, reject) => {
            console.log('Creating orders table');
            con.query('CREATE TABLE orders(_id varchar(200), title varchar(100), description varchar(1000) )', (err) => {
                if (err) reject(err)
                else resolve(1)
            })
        });

        // Insert sample data into the 'orders' table
        for (let i = 0; i < data.length; i++) {
            await new Promise((resolve, reject) => {
                con.query(`INSERT into orders values("${data[i]._id}","${data[i].title}","${data[i].description}")`, (err) => {
                    if (err) reject(err)
                    else { resolve(1) }
                })
            });
        }
    }

    // Query and retrieve data from the 'orders' table
    let [error, result] = await new Promise((resolve, reject) => {
        con.query('SELECT * FROM orders', (err, data) => {
            if (err) reject([err, undefined])
            else resolve([undefined, data])
        })
    });

    // Handle error during data retrieval
    if (error) {
        console.log(error);
    }
}

// Call the async function 'a' to perform the database setup and operations
a();
