import connection from '../config/database';

console.log('Starting migration: 20230712_create_promotions_table');

const query = `
  CREATE TABLE IF NOT EXISTS promotions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    sentGifts INT NOT NULL,
    description TEXT,
    cardNumbers TEXT
  )
`;

connection.query(query, (err, results) => {
  if (err) {
    console.error('Error running migration:', err);
  } else {
    console.log('Migration completed successfully');
  }
  connection.end();
});