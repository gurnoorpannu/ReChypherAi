const kafkaClient = require('../../shared/kafkaClient');

const producer = kafkaClient.producer;
let isConnected = false;

const initProducer = async () => {
    if (!isConnected) {
        await kafkaClient.connectProducer();
        isConnected = true;
    }
};

const sendMessage = async (topic, message) => {
    try {
        await producer.send({
            topic: topic,
            messages: [
                { value: JSON.stringify(message) },
            ],
        });
    } catch (error) {
        console.error('Error sending message to Kafka:', error);
    }
};

const disconnectProducer = async () => {
    await producer.disconnect();
};

module.exports = {
    initProducer,
    sendMessage,
    disconnectProducer,
};