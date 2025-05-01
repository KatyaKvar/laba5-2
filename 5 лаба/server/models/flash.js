const mongoose = require('mongoose');

const flashSchema = new mongoose.Schema({
    manufacturer: { type: String, required: true },
    capacity: { type: Number, required: true },
    warranty: { type: Number, required: true },
    quantity: { type: Number, required: true },
});

module.exports = mongoose.model('Flash', flashSchema);