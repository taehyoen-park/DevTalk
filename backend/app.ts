import express from 'express'
import signupRouter from './routes/signup';
import loginRouter from './routes/login';
import postsRouter from './routes/posts';
import newpostRouter from './routes/newpost';
import cookieParser from 'cookie-parser';
import { requireAuth } from './middleware/requireAuth';
import cors from 'cors';


const app = express()
const port = 4000

app.use(cors({
  origin: 'http://localhost:3000',  // 정확한 도메인을 명시해야 함
  credentials: true,                // 쿠키 등 자격 정보 허용
}));
app.use(express.json()); // JSON 바디 파싱
app.use(cookieParser()); 
app.use(express.urlencoded({ extended: true })); // 폼데이터 바디 파싱


app.use('/api', signupRouter);
app.use('/api', loginRouter);
app.use('/api', postsRouter);
app.use('/api', requireAuth, newpostRouter); // 인증 미들웨어 적용

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})