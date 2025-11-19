const mongoose = require('mongoose');
const { Kafka } = require('kafkajs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, 'api-service', '.env') });

const testConnections = async () => {
    console.log('Testing backend connections...\n');
    
    // Test MongoDB
    console.log('1. Testing MongoDB connection...');
    try {
        await mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000
        });
        console.log('✓ MongoDB connected successfully');
        await mongoose.connection.close();
    } catch (err) {
        console.log('✗ MongoDB connection failed:', err.message);
    }
    
    // Test Kafka
    console.log('\n2. Testing Kafka connection...');
    try {
        const kafka = new Kafka({
            clientId: 'connection-test',
            brokers: [process.env.KAFKA_BROKER],
            connectionTimeout: 5000,
            requestTimeout: 5000
        });
        
        const admin = kafka.admin();
        await admin.connect();
        const topics = await admin.listTopics();
        console.log('✓ Kafka connected successfully');
        console.log('  Available topics:', topics.length > 0 ? topics.join(', ') : 'none');
        await admin.disconnect();
    } catch (err) {
        console.log('✗ Kafka connection failed:', err.message);
    }
    
    console.log('\nConnection test complete!');
    process.exit(0);
};

testConnections();
