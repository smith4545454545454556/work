import express from "express"
import { dataModel } from "./model/data.js"
import { connectDB } from "./config.js"
import dotenv from "dotenv"
dotenv.config()
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
    }, {
        id: 3,
        content: "hohoho"
    }, {
        id: 4,
        content: "four"
    },
    {
        id: 5,
        content: "five"
    }]
    res.send(jokes)
})
app.post("/api/data", async (req, res) => {
    const { name } = req.body
    const user = new dataModel({
        name: name
    })
    await user.save()
    return res.status(200).json({ message: "Data received", user }); // Send success response

})
const port = process.env.PORT || 3000
app.listen(port, async () => {
    await connectDB()
    console.log(`server is running at ${port}`)
})