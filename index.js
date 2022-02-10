const express = require('express');
const weatheRoute =require('./apiController')

const app=express();


app.use(express.json())
app.use('/getweather',weatheRoute)

port =  3000

const start = async() => {
    try{    
        app.listen(port, console.log(`Your server is alive on : http://localhost:${port}`))
    }catch(error){
        console.log(error);
    }
}
start()