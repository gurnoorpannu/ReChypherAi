# Backend Setup Guide

## Connection Status ✓

Your backend code is now properly configured with:
- ✓ MongoDB connection with proper error handling
- ✓ Kafka producer initialization
- ✓ Environment variable configuration
- ✓ All routes and services working

## Required Services

To run the backend, you need:

### 1. MongoDB (Database)
- **Local**: Install MongoDB Community Server from https://www.mongodb.com/try/download/community
- **Cloud**: Use MongoDB Atlas (free tier) at https://www.mongodb.com/cloud/atlas

### 2. Kafka (Message Broker)
- **Docker** (Recommended): Install Docker Desktop and run `docker-compose up -d`
- **Local**: Download from https://kafka.apache.org/downloads

## Quick Start

### Option 1: Using Docker (Recommended)
```bash
# Install Docker Desktop from https://www.docker.com/products/docker-desktop

# Start MongoDB and Kafka
docker-compose up -d

# Test connections
node test-connections.js

# Start the API server
npm run dev
```

### Option 2: Cloud Services
Update `.env` with cloud connection strings:
```env
DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/dustbin_management
KAFKA_BROKER=your-kafka-cloud-broker:9092
```

### Option 3: Local Installation
1. Install MongoDB: https://www.mongodb.com/try/download/community
2. Install Kafka: https://kafka.apache.org/quickstart
3. Start both services
4. Run `npm run dev`

## Testing Connections

```bash
node test-connections.js
```

## API Endpoints

Once running, your API will be available at `http://localhost:3000/api`

- POST `/api/scans` - Create new scan
- GET `/api/scans` - Get all scans
- GET `/api/scans/:id` - Get scan by ID
- PUT `/api/scans/:id` - Update scan
- DELETE `/api/scans/:id` - Delete scan
