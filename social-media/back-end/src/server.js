import app from './express-app'
import config from './../config'
import mongoose from 'mongoose'

app.listen(config.api_port, function onStart(err) {
    if (err) { console.log(err) }
    console.info('Server started on port %s.', config.api_port)
})

mongoose.Promise = global.Promise
mongoose.connect(config.dbUri)
mongoose.connection.on('error', () => {
    throw new Error('unable to connect to database')
})