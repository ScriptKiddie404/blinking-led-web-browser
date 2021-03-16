// =================================================================================== //
// =========================== CONEXIÓN A LA BASE D EDATOS =========================== //
// =================================================================================== //

require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).catch(error => {
    console.log(error);
});