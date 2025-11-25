# 🇯🇵 京都2026八日遊旅遊指南

一個功能完整的 Progressive Web App (PWA),提供 2026 年 2 月京都八日遊的完整旅遊規劃。

## ✨ 功能特色

- 📱 **可安裝到主畫面** - 像原生 App 一樣使用
- ✈️ **離線瀏覽** - 沒有網路也能查看已載入的頁面
- ⚡ **快速載入** - 智能快取加速頁面載入
- 🗺️ **詳細行程** - 8 天完整行程規劃,包含交通、景點、餐廳
- 🌦️ **即時天氣** - 整合 Open-Meteo API 顯示京都天氣預報
- 🗣️ **日語翻譯** - 內建中日翻譯和語音播放功能
- 🆘 **緊急資訊** - 日本緊急聯絡電話和醫院資訊
- ✅ **行李清單** - 互動式檢查清單,自動儲存勾選狀態

## 📁 專案結構

```
Kyoto2026/
├── index.html              # 首頁
├── itinerary.html          # 行程總覽
├── pic.html                # 圖片瀏覽
├── tools.html              # 實用工具
├── day_1_itinerary.html    # Day 1 行程
├── day_2_itinerary.html    # Day 2 行程
├── ...                     # Day 3-8 行程
├── offline.html            # 離線提示頁面
├── manifest.json           # PWA Manifest
├── service-worker.js       # Service Worker
├── image/                  # 行程圖片
│   ├── day0.jpg
│   ├── day1.jpg
│   └── ...
├── pic/                    # 圖片瀏覽資源
│   ├── 001.JPG
│   ├── 002.JPG
│   └── ...
└── icons/                  # PWA 圖示
    ├── icon-192.png
    └── icon-512.png
```

## 🚀 快速開始

### 方法 1: 使用啟動腳本 (推薦)

```powershell
.\start-server.ps1
```

然後在瀏覽器開啟: `http://localhost:8000`

### 方法 2: 手動啟動伺服器

**使用 Python:**
```powershell
python -m http.server 8000
```

**使用 Node.js:**
```powershell
npx http-server -p 8000
```

**使用 PHP:**
```powershell
php -S localhost:8000
```

## 📱 安裝為 PWA

### 桌面版 (Chrome/Edge)

1. 開啟網站後,點擊網址列右側的安裝圖示 ⊕
2. 或等待頁面底部出現金色安裝橫幅
3. 點擊「安裝」按鈕
4. 應用程式將安裝到您的系統

### 行動裝置

**Android (Chrome):**
1. 開啟網站
2. 點擊選單 (⋮) → "Add to Home screen"
3. 確認安裝

**iOS (Safari):**
1. 開啟網站
2. 點擊分享按鈕 (□↑)
3. 選擇 "Add to Home Screen"
4. 確認添加

## 🧪 測試 PWA 功能

### 1. 檢查 Service Worker

1. 開啟 Chrome DevTools (F12)
2. 切換到 **Application** 面板
3. 左側選單選擇 **Service Workers**
4. 確認狀態為 "activated and is running"

### 2. 測試離線功能

1. 瀏覽網站的各個頁面
2. 在 DevTools → Network 面板勾選 "Offline"
3. 重新整理頁面或瀏覽其他頁面
4. 應該能正常顯示已瀏覽過的頁面

### 3. Lighthouse 審核

1. DevTools → Lighthouse 面板
2. 勾選 "Progressive Web App"
3. 點擊 "Analyze page load"
4. 查看 PWA 分數和建議

## 🛠️ 技術棧

- **前端框架**: 純 HTML/CSS/JavaScript
- **CSS 框架**: Tailwind CSS (CDN)
- **圖片輪播**: Swiper.js
- **PWA**: Service Worker + Web App Manifest
- **天氣 API**: Open-Meteo (JMA 資料源)
- **翻譯 API**: Google Translate (非官方)

## 📋 行程概覽

| 日期 | 行程重點 |
|------|---------|
| **Day 1** (2/4) | 神戶機場 → 奈良 (東大寺、奈良公園、春日大社) → 京都 |
| **Day 2** (2/5) | 嵐山經典一日遊 (竹林、天龍寺、渡月橋) |
| **Day 3** (2/6) | 清水寺、東山古街、祇園 |
| **Day 4** (2/7) | 宇治與銀閣寺 |
| **Day 5** (2/8) | 伏見稻荷與東福寺 |
| **Day 6** (2/9) | 天橋立與伊根舟屋 |
| **Day 7** (2/10) | 貴船、鞍馬健行與叡山電車 |
| **Day 8** (2/11) | 飯店 → 關西機場 |

## 🔧 開發說明

### 更新快取版本

每次更新內容後,記得修改 `service-worker.js` 中的版本號:

```javascript
const CACHE_NAME = 'kyoto2026-v2'; // 遞增版本號
```

### 添加新頁面到快取

在 `service-worker.js` 的 `CORE_ASSETS` 陣列中添加新頁面:

```javascript
const CORE_ASSETS = [
  // ... 現有資源
  '/new-page.html',  // 新增頁面
];
```

## 📄 授權

本專案僅供個人旅遊使用。

## 🙏 致謝

- 天氣資料: [Open-Meteo](https://open-meteo.com/)
- 圖示設計: AI 生成
- 地圖資料: Google Maps

---

**祝您京都之旅愉快! 🎌**
