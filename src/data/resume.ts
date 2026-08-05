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

export const profile = {
  name: '김종혁',
  role: 'Frontend Developer',
  intro: '안녕하세요. 7년 차 프론트엔드 개발자',
  tagline:
    '웹과 하이브리드 앱을 주로 개발해 왔습니다. 기능의 복잡함을 사용자가 그대로 마주하지 않도록 만드는 일을 중요하게 여깁니다.',
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
    period: '2025.12 ~ 현재',
    location: '서울',
    summary: '동물 행동 분석 소프트웨어 ‘액트버스’의 프론트엔드를 담당하고 있습니다.',
    stack: ['React', 'Next.js', 'Vite', 'TypeScript', 'Tailwind CSS']
  },
  {
    company: '커넥팅더닷츠',
    role: 'Frontend Developer',
    period: '2023.10 ~ 2025.11',
    location: '서울',
    summary:
      '아이돌봄 서비스 ‘째깍악어’와 오프라인 공간 ‘째깍섬’의 웹·하이브리드 앱을 개발했습니다.',
    impacts: [
      { text: 'Streaming SSR을 도입해 FCP를 1초대에서 0.6초대로 단축' },
      { text: 'PHP 기반 운영 도구를 Next.js로 재구축' }
    ],
    bullets: [
      '부모·선생님용 Flutter 하이브리드 앱과 스택 기반 화면 전환 구조 개발',
      '공통 디자인 시스템과 UI 컴포넌트 라이브러리 구축·운영',
      'Electron·Next.js 기반 째깍섬 키오스크 개발'
    ],
    stack: ['React', 'Next.js', 'Vite', 'Flutter', 'Electron', 'Stackflow', 'TypeScript', 'Emotion']
  },
  {
    company: '미스터카멜',
    role: 'Frontend Developer',
    period: '2021.10 ~ 2023.09',
    location: '서울',
    summary: '중고 명품 검색과 개인 간 거래를 제공하는 ‘카멜’의 웹·하이브리드 앱을 개발했습니다.',
    impacts: [{ text: '매물 등록부터 주문·배송, 회원·비회원 거래까지 커머스 핵심 흐름 구현' }],
    bullets: [
      'Sendbird를 연동한 사용자 간 채팅 기능 개발',
      'Next.js 기반 하이브리드 앱과 공통 UI 컴포넌트 라이브러리 개발·운영'
    ],
    stack: ['React', 'Next.js', 'TypeScript', 'Sendbird', 'Emotion']
  },
  {
    company: '패스트뷰',
    role: 'Frontend Developer',
    period: '2020.01 ~ 2021.05',
    location: '서울',
    summary: '콘텐츠·광고·커머스 제품의 프론트엔드와 API 서버를 개발하고 운영했습니다.',
    impacts: [
      {
        text: 'AWS ElastiCache(Memcached)를 도입해 API 평균 응답 시간을 1초에서 200~300ms로 단축'
      },
      { text: 'Cloudflare CDN을 구성해 콘텐츠 광고 페이지의 트래픽 비용을 70% 이상 절감' }
    ],
    bullets: [
      '자동차줌·콘텐츠 광고 제품의 API 서버와 Next.js 웹 개발',
      '광고 위젯 API·배포 스크립트와 React 기반 운영 어드민 개발'
    ],
    stack: ['React', 'Next.js', 'Ruby on Rails', 'AWS', 'Webpack']
  }
];

export const projects: ProjectItem[] = [
  {
    name: '플렌',
    tagline: '조금씩, 더 나은 내일을 고르는 일',
    description:
      '국회의원과 지방 선출직이 어떤 활동을 했는지, 법안이 무슨 일을 하는지 쉽게 풀어서 보여주는 서비스입니다.',
    links: [{ label: 'Web', href: 'https://plen.kr/' }],
    stack: ['React', 'React Native', 'Hono', 'Supabase', 'flemo', 'TypeScript'],
    logo: '/logos/plen.svg'
  },
  {
    name: '시플로',
    tagline: '근무·일정을 한눈에 쉽게',
    description:
      '교대근무자의 근무와 개인 일정을 한눈에 보고, 동료와 근무를 공유하거나 교환을 요청할 수 있는 일정 관리 앱입니다.',
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
      '웹에서도 네이티브 앱처럼 화면을 쌓고 되돌아갈 수 있도록 만든 React 라우터입니다. 하이브리드 앱의 화면 전환과 히스토리 관리를 단순화합니다.',
    links: [
      { label: 'Web', href: 'https://flemo.dev' },
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
    period: '2012.03 ~ 2015.02'
  }
];
