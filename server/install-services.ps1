# Installation script for MongoDB and Kafka on Windows

Write-Host "=== Backend Services Installation ===" -ForegroundColor Cyan
Write-Host ""

# Check if Chocolatey is installed
$chocoInstalled = Get-Command choco -ErrorAction SilentlyContinue

if (-not $chocoInstalled) {
    Write-Host "Installing Chocolatey package manager..." -ForegroundColor Yellow
    Set-ExecutionPolicy Bypass -Scope Process -Force
    [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072
    Invoke-Expression ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
    Write-Host "✓ Chocolatey installed" -ForegroundColor Green
}

Write-Host ""
Write-Host "Installing MongoDB..." -ForegroundColor Yellow
choco install mongodb -y

Write-Host ""
Write-Host "Installing Docker Desktop (for Kafka)..." -ForegroundColor Yellow
choco install docker-desktop -y

Write-Host ""
Write-Host "=== Installation Complete ===" -ForegroundColor Green
Write-Host ""
Write-Host "IMPORTANT: You need to restart your computer for Docker to work properly." -ForegroundColor Red
Write-Host ""
Write-Host "After restart, run:" -ForegroundColor Cyan
Write-Host "  1. docker-compose up -d" -ForegroundColor White
Write-Host "  2. node test-connections.js" -ForegroundColor White
Write-Host "  3. npm run dev" -ForegroundColor White
