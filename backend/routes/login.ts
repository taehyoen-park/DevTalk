import express from 'express'
import { compare } from '../utils/bcrypt'
import { generateAccessToken, generateRefreshToken } from '../utils/jwt'
import pool from '../db';
import redis from '../config/redis';
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
    const accessToken = generateAccessToken(user.userid);
    const refreshToken = generateRefreshToken(user.userid);

    await redis.set(`refresh:${user.userid}`, refreshToken);
    res.cookie('accessToken', accessToken, {
        httpOnly: true,
        secure: false,    // HTTPS 환경에서만 전송
        sameSite: 'strict',
        maxAge: 1000 * 60 * 15,  // 15분
    });
    
    const isPasswordCorrect = await compare(data.password, user.password);
    if (!isPasswordCorrect) {
        console.log("비밀번호 불일치:", user);
        res.status(401).json({ message: '비밀번호가 일치하지 않습니다.', isPasswordCorrect });
    }
    else {
        console.log("로그인 성공:", user);
        res.status(200).json({ message: '로그인 성공', user });
    }
   

})

export default router;