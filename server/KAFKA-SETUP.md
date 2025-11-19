# Kafka Setup Guide (For Future Implementation)

Kafka is currently **disabled** in the backend. The system works fine without it.

## When to Enable Kafka

Enable Kafka when you need:
- Asynchronous processing of scans
- ML worker to process images in background
- Event-driven architecture
- Message queuing between services

## How to Enable Kafka

### Option 1: Docker (Recommended)

1. **Install Docker Desktop**
   - Download: https://www.docker.com/products/docker-desktop
   - Install and restart computer

2. **Start Kafka**
   ```bash
   cd backend
   docker-compose up -d
   ```

3. **Enable in Backend**
   - Edit `api-service/.env`
   - Change: `ENABLE_KAFKA=false` to `ENABLE_KAFKA=true`
   - Restart server: `npm start`

### Option 2: Cloud Kafka

1. **Sign up for Upstash** (Free tier)
   - Go to: https://upstash.com/
   - Create Kafka cluster
   - Get broker URL and credentials

2. **Update Configuration**
   - Edit `api-service/.env`:
   ```env
   KAFKA_BROKER=your-cluster.upstash.io:9092
   ENABLE_KAFKA=true
   ```

3. **Restart Server**
   ```bash
   npm start
   ```

## What Kafka Does

When enabled, Kafka:
- Publishes scan events to `scan-events` topic
- Allows ML worker to process scans asynchronously
- Enables processor worker to update dustbin data
- Decouples services for better scalability

## Current Status

✓ MongoDB - **Running** (required)
⊘ Kafka - **Disabled** (optional)

The backend works perfectly without Kafka. Enable it later when you need async processing.
