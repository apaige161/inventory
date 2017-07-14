//schema model

const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const sawSchema = new Schema({
    saw_model: String,
    saw_serial: Number
});

const sawData = mongoose.model('sawData', sawSchema);

module.exports = sawData


