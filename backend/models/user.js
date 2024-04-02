import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    bio: {
        type: String
    },
    profilePicture: {
        type: String
    },
    interests: [{
        type: String
    }],
    preferences: {
        minAge: {
            type: Number,
            default: 18
        },
        maxAge: {
            type: Number,
            default: 99
        },
        genderPreference: {
            type: String,
            enum: ['male', 'female', 'both'],
            default: 'both'
        }
    },
    likedProfiles: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    matchedProfiles: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const User = model('User', userSchema);

export default User;
