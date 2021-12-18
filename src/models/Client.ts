import { UUID } from "bson";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
    id: {
        type: UUID,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    adress: {
        type: String,
        required: true
    },
}, {timestamps: true});

export const Client = mongoose.model('Client', clientSchema);
module.exports = Client;