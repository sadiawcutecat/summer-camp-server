const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()
const port = process.env.PORT || 5000;

//sadiabinte63
//Godo0Y78VrUIRLes

app.use(cors());
app.use(express.json());

app.get('/',(req, res) =>{
    res.send('server running');
})

app.listen(port, ()=>{
    console.log(`summer camp is running port ${port}`);
})