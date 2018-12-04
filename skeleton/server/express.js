import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'

import template from './../template'
import authRoutes from './routes/auth.routes'
import userRoutes from './routes/user.routes'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())

// mount routes
app.use('/', userRoutes)
app.use('/', authRoutes)

app.get('/', (req, res) => {
    res.status(200).send(template())
})

//Need to be near the
//end of the code, after the routes are mounted and before the app is exported
app.use((err, req, res, next) => {
    //express-jwt throws an error named UnauthorizedError when the token cannot be validated for some reason
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({
            "error": err.name + ": " + err.message
        })
    }
})

export default app