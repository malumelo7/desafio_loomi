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
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
}, {timestamps: true});

export const Product = mongoose.model('Product', clientSchema);
module.exports = Product;