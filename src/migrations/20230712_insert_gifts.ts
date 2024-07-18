import db from '../config/database';

const insertGifts = async () => {
  const query = `
    INSERT INTO gifts (name, remaining, expiryDate, value) VALUES
    ('Gift 1', 10, '2024-12-31', 100),
    ('Gift 2', 20, '2024-11-30', 200),
    ('Gift 3', 30, '2024-10-31', 300),
    ('Gift 4', 40, '2024-09-30', 400),
    ('Gift 5', 50, '2024-08-31', 500)
  `;

  try {
    await db.query(query);
    console.log('Gifts inserted successfully');
  } catch (error) {
    console.error('Error inserting gifts:', error);
  }
};

export default insertGifts;