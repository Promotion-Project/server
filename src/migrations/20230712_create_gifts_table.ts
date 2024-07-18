import db from '../config/database';

const createGiftsTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS gifts (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      remaining INT NOT NULL,
      expiryDate DATE NOT NULL,
      value INT NOT NULL
    )
  `;

  try {
    await db.query(query);
    console.log('Gifts table created successfully');
  } catch (error) {
    console.error('Error creating gifts table:', error);
  }
};

export default createGiftsTable;