import express from 'express'
import bodyParser from 'body-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import userRoutes from './routes/user'
import authRoutes from './routes/auth'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(compress())
app.use(helmet())
app.use(cors())

app.use('/', userRoutes)
app.use('/', authRoutes)

//Need to be near the end
app.use((err, req, res, next) => {
    /**
     * express-jwt throws an error named UnauthorizedError when the token cannot be validated for some reason
     */
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({ "error": err.name + ": " + err.message })
    }
})

export default app;