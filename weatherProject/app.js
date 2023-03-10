const express = require("express");
const https = require("https");
const app = express();
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: false}));
// var data = fetch("https://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&appid=${weatherApi}")
// .then(data => {
// return data.json();
// })
// .then( data => {
// console.log(data);
// });

app.get("/", (req, res)=> {
    
    res.sendFile(__dirname + "/index.html")
    
})

app.post("/", (req, res) => {
    console.log("post received")
    console.log("CITY: " + req.body.city)
    const cityName = req.body.city;
    const weatherAPI = "anApiKey"
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${weatherAPI}`;
    
    https.get(url, response => {
        console.log(response.statusCode);
        response.on("data", (data)=>{
            const weatherData = JSON.parse(data);
            console.log(weatherData);
            const temp = weatherData.main.temp;
            const cityName = weatherData.name;
            const icon = weatherData.weather[0].icon;
            var weatherDescription = weatherData.weather[0].description;
            console.log(icon)
            const imgURL =`http://openweathermap.org/img/wn/${icon}@2x.png`
        
            res.write(`<p>The weather in ${cityName} is currently ${weatherDescription}</p>`)
            res.write(`<h1>The current temperature in ${cityName} is ${temp}</h1>`)
            res.write(`<img src=${imgURL}>`);
            res.send();
        })
    });


})
app.listen(8080, ()=> {
    console.log("Server is running on port 3000")
})