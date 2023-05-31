import express from 'express'
import dotenv from 'dotenv'
import apiRoutes from './routes/apiRoutes.js'
import cors from 'cors';
import bodyParser from 'body-parser';
dotenv.config()

const app = express()

const PORT = process.env.PORT || 4000 ;

app.use(cors())
app.use(bodyParser.json())
app.use('/', apiRoutes)

app.listen(PORT, () => {
    console.log(`App listening to http://localhost:${PORT}`)
})