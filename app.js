/*
const express = require('express');
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')
*/

import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'

const app = express()


// Middlewares
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded( { extended: true } ))


//Rutas
/*app.get('/', (req, res) => {
    res.json({ msg: 'Hola Mundo' })
})*/


//Middleware para Vue.js router modo history este modo historia debe estar antes de path
const history = require('connect-history-api-fallback')
app.use(history())

//Para acceder al directorio actual
app.use(express.static(path.join(__dirname, 'public')))


app.set('puerto', process.env.PORT || 3000)


app.listen(app.get('puerto'), () => {
    console.log(`Corriendo en puerto: ${app.get('puerto')}`)
})