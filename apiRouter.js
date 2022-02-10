const express =require('express')
const getweather = require('./apiController')

const router = express.Router()



router.get('/list',getweather)


module.exports=router