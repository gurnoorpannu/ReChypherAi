const kafkaConsumer = require('./services/kafkaConsumer');
const mlService = require('./services/mlService');

const startWorker = async () => {
    try {
        // Initialize Kafka consumer
        await kafkaConsumer.initialize();

        // Start consuming messages
        kafkaConsumer.consumeMessages(async (message) => {
            // Process the incoming message with the ML service
            const result = await mlService.processMessage(message);
            console.log('Processed message:', result);
        });

        console.log('ML Worker is running and listening for messages...');
    } catch (error) {
        console.error('Error starting ML Worker:', error);
    }
};

// Start the worker
startWorker();