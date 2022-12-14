const express = require("express")
const app = express()


app.get("/", (req, res) =>{
    res.send("hello world ^o^")
})

app.get("*",function(req, res){
    res.sendFile(__dirname + '/html/error.html')
})
app.listen(3000,() =>{
    console.log("start server port [3000]")
})
