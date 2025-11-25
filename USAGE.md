# 共用檔案使用指南

本文件說明如何在 HTML 頁面中使用新創建的共用 CSS 和 JavaScript 檔案。

## 📁 共用檔案

- **css/style.css** - 包含所有共用樣式、CSS 變數、動畫效果
- **js/common.js** - 包含 PWA 功能、天氣 API、檢查清單等工具函數

## 🔧 基本使用方法

### 在 HTML 中引入共用檔案

在 `<head>` 區塊中添加:

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>頁面標題</title>
    
    <!-- PWA Support -->
    <link rel="manifest" href="manifest.json">
    <meta name="theme-color" content="#d4af37">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <link rel="apple-touch-icon" href="icons/icon-192.png">
    
    <!-- Tailwind CSS (如果需要) -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- 共用樣式 -->
    <link rel="stylesheet" href="css/style.css">
</head>
```

在 `</body>` 前添加:

```html
    <!-- 共用 JavaScript -->
    <script src="js/common.js"></script>
</body>
```

## 📋 可用的 CSS 類別

### 卡片樣式
```html
<div class="route-card">
    <!-- 卡片內容 -->
</div>
```

### 浮動返回首頁按鈕
```html
<a href="index.html" class="floating-home-btn" aria-label="返回首頁">
    <svg><!-- 首頁圖示 --></svg>
</a>
```

### 導航列
```html
<div class="sticky-nav">
    <div class="nav-container">
        <a href="index.html" class="nav-link">首頁</a>
        <a href="itinerary.html" class="nav-link active">行程</a>
    </div>
</div>
```

### 工具類別
- `.text-primary` - 主題色文字
- `.bg-primary` - 主題色背景
- `.shadow-soft` - 柔和陰影
- `.rounded-card` - 圓角卡片
- `.fade-in` - 淡入動畫

## 🛠️ JavaScript 函數

### PWA 相關

```javascript
// Service Worker 會自動註冊,無需手動調用

// 如果需要自訂安裝提示,在 HTML 中添加:
<div id="installPrompt" class="pwa-install-prompt">
    <p>📱 安裝京都2026旅遊指南到主畫面</p>
    <button id="installBtn" class="pwa-install-btn">安裝</button>
    <button id="dismissBtn" class="pwa-dismiss-btn">稍後</button>
</div>
```

### 天氣功能

#### 獲取單一地點天氣
```javascript
// 在 HTML 中準備容器
<div id="weather-kyoto" class="weather-loading">載入中...</div>

// 在 JavaScript 中調用
kyoto2026.fetchSingleLocationWeather('weather-kyoto', '京都', 35.01, 135.77);
```

#### 獲取多個地點天氣
```javascript
const locations = [
    { id: 'weather-kyoto', name: '京都', lat: 35.01, lon: 135.77 },
    { id: 'weather-osaka', name: '大阪', lat: 34.69, lon: 135.50 }
];

kyoto2026.fetchMultipleLocationsWeather(locations);
```

#### 獲取未來 7 天天氣
```javascript
<div id="weather-forecast-container" class="weather-loading">載入中...</div>

<script>
    kyoto2026.fetchWeeklyWeather('weather-forecast-container');
</script>
```

### 檢查清單功能

```html
<!-- HTML -->
<label class="checklist-item">
    <input type="checkbox" data-id="passport">
    <span>護照</span>
</label>

<!-- JavaScript 會自動初始化,無需手動調用 -->

<!-- 重置清單 -->
<button onclick="kyoto2026.resetChecklist()">重置清單</button>
```

### 工具函數

```javascript
// 格式化日期
const formatted = kyoto2026.formatDate(new Date());
// 輸出: "11/25 (一)"

// 平滑捲動
kyoto2026.smoothScrollTo('elementId');

// 顯示/隱藏載入動畫
kyoto2026.showLoading('elementId');
kyoto2026.hideLoading('elementId');
```

## 📝 完整範例頁面

```html
<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>範例頁面</title>
    
    <!-- PWA Support -->
    <link rel="manifest" href="manifest.json">
    <meta name="theme-color" content="#d4af37">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <link rel="apple-touch-icon" href="icons/icon-192.png">
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- 共用樣式 -->
    <link rel="stylesheet" href="css/style.css">
</head>
<body class="p-0 sm:p-6">
    <!-- 導航列 -->
    <div class="sticky-nav">
        <div class="nav-container">
            <a href="index.html" class="nav-link">首頁</a>
            <a href="itinerary.html" class="nav-link active">行程</a>
        </div>
    </div>

    <!-- 主容器 -->
    <div class="max-w-xl mx-auto px-4 sm:px-0">
        <!-- 頁面標題 -->
        <header class="text-center mb-6">
            <h1 class="text-3xl font-bold text-gray-800">範例頁面</h1>
        </header>

        <!-- 天氣卡片 -->
        <div class="route-card bg-sky-50 border-t-4 border-sky-400">
            <h3 class="text-2xl font-semibold text-sky-800 mb-4">
                🌦️ 今日天氣
            </h3>
            <div id="weather-kyoto" class="weather-loading">載入中...</div>
        </div>

        <!-- 檢查清單卡片 -->
        <div class="route-card bg-green-50 border-t-4 border-green-500">
            <h3 class="text-2xl font-semibold text-green-800 mb-4">
                ✅ 檢查清單
            </h3>
            <label class="checklist-item flex items-center space-x-3">
                <input type="checkbox" data-id="item1">
                <span>項目 1</span>
            </label>
        </div>
    </div>

    <!-- 浮動返回首頁按鈕 -->
    <a href="index.html" class="floating-home-btn" aria-label="返回首頁">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
    </a>

    <!-- 共用 JavaScript -->
    <script src="js/common.js"></script>
    
    <!-- 頁面專屬腳本 -->
    <script>
        // 載入天氣
        kyoto2026.fetchSingleLocationWeather('weather-kyoto', '京都', 35.01, 135.77);
    </script>
</body>
</html>
```

## 🎨 CSS 變數

可以在自訂樣式中使用這些 CSS 變數:

```css
/* 使用主題色 */
.my-element {
    color: var(--primary-color);
    background-color: var(--bg-color);
    border-color: var(--blue-500);
}
```

可用變數:
- `--primary-color` - 金色主題色
- `--bg-color` - 深灰色背景
- `--text-color` - 淺色文字
- `--blue-50` 到 `--blue-800` - 藍色系列
- `--gray-50` 到 `--gray-900` - 灰色系列
- 更多顏色請參考 `css/style.css`

## 📦 遷移現有頁面

要將現有頁面遷移到使用共用檔案:

1. 在 `<head>` 添加 `<link rel="stylesheet" href="css/style.css">`
2. 在 `</body>` 前添加 `<script src="js/common.js"></script>`
3. 移除頁面中重複的樣式定義
4. 移除重複的 JavaScript 函數
5. 將內聯的 Service Worker 註冊代碼移除 (common.js 會自動處理)
6. 將天氣 API 調用改為使用 `kyoto2026.fetchXXX()` 函數

## ⚠️ 注意事項

1. **Service Worker 快取**: 已更新 service-worker.js 快取這些檔案
2. **版本控制**: Service Worker 版本已更新為 v2
3. **向後兼容**: 現有頁面仍可正常運作,可逐步遷移
4. **CDN 依賴**: Tailwind CSS 仍使用 CDN,未來可考慮本地化
