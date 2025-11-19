const express = require('express');
const router = express.Router();
const scanController = require('../controllers/scanController');

// Create new scan
router.post('/scans', scanController.createScan);

// Get all scans
router.get('/scans', scanController.getScans);

// Get scan by ID
router.get('/scans/:id', scanController.getScanById);

// Update scan by ID
router.put('/scans/:id', scanController.updateScan);

// Delete scan by ID
router.delete('/scans/:id', scanController.deleteScan);

module.exports = router;
