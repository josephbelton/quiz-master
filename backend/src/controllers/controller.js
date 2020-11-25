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

