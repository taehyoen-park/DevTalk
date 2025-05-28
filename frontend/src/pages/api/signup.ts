import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== 'POST') {
    // POST 요청 아니면 405 Method Not Allowed 응답
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    //const { name, email, password } = req.body;

    // 여기서 form 데이터 검증, DB 저장 등 로직 수행
    // 예) if (!email || !password) throw new Error('Missing fields');

    // 예시: DB 저장 성공 가정
    // await db.users.create({ name, email, password });
    console.log("안녕");
    return res.status(201).json({ success: true });
  } catch (error: any) {
    return res.status(400).json({ success: false, message: error.message || 'Signup failed' });
  }
}