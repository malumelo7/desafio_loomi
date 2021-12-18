import { UUID } from "bson";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
    id: {
        type: UUID,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
}, {timestamps: true});

export const User = mongoose.model('User', clientSchema);
module.exports = User;