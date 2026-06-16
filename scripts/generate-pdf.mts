// 현재 빌드된 사이트를 렌더해 A4 이력서 PDF를 생성한다.
// `bun run pdf`로 실행 (내부에서 빌드 후 이 스크립트가 동작).
//
// 인쇄 레이아웃은 src/index.css의 @media print가 담당한다
// (헤더·푸터·다운로드 버튼 숨김, 라이트 고정, 날짜 2단 등).
import { copyFileSync } from 'node:fs';
import { preview } from 'vite';
import puppeteer from 'puppeteer';

const OUT_PUBLIC = 'public/kimjh96-resume.pdf';
const OUT_DIST = 'dist/kimjh96-resume.pdf';

const server = await preview({ preview: { strictPort: false } });
const url = server.resolvedUrls?.local?.[0] ?? `http://localhost:4173/`;

const browser = await puppeteer.launch({ headless: true });
try {
  const page = await browser.newPage();
  // 라이트 모드 고정
  await page.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: 'light' }]);
  await page.goto(url, { waitUntil: 'networkidle0' });
  await page.evaluate(() => {
    document.documentElement.dataset.theme = 'light';
  });
  // 웹폰트(Pretendard) 로딩 대기
  await page.evaluate(() => document.fonts.ready);

  await page.pdf({
    path: OUT_PUBLIC,
    format: 'A4',
    printBackground: true,
    margin: { top: '14mm', bottom: '14mm', left: '14mm', right: '14mm' }
  });
  copyFileSync(OUT_PUBLIC, OUT_DIST);

  console.log(`✓ 이력서 PDF 생성 완료 → ${OUT_PUBLIC} (+ ${OUT_DIST})`);
} finally {
  await browser.close();
  await server.httpServer?.close();
}

process.exit(0);
