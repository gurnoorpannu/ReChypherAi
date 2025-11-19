# Backend Services - Dustbin Management System

## Current Status ✓

Your backend code is **fully configured and ready**:
- ✓ MongoDB connection with error handling
- ✓ Kafka producer (optional, fails gracefully)
- ✓ REST API with CRUD operations
- ✓ All routes and services working
- ✓ Environment variables configured

## What You Need

To run the backend, you need MongoDB and Kafka running. Choose one option:

### Option 1: Cloud Services (Easiest - No Installation)
Use free cloud services - see `QUICK-START.md`

### Option 2: Local Installation (Full Control)
Install MongoDB and Docker locally - see `INSTALL-WINDOWS.md`

## Quick Commands

```bash
# Test if services are reachable
node test-connections.js

# Start development server
npm run dev

# Start all workers
npm run ml-worker          # ML processing worker
npm run processor-worker   # Data processor worker
```

## API Endpoints

Base URL: `http://localhost:3000/api`

- `POST /scans` - Create new scan
- `GET /scans` - Get all scans
- `GET /scans/:id` - Get scan by ID
- `PUT /scans/:id` - Update scan
- `DELETE /scans/:id` - Delete scan

## Environment Variables

Located in `api-service/.env`:
```env
DATABASE_URL=mongodb://localhost:27017/dustbin_management
KAFKA_BROKER=localhost:9092
PORT=3000
```

## Next Steps

1. Choose installation method (cloud or local)
2. Follow the guide (`QUICK-START.md` or `INSTALL-WINDOWS.md`)
3. Run `node test-connections.js` to verify
4. Run `npm run dev` to start the server
