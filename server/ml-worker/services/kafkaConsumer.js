const { Kafka } = require('kafkajs');
const kafkaClient = require('../../shared/kafkaClient');
const mlService = require('./mlService');

const consumer = kafkaClient.consumer({ groupId: 'ml-worker-group' });

const run = async () => {
    await consumer.connect();
    await consumer.subscribe({ topic: 'ml-topic', fromBeginning: true });

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            const data = JSON.parse(message.value.toString());
            await mlService.processData(data);
        },
    });
};

module.exports = {
    run,
};