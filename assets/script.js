const SITE_CONFIG = {
  pageTitle: '1766最新最火的手游平台',
  pageDescription: '为玩家提供最新最火的手游,热门推荐,极速下载,体验官方品质公益服的享受。',
  heroBadge: '好游戏·好福利尽在1766手游',
  brandName: '1766手游',
  heroText: '多款热门手游，官方品质，公益服体验。',
  top5Title: 'TOP5 下载排行榜',
  gameListTitle: '全部游戏',
  brandLogo: './assets/images/brand-logo.png',
  fbPixelId: '1314244597232250',
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
    label: 'GAME 1',
    name: '天龙八部',
    subtitle: '一次性兑换码',
    desc: 'VIP666----50万补偿经验*17<br>18880绑定元宝*230<br>1万银两*100<br>100万铜钱*10<br><br>VIP888----玄风精魄*500<br>龙魂元神*550<br>玄武元神*550<br>鲲鹏元神*550<br>妖虎元神*550<br>麒麟元神*550<br><br>TL666----重楼链、重楼甲、重楼腕、重楼靴、重楼戒 个*1',
    logo: './assets/images/game1-logo.png',
    detail: './assets/images/game1-detail.png',
    downloadUrl: 'http://pay-tlbb.zhuomogz.com/app/admin/downfile/index?gid=59&template=1&pid=763'
  },
  {
    id: 2,
    label: 'GAME 2',
    name: '凡人修仙传：人界篇',
    subtitle: '一次性兑换码',
    desc: 'VIP111----灵石*188888<br>VIP222----VIP经验*10000<br>VIP333----功法心得‧五阶*500<br>VIP444----破界服*100<br>VIP555----双休功法自选盒*12<br>VIP666----天资丹*2000<br>VIP777----心法残篇‧仙品*1000<br>VIP888----功法残篇‧仙品*1000<br>VIP999----代金卷*3888<br>SVIP111----代币*777',
    logo: './assets/images/game2-logo.png',
    detail: './assets/images/game2-detail.png',
    downloadUrl: 'http://fr.mogo789.com/index/reg?aid=25'
  },
  {
    id: 3,
    label: 'GAME 3',
    name: '龙族：卡塞尔之门',
    subtitle: '全服福利CDK',
    desc: '皇女零碎片*660、现金券*18888',
    logo: './assets/images/game3-logo.png',
    detail: './assets/images/game3-detail.png',
    downloadUrl: 'https://kasai.vedqu.com/?p=11102'
  },
  {
    id: 4,
    label: 'GAME 4',
    name: '巨神军师-福利服',
    subtitle: '上线赠送圣灵角色,每日可领取3888代金券',
    desc: '百位猛将，超爽的战斗体验，四大阵营任你搭配，休闲挂机即可升级，更有海量豪礼相送！',
    logo: './assets/images/game4-logo.png',
    detail: './assets/images/game4-detail.png',
    downloadUrl: 'https://jushen.yxgmaet.com/?p=10882'
  },
  {
    id: 5,
    label: 'GAME 5',
    name: '神火大陸-福利服',
    subtitle: '神火纷争,诸神黄昏',
    desc: '每日CDK福利，輸入：SHDL666，可領鑽石*5000',
    logo: './assets/images/game5-logo.png',
    detail: './assets/images/game5-detail.png',
    downloadUrl: 'https://pay-shdl.heming114.com/app/admin/downfile/index?gid=59&template=1&pid=1350'
  },
  {
    id: 6,
    label: 'GAME 6',
    name: '弓箭传说2',
    subtitle: '内测福利兑换码',
    desc: 'gj2666紫色随机装备8',
    logo: './assets/images/game6-logo.png',
    detail: './assets/images/game6-detail.png',
    downloadUrl: 'http://110.42.56.37:8441/mobile/Downfile/index?gid=3&pid=5660'
  },
  {
    id: 7,
    label: 'GAME 7',
    name: '【最强祖师】国际服',
    subtitle: '模拟修仙 ',
    desc: '每日可领取400-1500仙券奖励。',
    logo: './assets/images/game7-logo.png',
    detail: './assets/images/game7-detail.png',
    downloadUrl: 'https://zqzs.giqwm.com/?p=11572'
  },
  {
    id: 8,
    label: 'GAME 8',
    name: 'GAME 8',
    subtitle: '梦幻西游',
    desc: '50萬仙玉。',
    logo: './assets/images/game8-logo.png',
    detail: './assets/images/game8-detail.png',
    downloadUrl: 'https://reg.mjxy.me?TU1PS1FL'
  }
];

const STORAGE_KEY = 'game_hub_download_stats_editable_v8';
const FAKE_KEY = 'game_hub_fake_downloads_v8';
let fakeStatsCache = {};

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getPixelEventName(game, action, placement = 'list') {
  const placementSuffix = placement === 'modal' ? '_modal' : '';

  if (action === 'download') return `game${game.id}_lead${placementSuffix}`;
  if (action === 'detail') return `game${game.id}_contact${placementSuffix}`;
  return `game${game.id}_${action}${placementSuffix}`;
}

function getPixelEventLabel(game, action, placement = 'list') {
  const placementText = placement === 'modal' ? '弹窗' : '列表';

  if (action === 'download') return `${game.label}潜在客户_${placementText}_立即下载`;
  if (action === 'detail') return `${game.label}联络_${placementText}_查看详情`;
  return `${game.label}_${placementText}_${action}`;
}

function initFacebookPixel(pixelId) {
  if (!pixelId) return;

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

  Object.keys(saved).forEach((key) => {
    const exists = GAMES.some((game) => String(game.id) === String(key));
    if (!exists) {
      delete saved[key];
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
  if (typeof fbq !== 'undefined' && SITE_CONFIG.fbPixelId) {
    fbq('trackCustom', eventName, payload);
  }
  console.log('FB Event:', eventName, payload);
}

function trackGameButtonEvent(game, action, placement = 'list') {
  const eventName = getPixelEventName(game, action, placement);
  const eventLabel = getPixelEventLabel(game, action, placement);

  trackCustomEvent(eventName, {
    event_label: eventLabel,
    game_id: game.id,
    game_label: game.label,
    game_name: game.name,
    action_type: action,
    button_position: placement,
    destination_url: game.downloadUrl || ''
  });
}

function handleDownload(game, placement = 'list') {
  incrementDownload(game.id);
  trackGameButtonEvent(game, 'download', placement);
  window.open(game.downloadUrl, '_blank', 'noopener');
}

function openDetail(game, placement = 'list') {
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
  modalDesc.innerHTML = game.desc;

  modalDownloadBtn.onclick = (e) => {
    e.preventDefault();
    handleDownload(game, 'modal');
  };

  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');

  trackGameButtonEvent(game, 'detail', placement);
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

  card.querySelector('[data-action="download"]').addEventListener('click', () => handleDownload(game, 'list'));
  card.querySelector('[data-action="detail"]').addEventListener('click', () => openDetail(game, 'list'));
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
