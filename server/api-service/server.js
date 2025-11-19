const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const scanRoutes = require('./routes/scanRoutes');
const dotenv = require('dotenv');
const path = require('path');
const kafkaProducer = require('./services/kafkaProducer');

// Load .env from api-service directory
dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        });
        console.log('✓ MongoDB connected successfully');
    } catch (err) {
        console.error('✗ MongoDB connection error:', err.message);
        process.exit(1);
    }
};

// Kafka connection (disabled for now - enable when Kafka is installed)
const connectKafka = async () => {
    if (process.env.ENABLE_KAFKA === 'true') {
        try {
            await kafkaProducer.initProducer();
            console.log('✓ Kafka producer connected successfully');
        } catch (err) {
            console.error('✗ Kafka connection error:', err.message);
        }
    } else {
        console.log('⊘ Kafka disabled (set ENABLE_KAFKA=true to enable)');
    }
};

// Initialize connections
const startServer = async () => {
    await connectDB();
    await connectKafka();
    
    // Routes
    app.use('/api', scanRoutes);
    
    // Start server
    app.listen(PORT, () => {
        console.log(`✓ Server is running on port ${PORT}`);
    });
};

startServer();