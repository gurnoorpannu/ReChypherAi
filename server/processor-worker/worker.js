const kafka = require('../shared/kafkaClient');
const updateService = require('./services/updateService');

const processMessage = async (message) => {
    try {
        const data = JSON.parse(message.value);
        await updateService.updateData(data);
    } catch (error) {
        console.error('Error processing message:', error);
    }
};

const startWorker = () => {
    const consumer = kafka.consumer({ groupId: 'processor-group' });

    const run = async () => {
        await consumer.connect();
        await consumer.subscribe({ topic: 'data-updates', fromBeginning: true });

        await consumer.run({
            eachMessage: async ({ topic, partition, message }) => {
                await processMessage(message);
            },
        });
    };

    run().catch(console.error);
};

startWorker();