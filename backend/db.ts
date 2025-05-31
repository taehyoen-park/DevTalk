import { Pool } from 'pg';

const pool = new Pool({
  user: 'devtalk_dev_user',
  host: 'localhost',
  database: 'devtalk_dev',
  password: 'epqmxhzm4625@',
  port: 5432, // 기본 포트
});

module.exports = pool;
// export default pool;