import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
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

const AnswerSchema = new Schema({
    title: String
})

const QuestionSchema = new Schema({
    title: String,
    correct_answer: Number,
})

QuestionSchema.add({ answers: [AnswerSchema] })

const QuizSchema = new Schema({
    name: String,
})

QuizSchema.add({ questions: [QuestionSchema] })

module.exports = {
    UserSchema, QuizSchema, QuestionSchema, AnswerSchema
}