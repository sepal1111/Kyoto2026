# 批量添加 PWA 支援到 HTML 檔案

$files = @(
    "itinerary.html",
    "pic.html",
    "tools.html",
    "day_1_itinerary.html",
    "day_2_itinerary.html",
    "day_3_itinerary.html",
    "day_4_itinerary.html",
    "day_5_itinerary.html",
    "day_6_itinerary.html",
    "day_7_itinerary.html",
    "day_8_itinerary.html"
)

$pwaMetaTags = @"
    
    <!-- PWA Support -->
    <link rel="manifest" href="manifest.json">
    <meta name="theme-color" content="#d4af37">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="apple-mobile-web-app-title" content="京都2026">
    <link rel="apple-touch-icon" href="icons/icon-192.png">
"@

$serviceWorkerScript = @"

    <!-- Service Worker Registration -->
    <script>
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/service-worker.js')
                    .then((registration) => console.log('✅ SW registered'))
                    .catch((error) => console.log('❌ SW registration failed:', error));
            });
        }
    </script>
"@

foreach ($file in $files) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw -Encoding UTF8
        
        # 檢查是否已經有 PWA 支援
        if ($content -notmatch "manifest.json") {
            Write-Host "正在更新: $file"
            
            # 在 </title> 後添加 PWA meta 標籤
            $content = $content -replace '(</title>)', "`$1$pwaMetaTags"
            
            # 在 </body> 前添加 Service Worker 註冊
            $content = $content -replace '(</body>)', "$serviceWorkerScript`n`$1"
            
            # 儲存檔案
            $content | Set-Content $file -Encoding UTF8 -NoNewline
            Write-Host "✅ 已更新: $file"
        } else {
            Write-Host "⏭️  跳過 (已有 PWA 支援): $file"
        }
    } else {
        Write-Host "⚠️  檔案不存在: $file"
    }
}

Write-Host "`n✅ PWA 支援添加完成!"
