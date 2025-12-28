import express from "express"
import cors from "cors"
import { promises as fs } from "fs"
import ejs from "ejs"

const app = express()
app.use(express.json())
app.use(cors())

app.use('/images', express.static('images'))
app.use('/assets', express.static('assets'))

app.get("/", async (req, res) => {
    let data = await fs.readFile("./index.html", "utf8")
    res.send(data)
})

app.listen(3000, () => {
    console.log("port 3000");
})