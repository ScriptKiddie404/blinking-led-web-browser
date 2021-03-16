// =================================================================================== //
// ============================ CREACIÓN DEL ESQUEMA LED ============================= //
// =================================================================================== //

const mongoose = require('mongoose');
const { Schema } = mongoose;
const LedSchema = new Schema({
    estado: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Led = mongoose.model('Led', LedSchema);

module.exports = Led;
