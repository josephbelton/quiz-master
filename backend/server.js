import express from 'express'
import cors from 'cors'
import routes from './src/routes/routes'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import session from 'express-session'
import cookieParser from 'cookie-parser'

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

app.use(cookieParser())

app.use(session({
    secret: 'secret',
    cookie: {
        maxAge: 600000,
        secure: false
    },
    saveUninitialized: false,
    resave: false,
    unset: 'destroy'
}))

app.use(cors({
    origin: [
        'http://localhost:3000'
    ],
    credentials: true,
    exposedHeaders: ['set-cookie']
}));

app.get('/', (req, res) => {
    if (req.session.userDetails) {
        res.send(req.session.userDetails)
    } else {
        res.send('Nobodys Logged In')
    }
})

routes(app)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})