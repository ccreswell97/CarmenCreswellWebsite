const path = require('path');

const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(__dirname, '../.env')});

const express = require('express');
const app = express();
const port = 3001;
const axios = require('axios');
const { response } = require('express');

const token = Buffer.from(`${process.env.API_USERNAME}:${process.env.API_PW}`, 'utf8').toString('base64')

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
        res.json(response.data)
    })
    .catch(err => console.log(err));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});