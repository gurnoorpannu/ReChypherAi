# Windows Installation Guide

## Download & Install MongoDB

1. **Download MongoDB Community Server**
   - Go to: https://www.mongodb.com/try/download/community
   - Select: Windows x64
   - Click "Download"

2. **Install MongoDB**
   - Run the installer
   - Choose "Complete" installation
   - Check "Install MongoDB as a Service"
   - Click "Install"

3. **Verify MongoDB is Running**
   ```powershell
   # MongoDB should start automatically
   # Check if it's running:
   Get-Service MongoDB
   ```

## Download & Install Docker Desktop (for Kafka)

1. **Download Docker Desktop**
   - Go to: https://www.docker.com/products/docker-desktop
   - Click "Download for Windows"

2. **Install Docker Desktop**
   - Run the installer
   - Follow the installation wizard
   - **Restart your computer** when prompted

3. **Start Docker Desktop**
   - Open Docker Desktop from Start menu
   - Wait for it to start (whale icon in system tray)

4. **Start Kafka**
   ```powershell
   cd backend
   docker-compose up -d
   ```

## Test & Run

```powershell
# Test connections
node test-connections.js

# Start the backend
npm run dev
```

## Alternative: Cloud Services (No Installation)

If you don't want to install locally, use cloud services:

### MongoDB Atlas (Free)
- Sign up: https://www.mongodb.com/cloud/atlas/register
- Get connection string
- Update `.env` with your connection string

### Upstash Kafka (Free)
- Sign up: https://upstash.com/
- Create Kafka cluster
- Get broker URL
- Update `.env` with your broker URL

Then just run: `npm run dev`
