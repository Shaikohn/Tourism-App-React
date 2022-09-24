const express = require('express')
const path = require('path')
// const fs = require('fs')
// const homePage = fs.readFileSync('index.html')
// const aboutPage = fs.readFileSync('about.html')
// const contactPage = fs.readFileSync('contact.html')
// const notFoundPage = fs.readFileSync('notfound.html')

const app = express()
app.listen(3000, () => {
    console.log('app listening on port 3000')
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve('./', 'index.html'))
})