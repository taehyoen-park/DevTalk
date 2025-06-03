import { createClient } from 'redis';

const redisClient = createClient({
  url: 'redis://localhost:6379', // 필요 시 비밀번호 포함 가능
});

redisClient.on('error', (err) => console.error('Redis error:', err));

await redisClient.connect(); // 꼭 연결해야 함

export default redisClient;