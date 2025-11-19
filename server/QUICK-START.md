# Quick Start - No Installation Required

## Option 1: Use Cloud Services (Fastest - 5 minutes)

### MongoDB Atlas (Free)
1. Go to https://www.mongodb.com/cloud/atlas/register
2. Create free account
3. Create a free cluster (M0)
4. Click "Connect" → "Connect your application"
5. Copy the connection string
6. Update `.env`:
   ```
   DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/dustbin_management
   ```

### CloudKarafka (Free)
1. Go to https://www.cloudkarafka.com/
2. Sign up for free plan
3. Create instance
4. Copy broker URL
5. Update `.env`:
   ```
   KAFKA_BROKER=your-instance.cloudkarafka.com:9092
   ```

Then run:
```bash
npm run dev
```

---

## Option 2: Install Locally (Requires Admin Rights)

### Quick Install with Chocolatey
Run PowerShell as Administrator:
```powershell
.\install-services.ps1
```

This installs:
- MongoDB Community Server
- Docker Desktop (for Kafka)

After installation and restart:
```powershell
.\start-services.ps1
npm run dev
```

---

## Option 3: Manual Installation

### MongoDB
1. Download: https://www.mongodb.com/try/download/community
2. Install with default settings
3. MongoDB runs automatically as a service

### Docker Desktop (for Kafka)
1. Download: https://www.docker.com/products/docker-desktop
2. Install and restart computer
3. Run: `docker-compose up -d`

---

## Verify Everything Works

```bash
node test-connections.js
npm run dev
```

Your API will be at: http://localhost:3000/api
