const connection = require('./src/migrations/config');

connection.query('SELECT 1', (err, results) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
  } else {
    console.log('Database connection successful:', results);
  }
  connection.end();
});