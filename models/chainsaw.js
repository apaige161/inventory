//schema model

const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const sawSchema = new Schema({
    saw_model: String,
    saw_serial: Number,
    date: { type: Date, default: Date.now }
});

const chainsaw = mongoose.model('chainsaw', sawSchema);

module.exports = chainsaw


