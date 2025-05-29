import express from 'express'
const app = express()
const port = 4000
const cors = require('cors')

const signupRouter = require('./routes/signup');

app.use(cors()); // 프론트에서 요청 허용
app.use(express.json()); // JSON 바디 파싱
app.use(express.urlencoded({ extended: true })); // 폼데이터 바디 파싱


app.use('/api', signupRouter);

// app.post('/', (req : any, res : any) => {
//   console.log("요청:", req.body)
//   res.json({ message: "요청 성공", data: req.body })
// })

// app.get('/', (req : any, res : any) => {
//   res.send("결과:",req.body)
// })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})