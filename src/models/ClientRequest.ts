import { Client } from "./Client"
import { UUID } from "bson";
import { Product } from "./Product";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientRequestSchema = new Schema({
    id: {
        type: UUID,
        required: true
    },
    client: {
        type: Client,
        required: true
    },
    product: {
        type: Product,
        required: true
    },
    request_date: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        required: true
    },
}, {timestamps: true});

const ClientRequest = mongoose.model('ClientRequest', clientRequestSchema);
module.exports = ClientRequest;