const { Schema, model } = require('mongoose')

const schema = new Schema({
    imageUrl: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
})

module.exports = model('Post', schema)