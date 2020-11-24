import mongoose from 'mongoose';
import { UserSchema } from '../models/models';
import bcrypt from 'bcryptjs'

const User = mongoose.model('User', UserSchema)

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

export const login = (req, res) => {
    User.findOne({ username: req.body.username }, (err, user) => {
        if (err) res.send(err)
        bcrypt.compare(req.body.password, user.password, (err, result) => {
            if (!result) return res.send(err);
            return res.json(user)
        })
    })
}


