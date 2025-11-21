const itineraryData = {
    tripName: "2026 京都八日遊總覽",
    period: "2026/02/04 (三) - 02/11 (三)",
    overview: {
        parking: {
            title: "台灣桃園機場 (TPE) 停車資訊",
            bank: "玉山銀行",
            lot: "連勝停車場",
            address: "33745桃園市大園區平安路80號",
            mapLink: "https://maps.app.goo.gl/UeD5YWFk3anYPHpF6"
        },
        flights: {
            outbound: { date: "2/4", route: "桃園 (TPE) → 神戶 (UKB)", flight: "BR134", dep: "06:35", arr: "10:00", terminal: "第二航廈" },
            inbound: { date: "2/11", route: "關西 (KIX) → 桃園 (TPE)", flight: "BR177", dep: "10:55", arr: "13:10", terminal: "第一航廈" }
        },
        hotel: {
            name: "CHISUN PREMIUM 京都九條",
            address: "京都市南区東九条上御霊町15-1",
            period: "2026/2/4 - 2/11",
            note: "近 JR 京都車站，交通方便"
        },
        packingList: [
            {
                category: "重要證件與財物",
                items: ["護照 (有效期限6個月以上)", "機票證明 (電子/紙本)", "日幣現金", "信用卡 (建議2張以上)", "交通卡 (Suica/ICOCA)", "海外旅遊保險單", "緊急聯絡資訊"]
            },
            {
                category: "電子產品",
                items: ["手機 & 充電線", "行動電源 (需隨身攜帶)", "網卡 / Wi-Fi 機", "轉接頭 (日本兩孔扁插)", "耳機", "相機 & 記憶卡"]
            },
            {
                category: "衣物 (2月冬季)",
                items: ["發熱衣 x3", "毛衣/刷毛上衣 x3", "保暖長褲 x2", "防風保暖外套 (羽絨)", "睡衣", "內衣褲/襪子", "圍巾/手套/毛帽", "好走的鞋子 (防水佳)"]
            },
            {
                category: "盥洗與保養",
                items: ["牙刷牙膏 (部分飯店不主動提供)", "洗面乳/卸妝用品", "保濕乳液/護唇膏 (日本乾燥)", "個人慣用保養品", "刮鬍刀", "生理用品"]
            },
            {
                category: "醫藥與其他",
                items: ["個人常備藥 (感冒/腸胃/止痛)", "OK繃/外傷藥膏", "口罩 (備用)", "折疊傘 (必備)", "塑膠袋 (裝髒衣物)", "暖暖包"]
            }
        ],
        // New Features Data
        phrasebook: [
            {
                category: "基本用語 (Basic)",
                phrases: [
                    { ja: "こんにちは", ro: "Konnichiwa", zh: "你好" },
                    { ja: "ありがとう", ro: "Arigatou", zh: "謝謝" },
                    { ja: "すみません", ro: "Sumimasen", zh: "不好意思 / 請問" },
                    { ja: "はい / いいえ", ro: "Hai / Iie", zh: "是 / 不是" }
                ]
            },
            {
                category: "購物 (Shopping)",
                phrases: [
                    { ja: "これください", ro: "Kore kudasai", zh: "請給我這個" },
                    { ja: "いくらですか？", ro: "Ikura desu ka?", zh: "請問多少錢？" },
                    { ja: "免税できますか？", ro: "Menzei dekimasu ka?", zh: "可以免稅嗎？" },
                    { ja: "カードは使えますか？", ro: "Kaado wa tsukaemasu ka?", zh: "可以刷卡嗎？" }
                ]
            },
            {
                category: "餐廳 (Dining)",
                phrases: [
                    { ja: "メニューをください", ro: "Menyuu o kudasai", zh: "請給我菜單" },
                    { ja: "お水ください", ro: "Omizu kudasai", zh: "請給我水" },
                    { ja: "お会計お願いします", ro: "Okaikei onegaishimasu", zh: "麻煩結帳" },
                    { ja: "トイレはどこですか？", ro: "Toire wa doko desu ka?", zh: "廁所在哪裡？" }
                ]
            },
            {
                category: "交通 (Transport)",
                phrases: [
                    { ja: "駅はどこですか？", ro: "Eki wa doko desu ka?", zh: "車站在哪裡？" },
                    { ja: "切符売り場はどこですか？", ro: "Kippu uriba wa doko desu ka?", zh: "售票處在哪裡？" },
                    { ja: "この電車は京都に行きますか？", ro: "Kono densha wa Kyoto ni ikimasu ka?", zh: "這班車去京都嗎？" }
                ]
            }
        ],
        emergency: {
            police: "110",
            ambulance: "119",
            embassy: {
                name: "台北駐大阪經濟文化辦事處",
                phone: "+81-6-6227-8623",
                address: "大阪市北區中之島2-3-18"
            },
            hospital: {
                name: "京都武田病院",
                address: "京都市下京区塩小路通西洞院東入東塩小路町841-5"
            }
        },
        wallet: [
            { name: "Haruka 車票", note: "請截圖 QR Code 存放於此", link: "#" },
            { name: "Visit Japan Web", note: "入境審查 QR Code", link: "https://vjw-lp.digital.go.jp/zh-hant/" },
            { name: "環球影城門票", note: "電子票券", link: "#" }
        ],
        weather: {
            title: "2月京都氣候與穿搭建議",
            temp: "平均氣溫 1°C ~ 9°C",
            desc: "2月的京都正值深冬，空氣乾燥寒冷，早晚溫差大，偶爾會飄雪。建議採用「洋蔥式穿搭法」。",
            clothing: [
                "外層：防風、防水的保暖大衣或羽絨外套 (室內暖氣強，方便穿脫)",
                "中層：毛衣、刷毛大學T或輕羽絨背心",
                "內層：發熱衣 (建議帶 2-3 件替換)"
            ],
            accessories: [
                "必備：圍巾、手套、毛帽 (頭部保暖很重要)",
                "鞋襪：保暖厚襪、好走的防水防滑鞋 (避免雪地濕滑)",
                "小物：暖暖包 (貼式/手握)、保濕乳液、護唇膏、折疊傘"
            ]
        }
    },
    days: [
        {
            id: 1,
            date: "2/4 (三)",
            title: "神戶 → 奈良 → 京都",
            mainTask: "移動與奈良重點觀光",
            sections: [
                {
                    title: "本日交通路線總覽",
                    type: "summary",
                    content: "神戶機場 (UKB) → 奈良觀光區 → CHISUN PREMIUM 京都九條 飯店",
                    stats: [
                        { label: "總交通時長", value: "約 2 小時 45 分鐘" },
                        { label: "總交通費用", value: "¥2420" },
                        { label: "最終目的地", value: "CHISUN PREMIUM 京都九條 飯店" }
                    ]
                },
                {
                    title: "神戶機場 → 奈良",
                    type: "transport",
                    steps: [
                        { title: "抵達神戶與 Port Liner", route: "神戶機場 (UKB) → 三宮站", time: "18 分鐘", cost: "¥340", note: "在三宮站下車" },
                        { title: "步行至阪神三宮站", route: "步行", time: "5 分鐘" },
                        { title: "阪神三宮站 → 近鐵奈良站", route: "阪神本線 快速急行 → 近鐵奈良線", time: "1 小時 17 分鐘", cost: "¥1,100", note: "直通運轉，無需換乘" }
                    ],
                    mapLink: "https://maps.app.goo.gl/zATpNgRSXvVv14Xq8"
                },
                {
                    title: "奈良下午觀光行程",
                    type: "sightseeing",
                    spots: [
                        { name: "東大寺", time: "1.5 小時", note: "世界最大木造建築與大佛" },
                        { name: "奈良公園", time: "1 小時", note: "與溫馴的奈良鹿互動" },
                        { name: "春日大社", time: "1 小時", note: "著名的石燈籠與吊燈籠" },
                        { name: "興福寺", time: "0.5 小時", note: "五重塔外觀" }
                    ]
                },
                {
                    title: "奈良 → 京都飯店",
                    type: "transport",
                    steps: [
                        { title: "前往京都飯店", route: "近鐵奈良 → 京都", time: "57 分鐘", cost: "¥760", note: "近鐵京都線" },
                        { title: "步行至飯店", route: "京都車站八條口 → 飯店", time: "11 分鐘", note: "約 800 公尺" }
                    ],
                    mapLink: "https://maps.app.goo.gl/pVb5GiGiX7N5pHuF9"
                },
                {
                    title: "餐點規劃",
                    type: "meals",
                    items: [
                        { type: "午餐", name: "志津香 釜飯 (公園店)", note: "口味清淡，鄰近奈良公園", mapLink: "https://maps.app.goo.gl/DdXvLc3kLfp5QeuJ6" },
                        { type: "點心", name: "中谷堂 (高速搗麻糬)", note: "近鐵奈良車站附近商店街", mapLink: "https://maps.app.goo.gl/L2eNX3uTigF75vPXA" },
                        { type: "晚餐", name: "Naosan(直さん)", note: "九条站附近日式居酒屋", mapLink: "https://maps.app.goo.gl/YaBUsv3QpMoDkwGx7" }
                    ]
                }
            ]
        },
        {
            id: 2,
            date: "2/5 (四)",
            title: "京都嵐山經典一日遊",
            mainTask: "參觀天龍寺、竹林與渡月橋，並前往鐵道博物館",
            sections: [
                {
                    title: "本日交通路線總覽",
                    type: "summary",
                    content: "CHISUN PREMIUM 京都九條 → 嵐山地區 (JR) → 京都鐵道博物館 → 晚餐 → 飯店",
                    stats: [
                        { label: "單程時長", value: "約 25 分鐘 (嵐山至博物館)" },
                        { label: "總交通費用", value: "¥770" }
                    ]
                },
                {
                    title: "飯店 → 嵐山",
                    type: "transport",
                    steps: [
                        { title: "步行至京都車站", route: "飯店 → JR 京都車站", time: "7-10 分鐘" },
                        { title: "京都車站 → 嵯峨嵐山站", route: "JR 嵯峨野線", time: "16 分鐘", cost: "¥240" }
                    ],
                    mapLink: "https://maps.app.goo.gl/1wjG7ntkNo8UGkYN8"
                },
                {
                    title: "嵐山、天龍寺漫步",
                    type: "sightseeing",
                    spots: [
                        { name: "野宮神社", time: "0.5 小時", note: "祈求良緣、學業" },
                        { name: "嵐山竹林步道", time: "1.5 小時", note: "長約400公尺的竹林小徑" },
                        { name: "天龍寺", time: "1 小時", note: "曹源池庭園" },
                        { name: "渡月橋", time: "0.5 小時", note: "嵐山地標" }
                    ],
                    mapLink: "https://maps.app.goo.gl/zATpNgRSXvVv14Xq8"
                },
                {
                    title: "前往京都鐵道博物館",
                    type: "transport",
                    steps: [
                        { title: "前往京都鐵道博物館", route: "JR 嵯峨嵐山站 → 梅小路京都西站", time: "12 分鐘", cost: "¥200" },
                        { title: "步行至梅小路公園", route: "步行", time: "5 分鐘" }
                    ]
                },
                {
                    title: "京都鐵道博物館&梅小路公園",
                    type: "sightseeing",
                    spots: [
                        { name: "梅小路公園", time: "0.5 小時", note: "蒸汽火車體驗" },
                        { name: "京都鐵道博物館", note: "扇形車庫、行駛模擬裝置、天空露台" }
                    ]
                },
                {
                    title: "博物館 → 用餐 → 回飯店",
                    type: "transport",
                    steps: [
                        { title: "步行至 炸豬排一番", time: "5 分鐘" },
                        { title: "從餐廳返回飯店", route: "207 City Bus 往東福寺方向", time: "20 分鐘", cost: "¥230", note: "九条河原町下車" }
                    ],
                    mapLink: "https://maps.app.goo.gl/omCRuaSufW5xnm5e7"
                },
                {
                    title: "餐點規劃",
                    type: "meals",
                    items: [
                        { type: "午餐", name: "嵐山よしむら", note: "著名蕎麥麵店，賞渡月橋美景", mapLink: "https://maps.app.goo.gl/9u7CSpMwPKbR6mfTA" },
                        { type: "點心", name: "古都芋本舖", note: "烤地瓜和紫芋冰淇淋", mapLink: "https://maps.app.goo.gl/afRG12QGRRnjF2ii6" },
                        { type: "晚餐", name: "炸豬排一番", note: "米其林必比登推介", mapLink: "https://maps.app.goo.gl/j92wpaoHTXD3bKWJ8" }
                    ]
                }
            ]
        },
        {
            id: 3,
            date: "2/6 (五)",
            title: "清水寺、東山古街與祇園",
            mainTask: "感受京都古都氛圍，一路從寺廟步行至花街",
            sections: [
                {
                    title: "本日交通路線總覽",
                    type: "summary",
                    content: "飯店 → 清水寺周邊 (公車) → 祇園 (步行) → 飯店 (公車)",
                    stats: [
                        { label: "單程時長", value: "約 25-35 分鐘" },
                        { label: "總交通費用", value: "¥460" }
                    ]
                },
                {
                    title: "飯店 → 清水寺",
                    type: "transport",
                    steps: [
                        { title: "步行至公車站", route: "飯店 → 九条河原町", time: "3-5 分鐘" },
                        { title: "公車至五条坂", route: "207 City Bus", time: "15 分鐘", cost: "¥230", note: "在馬町站下車吃早餐" }
                    ],
                    mapLink: "https://maps.app.goo.gl/yqNspUVLiNWGDX859"
                },
                {
                    title: "清水寺東山步行路線",
                    type: "sightseeing",
                    spots: [
                        { name: "清水寺", time: "2 小時", note: "清水舞台" },
                        { name: "三年坂 與 二年坂", time: "1.5 小時", note: "傳統町家建築" },
                        { name: "高台寺竹林", time: "0.5 小時", note: "相對安靜的竹林" },
                        { name: "一寧坂 & 石塀小路", time: "1 小時", note: "寧靜優雅的小徑" },
                        { name: "八坂神社", time: "0.5 小時", note: "祇園東側" }
                    ],
                    mapLink: "https://maps.app.goo.gl/xrEP8bFaQc9Pahto7"
                },
                {
                    title: "祇園傍晚漫步",
                    type: "sightseeing",
                    spots: [
                        { name: "花見小路", time: "0.5 小時", note: "藝伎區" },
                        { name: "祗園白川", time: "0.5 小時", note: "垂柳與古橋" }
                    ],
                    mapLink: "https://maps.app.goo.gl/w6hF88DynXwDiK5M8"
                },
                {
                    title: "祇園 → 飯店",
                    type: "transport",
                    steps: [
                        { title: "步行至晚餐", note: "浪花ひとくち餃子" },
                        { title: "公車回飯店", route: "207 號公車", time: "20-30 分鐘", cost: "¥230", note: "九条河原町下車" }
                    ],
                    mapLink: "https://maps.app.goo.gl/ehjqpzSsEqRUxxT66"
                },
                {
                    title: "餐點規劃",
                    type: "meals",
                    items: [
                        { type: "早餐", name: "市川屋珈琲", note: "日式厚片吐司與虹吸咖啡", mapLink: "https://maps.app.goo.gl/yU9ebDBYrCfJDeuR8" },
                        { type: "午餐", name: "葫蘆ひさご Hisago", note: "親子丼", mapLink: "https://maps.app.goo.gl/YZeukVJNEMNk6uGr7" },
                        { type: "點心", name: "かさぎ屋", note: "傳統甜點", mapLink: "https://maps.app.goo.gl/cTcWbGu86w7W8iDy5" },
                        { type: "晚餐", name: "浪花ひとくち餃子", note: "一口餃子", mapLink: "https://maps.app.goo.gl/fiy9wqCc3AriLdAy6" }
                    ]
                }
            ]
        },
        {
            id: 4,
            date: "2/7 (六)",
            title: "宇治與銀閣寺",
            mainTask: "探索宇治茶鄉與京都世界遺產",
            sections: [
                {
                    title: "本日交通路線總覽",
                    type: "summary",
                    content: "飯店 → 東福寺站 → 宇治 → 銀閣寺 → 飯店",
                    stats: [
                        { label: "單程時長", value: "約 30-35 分鐘" },
                        { label: "總交通費用", value: "¥940" }
                    ]
                },
                {
                    title: "飯店 → 宇治",
                    type: "transport",
                    steps: [
                        { title: "步行至東福寺站", time: "15-20 分鐘" },
                        { title: "東福寺站 → 宇治站", route: "JR 奈良線", time: "15 分鐘", cost: "¥240" }
                    ]
                },
                {
                    title: "宇治一日觀光",
                    type: "sightseeing",
                    spots: [
                        { name: "平等院", time: "1.5 小時", note: "鳳凰堂" },
                        { name: "宇治橋 & 中之島公園", time: "1 小時", note: "宇治川風景" },
                        { name: "宇治橋通商店街", note: "宇治茶老店" }
                    ]
                },
                {
                    title: "宇治 → 銀閣寺",
                    type: "transport",
                    steps: [
                        { title: "宇治 → 東福寺", route: "JR 奈良線", time: "18 分鐘", cost: "¥240" },
                        { title: "東福寺 → 出町柳", route: "京阪本線", time: "15 分鐘" },
                        { title: "出町柳 → 銀閣寺道", route: "203 City Bus" }
                    ],
                    mapLink: "https://maps.app.goo.gl/ng1kmzWwn7AjjTRr5"
                },
                {
                    title: "銀閣寺與哲學之道",
                    type: "sightseeing",
                    spots: [
                        { name: "銀閣寺", time: "1 小時", note: "枯山水庭園" },
                        { name: "哲學之道", time: "1 小時", note: "運河邊小徑" }
                    ],
                    mapLink: "https://maps.app.goo.gl/VnqB8PzoZPoP1ogB8"
                },
                {
                    title: "傍晚移動回程",
                    type: "transport",
                    steps: [
                        { title: "公車回京都車站", route: "100 號 或 5 號", time: "35-45 分鐘", cost: "¥230" },
                        { title: "步行回飯店", note: "從八條口步行" }
                    ],
                    mapLink: "https://maps.app.goo.gl/JKKaaThgKNitNmB6A"
                },
                {
                    title: "餐點規劃",
                    type: "meals",
                    items: [
                        { type: "午餐", name: "宇治地雞家心", note: "地雞料理串燒", mapLink: "https://maps.app.goo.gl/coqHPWLMkGrTFxV36" },
                        { type: "點心", name: "お肉のはりよし", note: "可樂餅", mapLink: "https://maps.app.goo.gl/MJwhiHzheWXEoujD9" },
                        { type: "晚餐", name: "Teppan Tavern Tenamonya", note: "鐵板燒 A5和牛", mapLink: "https://maps.app.goo.gl/UpNMnQNKQVNFa3hX9" }
                    ]
                }
            ]
        },
        {
            id: 5,
            date: "2/8 (日)",
            title: "伏見稻荷與東福寺",
            mainTask: "挑戰伏見稻荷大社環山參拜，欣賞東福寺禪意庭園",
            sections: [
                {
                    title: "本日交通路線總覽",
                    type: "summary",
                    content: "飯店 → 東福寺站 → 伏見稻荷 → 東福寺 → 飯店",
                    stats: [
                        { label: "單程時長", value: "約 20-25 分鐘" },
                        { label: "總交通費用", value: "¥300" }
                    ]
                },
                {
                    title: "飯店 → 伏見稻荷",
                    type: "transport",
                    steps: [
                        { title: "步行至東福寺站", time: "15-20 分鐘" },
                        { title: "東福寺站 → 稻荷站", route: "JR 奈良線", time: "2 分鐘", cost: "¥150" }
                    ]
                },
                {
                    title: "伏見稻荷山環山參拜",
                    type: "sightseeing",
                    spots: [
                        { name: "本殿 & 千本鳥居", time: "1 小時", note: "紅色鳥居隧道" },
                        { name: "奧社奉拜所 & 熊鷹社", note: "環山起點" },
                        { name: "稻荷山頂上", note: "俯瞰京都市區" },
                        { name: "眼力社", note: "求眼力、生意興隆" }
                    ],
                    mapLink: "https://maps.app.goo.gl/a5pQT17dcmKGxeaM8"
                },
                {
                    title: "東福寺周邊觀光",
                    type: "sightseeing",
                    spots: [
                        { name: "東福寺", time: "1.5 小時", note: "通天橋" },
                        { name: "光明院", time: "0.5 小時", note: "虹之苔寺" }
                    ],
                    mapLink: "https://maps.app.goo.gl/d93yEQm2tsfFAwhJA"
                },
                {
                    title: "京都站購物 (方案2)",
                    type: "sightseeing",
                    spots: [
                        { name: "京都AVANTI", time: "1.5 小時", note: "動漫周邊" },
                        { name: "UNIQLO 京都站八條口店", time: "1 小時", note: "購物" }
                    ]
                },
                {
                    title: "餐點規劃",
                    type: "meals",
                    items: [
                        { type: "午餐", name: "近江家", note: "稻荷壽司、京烏龍麵", mapLink: "https://maps.app.goo.gl/7ANFmYeDBRJA3qCb9" },
                        { type: "點心", name: "寺子屋本鋪", note: "現烤醬油仙貝", mapLink: "https://maps.app.goo.gl/VBMdHp3QysMVybGP9" },
                        { type: "晚餐", name: "酒と肴と麺 キンタロウ", note: "居酒屋、拉麵", mapLink: "https://maps.app.goo.gl/nA9UjbndcPrDNFWY8" },
                        { type: "晚餐2", name: "鳥貴族 京都七條店", note: "串燒", mapLink: "https://maps.app.goo.gl/u5QhSi1huzaYserV9" }
                    ]
                }
            ]
        },
        {
            id: 6,
            date: "2/9 (一)",
            title: "天橋立與伊根舟屋",
            mainTask: "前往「日本三景」之一的宮津灣",
            sections: [
                {
                    title: "本日交通路線總覽",
                    type: "summary",
                    content: "京都 → 天橋立 (特急火車) → 傘松公園/伊根舟屋 → 京都",
                    stats: [
                        { label: "單程時長", value: "約 2 小時 1 分鐘" },
                        { label: "總交通費用", value: "¥12,000+" }
                    ]
                },
                {
                    title: "去程：京都 → 天橋立",
                    type: "transport",
                    steps: [
                        { title: "飯店 → JR 京都車站", time: "10 分鐘", note: "07:00 前抵達" },
                        { title: "京都 → 天橋立", route: "特急 橋立 1 号", time: "08:38 - 10:40", cost: "約 ¥5,000" }
                    ],
                    mapLink: "https://maps.app.goo.gl/3q5oVoDVKEHVoGK3A"
                },
                {
                    title: "天橋立觀光",
                    type: "sightseeing",
                    spots: [
                        { name: "智恩寺文殊堂 & 天橋立沙洲", time: "0.5 小時" },
                        { name: "觀光船", time: "15 分鐘", note: "天橋立 → 一之宮棧橋" },
                        { name: "傘松公園", time: "1 小時", note: "纜車/吊椅，胯下觀景" },
                        { name: "伊根舟屋群", time: "1 小時", note: "公車前往" }
                    ],
                    mapLink: "https://maps.app.goo.gl/RCQi46JHQ98Garf26"
                },
                {
                    title: "回程：天橋立 → 京都",
                    type: "transport",
                    steps: [
                        { title: "伊根 → 天橋立站", route: "丹後海陸交通公車", time: "1 小時", note: "最晚 16:20 需搭車" },
                        { title: "天橋立 → 京都", route: "特急 橋立 8 号或 10 号", time: "18:09 或 19:05 發車", cost: "約 ¥5,000" }
                    ],
                    mapLink: "https://maps.app.goo.gl/puSEvJEHYWm1uMn49"
                },
                {
                    title: "餐點規劃",
                    type: "meals",
                    items: [
                        { type: "午餐", name: "Suginoya", note: "手工烏龍麵", mapLink: "https://maps.app.goo.gl/fupaqhDGCp3dAN3T9" },
                        { type: "點心", name: "橋立茶屋", note: "沙洲上的輕食", mapLink: "https://maps.app.goo.gl/nyXw5hrqBCoW3Qsp6" },
                        { type: "晚餐", name: "小田寿司", note: "在地壽司老店", mapLink: "https://maps.app.goo.gl/SKk29sy3qnh4ABkHA" }
                    ]
                }
            ]
        },
        {
            id: 7,
            date: "2/10 (二)",
            title: "貴船、鞍馬健行與叡山電車",
            mainTask: "體驗京都郊區山林健行，參拜貴船與鞍馬寺",
            sections: [
                {
                    title: "本日交通路線總覽",
                    type: "summary",
                    content: "飯店 → 貴船口 → 鞍馬 → 飯店",
                    stats: [
                        { label: "單程時長", value: "約 55-65 分鐘" },
                        { label: "總交通費用", value: "¥1,150+" }
                    ]
                },
                {
                    title: "飯店 → 貴船口",
                    type: "transport",
                    steps: [
                        { title: "公車至七条京阪前", route: "207 號", time: "10-15 分鐘", cost: "¥230" },
                        { title: "七条站 → 出町柳站", route: "京阪本線", time: "10-15 分鐘", cost: "¥280" },
                        { title: "出町柳 → 貴船口", route: "叡山電車", time: "30 分鐘", cost: "¥470" },
                        { title: "貴船口 → 貴船神社", route: "接駁公車", time: "5 分鐘", cost: "¥170" }
                    ]
                },
                {
                    title: "貴船 → 鞍馬：山林健行",
                    type: "sightseeing",
                    spots: [
                        { name: "貴船神社", time: "1 小時", note: "水占卜" },
                        { name: "鞍馬山健行步道", time: "1 小時 15 分鐘", note: "山林健行" },
                        { name: "鞍馬寺", time: "1.5 小時", note: "可搭纜車下山" }
                    ]
                },
                {
                    title: "傍晚回程",
                    type: "transport",
                    steps: [
                        { title: "鞍馬站 → 出町柳站", route: "叡山電車", time: "30 分鐘", cost: "¥470" },
                        { title: "出町柳 → 飯店", route: "京阪 + 公車", time: "25-30 分鐘", cost: "約 ¥510" }
                    ]
                },
                {
                    title: "餐點規劃",
                    type: "meals",
                    items: [
                        { type: "午餐", name: "Nagomiya Kotengu", note: "京野菜料理" },
                        { type: "點心", name: "鞍馬 多聞堂", note: "山椒餅" },
                        { type: "晚餐", name: "京都車站周邊", note: "地下街 Porta/The Cube" }
                    ]
                }
            ]
        },
        {
            id: 8,
            date: "2/11 (三)",
            title: "飯店 → 關西機場 (KIX)",
            mainTask: "準時前往機場，搭乘 BR177 班機",
            sections: [
                {
                    title: "航班與時間總覽",
                    type: "summary",
                    content: "回程航班：BR177 (10:55 KIX 發車)",
                    stats: [
                        { label: "出發時間", value: "07:00 前" },
                        { label: "交通費用", value: "約 ¥3,400+" }
                    ]
                },
                {
                    title: "飯店 → 關西機場",
                    type: "transport",
                    steps: [
                        { title: "步行至京都車站", time: "7-10 分鐘" },
                        { title: "京都車站 → 關西機場", route: "關空特快 Haruka 9", time: "07:48 - 09:13", cost: "使用 JR PASS", note: "最晚一定要搭上" },
                        { title: "抵達機場與 Check-in", time: "09:20", note: "第一航廈 (T1)" }
                    ]
                },
                {
                    title: "最終確認清單",
                    type: "list",
                    items: [
                        "護照、機票、手機、錢包",
                        "飯店房間內是否有遺漏物品",
                        "行李是否已秤重"
                    ]
                }
            ]
        }
    ]
};
