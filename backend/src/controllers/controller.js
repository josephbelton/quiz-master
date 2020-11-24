import mongoose from 'mongoose';
import { UserSchema } from '../models/models';

const User = mongoose.model('User', UserSchema)

export const addNewUser = (req, res) => {
    let newUser = new User(req.body)

    newUser.save((err, user) => {
        if (err) res.send(err)
        res.json(user)
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

export const login = (req, res) => {
    User.findOne({ username: req.body.username }, (err, user) => {
        if (err) res.send(err)
        if (req.body.password !== user.password) {
            res.send('Incorrect Password')
        }
        res.json(user)
    })
}


