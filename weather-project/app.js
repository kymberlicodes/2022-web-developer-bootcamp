const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.sendFile(`${__dirname}/index.html`);
});

app.post("/", function(req, res) {
    var zipCodeQueryParam = `zip=${Number(req.body.zipcode)}`;
    var unitParam = `units=imperial`;
    var apiKeyParam = `appid=1432721a7524165621fb54e15b5ded03`;
    var queryParams = [
        zipCodeQueryParam,
        unitParam,
        apiKeyParam
    ].join('&');
        
    var restUrl = `https://api.openweathermap.org/data/2.5/weather?${queryParams}`;
    https.get(restUrl, function(response) {
        console.log(restUrl);
        console.log(response.statusCode);
        response.on('data', function(data) {
            const weatherData = JSON.parse(data);
            var icon = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
            res.write(`<p><h1>${weatherData.name} Weather</h1></p>`);
            res.write(`<p><h2>The weather is currently ${weatherData.weather[0].description} <img src="${icon}"></h2> </p>`);
            res.write(`<p>${Math.round(weatherData.main.temp)} degrees, but feels like ${Math.round(weatherData.main.feels_like)} degrees.</p>`);
            res.send();
        })
    });
});

app.listen(3000, function() {
    console.log('Server is running on 3000!');
});