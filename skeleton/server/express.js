import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'

import Template from './../index'
import authRoutes from './routes/auth.routes'
import userRoutes from './routes/user.routes'
import path from 'path'

// Only for dev mode, comment out for production
import devBundle from './devBundle'

const app = express()

// Only for dev mode, comment out for production
devBundle.compile(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())

const CURRENT_WORKING_DIR = process.cwd()

// mount routes
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

app.use('/', userRoutes)
app.use('/', authRoutes)

app.get('/', (req, res) => {
    res.status(200).send(Template())
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