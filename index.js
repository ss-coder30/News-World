const express = require('express')
const path = require('path')
const { join } = require('path')
const axios = require('axios')

const app = express()
const port = 2000

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get('/api', async(req, res) => {
    console.log(req._parsedUrl.query)
    let r = await axios("https://newsapi.org/v2/everything?"+req._parsedUrl.query)
    let a = r.data
    res.json(a)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})