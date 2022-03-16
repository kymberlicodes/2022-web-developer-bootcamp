const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('<h1>Hello world</h1>');
});

app.get('/About', function(req, res) {
    res.send('My name is Kim');
});

app.get('/Contact', function(req, res) {
    res.send('Contact me at kymberlicodes@gmail.com');
});

app.get('/Tosh', function(req, res) {
    res.send('Tosh is here');
});

app.get('/Odin', function(req, res) {
    res.send('Odin is here');
});

app.listen(3000, function() {
    console.log('Server started on port 3000');
});