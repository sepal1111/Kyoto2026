# 啟動本地測試伺服器
Write-Host "🚀 正在啟動京都2026 PWA 測試伺服器..." -ForegroundColor Cyan
Write-Host ""

# 檢查可用的伺服器
$pythonAvailable = Get-Command python -ErrorAction SilentlyContinue
$nodeAvailable = Get-Command npx -ErrorAction SilentlyContinue
$phpAvailable = Get-Command php -ErrorAction SilentlyContinue

if ($pythonAvailable) {
    Write-Host "✅ 使用 Python HTTP Server" -ForegroundColor Green
    Write-Host "📱 請在瀏覽器開啟: http://localhost:8000" -ForegroundColor Yellow
    Write-Host "🛑 按 Ctrl+C 停止伺服器" -ForegroundColor Gray
    Write-Host ""
    python -m http.server 8000
}
elseif ($nodeAvailable) {
    Write-Host "✅ 使用 Node.js HTTP Server" -ForegroundColor Green
    Write-Host "📱 請在瀏覽器開啟: http://localhost:8000" -ForegroundColor Yellow
    Write-Host "🛑 按 Ctrl+C 停止伺服器" -ForegroundColor Gray
    Write-Host ""
    npx -y http-server -p 8000
}
elseif ($phpAvailable) {
    Write-Host "✅ 使用 PHP Built-in Server" -ForegroundColor Green
    Write-Host "📱 請在瀏覽器開啟: http://localhost:8000" -ForegroundColor Yellow
    Write-Host "🛑 按 Ctrl+C 停止伺服器" -ForegroundColor Gray
    Write-Host ""
    php -S localhost:8000
}
else {
    Write-Host "❌ 找不到可用的 HTTP 伺服器" -ForegroundColor Red
    Write-Host ""
    Write-Host "請安裝以下其中一個:" -ForegroundColor Yellow
    Write-Host "  • Python: https://www.python.org/downloads/" -ForegroundColor Gray
    Write-Host "  • Node.js: https://nodejs.org/" -ForegroundColor Gray
    Write-Host "  • PHP: https://www.php.net/downloads" -ForegroundColor Gray
    Write-Host ""
    pause
}
