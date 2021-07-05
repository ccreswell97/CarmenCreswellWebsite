//import { renderToNodeStream } from "react-dom/server";
//import App from "../src/App";

const path = require('path');

const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(__dirname, '../.env')});

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const axios = require('axios');

app.use(express.static(path.join(__dirname, '../build')));

const token = Buffer.from(`${process.env.API_USERNAME}:${process.env.API_PW}`, 'utf8').toString('base64')

//app.use('/static', express.static(path.join(__dirname, '../build//static')));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../build', 'index.html'))
// })

// app.use("/", async (req, res) => {
//     res.write(`<!DOCTYPE html><html><head><meta charset="utf-8"/></head><body><div id="app">`);
    
//     const htmlStream = renderToNodeStream(<App/>);

//     htmlStream.pipe(
//         res,
//         { end: false }
//     );
//     htmlStream.on("end", () => {
//         res.write(`</div></body><script src="/static/index.js"></script></html>`);
//         res.end();
//     });
// })

app.get('/getHobbies', (req, res)=> {
    axios.get('https://api.ravelry.com/projects/jimetheslime/list.json', {
        withCredentials: true,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            'Authorization': `Basic ${token}`
        },
    })
    .then((response)=>{
        res.sendFile('index.html', {root: path.join(__dirname, '../build/')})
        res.json(response.data)
    })
    .catch(err => console.log(err));
});

app.get('*', function(req, res) {
    res.sendFile('index.html', {root: path.join(__dirname, '../build/')});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});