
const mongoose = require('mongoose')
require('../config/app.config')
const app = new mongoose.Schema({
},
    { strict: false }
);
module.exports = mongoose.model("data", app)