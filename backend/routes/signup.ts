import express from 'express'
import bcrypt from 'bcrypt';
import pool from '../db'; // Assuming you have a db.js file that exports the pool
const router = express.Router();

router.post('/signup', async (req : any, res : any) => {
  console.log("요청:", req.body)

  if (!req.body.username) {
    return res.status(400).json({ message: '사용자 이름이 필요합니다' });
  }
  if (!req.body.password) {
    return res.status(400).json({ message: '비밀번호가 필요합니다' });
  }
  if (!req.body.email) {
    return res.status(400).json({ message: '이메일이 필요합니다' });
  }

  const hashedPassword = await bcrypt.hash(req.body.password, 10); // saltRounds = 10
  const data = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
      [data.username, data.email, hashedPassword ]);
      res.status(201).json(result.rows[0]);
  } 
  catch (err) {
    console.error(err);
    res.status(500).send('DB 오류 발생');
  }
})

export default router;