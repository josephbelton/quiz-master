import mongoose from 'mongoose';
import { UserSchema, QuizSchema, QuestionSchema, AnswerSchema } from '../models/models';
import bcrypt from 'bcryptjs'

const User = mongoose.model('User', UserSchema)
const Quiz = mongoose.model('Quiz', QuizSchema)
const Question = mongoose.model('Question', QuestionSchema)
const Answer = mongoose.model('Answer', AnswerSchema)

// USERS
export const addNewUser = (req, res) => {
    const { password } = req.body;
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) res.send(err)
        const body = { ...req.body, password: hash }
        const newUser = new User(body)

        newUser.save((err, user) => {
            if (err) res.send(err)
            res.json(user)
        })
    })
}

export const getUsers = (req, res) => {
    User.find({}, (err, user) => {
        if (err) res.send(err)
        res.json(user)
    })
}

export const getUserWithId = (req, res) => {
    User.findById(req.params.userID, (err, user) => {
        if (err) res.send(err)
        res.json(user)
    })
}

export const deleteUsers = (req, res) => {
    User.deleteMany({}, (err) => {
        if (err) res.send(err)
        res.end();
    })
}

export const login = (req, res) => {
    User.findOne({ username: req.body.username }, (err, user) => {
        if (err) res.send(err)
        bcrypt.compare(req.body.password, user.password, (err, result) => {
            if (!result) return res.send(err);
            req.session.userDetails = user;
            return res.json(user)
        })
    })
}

export const logout = (req, res) => {
    if (req.session) {
        req.session.destroy(err => {
            if (err) return res.status(400).send('Unable To Logout')
            res.send('Logout Success')
        })
    } else {
        res.end()
    }
}

// Quizzes
export const getQuizzes = (req, res) => {
    Quiz.find({}, (err, quiz) => {
        if (err) res.send(err)
        res.json(quiz)
    })
}

export const deleteQuizzes = (req, res) => {
    Quiz.deleteMany({}, (err) => {
        if (err) res.send(err)
        res.end();
    })
}

export const addNewQuiz = async (req, res) => {
    const newQuiz = new Quiz(req.body)

    newQuiz.save((err, quiz) => {
        if (err) res.send(err)
        res.json(quiz)
    })
}

export const getQuizByName = (req, res) => {
    const { name } = req.body;
    Quiz.findOne({ name: name }, (err, quiz) => {
        if (err) res.send(err)
        res.json(quiz)
    })
}