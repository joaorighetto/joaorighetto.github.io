// Gera public/og.png a partir de scripts/og/og.html com o Edge ou o Chrome em modo headless.
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';

const candidatos = [
  process.env.BROWSER,
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter(Boolean);
const navegador = candidatos.find((c) => existsSync(c));
if (!navegador) throw new Error('Nenhum Chrome/Edge encontrado. Defina BROWSER com o caminho do executável.');

const modelo = pathToFileURL(fileURLToPath(new URL('./og.html', import.meta.url))).href;
const saida = fileURLToPath(new URL('../../public/og.png', import.meta.url));
execFileSync(navegador, [
  '--headless', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1',
  '--window-size=1200,630', `--screenshot=${saida}`, modelo,
], { stdio: 'inherit' });
console.log(`og.png gerado em ${saida}`);
