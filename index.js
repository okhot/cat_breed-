const express = require("express")
const app = express()
const organiseData = require('./utils')

app.get('/', async (req, res)=>{
    await fetch("https://api.thecatapi.com/v1/breeds").then((res)=> res.json()).then((data) => res.json(organiseData(data)))
    res.status(200)
})

module.exports = app