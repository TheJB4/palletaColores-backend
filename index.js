import express from 'express'
import morgan from 'morgan'
import path from 'path'
import { fileURLToPath } from 'url'
import cors from 'cors'
import 'dotenv/config';

import './src/database/database.js'
import colorRoutes from './src/routes/color.routes.js'

let app = express()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname,'/public')))

app.use(cors({
    origin:'http://localhost:5173',
    credentials: true
}))

app.listen(process.env.PORT,() => {
    console.log(`app listen in port: ${process.env.PORT}`)
})

app.use('/api',colorRoutes)
