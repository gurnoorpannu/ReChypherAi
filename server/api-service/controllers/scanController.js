class ScanController {
    constructor(scanService) {
        this.scanService = scanService;
    }

    createScan = async (req, res) => {
        try {
            const scanData = req.body;
            const newScan = await this.scanService.createScan(scanData);
            res.status(201).json(newScan);
        } catch (error) {
            res.status(500).json({ message: 'Error creating scan', error });
        }
    }

    getScans = async (req, res) => {
        try {
            const scans = await this.scanService.getAllScans();
            res.status(200).json(scans);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving scans', error });
        }
    }

    getScanById = async (req, res) => {
        try {
            const { id } = req.params;
            const scan = await this.scanService.getScanById(id);

            if (!scan) {
                return res.status(404).json({ message: 'Scan not found' });
            }

            res.status(200).json(scan);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving scan', error });
        }
    }

    updateScan = async (req, res) => {
        try {
            const { id } = req.params;
            const updatedScan = await this.scanService.updateScan(id, req.body);
            res.status(200).json(updatedScan);
        } catch (error) {
            res.status(500).json({ message: 'Error updating scan', error });
        }
    }

    deleteScan = async (req, res) => {
        try {
            const { id } = req.params;
            await this.scanService.deleteScan(id);
            res.status(200).json({ message: 'Scan deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting scan', error });
        }
    }
}

// 👇 FIX: Export an instance (not the class!)
const scanService = require('../services/scanService'); 
module.exports = new ScanController(scanService);
