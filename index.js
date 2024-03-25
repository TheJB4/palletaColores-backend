import express from 'express'
import morgan from 'morgan'
import path from 'path'
import { fileURLToPath } from 'url'
import 'dotenv/config';

let app = express()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname,'/public')))

app.listen(process.env.PORT,() => {
    console.log(`app listen in port: ${process.env.PORT}`)
})