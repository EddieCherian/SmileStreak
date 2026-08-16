const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const outDir = './.copilot/session-state/f9532877-3a7e-4c9d-b723-aa4e13087951/files/screenshots';
  try { fs.mkdirSync(outDir, { recursive: true }); } catch(e){}

  const urls = [
    { path: '/', name: 'root' },
    { path: '/today', name: 'today' },
    { path: '/report', name: 'report' },
    { path: '/home', name: 'home' },
    { path: '/leaderboard', name: 'leaderboard' }
  ];

  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 1 });

  for (const u of urls) {
    const url = `http://localhost:5173${u.path}`;
    try {
      const res = await page.goto(url, { waitUntil: 'networkidle2', timeout: 15000 });
      if (!res || !res.ok()) {
        console.error('failed', url, 'status', res && res.status());
        continue;
      }
      // give a short time for in-page rendering
      await new Promise(r => setTimeout(r, 300));
      const file = `${outDir}/${u.name}.png`;
      await page.screenshot({ path: file, fullPage: true });
      console.log('saved', file);
    } catch (err) {
      console.error('failed', url, err.message);
    }
  }

  await browser.close();
})();
