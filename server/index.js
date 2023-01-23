const express = require("express")
const app = express()
const Router = require("./router")

app.use("/", Router)

app.listen(3000, () => {
    console.log("서버 구동: PORT번호: 3000")
})
