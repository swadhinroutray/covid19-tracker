const express = require('express')
const path = require('path')
const app = express()
const port = 3030;

const publicPath = path.join(__dirname,'/build')
app.use(express.static(publicPath))

app.get('*',(req,res)=>{
    res.sendFile(path.join(publicPath,'index.html'))
})

app.listen(port,()=>{
    console.log(`Listening on ${port}`)
})