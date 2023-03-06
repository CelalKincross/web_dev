const bodyParser = require("body-parser");
const url = bodyParser.urlencoded({extended:false});
const express = require("express");
const app = express();


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", url, (req, res)=> {
    const weight = Number(req.body.weight);
    const height = Number(req.body.height);
    
    const bmi = weight / ((height/100)**2);
    res.send(`Your BMI is: ${bmi.toFixed(2)}`)
    console.log(req.body.weight)
    console.log(req.body.height)
})

app.get("/calculator", (req, res) => {
    res.sendFile(__dirname + "/calculator.html")
})

app.post("/calculator", url, (req, res) => {
    const num1 = Number(req.body.n1);
    const num2 = Number(req.body.n2);
    const result = num1 + num2;
    res.send(`${num1} plus ${num2} is ${result}`);
})

app.listen(3000, ()=> {
    console.log("Server is running on port 3000!")
})