import express from 'express'
// import bcrypt from 'bcrypt';
const bcrypt = require('bcrypt');
const pool = require('../db');
const router = express.Router();

router.get('/posts', async (req : any, res : any) => {
    console.log("요청:", req.body)

    try {
        const result = await pool.query('SELECT * FROM post');
        if (result.rowCount === 0) {
            return res.status(404).json({ message: '게시물이 없습니다.' });
        }

        console.log("게시물 조회 성공:", result.rows);
        res.status(200).json({ message: '게시물 조회 성공', posts: result.rows });
    } catch (error) {
        console.error("게시물 조회 실패:", error);
        res.status(500).json({ message: '서버 오류', error });
    }

})

module.exports = router;