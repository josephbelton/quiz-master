const express = require('express')
const mysql = require('mysql')
const app = express()
const cors = require('cors')
const port = 4000

const config = require('./config')

const connection = mysql.createConnection(config)

connection.connect()

app.use(cors());

app.get('/', (req, res) => {
    connection.query('SELECT * FROM quiz.users', (err, rows) => {
        if (err) throw err;

        res.send(rows)
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})