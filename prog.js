const mongoose = require('mongoose')
const Schema = mongoose.Schema

const progSchema = new Schema({
    baslik: {
        type: String,
        required: true
    },
    iurl: {
        type: String,
        required: true
    },
    ylink: {
        type: String,
        required: true
    },
    rurl: {
        type: String,
        required: true
    },
    acik: {
        type: String,
        required: true
    },
    rbir: {
        type: String,
        required: true
    },
    riki: { 
        type: String,
        required: true
    },
    ruc: {
        type: String,
        required: true
    },
    rdort: {
        type: String,
        required: false
    },
    rbes: {
        type: String,
        required: false
    }
}, { timestamps:true})

const prog = mongoose.model('prog', progSchema)
module.exports = prog