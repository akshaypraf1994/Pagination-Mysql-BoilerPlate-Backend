const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');

const port =  process.env.Port || 8080;
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Library API",
      version: '1.0.0',
    },
  },
  apis: ["index.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

/**
 * @swagger
 * /api/orders?limit=4&offset=3:
 *   get:
 *     description: Get all orders
 *     responses:
 *       200:
 *         description: Success
 * 
 */
// Middleware to parse JSON bodies (as sent by API clients)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Akshay@1994',
  database: 'test',
  connectionLimit: 10,
});

// Route for handling GET requests to '/api/orders'
app.get('/api/orders', async (req, res) => {
  // Parse 'limit' and 'offset' query parameters with default values
  const limit = parseInt(req.query.limit) || 10;
  const offset = parseInt(req.query.offset) || 0;

  // Validate and set 'limit' and 'offset' to defaults if invalid
  const validLimit = Number.isInteger(limit) && limit > 0 ? limit : 10;
  const validOffset = Number.isInteger(offset) && offset >= 0 ? offset : 0;

  try {
    // Get a connection from the pool
    const conn = await pool.getConnection();

    // Fetch orders data with the provided 'limit' and 'offset'
    const [rows] = await conn.query(
      'SELECT * FROM orders LIMIT ? OFFSET ?',
      [validLimit, validOffset]
    );

    // Release the connection back to the pool
    conn.release();

    // Send a JSON response with the fetched rows
    res.status(200).json(rows);
  } catch (error) {
    // Handle errors: log the error and send a 500 Internal Server Error response
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the Express app and listen on the specified port
app.listen(port, () => console.log(`App listening on port ${port}!`));
