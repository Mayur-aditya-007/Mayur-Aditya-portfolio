import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projects = [
  {
    slug: 'pssou-admissions',
    url: 'https://pssou.vercel.app/',
    name: 'PSSOU Admissions Portal'
  },
  {
    slug: 'sba-youth-fellowship',
    url: 'https://sbayouthfellowship.com/',
    name: 'SBA Youth Fellowship'
  },
  {
    slug: 'genz-connect',
    url: 'https://youth-cyclothon.vercel.app/',
    name: 'GenZ Connect'
  },
  {
    slug: 'greennst-agro',
    url: 'https://greennst-agro-industries.vercel.app/',
    name: 'Green NST Agro Industries'
  },
  {
    slug: 'gram-bharti',
    url: 'https://gram-bharti.vercel.app/',
    name: 'Gram Bharti'
  },
  {
    slug: 'vanmart-foundation',
    url: 'https://vanmart-foundation.vercel.app/',
    name: 'Vanmart Foundation'
  }
];

async function capture() {
  console.log('🚀 Launching browser to capture live screenshots...');
  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });

  for (const project of projects) {
    const projectDir = path.join(__dirname, '..', 'public', 'projects', project.slug);
    fs.mkdirSync(projectDir, { recursive: true });

    const page = await browser.newPage();

    // 1. Desktop Screenshot (1440x900)
    console.log(`📸 Capturing Desktop for ${project.name} (${project.url})...`);
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
    try {
      await page.goto(project.url, { waitUntil: 'networkidle2', timeout: 45000 });
      await new Promise((r) => setTimeout(r, 2000));
      
      const desktopPath = path.join(projectDir, 'desktop.png');
      await page.screenshot({ path: desktopPath, clip: { x: 0, y: 0, width: 1440, height: 900 } });
      
      const desktopFullPath = path.join(projectDir, 'desktop-full.png');
      await page.screenshot({ path: desktopFullPath, fullPage: true });
      console.log(`✅ Saved desktop for ${project.slug}`);
    } catch (err) {
      console.error(`❌ Error capturing desktop for ${project.slug}:`, err.message);
    }

    // 2. Mobile Screenshot (390x844)
    console.log(`📱 Capturing Mobile for ${project.name}...`);
    await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
    try {
      await page.goto(project.url, { waitUntil: 'networkidle2', timeout: 45000 });
      await new Promise((r) => setTimeout(r, 2000));

      const mobilePath = path.join(projectDir, 'mobile.png');
      await page.screenshot({ path: mobilePath, clip: { x: 0, y: 0, width: 390, height: 844 } });
      console.log(`✅ Saved mobile for ${project.slug}`);
    } catch (err) {
      console.error(`❌ Error capturing mobile for ${project.slug}:`, err.message);
    }

    await page.close();
  }

  await browser.close();
  console.log('🎉 All live screenshots captured successfully!');
}

capture().catch(console.error);
