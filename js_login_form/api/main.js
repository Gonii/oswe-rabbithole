const express = require('express')
const app = express()

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());

credentials = [
    {
        "username":"goni",
        "password":"oct5"
    },
    {
        "username":"test",
        "password":"oct6"
    }
]

function verifyLogin(username, password){
    credentials.forEach(credential => {
        if (credential["username"] == username && credential["password"] == password){
            console.log("correct")
        }
    })
}

app.post('/', function (req, res) {
    var username = req.body.username
    var password = req.body.password
    verifyLogin(username,password)
    res.send('Hello World')
})

app.listen(5000)