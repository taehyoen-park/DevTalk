import express from 'express'
import fs from 'fs';
import path from 'path';
import pool from '../db';

const router = express.Router();

router.get('/post/:id', async (req : any, res : any) => 
{

    const postid = req.params.id // ← URL에서 id 추출
    //console.log("백엔드 id:",userid);
    const GET_POST = 'SELECT post.*,users.name FROM post JOIN users ON post.userid = users.userid WHERE post.postid = ($1)'
    const GET_TAG_ID = 'SELECT posts_tags.tagid FROM posts_tags WHERE posts_tags.postid = ($1)'
    
    //console.log("쿼리 :", Query);
    try {

        await pool.query('BEGIN');

        const post = await pool.query(GET_POST,[postid]);
        const tagids = await pool.query(GET_TAG_ID,[postid]);
        
        const tag = tagids.rows.map(tag => tag.tagid)
        const placeholders = tagids.rows.map((_:string, i:number) => `$${i + 1}`).join(', ');
        const GET_TAG_NAME = `SELECT tagname FROM tags WHERE tagid IN (${placeholders})`;
        const tags = await pool.query(GET_TAG_NAME,tag);

        await pool.query('COMMIT');

        if (!post.rows[0]) {
            return res.status(404).json({ message: '게시물이 없습니다.' });
        }

        const result =  {
            postid:post.rows[0].postid,
            username:post.rows[0].name,
            title:post.rows[0].title,
            content:post.rows[0].content,
            tags: tags.rows,
            time:post.rows[0].time

        }
        res.status(200).json(result);

    } catch (error) {
        console.error("게시물 조회 실패:", error);
        res.status(500).json({ message: '서버 오류', error });
    }

})

export default router;