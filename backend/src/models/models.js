import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    username: {
        type: String,
        required: 'Enter a Username'
    },
    password: {
        type: String,
        required: 'Enter a password'
    },
    role: {
        type: String,
        default: 'restricted'
    }
})