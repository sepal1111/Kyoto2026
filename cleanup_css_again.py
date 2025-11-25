#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
移除 HTML 檔案中與 style.css 重複的內聯 CSS (再次執行)
"""

import re
import os

files_to_clean = [
    'itinerary.html',
    'tools.html',
    'day_1_itinerary.html',
    'day_2_itinerary.html',
    'day_3_itinerary.html',
    'day_4_itinerary.html',
    'day_5_itinerary.html',
    'day_6_itinerary.html',
    'day_7_itinerary.html',
    'day_8_itinerary.html'
]

def remove_duplicate_styles(filename):
    """移除檔案中重複的內聯樣式"""
    if not os.path.exists(filename):
        return False
    
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 查找 <style> 標籤
        style_start = content.find('<style>')
        if style_start == -1:
            return False
        
        style_end = content.find('</style>', style_start)
        if style_end == -1:
            return False
        
        style_content = content[style_start:style_end + 8]
        
        # 檢查特徵
        if '.route-card' in style_content or '.weather-loading' in style_content:
            # 移除
            new_content = content[:style_start] + content[style_end + 8:]
            # 清理多餘空行
            new_content = re.sub(r'\n\s*\n\s*\n', '\n\n', new_content)
            
            with open(filename, 'w', encoding='utf-8', newline='\r\n') as f:
                f.write(new_content)
            print(f"✅ 已清理 CSS: {filename}")
            return True
            
    except Exception as e:
        print(f"❌ 錯誤 {filename}: {e}")
        return False

if __name__ == '__main__':
    print("🔄 重新清理重複 CSS...")
    for f in files_to_clean:
        remove_duplicate_styles(f)
