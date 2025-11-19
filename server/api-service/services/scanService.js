const Scan = require('../models/Scan');
const kafkaProducer = require('./kafkaProducer');

class ScanService {
    async createScan(scanData) {
        const scan = new Scan(scanData);
        await scan.save();
        
        // Publish to Kafka for processing (only if enabled)
        if (process.env.ENABLE_KAFKA === 'true') {
            try {
                await kafkaProducer.sendMessage('scan-created', {
                    scanId: scan._id,
                    ...scanData
                });
            } catch (error) {
                console.log('Kafka message failed:', error.message);
            }
        }
        
        return scan;
    }

    async getAllScans() {
        return await Scan.find();
    }

    async getScanById(id) {
        return await Scan.findById(id);
    }

    async updateScan(id, updateData) {
        return await Scan.findByIdAndUpdate(id, updateData, { new: true });
    }

    async deleteScan(id) {
        return await Scan.findByIdAndDelete(id);
    }
}

module.exports = new ScanService();
