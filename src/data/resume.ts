export interface ImpactItem {
  text: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  summary?: string;
  impacts?: ImpactItem[];
  bullets?: string[];
  stack?: string[];
  isPlaceholder?: boolean;
}

export interface ProjectItem {
  name: string;
  tagline?: string;
  description: string;
  links: { label: string; href: string }[];
  stack?: string[];
  logo?: string;
  logoDark?: string;
  // true면 로고를 타일 안쪽 여백을 두고 contain으로 배치(글리프형). 기본은 cover(풀타일).
  logoInset?: boolean;
}

export interface EducationItem {
  school: string;
  major: string;
  period: string;
}

const CAREER_START_YEAR = 2020;

// 한국식 연차: 시작 연도를 1년차로 보고 매년 +1 (2020 시작 → 2026년 = 7년차).
export function getCareerYears() {
  return new Date().getFullYear() - CAREER_START_YEAR + 1;
}

export const profile = {
  name: '김종혁',
  role: 'Frontend Developer',
  tagline: () =>
    `안녕하세요. ${getCareerYears()}년 차 프론트엔드 개발자 김종혁입니다. 사용자와 가까운 제품을 만들고, 사용자의 반응을 확인하며 제품을 발전시켜 가는 과정을 좋아합니다.`,
  about:
    '사용자와 가까운 제품을 만들고, 사용자의 반응을 확인하며 제품을 발전시켜 가는 과정을 좋아합니다.',
  contacts: {
    email: 'kimjhs@kakao.com',
    phone: '010-3653-6892',
    github: 'https://github.com/kimjh96',
    linkedin: 'https://www.linkedin.com/in/kimjh96'
  },
  resumePdf: '/kimjh96-resume.pdf'
};

export const experiences: ExperienceItem[] = [
  {
    company: '액트노바',
    role: 'Frontend Developer',
    period: '2025.12 — 현재',
    location: '서울',
    summary:
      '동물 실험 영상 속 동물의 행동을 AI로 분석하는 웹 소프트웨어 액트버스를 만드는 스타트업입니다. 액트버스 모노레포 전반의 프론트엔드를 담당하고 있습니다.',
    stack: ['React', 'Next.js', 'TypeScript']
  },
  {
    company: '커넥팅더닷츠',
    role: 'Frontend Developer',
    period: '2023.10 — 2025.11',
    location: '서울',
    summary:
      '통합 아이돌봄 교육 서비스를 제공하는 스타트업입니다. 째깍악어와 째깍섬 프론트엔드를 담당했습니다.',
    impacts: [
      { text: 'Streaming SSR 도입으로 FCP를 1초대 → 0.6초대로 단축' },
      { text: '기존 PHP 어드민을 Next.js 기반으로 재구성하여 내부 운영 효율화' }
    ],
    bullets: [
      '째깍악어 부모님용 Flutter 하이브리드 앱 개발',
      '째깍악어 선생님용 Flutter 하이브리드 앱 개발',
      '스택 기반 화면 전환 구조 도입 및 웹뷰 최적화 레이아웃 설계로 네이티브 앱과 유사한 UX 구현',
      '디자인 시스템 기반 UI 컴포넌트 라이브러리 개발 및 관리',
      'Electron·Next.js 기반 째깍섬 키오스크 웹 개발'
    ],
    stack: ['React', 'Next.js', 'Flutter', 'Electron', 'TypeScript', 'Emotion']
  },
  {
    company: '미스터카멜',
    role: 'Frontend Developer',
    period: '2021.10 — 2023.09',
    location: '서울',
    summary:
      '중고 명품 통합검색과 유저 간 거래·비교 분석을 제공하는 C2C 플랫폼 카멜을 만드는 스타트업입니다. 카멜의 프론트엔드를 담당했습니다.',
    impacts: [
      {
        text: '매물 등록 → 주문·배송 → 회원/비회원 거래까지 커머스 전반의 흐름 구현 및 샌드버드 기반 채팅 기능 개발'
      }
    ],
    bullets: [
      'Next.js 기반 카멜 하이브리드 앱 개발',
      '디자인 시스템 기반 UI 컴포넌트 라이브러리 개발 및 관리'
    ],
    stack: ['React', 'Next.js', 'TypeScript', 'Sendbird']
  },
  {
    company: '패스트뷰',
    role: 'Frontend Developer',
    period: '2020.01 — 2021.05',
    location: '서울',
    summary:
      '텍스트와 영상 기반 콘텐츠를 생산·유통하는 소프트 콘텐츠 스타트업입니다. 기존 제품 유지보수 및 자사 커머스 신규 제품 개발을 담당했습니다.',
    impacts: [
      { text: 'AWS ElastiCache(Memcached)로 API 평균 응답 1s → 200~300ms 단축' },
      { text: 'Cloudflare CDN 구성으로 콘텐츠 광고 페이지 트래픽 비용 약 70% 이상 절감' }
    ],
    bullets: [
      '자동차줌 API 서버와 Next.js 기반 웹 개발',
      '패스트뷰 광고 위젯 API 서버와 스크립트 개발',
      '패스트뷰 콘텐츠 광고 API 서버와 Next.js 기반 웹 개발',
      '패스트뷰 어드민 API 서버와 React CSR 기반 웹 개발'
    ],
    stack: ['React', 'Next.js', 'Ruby on Rails', 'AWS', 'Webpack', 'CloudFront']
  }
];

export const projects: ProjectItem[] = [
  {
    name: '시플로',
    tagline: '근무·일정을 한눈에 쉽게',
    description:
      '교대근무와 유동적인 일정을 한 화면에서 관리할 수 있도록 돕는 근무·일정 관리 앱입니다. flemo 기반으로 개발한 웹뷰 기반 하이브리드 앱입니다.',
    links: [
      { label: 'App Store', href: 'https://apps.apple.com/kr/app/시플로/id6757798018' },
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.shiflo' }
    ],
    stack: ['React', 'React Native', 'Supabase', 'flemo', 'Emotion'],
    logo: '/logos/shiflo.svg',
    logoDark: '/logos/shiflo-dark.svg',
    logoInset: true
  },
  {
    name: 'flemo',
    tagline: '네이티브 같은 화면 전환을 위한 React 라우터',
    description:
      '모바일 앱에서 익숙한 스택 기반 화면 전환 방식을 웹에 구현해, 자연스러운 하이브리드 앱·웹뷰 경험 구현을 돕는 라우터입니다.',
    links: [
      { label: '사이트', href: 'https://flemo.dev' },
      { label: 'GitHub', href: 'https://github.com/kimjh96/flemo' }
    ],
    stack: ['React', 'TypeScript'],
    logo: '/logos/flemo.png',
    logoDark: '/logos/flemo-dark.png'
  }
];

export const education: EducationItem[] = [
  {
    school: '수원공업고등학교',
    major: '전자통신과',
    period: '2012.03 — 2015.02'
  }
];
