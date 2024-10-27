// tests/db.test.js
const assert = require('assert');
const { Client } = require('pg');

// Тестовая конфигурация
const config = {
  user: 'postgres',
  host: 'localhost',
  database: 'testdb',
  password: 'password',
  port: 5432,
};

describe('Database Tests', () => {
  let client;

  // Подключаемся перед тестами
  before(async () => {
    client = new Client(config);
    await client.connect();
  });

  // Отключаемся после тестов
  after(async () => {
    await client.end();
  });

  // Тест подключения
  it('should connect to database', async () => {
    const result = await client.query('SELECT NOW()');
    assert(result.rows.length > 0);
  });

  // Тест создания таблицы
  it('should create test table', async () => {
    await client.query(`
      CREATE TABLE IF NOT EXISTS test_table (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100)
      )
    `);
    const result = await client.query(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_name = 'test_table'
      )
    `);
    assert(result.rows[0].exists);
  });
});
