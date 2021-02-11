// or a one liner ... require("dotenv").confit()
//either way this needs to be in the top
const dotenv = require('dotenv')
dotenv.config()

const express = require("express")
const cors = require("cors")
const port = process.env.PORT || 4000 


console.log('v3.3 Gman, aint nothing to it but to do it')
console.log(__dirname)
console.log(process.env.LADY)
console.log(process.env.FOO)
console.log(process.env.ALWAYS)
console.log(process.env.PORT)

//api
const app = express()

app.use("/api/*", (_, res) => {
    res.json({ data: "make it guud"})
})

const app = express()
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})