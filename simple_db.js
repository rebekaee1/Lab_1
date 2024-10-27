// Импортируем библиотеку pg
const { Client } = require('pg');

// Создаем клиента с параметрами подключения
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'testdb',
  password: 'password',
  port: 5432,
});

// Простая функция для тестирования подключения
async function testConnection() {
  try {
    // Подключаемся к базе
    await client.connect();
    console.log('Connected to PostgreSQL');

    // Выполняем простой запрос
    const res = await client.query('SELECT NOW()');
    console.log('Current time in database:', res.rows[0]);

    // Закрываем соединение
    await client.end();
    console.log('Connection closed');
  } catch (err) {
    console.error('Error:', err);
  }
}

// Запускаем тест
testConnection();
