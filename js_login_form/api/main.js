const express = require('express')
const app = express()

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
// in latest body-parser use like below.
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', function (req, res) {
    console.log(req)
    res.send('Hello World')
})

app.listen(5000)