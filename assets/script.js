const SITE_CONFIG = {
  pageTitle: '1766最新最火的手游平台',
  pageDescription: '为玩家提供最新最火的手游,热门推荐,极速下载,体验官方品质公益服的享受。',
  heroBadge: '好游戏·好福利尽在1766手游',
  brandName: '1766手游',
  heroText: '多款热门手游，官方品质，公益服体验。',
  top5Title: 'TOP5 下载排行榜',
  gameListTitle: '全部游戏',
  brandLogo: './assets/images/brand-logo.png',
  fbPixelId: '1487853023065665',
  top5RankLabels: ['Top1', 'Top2', 'Top3', 'Top4', 'Top5'],
  minFakeDownloads: 10000,
  maxFakeDownloads: 999999,
  jumpMin: 2,
  jumpMax: 5,
  jumpInterval: 600000
};

const GAMES = [
  {
    id: 1,
    label: '游戏1',
    name: '天龙八部',
    subtitle: '高人气爆款推荐',
    desc: '这款游戏主打快速上手与高视觉刺激，适合广告流量进入后直接往下载行为导流。',
    logo: './assets/images/game1-logo.png',
    detail: './assets/images/game1-detail.png',
    downloadUrl: 'http://pay-tlbb.zhuomogz.com/app/admin/downfile/index?gid=59&template=1&pid=763',
    eventDownload: 'game1_download',
    eventDetail: 'game1_detail'
  },
  {
    id: 2,
    label: '游戏2',
    name: '凡人修仙传：人界篇',
    subtitle: '一次性兑换码',
    desc: 'VIP111-VIP999在送2万充值代币',
    logo: './assets/images/game2-logo.png',
    detail: './assets/images/game2-detail.png',
    downloadUrl: 'https://gp.a0o.uk/YXpb',
    eventDownload: 'game2_download',
    eventDetail: 'game2_detail'
  },
  {
    id: 3,
    label: '游戏3',
    name: '龙族：卡塞尔之门',
    subtitle: '全服福利CDK',
    desc: '皇女零碎片*660、现金券*18888',
    logo: './assets/images/game3-logo.png',
    detail: './assets/images/game3-detail.png',
    downloadUrl: 'https://kasai.vedqu.com/?p=11102',
    eventDownload: 'game3_download',
    eventDetail: 'game3_detail'
  },
  {
    id: 4,
    label: '游戏4',
    name: '巨神军师-福利服',
    subtitle: '上线赠送圣灵角色,每日可领取3888代金券',
    desc: '百位猛将，超爽的战斗体验，四大阵营任你搭配，休闲挂机即可升级，更有海量豪礼相送！',
    logo: './assets/images/game4-logo.png',
    detail: './assets/images/game4-detail.png',
    downloadUrl: 'https://jushen.yxgmaet.com/?p=10882',
    eventDownload: 'game4_download',
    eventDetail: 'game4_detail'
  },
  {
    id: 5,
    label: '游戏5',
    name: '神火大陸-福利服',
    subtitle: '神火纷争,诸神黄昏',
    desc: '每日CDK福利，輸入：SHDL666，可領鑽石*5000',
    logo: './assets/images/game5-logo.png',
    detail: './assets/images/game5-detail.png',
    downloadUrl: 'https://pay-shdl.heming114.com/app/admin/downfile/index?gid=59&template=1&pid=1350',
    eventDownload: 'game5_download',
    eventDetail: 'game5_detail'
  },
  {
    id: 6,
    label: '游戏6',
    name: 'GAME 6',
    subtitle: '高互动推荐',
    desc: '信息层次清楚，适合加上活动文案与强利益点。',
    logo: './assets/images/game6-logo.png',
    detail: './assets/images/game6-detail.png',
    downloadUrl: 'https://example.com/game6',
    eventDownload: 'game6_download',
    eventDetail: 'game6_detail'
  },
  {
    id: 7,
    label: '游戏7',
    name: 'GAME 7',
    subtitle: '主推曝光款',
    desc: '适合进行轮播展示与详情放大，提升停留时间。',
    logo: './assets/images/game7-logo.png',
    detail: './assets/images/game7-detail.png',
    downloadUrl: 'https://example.com/game7',
    eventDownload: 'game7_download',
    eventDetail: 'game7_detail'
  },
  {
    id: 8,
    label: '游戏8',
    name: 'GAME 8',
    subtitle: '高转化模板',
    desc: '适合大量流量测试，按钮点击率表现突出。',
    logo: './assets/images/game8-logo.png',
    detail: './assets/images/game8-detail.png',
    downloadUrl: 'https://example.com/game8',
    eventDownload: 'game8_download',
    eventDetail: 'game8_detail'
  },
  {
    id: 9,
    label: '游戏9',
    name: 'GAME 9',
    subtitle: '视觉亮点强',
    desc: '长图展示效果佳，适合搭配特色玩法与福利文案。',
    logo: './assets/images/game9-logo.png',
    detail: './assets/images/game9-detail.png',
    downloadUrl: 'https://example.com/game9',
    eventDownload: 'game9_download',
    eventDetail: 'game9_detail'
  },
  {
    id: 10,
    label: '游戏10',
    name: 'GAME 10',
    subtitle: '稳定引导下载',
    desc: '页面节奏清楚，搭配 CTA 可持续提升转化表现。',
    logo: './assets/images/game10-logo.png',
    detail: './assets/images/game10-detail.png',
    downloadUrl: 'https://example.com/game10',
    eventDownload: 'game10_download',
    eventDetail: 'game10_detail'
  }
];

const STORAGE_KEY = 'game_hub_download_stats_editable_v7';
const FAKE_KEY = 'game_hub_fake_downloads_v7';
let fakeStatsCache = {};

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function initFacebookPixel(pixelId) {
  if (!pixelId || pixelId === '1487853023065665') return;

  if (!window.fbq) {
    !function(f,b,e,v,n,t,s){
      if(f.fbq)return;n=f.fbq=function(){n.callMethod ?
      n.callMethod.apply(n,arguments) : n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;
      n.push=n;
      n.loaded=!0;
      n.version='2.0';
      n.queue=[];
      t=b.createElement(e);
      t.async=!0;
      t.src=v;
      s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s);
    }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
  }

  window.fbq('init', pixelId);
  window.fbq('track', 'PageView');
}

function applySiteConfig() {
  document.title = SITE_CONFIG.pageTitle;

  const descMeta = document.querySelector('meta[name="description"]');
  if (descMeta) descMeta.setAttribute('content', SITE_CONFIG.pageDescription);

  const heroBadge = document.getElementById('heroBadge');
  const brandName = document.getElementById('brandName');
  const heroText = document.getElementById('heroText');
  const top5Title = document.getElementById('top5Title');
  const gameListTitle = document.getElementById('gameListTitle');
  const gameCountLabel = document.getElementById('gameCountLabel');
  const brandLogo = document.getElementById('brandLogo');

  if (heroBadge) heroBadge.textContent = SITE_CONFIG.heroBadge;
  if (brandName) brandName.textContent = SITE_CONFIG.brandName;
  if (heroText) heroText.textContent = SITE_CONFIG.heroText;
  if (top5Title) top5Title.textContent = SITE_CONFIG.top5Title;
  if (gameListTitle) gameListTitle.textContent = SITE_CONFIG.gameListTitle;
  if (gameCountLabel) gameCountLabel.textContent = `${GAMES.length} 款`;

  if (brandLogo) {
    brandLogo.src = SITE_CONFIG.brandLogo;
    brandLogo.alt = `${SITE_CONFIG.brandName} LOGO`;
  }
}

function getStats() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch (e) {
    return {};
  }
}

function saveStats(stats) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
}

function getFakeStats() {
  try {
    return JSON.parse(localStorage.getItem(FAKE_KEY)) || {};
  } catch (e) {
    return {};
  }
}

function saveFakeStats(stats) {
  localStorage.setItem(FAKE_KEY, JSON.stringify(stats));
}

function buildInitialFakeStats() {
  const saved = getFakeStats();
  let changed = false;

  GAMES.forEach((game, index) => {
    if (!saved[game.id]) {
      const spread = (GAMES.length - index) * 1800;
      saved[game.id] = rand(SITE_CONFIG.minFakeDownloads + spread, SITE_CONFIG.maxFakeDownloads);
      changed = true;
    }
  });

  if (changed) saveFakeStats(saved);
  fakeStatsCache = saved;
}

function tickFakeDownloads() {
  GAMES.forEach((game, index) => {
    const bonus = Math.max(1, (GAMES.length - index));
    fakeStatsCache[game.id] += rand(SITE_CONFIG.jumpMin, SITE_CONFIG.jumpMax) + bonus;
  });
  saveFakeStats(fakeStatsCache);
  renderTop5();
}

function getDisplayCount(gameId) {
  const fake = fakeStatsCache[gameId] || 0;
  const real = getStats()[gameId] || 0;
  return fake + real;
}

function incrementDownload(gameId) {
  const stats = getStats();
  stats[gameId] = (stats[gameId] || 0) + 1;
  saveStats(stats);

  if (!fakeStatsCache[gameId]) fakeStatsCache[gameId] = SITE_CONFIG.minFakeDownloads;
  fakeStatsCache[gameId] += rand(18, 88);
  saveFakeStats(fakeStatsCache);

  renderTop5();
}

function trackCustomEvent(eventName, payload = {}) {
  if (typeof fbq !== 'undefined' && SITE_CONFIG.fbPixelId && SITE_CONFIG.fbPixelId !== '1487853023065665') {
    fbq('trackCustom', eventName, payload);
  }
  console.log('FB Event:', eventName, payload);
}

function handleDownload(game) {
  incrementDownload(game.id);
  trackCustomEvent(game.eventDownload, {
    game_id: game.id,
    game_label: game.label,
    game_name: game.name,
    button_type: 'download'
  });
  window.open(game.downloadUrl, '_blank', 'noopener');
}

function openDetail(game) {
  const modal = document.getElementById('detailModal');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalSubtitle = document.getElementById('modalSubtitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalDownloadBtn = document.getElementById('modalDownloadBtn');

  modalImage.src = game.detail;
  modalImage.alt = `${game.name} 详情图`;
  modalTitle.textContent = game.name;
  modalSubtitle.textContent = game.subtitle;
  modalDesc.textContent = game.desc;

  modalDownloadBtn.onclick = (e) => {
    e.preventDefault();
    handleDownload(game);
  };

  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');

  trackCustomEvent(game.eventDetail, {
    game_id: game.id,
    game_label: game.label,
    game_name: game.name,
    button_type: 'detail'
  });
}

function closeDetail() {
  const modal = document.getElementById('detailModal');
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
}

function createGameCard(game) {
  const card = document.createElement('article');
  card.className = 'game-card';
  card.innerHTML = `
    <img class="game-logo" src="${game.logo}" alt="${game.name} Logo">
    <div>
      <h3>${game.name}</h3>
      <p class="tag">${game.subtitle}</p>
      <p>${game.desc}</p>
      <div class="card-actions">
        <button class="btn btn-primary" type="button" data-action="download">立即下载</button>
        <button class="btn btn-secondary" type="button" data-action="detail">查看详情</button>
      </div>
    </div>
  `;

  card.querySelector('[data-action="download"]').addEventListener('click', () => handleDownload(game));
  card.querySelector('[data-action="detail"]').addEventListener('click', () => openDetail(game));
  return card;
}

function renderTop5() {
  const ranked = GAMES
    .map(game => ({
      ...game,
      count: getDisplayCount(game.id)
    }))
    .sort((a, b) => b.count - a.count || a.id - b.id)
    .slice(0, 5);

  const panel = document.getElementById('top5Panel');
  panel.innerHTML = '';

  ranked.forEach((game, index) => {
    const rankClass = index === 0 ? 'rank-1' : index === 1 ? 'rank-2' : index === 2 ? 'rank-3' : 'rank-other';
    const rankLabel = SITE_CONFIG.top5RankLabels[index] || `#${index + 1}`;
    const item = document.createElement('div');
    item.className = 'top5-item';
    item.innerHTML = `
      <div class="rank-badge ${rankClass}">${rankLabel}</div>
      <img class="top5-logo" src="${game.logo}" alt="${game.name} APP LOGO">
      <div>
        <div class="top5-title">${game.name}</div>
        <div class="top5-sub">${game.subtitle}</div>
      </div>
      <div class="top5-count">${game.count.toLocaleString()}</div>
    `;
    panel.appendChild(item);
  });
}

function initModalControls() {
  document.getElementById('modalCloseBtn').addEventListener('click', closeDetail);
  document.getElementById('modalCloseAction').addEventListener('click', closeDetail);
  document.querySelector('.modal-backdrop').addEventListener('click', closeDetail);
}

function initGameList() {
  const list = document.getElementById('gameList');
  list.innerHTML = '';
  GAMES.forEach(game => list.appendChild(createGameCard(game)));
}

function init() {
  applySiteConfig();
  initFacebookPixel(SITE_CONFIG.fbPixelId);
  buildInitialFakeStats();
  initGameList();
  renderTop5();
  initModalControls();
  setInterval(tickFakeDownloads, SITE_CONFIG.jumpInterval);
}

document.addEventListener('DOMContentLoaded', init);
