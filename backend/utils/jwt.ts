import jwt from 'jsonwebtoken';

const ACCESS_SECRET = process.env.JWT_ACCESS_SECRET!;
const REFRESH_SECRET = process.env.JWT_REFRESH_SECRET!;

export const generateAccessToken = (userid: string) => {
  return jwt.sign({ userid }, ACCESS_SECRET, { expiresIn: '15m' });
};

export const generateRefreshToken = (userid: string) => {
  return jwt.sign({ userid }, REFRESH_SECRET, { expiresIn: '7d' });
};