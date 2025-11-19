const { Kafka } = require('kafkajs');
require('dotenv').config();

const kafka = new Kafka({
  clientId: 'dustbin-app',
  brokers: [process.env.KAFKA_BROKER || 'localhost:9092']
});

const producer = kafka.producer();
const consumer = kafka.consumer({ groupId: 'my-group' });

const connectProducer = async () => {
  await producer.connect();
};

const connectConsumer = async () => {
  await consumer.connect();
};

const disconnectProducer = async () => {
  await producer.disconnect();
};

const disconnectConsumer = async () => {
  await consumer.disconnect();
};

module.exports = {
  producer,
  consumer,
  connectProducer,
  connectConsumer,
  disconnectProducer,
  disconnectConsumer
};