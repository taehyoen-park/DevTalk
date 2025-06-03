import express from 'express'
import fs from 'fs';
import path from 'path';
import pool from '../db';
import {getNowTime} from '../utils/time';
const router = express.Router();

router.post('/newpost', async (req: any, res: any) => {

    const { title, content, tags } = req.body;
    if (!title || !content || !tags) {
        return res.status(400).json({ message: '모든 필드를 입력해주세요.' });
    }

    const userid = req.user.userid;
    const nowTime = getNowTime();
    
    const postQuery = `INSERT INTO post ( userid, title, content, time) VALUES ( $1, $2, $3, $4 ) RETURNING postid;`

    const placeholders = tags.map((_:string, i:number) => `($${i + 1})`).join(', ');
    //console .log("placeholders", placeholders, tags)
    const tagQuery = `INSERT INTO tags (tagname) VALUES ${placeholders} ON CONFLICT (tagname) DO NOTHING;`;

    const posts_tagsQuery = `INSERT INTO posts_tags (postid, tagid) SELECT ($1) ,tagid FROM tags WHERE tags.tagname = ANY($2);`;

    try {
        await pool.query('BEGIN');

        const result = await pool.query(postQuery,[userid,title, content, nowTime]);

        await pool.query(tagQuery,tags); 

        await pool.query(posts_tagsQuery ,[result.rows[0].postid,tags]);
       
        await pool.query('COMMIT');

        res.status(201).json({ message: '게시물이 성공적으로 생성되었습니다.', postId: result.rows[0].id });
    }

    catch (error) {
        console.error("게시물 생성 실패:", error);
        res.status(500).json({ message: '서버 오류', error });
    }
});

export default router;