const mongoose = require('mongoose');

const dustbinSchema = new mongoose.Schema({
    location: {
        type: {
            type: String,
            enum: ['Point'], // 'Point' is the only type supported
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    capacity: {
        type: Number,
        required: true
    },
    currentLoad: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        enum: ['available', 'full', 'needs maintenance'],
        default: 'available'
    }
}, {
    timestamps: true
});

dustbinSchema.index({ location: '2dsphere' });

const Dustbin = mongoose.model('Dustbin', dustbinSchema);

module.exports = Dustbin;