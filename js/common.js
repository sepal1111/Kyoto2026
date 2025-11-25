/**
 * 京都2026旅遊指南 - 共用 JavaScript
 * 包含所有頁面共用的功能和工具函數
 */

// ==================== PWA 相關功能 ====================

/**
 * 註冊 Service Worker
 */
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/service-worker.js')
                .then((registration) => {
                    console.log('✅ Service Worker 註冊成功:', registration.scope);
                })
                .catch((error) => {
                    console.log('❌ Service Worker 註冊失敗:', error);
                });
        });
    }
}

/**
 * PWA 安裝提示功能
 * @param {string} promptId - 安裝提示元素的 ID
 * @param {string} installBtnId - 安裝按鈕的 ID
 * @param {string} dismissBtnId - 稍後按鈕的 ID
 */
function initPWAInstallPrompt(promptId = 'installPrompt', installBtnId = 'installBtn', dismissBtnId = 'dismissBtn') {
    let deferredPrompt;
    const installPrompt = document.getElementById(promptId);
    const installBtn = document.getElementById(installBtnId);
    const dismissBtn = document.getElementById(dismissBtnId);

    if (!installPrompt || !installBtn || !dismissBtn) {
        return; // 如果元素不存在,直接返回
    }

    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        installPrompt.style.display = 'block';
    });

    installBtn.addEventListener('click', async () => {
        if (!deferredPrompt) return;

        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`用戶選擇: ${outcome}`);
        deferredPrompt = null;
        installPrompt.style.display = 'none';
    });

    dismissBtn.addEventListener('click', () => {
        installPrompt.style.display = 'none';
    });

    window.addEventListener('appinstalled', () => {
        console.log('✅ PWA 已安裝');
        installPrompt.style.display = 'none';
    });
}

// ==================== 天氣相關功能 ====================

/**
 * WMO 天氣代碼對應
 * @param {number} code - WMO 天氣代碼
 * @returns {Object} 包含天氣描述和圖示的物件
 */
function getWeatherInfo(code) {
    if (code === 0) return { text: '晴朗', icon: '☀️' };
    if (code >= 1 && code <= 3) return { text: '多雲時晴', icon: '⛅' };
    if (code === 45 || code === 48) return { text: '有霧', icon: '🌫️' };
    if (code >= 51 && code <= 55) return { text: '毛毛雨', icon: '🌧️' };
    if (code >= 56 && code <= 57) return { text: '凍雨', icon: '🌨️' };
    if (code >= 61 && code <= 65) return { text: '下雨', icon: '☔' };
    if (code >= 66 && code <= 67) return { text: '凍雨', icon: '🌨️' };
    if (code >= 71 && code <= 77) return { text: '降雪', icon: '❄️' };
    if (code >= 80 && code <= 82) return { text: '陣雨', icon: '🌦️' };
    if (code >= 85 && code <= 86) return { text: '陣雪', icon: '🌨️' };
    if (code >= 95 && code <= 99) return { text: '雷雨', icon: '⛈️' };
    return { text: '未知', icon: '❓' };
}

/**
 * 獲取單一地點的天氣資料
 * @param {string} elementId - 要更新的 DOM 元素 ID
 * @param {string} locationName - 地點名稱
 * @param {number} lat - 緯度
 * @param {number} lon - 經度
 */
async function fetchSingleLocationWeather(elementId, locationName, lat, lon) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,precipitation_probability_max&timezone=Asia%2FTokyo&forecast_days=1`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();

        const daily = data.daily;
        const code = daily.weather_code[0];
        const maxTemp = Math.round(daily.temperature_2m_max[0]);
        const rainProb = daily.precipitation_probability_max[0];

        const weatherInfo = getWeatherInfo(code);
        const container = document.getElementById(elementId);

        if (container) {
            container.innerHTML = `
                <div class="flex flex-col items-center h-full justify-between py-1">
                    <div class="text-center">
                        <p class="text-base font-bold text-gray-800">${locationName}</p>
                        <div class="text-3xl my-1">${weatherInfo.icon}</div>
                        <p class="text-xs text-gray-500 font-medium">${weatherInfo.text}</p>
                    </div>
                    <div class="flex space-x-2 mt-2 text-xs w-full justify-center bg-gray-50 rounded py-1">
                        <div class="flex flex-col items-center">
                            <span class="text-blue-500 font-bold">☔ ${rainProb}%</span>
                        </div>
                        <div class="border-l border-gray-300"></div>
                        <div class="flex flex-col items-center">
                            <span class="text-red-500 font-bold">🌡️ ${maxTemp}°C</span>
                        </div>
                    </div>
                </div>
            `;
            container.classList.remove('weather-loading');
        }
    } catch (error) {
        console.error('Weather fetch error:', error);
        const container = document.getElementById(elementId);
        if (container) {
            container.innerHTML = '<p class="text-xs text-red-400">暫時無法取得</p>';
            container.classList.remove('weather-loading');
        }
    }
}

/**
 * 獲取多個地點的天氣資料
 * @param {Array} locations - 地點陣列,每個元素包含 {id, name, lat, lon}
 */
async function fetchMultipleLocationsWeather(locations) {
    const lats = locations.map(l => l.lat).join(',');
    const lons = locations.map(l => l.lon).join(',');
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lats}&longitude=${lons}&daily=weather_code,temperature_2m_max,precipitation_probability_max&timezone=Asia%2FTokyo&forecast_days=1`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();

        const results = Array.isArray(data) ? data : [data];

        results.forEach((result, index) => {
            const loc = locations[index];
            const daily = result.daily;
            const code = daily.weather_code[0];
            const maxTemp = Math.round(daily.temperature_2m_max[0]);
            const rainProb = daily.precipitation_probability_max[0];

            const weatherInfo = getWeatherInfo(code);
            const container = document.getElementById(loc.id);

            if (container) {
                container.innerHTML = `
                    <div class="flex flex-col items-center h-full justify-between py-1">
                        <div class="text-center">
                            <p class="text-base font-bold text-gray-800">${loc.name}</p>
                            <div class="text-3xl my-1">${weatherInfo.icon}</div>
                            <p class="text-xs text-gray-500 font-medium">${weatherInfo.text}</p>
                        </div>
                        <div class="flex space-x-2 mt-2 text-xs w-full justify-center bg-gray-50 rounded py-1">
                            <div class="flex flex-col items-center">
                                <span class="text-blue-500 font-bold">☔ ${rainProb}%</span>
                            </div>
                            <div class="border-l border-gray-300"></div>
                            <div class="flex flex-col items-center">
                                <span class="text-red-500 font-bold">🌡️ ${maxTemp}°C</span>
                            </div>
                        </div>
                    </div>
                `;
                container.classList.remove('weather-loading');
            }
        });
    } catch (error) {
        console.error('Weather fetch error:', error);
        locations.forEach(loc => {
            const el = document.getElementById(loc.id);
            if (el) {
                el.innerHTML = '<p class="text-xs text-red-400">暫時無法取得</p>';
                el.classList.remove('weather-loading');
            }
        });
    }
}

/**
 * 獲取京都未來 7 天天氣預報
 * @param {string} containerId - 容器元素 ID
 */
async function fetchWeeklyWeather(containerId = 'weather-forecast-container') {
    const lat = 35.0116;
    const lon = 135.7681;
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=Asia%2FTokyo`;

    const container = document.getElementById(containerId);
    if (!container) return;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();

        const daily = data.daily;
        let htmlContent = '';

        for (let i = 0; i < 7; i++) {
            const dateStr = daily.time[i];
            const dateObj = new Date(dateStr);
            const month = dateObj.getMonth() + 1;
            const day = dateObj.getDate();
            const dayOfWeek = ['日', '一', '二', '三', '四', '五', '六'][dateObj.getDay()];
            const formattedDate = `${month}/${day} (${dayOfWeek})`;

            const code = daily.weather_code[i];
            const maxTemp = Math.round(daily.temperature_2m_max[i]);
            const minTemp = Math.round(daily.temperature_2m_min[i]);
            const rainProb = daily.precipitation_probability_max[i];

            const weatherInfo = getWeatherInfo(code);

            htmlContent += `
                <div class="flex-shrink-0 w-28 bg-white rounded-lg p-2 text-center shadow border border-gray-100 flex flex-col justify-between h-36">
                    <div>
                        <p class="text-xs font-bold text-gray-600 mb-1">${formattedDate}</p>
                        <div class="text-3xl my-1">${weatherInfo.icon}</div>
                        <p class="text-xs text-gray-500 line-clamp-1">${weatherInfo.text}</p>
                    </div>
                    <div class="mt-2 space-y-1">
                        <p class="text-xs font-bold text-blue-500">☔ ${rainProb}%</p>
                        <p class="text-xs font-medium text-gray-700">
                            <span class="text-blue-600">${minTemp}°</span> - <span class="text-red-600">${maxTemp}°</span>
                        </p>
                    </div>
                </div>
            `;
        }

        container.innerHTML = htmlContent;
        container.classList.remove('weather-loading');
    } catch (error) {
        console.error('Weather fetch error:', error);
        container.innerHTML = '<p class="text-sm text-red-400 w-full text-center">無法取得天氣資料</p>';
        container.classList.remove('weather-loading');
    }
}

// ==================== 檢查清單功能 ====================

/**
 * 初始化檢查清單功能
 */
function initChecklist() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"][data-id]');

    // 載入已儲存的狀態
    checkboxes.forEach(box => {
        const id = box.getAttribute('data-id');
        const saved = localStorage.getItem('checklist_' + id);
        if (saved === 'true') {
            box.checked = true;
        }

        // 添加變更監聽器
        box.addEventListener('change', (e) => {
            localStorage.setItem('checklist_' + id, e.target.checked);
        });
    });
}

/**
 * 重置檢查清單
 */
function resetChecklist() {
    if (confirm('確定要重置所有勾選項目嗎?')) {
        const checkboxes = document.querySelectorAll('input[type="checkbox"][data-id]');
        checkboxes.forEach(box => {
            box.checked = false;
            const id = box.getAttribute('data-id');
            localStorage.removeItem('checklist_' + id);
        });
    }
}

// ==================== 工具函數 ====================

/**
 * 格式化日期
 * @param {Date} date - 日期物件
 * @returns {string} 格式化後的日期字串 (例: 2/4 (三))
 */
function formatDate(date) {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const dayOfWeek = ['日', '一', '二', '三', '四', '五', '六'][date.getDay()];
    return `${month}/${day} (${dayOfWeek})`;
}

/**
 * 平滑捲動到指定元素
 * @param {string} elementId - 元素 ID
 */
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

/**
 * 顯示載入動畫
 * @param {string} elementId - 元素 ID
 */
function showLoading(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.add('weather-loading');
    }
}

/**
 * 隱藏載入動畫
 * @param {string} elementId - 元素 ID
 */
function hideLoading(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.remove('weather-loading');
    }
}

// ==================== 自動初始化 ====================

// 頁面載入完成後自動執行
document.addEventListener('DOMContentLoaded', () => {
    // 註冊 Service Worker
    registerServiceWorker();

    // 初始化 PWA 安裝提示 (如果頁面有相關元素)
    initPWAInstallPrompt();

    // 初始化檢查清單 (如果頁面有檢查清單)
    if (document.querySelector('input[type="checkbox"][data-id]')) {
        initChecklist();
    }
});

// 將函數暴露到全域作用域,供 HTML 內聯腳本使用
window.kyoto2026 = {
    registerServiceWorker,
    initPWAInstallPrompt,
    getWeatherInfo,
    fetchSingleLocationWeather,
    fetchMultipleLocationsWeather,
    fetchWeeklyWeather,
    initChecklist,
    resetChecklist,
    formatDate,
    smoothScrollTo,
    showLoading,
    hideLoading
};

// ==================== UI 組件生成函數 ====================

/**
 * 渲染導航列
 * @param {string} currentPage - 當前頁面的檔案名稱 (例: 'day_1_itinerary.html')
 * @param {string} containerId - 導航容器的 ID (預設: 'nav-container')
 */
function renderNavigation(currentPage, containerId = 'nav-container') {
    const pages = [
        { name: '總覽', url: 'itinerary.html' },
        { name: '實用工具', url: 'tools.html' },
        { name: 'Day 1', url: 'day_1_itinerary.html' },
        { name: 'Day 2', url: 'day_2_itinerary.html' },
        { name: 'Day 3', url: 'day_3_itinerary.html' },
        { name: 'Day 4', url: 'day_4_itinerary.html' },
        { name: 'Day 5', url: 'day_5_itinerary.html' },
        { name: 'Day 6', url: 'day_6_itinerary.html' },
        { name: 'Day 7', url: 'day_7_itinerary.html' },
        { name: 'Day 8', url: 'day_8_itinerary.html' }
    ];

    const navHTML = pages.map(page => {
        const isActive = page.url === currentPage;
        const classes = isActive
            ? 'px-3 py-1 text-sm font-semibold rounded-full bg-blue-600 text-white shadow-lg transition duration-150'
            : 'px-3 py-1 text-sm font-medium rounded-full text-gray-700 bg-gray-100 hover:bg-gray-200 transition duration-150';
        return `<a href="${page.url}" class="${classes}">${page.name}</a>`;
    }).join('\n            ');

    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = navHTML;
    }
}

/**
 * 渲染天氣容器
 * @param {Array} locations - 地點陣列,每個元素包含 {id, name}
 * @param {string} containerId - 天氣容器的 ID (預設: 'weather-section')
 * @returns {string} 天氣容器的 HTML
 */
function renderWeatherContainer(locations, containerId = 'weather-section') {
    const weatherCards = locations.map(loc => `
                <div id="${loc.id}" class="bg-white p-2 rounded-lg shadow-sm text-center weather-loading min-h-[120px] flex flex-col justify-center">
                    <p class="text-sm font-bold text-gray-700 mb-1">${loc.name}</p>
                    <p class="text-xs text-gray-400">載入中...</p>
                </div>`).join('\n');

    const weatherHTML = `
        <div class="route-card bg-sky-50 border-t-4 border-sky-400">
            <div class="flex items-center justify-between mb-4">
                <h3 class="text-2xl font-semibold text-sky-800 flex items-center">
                    <span class="mr-2">🌥️</span> 目的地天氣
                </h3>
                <span class="text-xs text-gray-500 bg-white px-2 py-1 rounded border">Data: JMA (via Open-Meteo)</span>
            </div>
            <div id="weather-container" class="grid grid-cols-3 gap-2">${weatherCards}
            </div>
            <p class="text-xs text-gray-400 mt-2 text-right">*顯示今日即時預報</p>
        </div>
    `;

    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = weatherHTML;
    }

    return weatherHTML;
}

// 更新暴露的 API
window.kyoto2026.renderNavigation = renderNavigation;
window.kyoto2026.renderWeatherContainer = renderWeatherContainer;
