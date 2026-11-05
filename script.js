const N = 12, S = 40, P = 6, W = N * S + P * 2;
const COR = {
  b: '#9bd7ff', o: '#ff9f1c', w: '#fff3d6', k: '#222233', y: '#ffe14d', s: '#e8c88a',
  g: '#3fbf5f', r: '#e63946', c: '#2d9cdb', d: '#8b5a2b', h: '#2f9e44', a: '#6b7280',
  p: '#ff7eb6', v: '#8e44ad', t: '#2ec4b6', n: '#1d3557', z: '#14213d', q: '#e76f51',
  x: '#5a3825', e: '#ffffff', f: '#f0d9a8'
};

// Cada desenho é uma grade 12x12; cada letra é uma cor (veja COR).
const DESENHOS = [
  { nome: 'um Peixe', emoji: '🐟', art: [
    'bbbbbbbbbbwb', 'bbbbbbbbbbbb', 'bbbbooooobby', 'bbboooooobyy', 'bboowkooooyy', 'bbooooooooyy',
    'bbboooooobyy', 'bbbbooooobby', 'bbbbbbbbbbbb', 'bbbbbbgbbbbb', 'bbbbbbgbbgbb', 'ssssssssssss'] },
  { nome: 'uma Casa', emoji: '🏠', art: [
    'bbbbbbbbbbyy', 'bbbbbrrbbbby', 'bbbbrrrrbbbb', 'bbbrrrrrrbbb', 'bbrrrrrrrrbb', 'bbwwwwwwwwbb',
    'bbwcwwwwcwbb', 'bbwwwddwwwbb', 'bbwcwddwcwbb', 'gggggggggggg', 'gggggggggggg', 'gggggggggggg'] },
  { nome: 'um Carro', emoji: '🚗', art: [
    'bbyybbbbbbbb', 'bbbbbbwwbbbb', 'bbbbbbbbbbbb', 'bbbbrrrrbbbb', 'bbbrccrccrbb', 'brrrrrrrrrrb',
    'brrrrrrrrrry', 'brkkrrrrkkrb', 'bbkkbbbbkkbb', 'aaaaaaaaaaaa', 'aaaaaaaaaaaa', 'aaaaaaaaaaaa'] },
  { nome: 'uma Árvore', emoji: '🌳', art: [
    'yybbbbbbbbbb', 'yybbbbbbbbbb', 'bbbbbggbbbbb', 'bbbbgggggbbb', 'bbbgggggggbb', 'bbggggggggbb',
    'bbggrgggrgbb', 'bbbgggggggbb', 'bbbbbddbbbbb', 'bbbbbddbbbbb', 'hhhhhddhhhhh', 'hhhhhhhhhhhh'] },
  { nome: 'uma Borboleta', emoji: '🦋', art: [
    'bbbbbbbbbbbb', 'bbbbkbbkbbbb', 'bvvvbkkbvvvb', 'vppvvkkvvppv', 'vpyyvkkvyypv', 'vppyvkkvyppv',
    'bvvvvkkvvvvb', 'boooqkkqooob', 'bbooqkkqoobb', 'bbbbqkkqbbbb', 'gggpgggggygg', 'gggggggggggg'] },
  { nome: 'um Foguete', emoji: '🚀', art: [
    'zzezzzzzzzyz', 'zzzzzrrzzzzz', 'zzzzrrrrzzez', 'zzzzeeeezzzz', 'zzzzeccezzzz', 'yzzzecceyzzz',
    'zzzzeeeezzzz', 'zzzzeeeezzzz', 'zzrreeeerrzz', 'zzzzaaaazzzz', 'zzzzoyyozzzz', 'zzzzzyyzzzzz'] },
  { nome: 'um Sorvete', emoji: '🍦', art: [
    'bbybbbbbbbyb', 'bbbbbrrbbbbb', 'bbbppppppbbb', 'bbppppppppbb', 'bbpwppppwpbb', 'bbttttttttbb',
    'bbttytttytbb', 'bbbttttttbbb', 'bbbosososbbb', 'bbbbsosobbbb', 'bbbbbsobbbbb', 'bbbbbbsbbbbb'] },
  { nome: 'um Girassol', emoji: '🌻', art: [
    'bbbbbbbbbbbb', 'bbbbyyyybbbb', 'bbyyyyyyyybb', 'byyyddddyyyb', 'yyydxxxxdyyy', 'yyydxxxxdyyy',
    'byyyddddyyyb', 'bbyyyyyyyybb', 'bbbbyyyybbbb', 'bbbbbggbbhhb', 'bhhhhggbbbbb', 'hhhhhgghhhhh'] },
  { nome: 'um Cogumelo', emoji: '🍄', art: [
    'bbbbbbbbbbbb', 'bbbbrrrrbbbb', 'bbrrrwwrrrbb', 'brrwwrrrrwrb', 'rrrwwrrrwwrr', 'rrrrrrrrrrrr',
    'bbwwwwwwwwbb', 'bbbbwwwwbbbb', 'bbbbwwwfbbbb', 'bbbbwwwfbbbb', 'hhhhwwwfhhhh', 'hhphhhhhhyhh'] },
  { nome: 'um Balão de Ar Quente', emoji: '🎈', art: [
    'bwwbgccgbwwb', 'bbbygccgybbb', 'bbrygccgyrbb', 'bbrygccgyrbb', 'bbrygccgyrbb', 'bbbygccgybbb',
    'bbbbgccgbbbb', 'bbbbdbbdbbbb', 'bbbbddddbbbb', 'bbbbdxxdbbbb', 'bhhbddddbhhb', 'hhhhhhhhhhhh'] },
  { nome: 'um Barco a Vela', emoji: '⛵', art: [
    'bbbbbkyybbbb', 'bbbwwkbbbbyy', 'bbwwwkwwbbyy', 'bbwwwkwwwbbb', 'bwwwwkwwwwbb', 'bwwwwkwwwwbb',
    'bbbbbkbbbbbb', 'bbrrrrrrrrbb', 'bbbrrrrrrbbb', 'ccwcccccwccc', 'ncncncncncnc', 'nnnnnnnnnnnn'] },
  { nome: 'um Gato', emoji: '🐱', art: [
    'bboobbbboobb', 'bbopobbopobb', 'bboooooooobb', 'boooooooooob', 'boogoooogoob', 'booooppoooob',
    'bowookkoowob', 'bboooooooobb', 'bboqoooooqbb', 'bbooowwwooob', 'bbowwoooowwb', 'ssssssssssss'] },
  { nome: 'um Arco-íris', emoji: '🌈', art: [
    'bbrrrrrrrrbb', 'broooooooorb', 'royyyyyyyyor', 'royggggggyor', 'roygccccgyor', 'roygcbbcgyor',
    'roygcbbcgyor', 'roygcbbcgyor', 'roygcbbcgyor', 'wwwbbbbbbwww', 'wwwwwbbwwwww', 'wwwwwwwwwwww'] },
  { nome: 'um Coração', emoji: '❤️', art: [
    'zyzzzzzzzzez', 'zzrrrzzrrrzz', 'zrrwrrrrrrrz', 'zrwrrrrrrrrz', 'zrrrrrrrrrrz', 'zzrrrpprrrzz',
    'zzzrrpprrzzz', 'zzzzrpprzzzz', 'zzzzzppzzzzz', 'zyzzzzzzzzyz', 'zzzzzzzzzzez', 'zzyzzzzzzzzz'] },
  { nome: 'um Planeta com Anéis', emoji: '🪐', art: [
    'zezzzzzzzzyz', 'zzzzzzzzzzzz', 'zzzzoooozzzz', 'zzyyyyyyyyzz', 'zzqqqqqqqqzz', 'vvoooooooovv',
    'vccccccccccv', 'zzyyyyyyyyzz', 'zzqqqqqqqqzz', 'zzzzqqqqzzzz', 'zzzyzzzzzezz', 'ezzzzzzyzzzz'] }
];

const cv = document.getElementById('c'), ctx = cv.getContext('2d');
const DPR = Math.min(window.devicePixelRatio || 1, 3);
cv.width = cv.height = W * DPR;
ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
const DX = [0, 1, 0, -1], DY = [-1, 0, 1, 0];
const ORDEM = [...DESENHOS.keys()].sort(() => Math.random() - .5);
let fase = 0;
let pic, maze, vis, falsa, rank, px, py, passos, reveal, fim, faseNum = 0;

const $ = id => document.getElementById(id);
const corReal = i => COR[(pic.art[i / N | 0] || '').padEnd(N, 'b')[i % N]] || COR.b;

function gerarLabirinto() {
  maze = Array.from({ length: N * N }, () => [1, 1, 1, 1]);
  const visto = new Set([0]), pilha = [0];
  while (pilha.length) {
    const c = pilha[pilha.length - 1], x = c % N, y = c / N | 0;
    const viz = [0, 1, 2, 3].filter(d => {
      const nx = x + DX[d], ny = y + DY[d];
      return nx >= 0 && ny >= 0 && nx < N && ny < N && !visto.has(ny * N + nx);
    });
    if (!viz.length) { pilha.pop(); continue; }
    const d = viz[Math.random() * viz.length | 0];
    const n = (y + DY[d]) * N + x + DX[d];
    maze[c][d] = 0; maze[n][(d + 2) % 4] = 0;
    visto.add(n); pilha.push(n);
  }
}

function iniciar() {
  pic = DESENHOS[ORDEM[fase % ORDEM.length]];
  gerarLabirinto();
  const paleta = [...new Set(Array.from({ length: N * N }, (_, i) => corReal(i)))];
  falsa = Array.from({ length: N * N }, () => paleta[Math.random() * paleta.length | 0]);
  rank = [...Array(N * N).keys()].sort(() => Math.random() - .5)
    .reduce((r, cel, pos) => (r[cel] = pos, r), []);
  vis = new Set([0]); px = py = 0; passos = 0; reveal = 0; fim = false; faseNum++;
  $('fim').classList.add('hidden');
  atualizar(); desenhar();
}

function atualizar() {
  $('fase').textContent = faseNum;
  $('passos').textContent = passos;
  $('pintado').textContent = Math.round(vis.size / (N * N) * 100) + '%';
}

function desenhar() {
  ctx.clearRect(0, 0, W, W);
  ctx.fillStyle = '#060a18'; ctx.fillRect(0, 0, W, W);
  const gap = 1.5 * (1 - reveal);
  for (let i = 0; i < N * N; i++) {
    const x = P + (i % N) * S, y = P + (i / N | 0) * S;
    const real = vis.has(i) || rank[i] < reveal * N * N;
    ctx.fillStyle = real ? corReal(i) : falsa[i];
    ctx.fillRect(x + gap, y + gap, S - gap * 2, S - gap * 2);
    if (!real) { ctx.fillStyle = 'rgba(6,10,24,.38)'; ctx.fillRect(x + gap, y + gap, S - gap * 2, S - gap * 2); }
    else if (!fim) { ctx.fillStyle = 'rgba(255,255,255,.12)'; ctx.fillRect(x + gap, y + gap, S - gap * 2, S / 2); }
  }
  ctx.save();
  ctx.strokeStyle = `rgba(0,240,255,${1 - reveal})`; ctx.shadowColor = '#00f0ff';
  ctx.shadowBlur = 8 * (1 - reveal); ctx.lineWidth = 3; ctx.lineCap = 'round';
  ctx.beginPath();
  for (let i = 0; i < N * N; i++) {
    const x = P + (i % N) * S, y = P + (i / N | 0) * S, m = maze[i];
    if (m[0]) { ctx.moveTo(x, y); ctx.lineTo(x + S, y); }
    if (m[1]) { ctx.moveTo(x + S, y); ctx.lineTo(x + S, y + S); }
    if (m[2]) { ctx.moveTo(x, y + S); ctx.lineTo(x + S, y + S); }
    if (m[3]) { ctx.moveTo(x, y); ctx.lineTo(x, y + S); }
  }
  ctx.stroke();
  ctx.restore();
  if (fim) return;
  // portal de chegada
  const gx = P + (N - 1) * S + S / 2, gy = P + (N - 1) * S + S / 2;
  ctx.save(); ctx.shadowColor = '#ff2bd6'; ctx.shadowBlur = 14; ctx.strokeStyle = '#ff2bd6'; ctx.lineWidth = 3;
  [S * .34, S * .18].forEach(r => { ctx.beginPath(); ctx.arc(gx, gy, r, 0, 7); ctx.stroke(); });
  ctx.restore();
  // jogador
  const cx = P + px * S + S / 2, cy = P + py * S + S / 2;
  ctx.save(); ctx.shadowColor = '#00f0ff'; ctx.shadowBlur = 16; ctx.fillStyle = '#fff';
  ctx.beginPath(); ctx.arc(cx, cy, S * .24, 0, 7); ctx.fill();
  ctx.shadowBlur = 0; ctx.strokeStyle = '#00f0ff'; ctx.lineWidth = 2.5;
  ctx.beginPath(); ctx.arc(cx, cy, S * .34, 0, 7); ctx.stroke();
  ctx.restore();
}

function mover(d) {
  if (fim || maze[py * N + px][d]) return;
  px += DX[d]; py += DY[d]; passos++;
  vis.add(py * N + px);
  atualizar(); desenhar();
  if (px === N - 1 && py === N - 1) vencer();
}

function vencer() {
  fim = true;
  const pct = Math.round(vis.size / (N * N) * 100);
  const ini = performance.now();
  (function anim(t) {
    reveal = Math.min(1, (t - ini) / 2200);
    desenhar();
    if (reveal < 1) return requestAnimationFrame(anim);
    $('emoji').textContent = pic.emoji;
    $('titulo').textContent = `Você pintou ${pic.nome}!`;
    $('texto').textContent = `Você pintou ${pct}% do desenho em ${passos} passos. O labirinto era um desenho escondido o tempo todo!`;
    $('fim').classList.remove('hidden');
  })(ini);
}

document.addEventListener('keydown', e => {
  const d = { ArrowUp: 0, w: 0, W: 0, ArrowRight: 1, d: 1, D: 1, ArrowDown: 2, s: 2, S: 2, ArrowLeft: 3, a: 3, A: 3 }[e.key];
  if (d !== undefined) { e.preventDefault(); mover(d); }
});
document.querySelectorAll('.dpad button').forEach(b => b.addEventListener('click', () => mover(+b.dataset.d)));

let t0;
cv.addEventListener('touchstart', e => { t0 = e.touches[0]; }, { passive: true });
cv.addEventListener('touchend', e => {
  if (!t0) return;
  const t = e.changedTouches[0], dx = t.clientX - t0.clientX, dy = t.clientY - t0.clientY;
  if (Math.max(Math.abs(dx), Math.abs(dy)) < 20) return;
  mover(Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? 1 : 3) : (dy > 0 ? 2 : 0));
});

$('prox').onclick = () => { fase++; iniciar(); };
$('novo').onclick = () => { faseNum--; iniciar(); };
iniciar();
