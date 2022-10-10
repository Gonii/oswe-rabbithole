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
    result = false
    credentials.forEach(credential => {
        if (credential["username"] == username && credential["password"] == password){
            globalThis.result = true
        }
    })
    if (result == true){
        return "Login Successful"
    }
    else{
        return "Login Failed"
    }
}

app.post('/', function (req, res) {
    var username = req.body.username
    var password = req.body.password
    var result = verifyLogin(username,password)
    res.send(result)
})

app.listen(5000)