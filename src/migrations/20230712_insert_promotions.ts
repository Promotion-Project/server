import connection from '../config/database';

console.log('Starting data insertion: 20230712_insert_promotions');

const query = `
  INSERT INTO promotions (name, date, sentGifts, daysToTakeGift, daysToReceiveGift, description, cardNumbers) VALUES
  ('Promotion 1', '2024-01-01', 10, 5, 7, 'Description for Promotion 1', '123456,234567'),
  ('Promotion 2', '2024-01-02', 15, 4, 6, 'Description for Promotion 2', '345678,456789'),
  ('Promotion 3', '2024-01-03', 20, 3, 5, 'Description for Promotion 3', '567890,678901'),
  ('Promotion 4', '2024-01-04', 25, 6, 8, 'Description for Promotion 4', '789012,890123'),
  ('Promotion 5', '2024-01-05', 30, 2, 4, 'Description for Promotion 5', '901234,123456'),
  ('Promotion 6', '2024-01-06', 35, 5, 7, 'Description for Promotion 6', '234567,345678'),
  ('Promotion 7', '2024-01-07', 40, 4, 6, 'Description for Promotion 7', '456789,567890'),
  ('Promotion 8', '2024-01-08', 45, 3, 5, 'Description for Promotion 8', '678901,789012'),
  ('Promotion 9', '2024-01-09', 50, 6, 8, 'Description for Promotion 9', '890123,901234'),
  ('Promotion 10', '2024-01-10', 55, 2, 4, 'Description for Promotion 10', '123456,234567'),
  ('Promotion 11', '2024-01-11', 60, 5, 7, 'Description for Promotion 11', '345678,456789'),
  ('Promotion 12', '2024-01-12', 65, 4, 6, 'Description for Promotion 12', '567890,678901'),
  ('Promotion 13', '2024-01-13', 70, 3, 5, 'Description for Promotion 13', '789012,890123'),
  ('Promotion 14', '2024-01-14', 75, 6, 8, 'Description for Promotion 14', '901234,123456'),
  ('Promotion 15', '2024-01-15', 80, 2, 4, 'Description for Promotion 15', '234567,345678'),
  ('Promotion 16', '2024-01-16', 85, 5, 7, 'Description for Promotion 16', '456789,567890'),
  ('Promotion 17', '2024-01-17', 90, 4, 6, 'Description for Promotion 17', '678901,789012'),
  ('Promotion 18', '2024-01-18', 95, 3, 5, 'Description for Promotion 18', '890123,901234'),
  ('Promotion 19', '2024-01-19', 100, 6, 8, 'Description for Promotion 19', '123456,234567'),
  ('Promotion 20', '2024-01-20', 105, 2, 4, 'Description for Promotion 20', '345678,456789');
`;

connection.query(query, (err, results) => {
  if (err) {
    console.error('Error inserting data:', err);
  } else {
    console.log('Data insertion completed successfully');
  }
  connection.end();
});