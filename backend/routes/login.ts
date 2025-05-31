import express from 'express'
// import bcrypt from 'bcrypt';
const bcrypt = require('bcrypt');
const pool = require('../db');
const router = express.Router();

router.post('/login', async (req : any, res : any) => {
    console.log("요청:", req.body)

    if (!req.body.email) {
        return res.status(400).json({ message: '사용자 이름이 필요합니다' });
    }
    if (!req.body.password) {
        return res.status(400).json({ message: '비밀번호가 필요합니다' });
    }

    const data = req.body;
    const result = await pool.query(
        'SELECT * FROM users WHERE email = $1',
        [data.email]
    );
    if (result.rowCount === 0) {
        return res.status(401).json({ message: '존재하지 않는 사용자입니다.' });
    }

    
    const user = result.rows[0];
    const isPasswordCorrect = await bcrypt.compare(data.password, user.password);
    if (!isPasswordCorrect) {
        console.log("비밀번호 불일치:", user);
        res.status(401).json({ message: '비밀번호가 일치하지 않습니다.', isPasswordCorrect });
    }
    else {
        console.log("로그인 성공:", user);
        res.status(200).json({ message: '로그인 성공', user });
    }
   

})

module.exports = router;