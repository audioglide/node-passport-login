import { Schema, Mongoose } from "mongoose";

const UserSchema = new Mongoose.Schema({
    name: {
        type: String,
        required: True
    },
    email: {
        type: String,
        required: True
    },
    password: {
        type: String,
        required: True
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const User = Mongoose.model('User', UserSchema);

module.exports = User;