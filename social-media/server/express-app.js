import express from 'express'
import bodyParser from 'body-parser'
// import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import userRoutes from './routes/user'
import template from './../template'
import authRoutes from './routes/auth'
import devBundle from './devBundle'; //In dev mode only

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())

devBundle.compile(app)  //In dev mode only
app.use('/', userRoutes)
app.use('/', authRoutes)

//Need to be near the end
app.use((err, req, res, next) => {
    /**
     * express-jwt throws an error named UnauthorizedError when the token cannot be validated for some reason
     */
    if (err.name === 'UnauthorizedError') {
        res.status(401).json( { "error": err.name + ": " + err.message})
    }
})

export default app;