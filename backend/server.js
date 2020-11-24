import express from 'express'
import cors from 'cors'
import routes from './src/routes/routes'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

const port = 4000
const app = express()

//mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/quiz', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//bodyparser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.use(cors());

app.get('/', (req, res) => {
    res.send('welcome')
})

routes(app)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})