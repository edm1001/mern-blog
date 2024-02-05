import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 4
    },
    password: {
        type: String,
        required: true
    }
})

const UserModel  = model('User', UserSchema);

module.exports = UserModel