const { Kafka } = require('kafkajs');
const kafkaClient = require('../../shared/kafkaClient');
const updateService = require('./updateService');

const consumer = kafkaClient.consumer({ groupId: 'processor-worker-group' });

const run = async () => {
    await consumer.connect();
    await consumer.subscribe({ topic: 'updates', fromBeginning: true });

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            const data = JSON.parse(message.value.toString());
            await updateService.processUpdate(data);
        },
    });
};

module.exports = {
    run,
};