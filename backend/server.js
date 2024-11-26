import express from "express"
const app = express()
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
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`server is running at ${port}`)
})