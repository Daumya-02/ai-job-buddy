const express = require('express');
const cookie_parser = require("cookie-parser")
const cors = require("cors")

const app = express()

//middlewares
app.use(express.json())
app.use(cookie_parser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials: true
}))

// importing all routers
const authRouter = require("./routes/auth.routes")
const interviewRouter = require("./routes/interview.routes")

// routers
app.use('/api/auth', authRouter)
app.use("/api/interview", interviewRouter)


module.exports = app