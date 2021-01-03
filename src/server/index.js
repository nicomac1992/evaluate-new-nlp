const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const mockAPIResponse = require("./mockAPI");
const API_KEY = process.env.API_KEY;
console.log(`Your API KEY is ${process.env.API_KEY}`)

const fetch = require("node-fetch");
const baseUrl = "https://api.meaningcloud.com/sentiment-2.1?key=";
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.text());


const cors = require('cors');
app.use(cors());


app.use(express.static('dist'));

app.get("/", (req, res) => {
    res.sendFile("dist/index.html");
});


app.get("/test", (req, res) => {
    res.send(mockAPIResponse);
});

app.post("/article", async(req, res) => {
    const response = await fetch(`${baseUrl}${API_KEY}&lang=auto&url=${req.body}`);

    try {
        const data = await response.json();
        res.send(data);
    } catch (err) {
        console.log("error", err);
    }
});

const port = process.env.port || 8080;
app.listen(8080, function() {
    console.log(`App listening on port ${port}!`)
});