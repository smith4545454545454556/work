import express from "express"
import { dataModel } from "./model/data.js"
const app = express()
app.use(express.json())
// app.get("/", (req, res) => {
//     res.send("server is running")

// })
app.get("/api/jokes", (req, res) => {
    const jokes = [{
        id: 1,
        content: "hahaha"
    }, {
        id: 2,
        content: "hehehe"
    }]
    res.send(jokes)
})
app.post("/api/data", async (req, res) => {
    const { name } = req.body
    console.log(name)
    return name

})
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`server is running at ${port}`)
})