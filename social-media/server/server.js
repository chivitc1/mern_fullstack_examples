import express from 'express'
import template from './../template'
import { MongoClient } from 'mongodb'
import devBundle from './devBundle'; //In dev mode only

const app = express()
devBundle.compile(app)  //In dev mode only

app.get('/', (req, res, next) => {
    res.status(200).send(template())
})

let port = process.env.SERVER_PORT || 3000
app.listen(port, function onStart(err) {
    if (err) { console.log(err) }
    console.info('Server started on port %s.', port)
})

const DB_URL = process.env.DB_URI || 'mongodb://admin:password123@localhost:27017/socialMedia'
MongoClient.connect(DB_URL, (err, db) => {
    console.log("Connected successfully to mongodb server")
    db.close()
})