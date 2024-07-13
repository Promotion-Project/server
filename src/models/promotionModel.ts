import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'your_password',
    database: 'gift_promotion_db'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the MySQL server.');
});

export default connection;