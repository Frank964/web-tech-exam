const mongoose = require('mongoose')

const MaterialSchema = new mongoose.Schema({
    materialcode: {
        type: String,
        required: true
    },
    materialname: {
        type: String,
        required: true,
        
    },
    unitprice: {
        type:Number,
        required: true
    },
    materialstock: {
        type:Number,
        required:true
    },
   

})

MaterialSchema.pre('save', function (next) {
    const user = this

    next()
})

module.exports = mongoose.model('Material', MaterialSchema)