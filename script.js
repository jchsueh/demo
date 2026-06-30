// 遊戲初始資料
const RULERS = {
    player: { id: 'player', name: '劉備', color: 'player' },
    cao: { id: 'cao', name: '曹操', color: 'enemy' },
    neutral: { id: 'neutral', name: '在野/空城', color: 'neutral' }
};

// 初始城池 (帶有地圖坐標)
let cities = [
    { id: 'c0', name: '幽州', x: 75, y: 15, owner: 'neutral', pop: 20000, agri: 100, comm: 100, troops: 5000, generals: [] },
    { id: 'c1', name: '冀州', x: 70, y: 25, owner: 'neutral', pop: 40000, agri: 300, comm: 250, troops: 8000, generals: [] },
    { id: 'c2', name: '平原', x: 75, y: 35, owner: 'player', pop: 30000, agri: 200, comm: 150, troops: 10000, generals: ['g1', 'g2', 'g3'] },
    { id: 'c3', name: '北海', x: 82, y: 35, owner: 'neutral', pop: 25000, agri: 150, comm: 200, troops: 4000, generals: [] },
    { id: 'c4', name: '徐州', x: 78, y: 48, owner: 'neutral', pop: 35000, agri: 250, comm: 250, troops: 6000, generals: [] },
    
    { id: 'c5', name: '并州', x: 60, y: 25, owner: 'neutral', pop: 15000, agri: 80, comm: 80, troops: 3000, generals: [] },
    { id: 'c6', name: '晉陽', x: 58, y: 18, owner: 'neutral', pop: 20000, agri: 120, comm: 100, troops: 4000, generals: [] },
    { id: 'c7', name: '兗州', x: 65, y: 40, owner: 'neutral', pop: 38000, agri: 280, comm: 200, troops: 7000, generals: [] },
    { id: 'c8', name: '陳留', x: 60, y: 42, owner: 'cao', pop: 45000, agri: 350, comm: 300, troops: 15000, generals: ['g4', 'g5', 'g6'] },
    { id: 'c9', name: '許昌', x: 60, y: 50, owner: 'cao', pop: 50000, agri: 400, comm: 350, troops: 20000, generals: ['g7'] },

    { id: 'c10', name: '涼州', x: 25, y: 25, owner: 'neutral', pop: 18000, agri: 90, comm: 150, troops: 8000, generals: [] },
    { id: 'c11', name: '長安', x: 45, y: 45, owner: 'neutral', pop: 60000, agri: 300, comm: 400, troops: 25000, generals: [] },
    { id: 'c12', name: '洛陽', x: 52, y: 45, owner: 'neutral', pop: 55000, agri: 250, comm: 350, troops: 15000, generals: [] },
    { id: 'c13', name: '宛城', x: 55, y: 55, owner: 'neutral', pop: 30000, agri: 200, comm: 150, troops: 6000, generals: [] },
    { id: 'c14', name: '壽春', x: 75, y: 60, owner: 'neutral', pop: 32000, agri: 220, comm: 200, troops: 5000, generals: [] },

    { id: 'c15', name: '漢中', x: 35, y: 55, owner: 'neutral', pop: 25000, agri: 150, comm: 100, troops: 10000, generals: [] },
    { id: 'c16', name: '成都', x: 25, y: 70, owner: 'neutral', pop: 40000, agri: 350, comm: 250, troops: 12000, generals: [] },
    { id: 'c17', name: '襄陽', x: 55, y: 65, owner: 'neutral', pop: 38000, agri: 280, comm: 300, troops: 8000, generals: [] },
    { id: 'c18', name: '江夏', x: 65, y: 65, owner: 'neutral', pop: 28000, agri: 200, comm: 200, troops: 6000, generals: [] },
    { id: 'c19', name: '建業', x: 85, y: 65, owner: 'neutral', pop: 45000, agri: 300, comm: 400, troops: 15000, generals: [] },
];

// 初始武將資料 (擴充自武將.txt)
const generalsDb = {
    'g1': { id: 'g1', name: '劉備', hp: 85, intel: 87, force: 73, cha: 100 },
    'g2': { id: 'g2', name: '關羽', hp: 99, intel: 83, force: 99, cha: 90 },
    'g3': { id: 'g3', name: '張飛', hp: 100, intel: 41, force: 99, cha: 28 },
    'g4': { id: 'g4', name: '曹操', hp: 90, intel: 95, force: 82, cha: 99 },
    'g5': { id: 'g5', name: '夏侯惇', hp: 94, intel: 70, force: 94, cha: 79 },
    'g6': { id: 'g6', name: '荀彧', hp: 73, intel: 97, force: 49, cha: 78 },
    'g7': { id: 'g7', name: '曹仁', hp: 84, intel: 69, force: 84, cha: 51 },
    'g8': { id: 'g8', name: '呂布', hp: 97, intel: 28, force: 100, cha: 45 },
    'g9': { id: 'g9', name: '趙雲', hp: 98, intel: 88, force: 99, cha: 82 },
    'g10': { id: 'g10', name: '諸葛亮', hp: 73, intel: 100, force: 72, cha: 98 },
    'g11': { id: 'g11', name: '周瑜', hp: 83, intel: 97, force: 84, cha: 94 },
    'g12': { id: 'g12', name: '孫權', hp: 93, intel: 80, force: 80, cha: 99 },
    'g13': { id: 'g13', name: '董卓', hp: 93, intel: 55, force: 90, cha: 24 },
    'g14': { id: 'g14', name: '袁紹', hp: 80, intel: 80, force: 86, cha: 90 }
};

// 玩家全域資源
let playerState = {
    gold: 1000,
    food: 5000,
    year: 189,
    month: 1
};

// UI 狀態
let selectedCityId = null;

// DOM 元素
const mapSvg = document.getElementById('map-svg');
const cityInfoPanel = document.getElementById('city-info-panel');
const defaultPanel = document.getElementById('default-panel');
const actionMenu = document.getElementById('action-menu');

// 初始化遊戲
function initGame() {
    renderMap();
    updateTopBar();
    setupEventListeners();
    window.addEventListener('resize', renderMap); // 隨視窗大小重新繪製地圖
}

// 渲染地圖 (D3 Voronoi)
function renderMap() {
    const section = document.getElementById('map-section');
    // 給予預設大小避免無法繪製
    const width = section.clientWidth || 800;
    const height = section.clientHeight || 600;

    // 將百分比座標轉換為實際像素座標
    const points = cities.map(city => [
        (city.x / 100) * width,
        (city.y / 100) * height
    ]);

    // 使用 D3 產生 Voronoi 拼塊
    const delaunay = d3.Delaunay.from(points);
    const voronoi = delaunay.voronoi([0, 0, width, height]);

    const svg = d3.select('#map-svg');
    svg.selectAll('*').remove();

    cities.forEach((city, i) => {
        const pathData = voronoi.renderCell(i);
        
        let ownerType = 'neutral';
        if (city.owner === 'player') ownerType = 'player';
        else if (city.owner !== 'neutral') ownerType = 'enemy';

        const g = svg.append('g')
            .attr('class', 'city-group')
            .on('click', () => selectCity(city.id));

        g.append('path')
            .attr('d', pathData)
            .attr('class', 'voronoi-cell')
            .classed('selected', city.id === selectedCityId)
            .attr('data-owner', ownerType);

        g.append('text')
            .attr('x', points[i][0])
            .attr('y', points[i][1] - 5)
            .attr('class', 'city-text-name')
            .text(city.name);

        g.append('text')
            .attr('x', points[i][0])
            .attr('y', points[i][1] + 15)
            .attr('class', 'city-text-troops')
            .text(`兵: ${city.troops}`);
    });
}

// 選擇城池
function selectCity(cityId) {
    selectedCityId = cityId;
    renderMap(); // 重新渲染以更新選取狀態
    
    const city = cities.find(c => c.id === cityId);
    if (city) {
        defaultPanel.classList.add('hidden');
        cityInfoPanel.classList.remove('hidden');
        
        // 更新城池資訊
        document.getElementById('city-name').textContent = city.name;
        document.getElementById('city-owner-name').textContent = RULERS[city.owner].name;
        document.getElementById('city-owner-name').style.color = `var(--${RULERS[city.owner].color}-color)`;
        
        document.getElementById('city-pop').textContent = city.pop;
        document.getElementById('city-agri').textContent = city.agri;
        document.getElementById('city-comm').textContent = city.comm;
        document.getElementById('city-troops').textContent = city.troops;

        // 更新武將列表
        const generalsList = document.getElementById('city-generals');
        generalsList.innerHTML = '';
        if (city.generals.length === 0) {
            generalsList.innerHTML = '<li style="color: #888;">無將領駐守</li>';
        } else {
            city.generals.forEach(gId => {
                const g = generalsDb[gId];
                const li = document.createElement('li');
                li.innerHTML = `
                    <span class="general-name">${g.name}</span>
                    <span class="general-stats">體:${g.hp} 智:${g.intel} 武:${g.force} 魅:${g.cha}</span>
                `;
                generalsList.appendChild(li);
            });
        }

        // 判斷是否顯示操作選單
        if (city.owner === 'player') {
            actionMenu.classList.remove('hidden');
            document.getElementById('btn-attack').classList.add('hidden'); // 自己城池不能打
        } else {
            // 是別人的城池，且相鄰的話可以攻擊 (這裡簡化，直接允許攻擊任何非玩家城池)
            // 未來可以加上「必須相鄰」的邏輯
            actionMenu.classList.remove('hidden');
            // 隱藏內政按鈕
            document.getElementById('btn-develop-agri').classList.add('hidden');
            document.getElementById('btn-develop-comm').classList.add('hidden');
            document.getElementById('btn-draft').classList.add('hidden');
            // 顯示出征按鈕
            document.getElementById('btn-attack').classList.remove('hidden');
        }
    }
}

// 更新頂部資訊
function updateTopBar() {
    document.getElementById('year').textContent = playerState.year;
    document.getElementById('month').textContent = playerState.month;
    document.getElementById('player-gold').textContent = playerState.gold;
    document.getElementById('player-food').textContent = playerState.food;
}

// 顯示訊息
function showToast(msg) {
    const toast = document.getElementById('message-toast');
    toast.textContent = msg;
    toast.classList.remove('hidden');
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
}

// 設定事件監聽器
function setupEventListeners() {
    // 下一回合
    document.getElementById('next-turn-btn').addEventListener('click', nextTurn);

    // 內政 - 開墾
    document.getElementById('btn-develop-agri').addEventListener('click', () => {
        if (playerState.gold >= 50) {
            const city = cities.find(c => c.id === selectedCityId);
            playerState.gold -= 50;
            const increase = Math.floor(Math.random() * 10) + 5;
            city.agri += increase;
            showToast(`${city.name} 開墾成功！農業值增加 ${increase}`);
            updateCityViewAndTopBar();
        } else {
            showToast("金錢不足，無法開墾！");
        }
    });

    // 內政 - 投資
    document.getElementById('btn-develop-comm').addEventListener('click', () => {
        if (playerState.gold >= 50) {
            const city = cities.find(c => c.id === selectedCityId);
            playerState.gold -= 50;
            const increase = Math.floor(Math.random() * 10) + 5;
            city.comm += increase;
            showToast(`${city.name} 投資成功！商業值增加 ${increase}`);
            updateCityViewAndTopBar();
        } else {
            showToast("金錢不足，無法投資！");
        }
    });

    // 內政 - 徵兵
    document.getElementById('btn-draft').addEventListener('click', () => {
        if (playerState.gold >= 100) {
            const city = cities.find(c => c.id === selectedCityId);
            if (city.pop > 1000) {
                playerState.gold -= 100;
                const draftAmount = Math.floor(city.pop * 0.05); // 徵收 5% 人口
                city.pop -= draftAmount;
                city.troops += draftAmount;
                showToast(`${city.name} 徵兵成功！獲得 ${draftAmount} 兵力`);
                updateCityViewAndTopBar();
            } else {
                showToast("人口不足，無法徵兵！");
            }
        } else {
            showToast("金錢不足，無法徵兵！");
        }
    });

    // 軍事 - 出征
    document.getElementById('btn-attack').addEventListener('click', handleAttack);
}

// 輔助更新視圖
function updateCityViewAndTopBar() {
    updateTopBar();
    selectCity(selectedCityId); // 重新渲染選中的城池資訊
}

// 處理下一回合
function nextTurn() {
    // 時間推進
    playerState.month++;
    if (playerState.month > 12) {
        playerState.month = 1;
        playerState.year++;
    }

    // 資源結算 (只算玩家的)
    let totalIncome = 0;
    let totalFood = 0;
    let totalTroops = 0;

    cities.forEach(city => {
        if (city.owner === 'player') {
            totalIncome += city.comm * 2; // 簡單公式
            totalFood += city.agri * 5;
            totalTroops += city.troops;
        }
    });

    // 發放糧餉
    const foodCost = Math.floor(totalTroops * 0.1); // 每個兵吃 0.1 糧草

    playerState.gold += totalIncome;
    playerState.food += totalFood;
    playerState.food -= foodCost;

    if (playerState.food < 0) {
        showToast("警告：糧草不足，士兵開始逃亡！");
        playerState.food = 0;
        // 士兵逃亡邏輯
        cities.forEach(city => {
            if (city.owner === 'player') {
                city.troops = Math.floor(city.troops * 0.8);
            }
        });
    } else {
        showToast(`回合結束。收入：金+${totalIncome}, 糧+${totalFood}。軍糧消耗：-${foodCost}`);
    }

    // AI 簡單行為 (兵力隨時間稍微增長)
    cities.forEach(city => {
        if (city.owner !== 'player' && city.owner !== 'neutral') {
            city.troops += Math.floor(Math.random() * 500);
        }
    });

    updateCityViewAndTopBar();
}

// 處理出征
function handleAttack() {
    const targetCity = cities.find(c => c.id === selectedCityId);
    
    // 找出玩家最大的城池作為發兵地 (簡化邏輯)
    const playerCities = cities.filter(c => c.owner === 'player');
    if (playerCities.length === 0) {
        showToast("你已經沒有城池了，遊戲結束！");
        return;
    }

    // 找兵力最多的城池
    playerCities.sort((a, b) => b.troops - a.troops);
    const sourceCity = playerCities[0];

    if (sourceCity.troops < 1000) {
        showToast(`您的主城 ${sourceCity.name} 兵力不足 (<1000)，無法出征！`);
        return;
    }

    const attackTroops = Math.floor(sourceCity.troops * 0.8); // 派 80% 兵力出戰
    sourceCity.troops -= attackTroops;

    // 簡單戰鬥計算
    let playerPower = attackTroops;
    // 加上武將武力加成
    sourceCity.generals.forEach(gId => {
        playerPower += generalsDb[gId].force * 10;
    });

    let enemyPower = targetCity.troops;
    targetCity.generals.forEach(gId => {
        enemyPower += generalsDb[gId].force * 10;
    });

    // 加入一點隨機性
    playerPower *= (0.8 + Math.random() * 0.4);
    enemyPower *= (0.8 + Math.random() * 0.4);

    if (playerPower > enemyPower) {
        // 玩家勝利
        showToast(`戰鬥勝利！您成功佔領了 ${targetCity.name}。`);
        targetCity.owner = 'player';
        targetCity.troops = Math.floor(attackTroops * 0.5); // 殘存兵力
        // 敵方武將先簡化為全部逃跑 (從列表中清空)
        targetCity.generals = [];
    } else {
        // 玩家失敗
        showToast(`戰鬥失敗！我軍在 ${targetCity.name} 遭遇慘敗。`);
        targetCity.troops = Math.floor(targetCity.troops * 0.8); // 敵軍也損耗
    }

    updateCityViewAndTopBar();
}

// 啟動
initGame();
