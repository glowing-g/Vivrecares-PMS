const db = require('./db');

// Query example
db.query('SELECT * FROM users', (err, results) => {
  if (err) throw err;
  console.log('Users:', results);
});

