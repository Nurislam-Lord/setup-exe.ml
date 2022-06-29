const mongoose = require('mongoose')
const Schema = mongoose.Schema

const iletisimSchema = new Schema({
    ad: {
        type: String,
        required: true
    },
    soyad: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true
    },
    konu: {
        type: String,
        required: true
    },
    icerik: {
        type: String,
        required: true
    }
}, { timestamps:true})

const ile = mongoose.model('iletisim', iletisimSchema)
module.exports = ile