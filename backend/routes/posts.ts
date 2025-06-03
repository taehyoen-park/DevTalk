import express from 'express'
import fs from 'fs';
import path from 'path';
import pool from '../db';

const router = express.Router();

router.get('/posts', async (req : any, res : any) => {

    const queryPath = path.join(process.cwd(), 'sql', 'get_posts_with_tags.sql');
    const Query = fs.readFileSync(queryPath, 'utf-8');
    //console.log("쿼리 :", Query);
    try {
        const result = await pool.query(Query);
        if (result.rowCount === 0) {
            return res.status(404).json({ message: '게시물이 없습니다.' });
        }

        // console.log("게시물 조회 성공:", result.rows);
        res.status(200).json({ message: '게시물 조회 성공', posts: result.rows});

    } catch (error) {
        console.error("게시물 조회 실패:", error);
        res.status(500).json({ message: '서버 오류', error });
    }

})

export default router;