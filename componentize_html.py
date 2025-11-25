#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
將所有 HTML 檔案的導航列和天氣容器替換為組件化調用
"""

import re
import os

# 檔案配置
files_config = {
    'itinerary.html': {
        'current_page': 'itinerary.html',
        'has_weather': False
    },
    'day_1_itinerary.html': {
        'current_page': 'day_1_itinerary.html',
        'weather_locations': [
            {'id': 'weather-kobe', 'name': '神戶'},
            {'id': 'weather-nara', 'name': '奈良'},
            {'id': 'weather-kyoto', 'name': '京都'}
        ]
    },
    'day_2_itinerary.html': {
        'current_page': 'day_2_itinerary.html',
        'weather_locations': [
            {'id': 'weather-arashiyama', 'name': '嵐山'}
        ]
    },
    'day_3_itinerary.html': {
        'current_page': 'day_3_itinerary.html',
        'weather_locations': [
            {'id': 'weather-kiyomizu', 'name': '清水寺'},
            {'id': 'weather-gion', 'name': '祇園'}
        ]
    },
    'day_4_itinerary.html': {
        'current_page': 'day_4_itinerary.html',
        'weather_locations': [
            {'id': 'weather-uji', 'name': '宇治'},
            {'id': 'weather-ginkakuji', 'name': '銀閣寺'}
        ]
    },
    'day_5_itinerary.html': {
        'current_page': 'day_5_itinerary.html',
        'weather_locations': [
            {'id': 'weather-fushimi', 'name': '伏見稻荷'},
            {'id': 'weather-tofukuji', 'name': '東福寺'}
        ]
    },
    'day_6_itinerary.html': {
        'current_page': 'day_6_itinerary.html',
        'weather_locations': [
            {'id': 'weather-amanohashidate', 'name': '天橋立'}
        ]
    },
    'day_7_itinerary.html': {
        'current_page': 'day_7_itinerary.html',
        'weather_locations': [
            {'id': 'weather-kibune', 'name': '貴船'},
            {'id': 'weather-kurama', 'name': '鞍馬'}
        ]
    },
    'day_8_itinerary.html': {
        'current_page': 'day_8_itinerary.html',
        'weather_locations': [
            {'id': 'weather-kyoto', 'name': '京都'}
        ]
    }
}

def replace_navigation(content, current_page):
    """替換導航列為組件化調用"""
    # 查找導航列區塊
    nav_pattern = r'<!-- Daily Navigation Bar.*?</div>\s*</div>'
    
    # 新的導航列 HTML
    new_nav = f'''<!-- Daily Navigation Bar (Fixed at top for mobile experience) -->
    <div class="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-md mb-6 py-2 overflow-x-auto">
        <div id="nav-container" class="flex space-x-2 px-4 whitespace-nowrap"></div>
    </div>
    <script>kyoto2026.renderNavigation('{current_page}');</script>'''
    
    # 替換
    new_content = re.sub(nav_pattern, new_nav, content, flags=re.DOTALL)
    
    return new_content

def replace_weather_container(content, locations):
    """替換天氣容器為組件化調用"""
    # 查找天氣容器區塊
    weather_pattern = r'<!-- NEW: 天氣資訊區塊.*?</div>\s*(?=\s*<!-- 區塊)'
    
    # 生成地點陣列字串
    locs_str = ',\n            '.join([
        f"{{ id: '{loc['id']}', name: '{loc['name']}' }}"
        for loc in locations
    ])
    
    # 新的天氣容器 HTML
    new_weather = f'''<!-- 天氣資訊區塊 -->
        <div id="weather-section"></div>
        <script>
            const weatherLocations = [
                {locs_str}
            ];
            kyoto2026.renderWeatherContainer(weatherLocations);
            kyoto2026.fetchMultipleLocationsWeather(weatherLocations.map(loc => ({{
                id: loc.id,
                name: loc.name,
                lat: 0, // 將由實際座標替換
                lon: 0
            }})));
        </script>

        '''
    
    # 替換
    new_content = re.sub(weather_pattern, new_weather, content, flags=re.DOTALL)
    
    return new_content

def process_file(filename, config):
    """處理單個檔案"""
    if not os.path.exists(filename):
        print(f"⚠️  檔案不存在: {filename}")
        return False
    
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_size = len(content)
        
        # 替換導航列
        content = replace_navigation(content, config['current_page'])
        
        # 替換天氣容器 (如果有)
        if 'weather_locations' in config:
            content = replace_weather_container(content, config['weather_locations'])
        
        new_size = len(content)
        saved = original_size - new_size
        
        # 寫回檔案
        with open(filename, 'w', encoding='utf-8', newline='\r\n') as f:
            f.write(content)
        
        print(f"✅ 已處理: {filename}")
        if saved > 0:
            print(f"   減少 {saved} 字元")
        return True
        
    except Exception as e:
        print(f"❌ 錯誤 {filename}: {e}")
        return False

def main():
    """主函數"""
    print("🔄 開始組件化整合...")
    print()
    
    success_count = 0
    for filename, config in files_config.items():
        if process_file(filename, config):
            success_count += 1
        print()
    
    print(f"✅ 完成! 成功處理 {success_count}/{len(files_config)} 個檔案")

if __name__ == '__main__':
    main()
