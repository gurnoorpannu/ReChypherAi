# Start MongoDB and Kafka services

Write-Host "=== Starting Backend Services ===" -ForegroundColor Cyan
Write-Host ""

# Start MongoDB
Write-Host "Starting MongoDB..." -ForegroundColor Yellow
$mongoProcess = Get-Process mongod -ErrorAction SilentlyContinue
if ($mongoProcess) {
    Write-Host "✓ MongoDB is already running" -ForegroundColor Green
} else {
    Start-Process mongod -WindowStyle Hidden
    Start-Sleep -Seconds 3
    Write-Host "✓ MongoDB started" -ForegroundColor Green
}

Write-Host ""

# Start Kafka with Docker
Write-Host "Starting Kafka with Docker..." -ForegroundColor Yellow
$dockerRunning = docker info 2>$null
if ($LASTEXITCODE -eq 0) {
    docker-compose up -d
    Write-Host "✓ Kafka started" -ForegroundColor Green
} else {
    Write-Host "✗ Docker is not running. Please start Docker Desktop first." -ForegroundColor Red
    Write-Host "  Or install Docker: https://www.docker.com/products/docker-desktop" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Testing connections..." -ForegroundColor Cyan
node test-connections.js
