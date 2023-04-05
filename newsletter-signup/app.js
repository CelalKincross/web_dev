const express = require('express');
const bodyParser = require('body-parser');
const { json } = require('body-parser');

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/signup.html")
})

app.post('/sign-up', (req, res) => {
    const {fname, lname, email} = req.body;
    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: fname,
                    LNAME: lname
                }
        }
    ]
    };
    const jsonData = JSON.stringify(data);
    const listId = 'fixthis'
    const url = `https://us21.api.mailchimp.com/3.o/lists/${listId}`
    const options = {
        method: 'POST', 
        auth: 'Auser:apikey'
    }
    const request = https.request(url, options, function(response) {
        response.on("data", function(data) {
            console.log(JSON.parse(data));
        })
    })
    request.write(jsonData);
    request.end();
    console.log(fname)
})
app.listen(3000, () => {
    console.log("Server is listening on port 3000")
})

// 