import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_ACCESS_SECRET || 'your-secret-key';

export function requireAuth(req: any, res: any, next: any) {
  try {

    const token = req.cookies?.accessToken;

    if (!token) {
      return res.status(401).json({ message: '토큰이 없습니다. 로그인 필요' });
    }

    const payload = jwt.verify(token, SECRET_KEY);
    req.user = payload;

    next(); // 다음 미들웨어 혹은 라우터로 이동
  } catch (err) {
    console.error('JWT 검증 실패:', err);
    res.status(401).json({ message: '유효하지 않은 토큰입니다.' });
  }
}