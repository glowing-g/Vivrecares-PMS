const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const app = express();

// Database connection configuration
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_vivre'
};

// Create the connection pool
const pool = mysql.createPool(dbConfig);

app.use(cors({
  origin: 'http://localhost:3000' // Your frontend URL
}));
app.use(express.json());

// Login route with database verification
app.post('/api/auth/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    // Get connection from pool
    const connection = await pool.getConnection();
    
    // Query to check credentials
    const [users] = await connection.execute(
      'SELECT * FROM users WHERE username = ? AND password = ?',
      [username, password]
    );
    
    // Release the connection
    connection.release();

    if (users.length > 0) {
      // User found - credentials are correct
      res.json({
        success: true,
        token: 'your-auth-token',
        user: {
          id: users[0].id,
          username: users[0].username,
          // Add other user details as needed
        }
      });
    } else {
      // No user found - invalid credentials
      res.status(401).json({
        success: false,
        message: 'Invalid username or password'
      });
    }

  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));