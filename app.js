const dotenv = require('dotenv');
const express = require('express');
const app = express();

dotenv.config({path:'./config.env'});


const port = process.env.PORT;

// require('./db/conn'); /*moongoose connect to online db */

app.use(express.json());
app.use(require('./route/auth'));

// app.get("/",(req,res)=>{
//     res.send('Hello how are you');
// });

app.listen(port, ()=>{
    console.log(`I am listening to port ${port}`)
});