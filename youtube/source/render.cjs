// Renders the channel art to PNG with Playwright's Chromium.
// Usage (from repo root): NODE_PATH=$(npm root -g) node youtube/source/render.cjs
const { chromium } = require("playwright");
const { pathToFileURL } = require("node:url");
const path = require("node:path");

const here = __dirname;
const out = path.resolve(here, "..");
const url = (file, query = "") => pathToFileURL(path.join(here, file)).href + query;

const jobs = [
  { src: url("banner.html", "?v=signal"), out: "banner-signal.png", w: 2560, h: 1440 },
  { src: url("banner.html", "?v=verdict"), out: "banner-verdict.png", w: 2560, h: 1440 },
  { src: url("avatar.html"), out: "profile-picture.png", w: 800, h: 800 },
];

(async () => {
const browser = await chromium.launch();
for (const job of jobs) {
  const page = await browser.newPage({ viewport: { width: job.w, height: job.h } });
  await page.goto(job.src);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: path.join(out, job.out) });
  await page.close();
  console.log("wrote", job.out);
}
await browser.close();
})();
