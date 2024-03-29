const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');

require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(`public`));

app.get('/', function(req, res) {
    res.sendFile(`${__dirname}/signup.html`);
});

app.post("/", function(req, res) {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;

    const data = {
        members: [
            {
                email_address: email,
                status: 'subscribed',
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    const options = {
        method: 'POST',
        auth: process.env.API_KEY
    }

    const request = https.request(`https://us14.api.mailchimp.com/3.0/lists/${process.env.LIST_ID}`, options, function(response) {    
        response.on("data", function(data) {
            if (response.statusCode === 200) {
                res.sendFile(`${__dirname}/success.html`);
            } else {
                res.sendFile(`${__dirname}/failure.html`);
            }
            // console.log(JSON.parse(data));
        });
    });
        
    request.write(jsonData);
    request.end();
});

app.post('/failure', function(req, res) {
    res.redirect('/');
});

app.listen(3000, function() {
    console.log('Server started on port 3000');
});