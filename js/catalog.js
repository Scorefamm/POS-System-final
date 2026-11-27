const GAMES = {
  /* ---------------- PLAYSTATION ---------------- */
  'grand-theft-auto-vi': {
    price: 4990,
    tag: 'New Release',
    developer: 'Rockstar Games / Rockstar North',
    publisher: 'Rockstar Games / Take-Two Interactive',
    released: '2026',
    genre: 'Action-adventure',
    platform: 'PlayStation 5',
    trailer: 'https://youtu.be/rz1B4B2yBZY',
    synopsis: 'Grand Theft Auto VI is an open-world action-adventure game developed by Rockstar Games. Set in the fictional U.S. state of Leonida, which includes Vice City and its surrounding regions, the game follows Jason Duval and Lucia Caminos, two criminals who become involved in a statewide conspiracy after a robbery goes wrong. Players can switch between the two protagonists while exploring the open world and completing story missions involving criminal activities, armed confrontations, and encounters with law enforcement. Gameplay combines driving, third-person combat, and exploration, plus optional activities like street racing, fishing, and other recreational pursuits.'
  },
  'spiderman-2': {
    price: 3490, 
    developer: 'Insomniac Games',
    publisher: 'Sony Interactive Entertainment',
    released: '2023',
    genre: 'Hack and Slash',
    platform: 'PlayStation 5',
    trailer: 'https://youtu.be/9fVYKsEmuRo',
    synopsis: 'Spider-Men, Peter Parker and Miles Morales, return for an exciting new adventure in the critically acclaimed Marvel’s Spider-Man franchise for PS5. Swing, jump and utilize the new Web Wings to travel across Marvel’s New York, quickly switching between Peter Parker and Miles Morales to experience different stories and epic new powers, as the iconic villain Venom threatens to destroy their lives, their city and the ones they love.'
  },
  'ghost-of-yotei': {
    price: 3385,
    developer: 'Sucker Punch Productions',
    publisher: 'Sony Interactive Entertainment',
    released: '2025',
    genre: 'Role-playing (RPG)',
    platform: 'PlayStation 5',
    trailer: 'https://www.youtube.com/watch?v=sLcksHR30UA',
    synopsis: 'The game takes place 300 years after Ghost of Tsushima. Set in the lands surrounding Mount Yōtei, a towering peak in the heart of Ezo, an area of Japan known as Hokkaido in present day. The area is outside the rule of Japan, and filled with sprawling grasslands, snowy tundras, and unexpected dangers.'
  },
  'diablo-iv': {
    price: 2095,
    developer: 'Blizzard Entertainment',
    publisher: 'Blizzard Entertainment',
    released: '2023',
    genre: 'Role-playing (RPG)',
    platform: 'PlayStation 5',
    trailer: 'https://www.youtube.com/watch?v=UnF_5xJfe5k',
    synopsis: 'Endless demons to slaughter. Deep customization through Talents, Skill Points, Runes, and Legendary loot. Randomized dungeons contained in a dynamic open world. Survive and conquer darkness—or succumb to the shadows'
  },
  'lollipop-chainsaw-repop': {
    price: 2050,   
    developer: 'Dragami Games',
    publisher: 'Dragami Games / Clear River Games',
    released: '2025',
    genre: 'Hack and Slash',
    platform: 'PlayStation 5',
    trailer: 'https://www.youtube.com/watch?v=abPO5TKOgtw',
    synopsis: 'A remake of the cult classic. Cheerleader and zombie hunter Juliet Starling fights through hordes of undead with her chainsaw, armed with a boyfriend\'s talking head and a lot of attitude.'
  },
  'astro-bot': {
    price: 3899,   
    developer: 'Team Asobi',
    publisher: 'Sony Interactive Entertainment',
    released: '2024',
    genre: 'Platformer',
    platform: 'PlayStation 5',
    trailer: 'https://www.youtube.com/watch?v=unYFdcEjV9k',
    synopsis: 'Astro and his crew of bots travel across the galaxy to rebuild their wrecked spaceship and rescue their scattered friends. A colorful 3D platformer that makes full use of the DualSense controller.'
  },
  'until-dawn': {
    price: 2990,   
    developer: 'Ballistic Moon',
    publisher: 'Sony Interactive Entertainment',
    released: '2024',
    genre: 'Horror',
    platform: 'PlayStation 5',
    trailer: 'https://www.youtube.com/watch?v=8nApBGPy0ao',
    synopsis: 'Eight friends return to a remote mountain lodge a year after a tragedy. Your choices decide who survives the night in this branching, cinematic horror story, rebuilt from the ground up for modern hardware.'
  },

  /* ---------------- SWITCH 1 ---------------- */
  'tomodachi-life-living-the-dream': {
    price: 2795,   
    tag: 'Featured',
    developer: 'Nintendo EPD Production Group No. 4',
    publisher: 'Nintendo',
    released: '2026',
    genre: 'Simulator',
    platform: 'Nintendo Switch',
    trailer: 'https://www.youtube.com/watch?v=0Fghz93zCdY',
    synopsis: 'Create Mii characters and watch them live, interact, and form friendships on a quirky island. Care for your Miis, decorate their world, and enjoy the unexpected stories that unfold.'
  },
  'the-legend-of-zelda-tears-of-the-kingdom': {
    price: 2795,   
    developer: 'Nintendo EPD Production Group No. 3',
    publisher: 'Nintendo',
    released: '2023',
    genre: 'Action-adventure',
    platform: 'Nintendo Switch',
    trailer: 'https://www.youtube.com/watch?v=_-2rpZs1ZhE',
    synopsis: 'In this sequel to The Legend of Zelda: Breath of the Wild, you\'ll decide your own path through the sprawling landscapes of Hyrule and the mysterious islands floating in the vast skies above. Can you harness the power of Link\'s new abilities to fight back against the malevolent forces that threaten the kingdom?'
  },
  'bayonetta-3': {
    price: 2495,  
    developer: 'PlatinumGames',
    publisher: 'Nintendo',
    released: '2022',
    genre: 'Hack and Slash',
    platform: 'Nintendo Switch',
    trailer: 'https://www.youtube.com/watch?v=N6a5-8_kt3E',
    synopsis: 'You\'ve waited long enough. The witch. Is. Back! A new-look Bayonetta returns to battle foes with her signature Witch Time! This time, she\'ll wield her new Demon Masquerade ability to channel the power of demons and engage in larger-than-life action'
  },
  'pikmin-4': {
    price: 2495,  
    developer: 'Nintendo EPD Production Group No. 10 / Eighting',
    publisher: 'Nintendo',
    released: '2023',
    genre: 'Real-time strategy',
    platform: 'Nintendo Switch',
    trailer: 'https://www.youtube.com/watch?v=WtY29lvEup8',
    synopsis: 'Guide pintsized creatures on a grand mission on a strange planet! Meet Pikmin, small, plantlike creatures with which you can grow, pluck, command, and overpower your enemies! These curious helpers come in different types—fire is no sweat for Red Pikmin and the brand-new Ice Pikmin can freeze enemies and the environment. Use your Pikmin\'s miniature might (and a bit of strategy) to explore this mysterious planet.'
  },
  'mario-kart-8-deluxe': {
    price: 2550,   
    developer: 'Nintendo EPD Production Group No. 9',
    publisher: 'Nintendo',
    released: '2017',
    genre: 'Racing',
    platform: 'Nintendo Switch',
    trailer: 'https://www.youtube.com/watch?v=tKlRN2YpxRE',
    synopsis: 'The definitive Mario Kart 8 with every track and character from the original, a refreshed Battle Mode, and support for local and online multiplayer.'
  },
  'animal-crossing-new-horizons': {
    price: 2595,   
    developer: 'Nintendo EPD Production Group No. 5',
    publisher: 'Nintendo',
    released: '2020',
    genre: 'Sandbox',
    platform: 'Nintendo Switch',
    trailer: 'https://www.youtube.com/watch?v=_3YNL0OWio0',
    synopsis: 'Escape to a deserted island and build your own paradise. Gather resources, craft items, decorate your home, and welcome animal villagers at your own pace.'
  },
  'pokemon-scarlet': {
    price: 2495,  
    developer: 'Game Freak',
    publisher: 'Nintendo',
    released: '2022',
    genre: 'Role-playing (RPG)',
    platform: 'Nintendo Switch',
    trailer: 'https://www.youtube.com/watch?v=9ruBLEEqw_c',
    synopsis: 'Explore the open-world Paldea region as a student on a treasure hunt. Catch and battle Pokémon, take on gym challenges, and discover the Terastal phenomenon.'
  },

  /* ---------------- SWITCH 2 ---------------- */
  'the-legend-of-zelda-ocarina-of-time': {
    price: 4295,   
    tag: 'New Release',
    developer: 'Nintendo EPD Production Group No. 3',
    publisher: 'Nintendo',
    released: '2026',
    genre: 'Action-adventure',
    platform: 'Nintendo Switch 2',
    trailer: 'https://www.youtube.com/watch?v=r8eMoxo4ipE',
    synopsis: 'Travel between two eras as Link to stop Ganondorf from seizing the Triforce and plunging Hyrule into darkness. Explore dungeons, meet the Sages, and use the Ocarina to change the world around you.'
  },
  'pokemon-pokopia': {
    price: 3850,   
    developer: 'Omega Force / Game Freak',
    publisher: 'Nintendo / The Pokémon Company',
    released: '2026',
    genre: 'Sandbox',
    platform: 'Nintendo Switch 2',
    trailer: 'https://www.youtube.com/watch?v=6_bYri9p1Uk',
    synopsis: 'Live and build alongside Pokémon in a cozy world where you shape the land and create a home for everyone.'
  },
  'hyrule-warriors-age-of-imprisonment': {
    price: 3995,   
    developer: 'AAA Games Studio',
    publisher: 'Nintendo / Koei Tecmo Games',
    released: '2025',
    genre: 'Hack and Slash',
    platform: 'Nintendo Switch 2',
    trailer: 'https://www.youtube.com/watch?v=vuSV9Sy28Mw',
    synopsis: 'Cut through armies of enemies in large-scale battles across Hyrule in this Zelda-themed musou action game.'
  },
  'nintendo-switch-sports-resort': {
    price: 3395,  
    developer: '',
    publisher: 'Nintendo',
    released: '2026',
    genre: 'Sports',
    platform: 'Nintendo Switch 2',
    trailer: 'https://www.youtube.com/watch?v=FZmCtpTSI4E',
    synopsis: 'A collection of motion-controlled sports activities to play solo or with friends.'
  },
  'fire-emblem-fortune-s-weave': {
    price: 4395,  
    developer: 'Intelligent Systems',
    publisher: 'Nintendo',
    released: '2026',
    genre: 'Role-playing (RPG)',
    platform: 'Nintendo Switch 2',
    trailer: 'https://www.youtube.com/watch?v=LHP77mZYuMQ',
    synopsis: 'A tactical RPG in the Fire Emblem series where you lead a band of warriors through grid-based battles.'
  },
  'kirby-air-riders': {
    price: 3995,   
    developer: 'Bandai Namco Studios / Sora',
    publisher: 'Nintendo',
    released: '2025',
    genre: 'Racing',
    platform: 'Nintendo Switch 2',
    trailer: 'https://www.youtube.com/watch?v=oJVsNMp_nAU',
    synopsis: 'Kirby and friends speed through airborne courses on their Air Ride machines in a fast, chaotic racing game built for multiplayer fun.'
  },
  'splatoon-raiders': {
    price: 3595,   
    developer: 'Nintendo EPD Production Group No. 5',
    publisher: 'Nintendo',
    released: '2026',
    genre: 'Shooter',
    platform: 'Nintendo Switch 2',
    trailer: 'https://www.youtube.com/watch?v=M2_RGzOPfgA',
    synopsis: 'A new Splatoon spin-off for Nintendo Switch 2.'
  }
};

/* ---------------------------------------------------------- */

const slugify = (text) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

function trailerEmbed(src) {
  if (/\.(mp4|webm|ogg)$/i.test(src)) {
    return '<video src="' + src + '" controls autoplay playsinline></video>';
  }
  const match = src.match(/(?:v=|youtu\.be\/|embed\/)([\w-]{11})/);
  const id = (match ? match[1] : src).replace(/[^\w-]/g, '');
  return '<iframe src="https://www.youtube-nocookie.com/embed/' + id +
    '?autoplay=1&rel=0" title="Game trailer" ' +
    'allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>';
}

/* Build the popup once and reuse it */
const modal = document.createElement('div');
modal.className = 'game-modal';
modal.innerHTML = `
  <div class="game-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="gm-title">
    <div class="game-modal-media" id="gm-media">
      <img id="gm-image" alt="">
      <button class="modal-close" id="gm-close" aria-label="Close"><i class="ph ph-x"></i></button>
      <div class="game-modal-title">
        <small id="gm-tag"></small>
        <h2 id="gm-title"><i class="ph-fill ph-star-four"></i><span></span></h2>
      </div>
      <button class="trailer-btn" id="gm-trailer"><i class="ph-fill ph-play"></i> Watch trailer</button>
    </div>
    <div class="game-modal-body">
      <div>
        <h3>Synopsis</h3>
        <p class="game-modal-synopsis" id="gm-synopsis"></p>
      </div>
      <aside class="game-modal-info">
        <h4>Product Information</h4>
        <div id="gm-info" class="info-list"></div>
        <div class="info-price" id="gm-price"></div>
        <button class="btn btn-primary" id="gm-add"><i class="ph ph-shopping-cart"></i> Add to Cart</button>
      </aside>
    </div>
  </div>`;
document.body.appendChild(modal);

const $ = (id) => document.getElementById(id);
const media = $('gm-media');
let currentTrailer = '';
let lastFocused = null;
let currentGame = null;

function stopTrailer() {
  media.classList.remove('playing');
  media.querySelectorAll('iframe, video').forEach((el) => el.remove());
}

function openGame(el) {
  const title = (el.querySelector('h3, h2') || {}).textContent.trim();
  const key = el.dataset.game || slugify(title);
  const game = GAMES[key] || {};
  const photo = el.querySelector('img');

  stopTrailer();
  $('gm-title').querySelector('span').textContent = title;
  $('gm-tag').textContent = game.tag || '';
  $('gm-tag').style.display = game.tag ? 'block' : 'none';
  $('gm-synopsis').textContent = game.synopsis || 'Synopsis coming soon.';

  const img = $('gm-image');
  img.style.display = '';
  img.onerror = () => { img.style.display = 'none'; };
  img.src = photo && photo.getAttribute('src') ? photo.getAttribute('src') : '';
  if (!img.getAttribute('src')) img.style.display = 'none';

  currentTrailer = game.trailer || '';
  currentGame = {
    key: key,
    title: title,
    price: game.price || 0,
    platform: game.platform || '',
    img: photo && photo.getAttribute('src') ? photo.getAttribute('src') : ''
  };
  $('gm-price').textContent = game.price ? money(game.price) : 'Price TBA';
  const addBtn = $('gm-add');
  addBtn.disabled = !game.price;
  addBtn.innerHTML = '<i class="ph ph-shopping-cart"></i> Add to Cart';
  $('gm-trailer').style.display = currentTrailer ? 'inline-flex' : 'none';

  const info = [
    ['Developer', game.developer],
    ['Publisher', game.publisher],
    ['Released', game.released],
    ['Genre', game.genre],
    ['Platform', game.platform]
  ].filter((row) => row[1]);
  $('gm-info').innerHTML = '';
  info.forEach(([label, value]) => {
    const row = document.createElement('div');
    row.innerHTML = '<div class="info-value"></div><div class="info-label"></div>';
    row.children[0].textContent = value;
    row.children[1].textContent = label;
    $('gm-info').appendChild(row);
  });

  lastFocused = document.activeElement;
  modal.classList.add('open');
  document.body.classList.add('modal-open');
  $('gm-close').focus();
}

function closeGame() {
  stopTrailer();
  modal.classList.remove('open');
  document.body.classList.remove('modal-open');
  if (lastFocused) lastFocused.focus();
}

function playTrailer() {
  if (!currentTrailer) return;
  stopTrailer();
  media.classList.add('playing');
  media.insertAdjacentHTML('beforeend', trailerEmbed(currentTrailer));
}

$('gm-trailer').addEventListener('click', playTrailer);

$('gm-close').addEventListener('click', closeGame);
modal.addEventListener('click', (e) => { if (e.target === modal) closeGame(); });
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('open')) closeGame();
});

document.querySelectorAll('.catalog-card, .catalog-banner').forEach((el) => {
  el.setAttribute('tabindex', '0');
  el.setAttribute('role', 'button');
  el.addEventListener('click', () => openGame(el));
  el.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openGame(el);
    }
  });
});


/* ==========================================================
   SHOPPING CART
   - "Add to Cart" in a game popup adds 1 copy (click again for more)
   - The Cart button (top right) opens the cart: change quantities,
     remove items, see the item count and the total amount
   - The "Clear cart" button opens cart-page.html (items are kept)
   - Saved in the browser (localStorage), so it follows the cashier
     across the PlayStation / Switch 1 / Switch 2 pages
   ========================================================== */
const CART_KEY = 'gamestore-cart';
const CART_MAX_QTY = 99;
let cart = loadCart();

function money(n) {
  return 'Php ' + Number(n).toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function loadCart() {
  try {
    const data = JSON.parse(localStorage.getItem(CART_KEY));
    return data && typeof data === 'object' ? data : {};
  } catch (e) { return {}; }
}

function saveCart() {
  try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (e) { /* storage unavailable */ }
}

function cartTotals() {
  let qty = 0, total = 0;
  Object.values(cart).forEach((item) => {
    qty += item.qty;
    total += item.qty * item.price;
  });
  return { qty, total };
}

function addToCart(game) {
  if (!game || !game.price) return;
  const line = cart[game.key] || (cart[game.key] = {
    title: game.title, price: game.price, platform: game.platform, img: game.img, qty: 0
  });
  line.price = game.price;
  line.qty = Math.min(line.qty + 1, CART_MAX_QTY);
  saveCart();
  renderCart();
}

function setQty(key, qty) {
  if (!cart[key]) return;
  if (qty <= 0) delete cart[key];
  else cart[key].qty = Math.min(qty, CART_MAX_QTY);
  saveCart();
  renderCart();
}

/* --- cart drawer markup (built once) --- */
const cartOverlay = document.createElement('div');
cartOverlay.className = 'cart-overlay';
const cartDrawer = document.createElement('aside');
cartDrawer.className = 'cart-drawer';
cartDrawer.setAttribute('aria-label', 'Shopping cart');
cartDrawer.innerHTML = `
  <div class="cart-head">
    <h2>Your cart</h2>
    <button class="cart-close" id="cart-close" aria-label="Close cart"><i class="ph ph-x"></i></button>
  </div>
  <div class="cart-items" id="cart-items"></div>
  <div class="cart-footer">
    <div class="cart-row"><span>Items</span><strong id="cart-qty">0</strong></div>
    <div class="cart-row cart-total"><span>Total</span><strong id="cart-total">Php 0.00</strong></div>
    <button class="btn btn-quiet" id="cart-clear">Checkout</button>
  </div>`;
document.body.appendChild(cartOverlay);
document.body.appendChild(cartDrawer);

function renderCart() {
  const { qty, total } = cartTotals();

  // header button badge
  const badge = document.getElementById('cart-count');
  if (badge) {
    badge.textContent = qty;
    badge.classList.toggle('empty', qty === 0);
  }

  $('cart-qty').textContent = qty;
  $('cart-total').textContent = money(total);
  $('cart-clear').disabled = qty === 0;

  const list = $('cart-items');
  list.innerHTML = '';
  const keys = Object.keys(cart);
  if (!keys.length) {
    list.innerHTML = '<div class="cart-empty"><i class="ph ph-shopping-cart"></i><p>Your cart is empty</p><small>Open a game and tap “Add to Cart”.</small></div>';
    return;
  }
  keys.forEach((key) => {
    const item = cart[key];
    const row = document.createElement('div');
    row.className = 'cart-line';
    row.innerHTML = `
      <div class="cart-thumb"><img alt=""></div>
      <div class="cart-info">
        <div class="cart-name"></div>
        <div class="cart-sub"></div>
        <div class="cart-qty-ctl">
          <button data-act="dec" aria-label="Decrease quantity"><i class="ph ph-minus"></i></button>
          <span></span>
          <button data-act="inc" aria-label="Increase quantity"><i class="ph ph-plus"></i></button>
        </div>
      </div>
      <div class="cart-side">
        <strong class="cart-line-total"></strong>
        <button class="cart-remove" data-act="rm" aria-label="Remove"><i class="ph ph-trash"></i></button>
      </div>`;
    const img = row.querySelector('img');
    if (item.img) { img.src = item.img; img.onerror = () => { img.style.display = 'none'; }; }
    else img.style.display = 'none';
    row.querySelector('.cart-name').textContent = item.title;
    row.querySelector('.cart-sub').textContent = (item.platform ? item.platform + ' · ' : '') + money(item.price) + ' each';
    row.querySelector('.cart-qty-ctl span').textContent = item.qty;
    row.querySelector('.cart-line-total').textContent = money(item.price * item.qty);
    row.addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-act]');
      if (!btn) return;
      if (btn.dataset.act === 'inc') setQty(key, item.qty + 1);
      if (btn.dataset.act === 'dec') setQty(key, item.qty - 1);
      if (btn.dataset.act === 'rm') setQty(key, 0);
    });
    list.appendChild(row);
  });
}

function openCart() {
  closeGame();
  cartOverlay.classList.add('open');
  cartDrawer.classList.add('open');
  document.body.classList.add('modal-open');
  $('cart-close').focus();
}

function closeCart() {
  cartOverlay.classList.remove('open');
  cartDrawer.classList.remove('open');
  if (!modal.classList.contains('open')) document.body.classList.remove('modal-open');
}

const cartOpenBtn = document.getElementById('cart-open');
if (cartOpenBtn) cartOpenBtn.addEventListener('click', openCart);
$('cart-close').addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);
$('cart-clear').addEventListener('click', () => {
  window.location.href = 'cart-page.html';
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && cartDrawer.classList.contains('open')) closeCart();
});

/* popup "Add to Cart" button */
$('gm-add').addEventListener('click', () => {
  addToCart(currentGame);
  const btn = $('gm-add');
  btn.innerHTML = '<i class="ph ph-check"></i> Added';
  setTimeout(() => {
    if (!btn.disabled) btn.innerHTML = '<i class="ph ph-shopping-cart"></i> Add to Cart';
  }, 1000);
  const badge = document.getElementById('cart-count');
  if (badge) { badge.classList.remove('bump'); void badge.offsetWidth; badge.classList.add('bump'); }
});

/* keep several open tabs / pages in sync */
window.addEventListener('storage', (e) => {
  if (e.key === CART_KEY) { cart = loadCart(); renderCart(); }
});

renderCart();