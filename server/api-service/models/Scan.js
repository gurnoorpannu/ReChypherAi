const mongoose = require('mongoose');

const scanSchema = new mongoose.Schema({
    scanId: {
        type: String,
        required: true,
        unique: true
    },
    location: {
        type: {
            type: String,
            enum: ['Point'], // 'Point' for GeoJSON
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'failed'],
        default: 'pending'
    }
}, {
    timestamps: true
});

scanSchema.index({ location: '2dsphere' });

const Scan = mongoose.model('Scan', scanSchema);

module.exports = Scan;