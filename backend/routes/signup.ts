import express from 'express';
const router = express.Router();

router.post('/signup', (req : any, res : any) => {
  console.log("요청:", req.body)
  res.json({ message: "요청 성공", data: req.body })
})

module.exports = router;