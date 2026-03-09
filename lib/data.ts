const BASE = "https://stealthemoon0331-tatusya.vercel.app";

export const site = {
  name: "たつやくろだ",
  title: "ソフトウェアエンジニア・フルスタック開発者",
  tagline:
    "革新的なソリューションの創造と日本文化とテクノロジーの架け橋に情熱を注いでいます",
  theme: "Deep Blue Serenity",
  themeDesc: "Calm deep ocean with gentle waves",
  avatar: `${BASE}/avatar.png`,
};

export const about = {
  name: "たつやくろだ",
  role: "シニアソフトウェアエンジニア",
  bio: `5年以上の経験を持つ献身的なソフトウェアエンジニアです。モダンなWebアプリケーションとデジタルソリューションの開発に従事しています。東京を拠点に、優れたユーザー体験を提供するクリーンで効率的なコードの作成を専門としています。技術的専門知識とユーザーニーズの深い理解を組み合わせ、すべてのプロジェクトが機能性と美的基準の両方を満たすよう努めています。継続的な学習を信条とし、革新的なソリューションを提供するため最新技術の習得に励んでいます。最高水準のプロフェッショナリズムと品質を維持しながら、テックコミュニティに有意義な貢献をすることが目標です。`,
  values: [
    {
      title: "問題解決",
      desc: "複雑な課題に体系的思考と創造的ソリューションでアプローチします",
    },
    {
      title: "クリーンコード",
      desc: "保守性、可読性、効率性を兼ね備えたコードを書くことが私の情熱です",
    },
    {
      title: "チームワーク",
      desc: "多様なチームと効果的に協力し、共通の目標を達成します",
    },
    {
      title: "継続的学習",
      desc: "最新技術とベストプラクティスを常に学び続けています",
    },
  ],
  highlights: {
    languages: ["日本語（母語）", "英語（流暢）", "中国語（会話レベル）"],
    hobbies: ["海洋写真", "日本の伝統芸術", "オープンソース貢献"],
    philosophy: ["改善（継続的改善）", "おもてなし（日本のおもてなし精神）", "侘寂（不完全さの中の美しさ）"],
  },
};

export const experienceStats = [
  { value: "5+ years", label: "5年以上" },
  { value: "50+", label: "50以上" },
  { value: "20+", label: "20以上" },
  { value: "3+ years", label: "3年以上" },
];

export const experiences = [
  {
    period: "2022年 - 現在",
    title: "シニアソフトウェアエンジニア",
    company: "テックフローソリューションズ",
    location: "東京都",
    desc: "マイクロサービスアーキテクチャの開発をリードし、ジュニア開発者のメンタリングを担当",
    achievements: [
      "Reduced system response time by 40% through microservices optimization",
      "Led team of 5 developers in building scalable e-commerce platform",
      "Implemented CI/CD pipeline reducing deployment time by 60%",
      "Mentored 3 junior developers who successfully advanced their careers",
    ],
    tech: ["Node.js", "React", "Docker", "Kubernetes", "AWS", "PostgreSQL"],
  },
  {
    period: "2020年 - 2022年",
    title: "フルスタック開発者",
    company: "デジタルイノベーションズ株式会社",
    location: "大阪府",
    desc: "フルスタックWebアプリケーションとモバイル対応ソリューションの開発",
    achievements: [
      "Built 15+ client projects with 99.9% uptime",
      "Developed custom CMS reducing content management time by 50%",
      "Implemented responsive design for mobile-first approach",
      "Collaborated with UX team to improve user engagement by 35%",
    ],
    tech: ["Vue.js", "Laravel", "MySQL", "Redis", "Nginx", "Linux"],
  },
  {
    period: "2019年 - 2020年",
    title: "フロントエンド開発者",
    company: "スタートアップハブ東京",
    location: "東京都",
    desc: "モダンフロントエンド開発とユーザーエクスペリエンス最適化に特化",
    achievements: [
      "Developed 10+ React applications with modern UI/UX",
      "Implemented state management solutions improving app performance",
      "Created reusable component library used across 5 projects",
      "Optimized bundle size reducing load time by 45%",
    ],
    tech: ["React", "TypeScript", "Redux", "Sass", "Webpack", "Jest"],
  },
  {
    period: "2018年 - 2019年",
    title: "ジュニア開発者",
    company: "ウェブクラフトソリューションズ",
    location: "京都府",
    desc: "学習と成長に焦点を当ててWeb開発のキャリアを開始",
    achievements: [
      "Completed 20+ small to medium web projects",
      "Learned modern JavaScript frameworks and best practices",
      "Contributed to open source projects on GitHub",
      "Received 'Rising Star' award for exceptional performance",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "PHP", "MySQL"],
  },
];

export const expertiseAreas = [
  { title: "フロントエンド開発", level: "エキスパート" },
  { title: "バックエンド開発", level: "上級" },
  { title: "DevOps・クラウド", level: "中級" },
  { title: "チームリーダーシップ", level: "上級" },
];

export const projects = [
  {
    id: 1,
    image: `${BASE}/images/projects/project-1.png`,
    category: "リクルート",
    year: "2020",
    title: "mi-6 リクルート",
    description:
      "マイクロサービスアーキテクチャを採用した包括的なECプラットフォーム。リアルタイム在庫管理とAI搭載のレコメンデーション機能を特徴とする",
    tech: ["React", "Node.js", "PostgreSQL", "+5 more"],
  },
  {
    id: 2,
    image: `${BASE}/images/projects/project-2.png`,
    category: "生産性ツール",
    year: "2020",
    title: "ジェイエムシー株式会社 Recruit Site",
    description:
      "日本の禅哲学にインスパイアされたミニマリストなプロジェクト管理ツール。タスク管理におけるシンプルさとマインドフルネスに焦点を当てる",
    tech: ["Express.js", "MongoDB", "Socket.io", "+3 more"],
  },
  {
    id: 3,
    image: `${BASE}/images/projects/project-3.png`,
    category: "モバイルアプリ",
    year: "2021",
    title: "Misshelly",
    description:
      "日本の美学を取り入れた美しい天気アプリケーション。桜のアニメーションと伝統的な天気予報方法を特徴とする",
    tech: ["React Native", "Expo", "OpenWeatherMap API", "+3 more"],
  },
  {
    id: 4,
    image: `${BASE}/images/projects/project-4.png`,
    category: "教育",
    year: "2022",
    title: "5IVE GROUP",
    description:
      "日本の文化的メタファーとゲーミフィケーションを通じてプログラミングを教えるインタラクティブなコーディング教育プラットフォーム",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "Vercel", "React/Next.js"],
  },
  {
    id: 5,
    image: `${BASE}/images/projects/project-5.png`,
    category: "文化遺産",
    year: "2023",
    title: "Dance",
    description:
      "これは、神戸にあるダンス・音楽・パフォーマンスの専門的な教育を提供する専門学校です。",
    tech: ["React", "Node.js", "MongoDB", "AWS S3", "ImageMagick", "Next.js"],
  },
  {
    id: 6,
    image: `${BASE}/images/projects/project-6.png`,
    category: "開発者ツール",
    year: "2024",
    title: "通信制大学 星槎大学",
    description:
      "星槎大学は、日本で通信制の大学として、「共生」を重視しながら、教育・福祉・スポーツ身体表現・グローカルコミュニケーションなどの学問分野を提供しています。",
    tech: ["Vue.js", "Laravel", "MySQL", "WebSocket", "Chart.js", "Docker"],
  },
  {
    id: 7,
    image: `${BASE}/images/projects/project-7.png`,
    category: "開発者ツール",
    year: "2024",
    title: "公式サイト",
    description:
      "「Lie:verse Liars（リーバース・ライアーズ）」は、嘘と真実が入れ替わった世界を舞台に、小説、商品展開、ラジオ番組などを扱うマルチメディアキャラクター作品の公式サイトです。",
    tech: ["Vue.js", "Nuxt.js", "MySQL", "Tailwind CSS", "Vercel", "AWS"],
  },
  {
    id: 8,
    image: `${BASE}/images/projects/project-8.png`,
    category: "開発者ツール",
    year: "2025",
    title: "マグノリア･ホワイト",
    description:
      "MAGNOLIA WHITE（マグノリア・ホワイト）は、ニューヨーク・ロンドン・パリなどの最旬インポートウエディングドレスをセレクトし、人生の特別な日のためにお客様に合ったコーディネートを提案するインポートドレスサロンです。",
    tech: ["Wordpress", "PHP", "MySQL", "AWS", "Nginx", "SSL"],
  },
  {
    id: 9,
    image: `${BASE}/images/projects/project-9.png`,
    category: "開発者ツール",
    year: "2025",
    title: "タップル –恋活･婚活マッチングアプリ【公式】",
    description:
      "「タップル」は、趣味や関心をきっかけに出会いたい人々をつなげる、サイバーエージェント運営の人気マッチングアプリで、本人確認や24時間365日のサポートなど安心・安全機能が備わっています。",
    tech: ["Wordpress", "PHP", "MySQL", "AWS", "Nginx", "SSL"],
  },
];

export const projectCategories = [
  { name: "ECサイト", nameEn: "Online shopping platforms and digital commerce solutions", count: 1 },
  { name: "生産性ツール", nameEn: "Tools to enhance workflow and team collaboration", count: 1 },
  { name: "モバイルアプリ", nameEn: "Native and cross-platform mobile applications", count: 1 },
  { name: "教育", nameEn: "Learning platforms and educational technology", count: 1 },
  { name: "文化遺産", nameEn: "Digital preservation and cultural documentation", count: 1 },
  { name: "開発者ツール", nameEn: "Tools and utilities for software development", count: 1 },
];

export type SkillItem = {
  name: string;
  level: string;
  description: string;
  years: number;
  projects: number;
  proficiency: number;
  certified?: boolean;
};

export type SkillCategory = {
  title: string;
  description: string;
  skills: SkillItem[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "フロントエンド開発",
    description: "美しくレスポンシブなユーザーインターフェースの作成",
    skills: [
      { name: "React", level: "エキスパート", description: "フックとコンテキストを使用した複雑なシングルページアプリケーションの構築", years: 4, projects: 15, proficiency: 90, certified: true },
      { name: "Vue.js", level: "上級", description: "ユーザーインターフェース構築のためのプログレッシブフレームワーク", years: 3, projects: 8, proficiency: 90 },
      { name: "TypeScript", level: "エキスパート", description: "型安全なJavaScript開発", years: 3, projects: 20, proficiency: 90, certified: true },
      { name: "Next.js", level: "上級", description: "SSR対応のフルスタックReactフレームワーク", years: 2, projects: 5, proficiency: 90 },
      { name: "Tailwind CSS", level: "エキスパート", description: "ユーティリティファーストのCSSフレームワーク", years: 2, projects: 12, proficiency: 90 },
      { name: "Sass/SCSS", level: "上級", description: "スケーラブルなスタイルのためのCSSプリプロセッサ", years: 4, projects: 18, proficiency: 90 },
    ],
  },
  {
    title: "バックエンド開発",
    description: "堅牢なサーバーサイドアプリケーションとAPIの構築",
    skills: [
      { name: "Node.js", level: "エキスパート", description: "サーバーサイド開発のためのJavaScriptランタイム", years: 4, projects: 15, proficiency: 90, certified: true },
      { name: "Express.js", level: "エキスパート", description: "Node.jsのためのWebアプリケーションフレームワーク", years: 4, projects: 12, proficiency: 90 },
      { name: "Laravel", level: "上級", description: "PHP Webアプリケーションフレームワーク", years: 3, projects: 8, proficiency: 90, certified: true },
      { name: "Python", level: "中級", description: "Webとデータのための汎用プログラミング言語", years: 2, projects: 5, proficiency: 75, certified: true },
      { name: "PostgreSQL", level: "上級", description: "高度なオープンソースリレーショナルデータベース", years: 3, projects: 10, proficiency: 90 },
      { name: "MongoDB", level: "中級", description: "NoSQLドキュメントデータベース", years: 2, projects: 6, proficiency: 75, certified: true },
    ],
  },
  {
    title: "DevOps・クラウド",
    description: "デプロイメント、監視、インフラストラクチャ管理",
    skills: [
      { name: "Docker", level: "上級", description: "アプリケーションのためのコンテナ化プラットフォーム", years: 3, projects: 12, proficiency: 75, certified: true },
      { name: "Kubernetes", level: "中級", description: "コンテナオーケストレーションプラットフォーム", years: 2, projects: 4, proficiency: 75 },
      { name: "AWS", level: "中級", description: "Amazon Web Servicesクラウドプラットフォーム", years: 2, projects: 8, proficiency: 75, certified: true },
      { name: "CI/CD", level: "上級", description: "継続的インテグレーションとデプロイメント", years: 3, projects: 15, proficiency: 60 },
      { name: "Linux", level: "中級", description: "Unixライクなオペレーティングシステムの管理", years: 3, projects: 10, proficiency: 75 },
      { name: "Nginx", level: "中級", description: "高性能Webサーバーとリバースプロキシ", years: 2, projects: 8, proficiency: 75 },
    ],
  },
  {
    title: "AI・統合",
    description: "人工知能とサードパーティ統合",
    skills: [
      { name: "OpenAI API", level: "中級", description: "AI機能のためのGPTモデルとの統合", years: 1, projects: 3, proficiency: 90 },
      { name: "機械学習初級", level: "初級", description: "基本的な機械学習の概念と実装", years: 1, projects: 2, proficiency: 75 },
      { name: "REST API", level: "エキスパート", description: "RESTful Webサービスの設計と利用", years: 4, projects: 20, proficiency: 90 },
      { name: "GraphQL", level: "中級", description: "APIのためのクエリ言語", years: 2, projects: 4, proficiency: 75 },
      { name: "WebSocket", level: "上級", description: "リアルタイム通信プロトコル", years: 3, projects: 6, proficiency: 75 },
      { name: "決済ゲートウェイ", level: "中級", description: "Stripe、PayPal、その他の決済統合", years: 2, projects: 5, proficiency: 60 },
    ],
  },
];

export const skillLevels = [
  { level: "エキスパート", desc: "5年以上の経験、プロジェクトをリードし他者をメンターできる", pct: 90 },
  { level: "上級", desc: "3-4年の経験、複雑なタスクを独立して作業できる", pct: 75 },
  { level: "中級", desc: "1-2年の経験、ほとんどのタスクでガイダンスと共に作業できる", pct: 60 },
  { level: "初級", desc: "1年未満の経験、学習と成長中", pct: 30 },
];

export const learningGoals = [
  { name: "Rust", desc: "システムプログラミングとパフォーマンス重視のアプリケーション", target: "2024 Q3" },
  { name: "WebAssembly", desc: "高性能Webアプリケーション", target: "2024 Q4" },
  { name: "高度なAI/ML", desc: "インテリジェントアプリケーションと自動化の構築", target: "2025 Q1" },
];

export const awards = [
  {
    title: "テックイノベーション賞2023",
    org: "日本ソフトウェア開発協会",
    date: "2023-12",
    desc: "イノベーションマイクロサービスアーキテクチャを活用したECプラットフォーム開発への優れた貢献を評価",
    project: "オーシャンフローECプラットフォーム",
    impact: "プラットフォームは50,000人以上のユーザーに99.9%の稼働率でサービス提供",
    rating: 5.0,
  },
  {
    title: "ライジングスター開発者2022",
    org: "東京テックコミュニティ",
    date: "2022-09",
    desc: "表彰地域の開発者コミュニティへの優れた成長と貢献を評価",
    project: "コミュニティ貢献とオープンソース活動",
    impact: "10人以上のジュニア開発者をメンターし、15以上のオープンソースプロジェクトに貢献",
    rating: 5.0,
  },
  {
    title: "ベストUI/UXデザイン 2021",
    org: "日本Webデザイン賞",
    date: "2021-11",
    desc: "桜天気アプリで日本の美学とモダンなUXを組み合わせた革新的なデザインアプローチを評価",
    project: "桜天気アプリ",
    impact: "アプリは「お気に入りアプリ」セクションで紹介され、4.8/5の評価を獲得",
    rating: 5.0,
  },
];

export const certifications = [
  {
    name: "AWSソリューションアーキテクトアソシエイト",
    issuer: "Amazon Web Services",
    desc: "AWSプラットフォームでの分散システム設計",
    obtained: "2023-08",
    expiry: "2026-08",
    topics: ["クラウドアーキテクチャ", "AWSサービス", "セキュリティ", "コスト最適化"],
    verifyUrl: "https://aws.amazon.com/verification/",
  },
  {
    name: "React開発者認定",
    issuer: "Meta",
    desc: "高度なReact開発スキルとベストプラクティス",
    obtained: "2023-03",
    expiry: "2025-03",
    topics: ["React Hooks", "Context API", "パフォーマンス最適化", "テスト"],
    verifyUrl: "https://meta.com/verification/",
  },
  {
    name: "Docker認定アソシエイト",
    issuer: "Docker Inc.",
    desc: "コンテナ化とオーケストレーションの専門知識",
    obtained: "2022-11",
    expiry: "2024-11",
    topics: ["Dockerコンテナ", "セキュリティ", "マルチステージビルド", "Docker Compose"],
    verifyUrl: "https://docker.com/verification/",
  },
  {
    name: "TypeScript基礎",
    issuer: "Microsoft",
    desc: "型安全なJavaScript開発",
    obtained: "2022-06",
    expiry: "No expiry",
    topics: ["TypeScript型システム", "インターフェース", "ジェネリクス"],
    verifyUrl: "https://microsoft.com/verification/",
  },
  {
    name: "Laravel開発者認定",
    issuer: "Laravel LLC",
    desc: "PHP Webアプリケーションフレームワークの専門知識",
    obtained: "2021-12",
    expiry: "2024-12",
    topics: ["Laravel", "Eloquent ORM", "Bladeテンプレート", "Artisan CLI"],
    verifyUrl: "https://laravel.com/verification/",
  },
];

export const testimonials = [
  {
    image: `${BASE}/testimonials/2.jpg`,
    quote:
      "達也は技術的卓越性と文化的感受性をすべてのプロジェクトに持ち込む優秀な開発者です。日本のビジネス慣行とモダンな開発手法を結びつける能力は本当に素晴らしいです。マイクロサービス移行をリードし、すべての期待を上回る結果を提供しました。",
    name: "水谷真夏",
    role: "Project Manager",
    company: "JLL Japan",
    date: "2025-05",
    roleJa: "プロジェクトマネージャー",
    qualities: ["リーダーシップ", "技術的卓越性", "React/Next.js"],
    project: "オーシャンフローECプラットフォーム移行",
    linkedIn: "https://www.linkedin.com/in/manatsumizutani/",
  },
  {
    image: `${BASE}/testimonials/1.jpg`,
    quote:
      "達也と働くのは楽しい経験でした。彼の細部への注意とユーザーエクスペリエンスは素晴らしいです。クライアントのビジョンを美しく機能的なアプリケーションに変え、期待を上回りました。複雑な技術概念を簡単な言葉で説明するコミュニケーションスキルと能力により、コラボレーションがスムーズでした。",
    name: "Marica Labrou",
    role: "CEO",
    company: "DEPA Commercial S.A",
    date: "2022-08",
    roleJa: "CEO",
    qualities: ["ユーザーエクスペリエンス", "コミュニケーション", "問題解決"],
    project: "禅タスクプロジェクト管理ツール",
    linkedIn: "https://www.linkedin.com/in/maricalabrou/",
  },
  {
    image: `${BASE}/testimonials/4.jpg`,
    quote:
      "達也は私のキャリアを始めた時のメンターでした。彼の忍耐力、知識、そして教える能力に感謝してもしきれません。彼は私をジュニア開発者から自信のあるプロフェッショナルに成長させてくれました。技術スキルだけでなく、クリーンコード、チームワーク、継続的学習の重要性も教えてくれました。",
    name: "ユユアン(ベラ) バイ",
    role: "Project Manager",
    company: "コネクレーン",
    date: "2021-12",
    roleJa: "プロジェクトマネージャー",
    qualities: ["メンタリング", "忍耐力", "知識共有"],
    project: "フロントエンド開発トレーニング",
    linkedIn: "https://www.linkedin.com/in/yuyuan-bai-91427524a/",
  },
  {
    image: `${BASE}/testimonials/3.jpg`,
    quote:
      "達也は私が今まで見た中で最も美しい天気アプリを作りました。彼の日本の美学への理解と文化的詳細への注意は信じられないほどです。アプリは完璧に動作するだけでなく、デザインを通じてストーリーを語ります。ユーザーはそれを愛し、私たちの最も成功したモバイルアプリケーションになりました。",
    name: "永見俊成",
    role: "Project Manager",
    company: "トルーナ",
    date: "2022-03",
    roleJa: "プロジェクトマネージャー",
    qualities: ["デザイン卓越性", "文化的理解", "ユーザー重視"],
    project: "桜天気アプリ開発",
    linkedIn: "https://www.linkedin.com/in/toshinari-nagami-678ba627/",
  },
  {
    image: `${BASE}/testimonials/5.jpg`,
    quote:
      "達也の日本の文化的メタファーとプログラミング教育を組み合わせる革新的なアプローチは素晴らしいです。彼は複雑な概念をアクセス可能で魅力的にするユニークな学習体験を作りました。彼の創造性と技術スキルは彼を貴重なチームメンバーにしています。",
    name: "関治之",
    role: "リード開発者",
    company: "デジタル庁/ Digital Agency",
    date: "2024-01",
    roleJa: "協力者",
    qualities: ["イノベーション", "創造性", "教育デザイン"],
    project: "デジタル庁/ Digital Agency",
    linkedIn: "https://www.linkedin.com/in/halsk/",
  },
  {
    image: `${BASE}/testimonials/6.jpg`,
    quote:
      "和紙デジタルアーカイブプロジェクトは傑作でした。達也の日本の伝統文化への敬意と技術的専門知識が、遺産とテクノロジーの完璧な架け橋を作りました。彼が開発した3Dスキャニング技術は、私が今まで見たことのない方法で伝統的な紙の繊細な質感を捉えています。",
    name: "Dennis Ilic",
    role: "Electrifying Japan and APAC",
    company: "東京国立博物館",
    date: "2021-09",
    roleJa: "クライアント",
    qualities: ["文化的敬意", "技術革新", "遺産保存"],
    project: "和紙デジタルアーカイブ",
    linkedIn: "https://www.linkedin.com/in/dennis-ilic-714140115/",
  },
];

export const contact = {
  headline: "つながって、あなたの次のプロジェクトについて話し合いましょう",
  formTitle: "メッセージを送信",
  subjectOptions: [
    "プロジェクトのご相談",
    "コラボレーション",
    "講演依頼",
    "メンタリング",
    "その他",
  ],
  budgetOptions: [
    "100万円未満",
    "100万円 - 250万円",
    "250万円 - 500万円",
    "500万円 - 1000万円",
    "1000万円以上",
    "相談したい",
  ],
  timelineOptions: [
    "できるだけ早く",
    "1ヶ月以内",
    "2-3ヶ月",
    "3-6ヶ月",
    "6ヶ月以上",
    "柔軟",
  ],
  info: {
    email: "tatsuyakuroda4@gmail.com",
    emailDesc: "プロジェクトのご相談と一般的な質問用",
    phone: "+81 90-5945-0137",
    phoneHours: "月曜日-金曜日、午前9時-午後6時（日本時間）",
    location: "Tokyo, Japan",
    locationDesc: "東京在住、リモートワーク対応",
    timezone: "JST (UTC+9)",
    timezoneDesc: "日本標準時",
  },
  social: [
    { name: "GitHub", handle: "@tatsuyakuroda", url: "https://github.com/typpexx" },
    { name: "Telegram", handle: "@username", url: "https://t.me/username" },
    { name: "X", handle: "@username", url: "https://x.com/username" },
    { name: "LinkedIn", handle: "たつやくろだ", url: "https://www.linkedin.com/in/kuroda-tatsuya-508276385/" },
  ],
  availability: {
    status: "利用可能",
    desc: "現在、新しいプロジェクトとコラボレーションを受け付けています",
    response: "24時間以内",
    hours: "月曜日-金曜日、午前9時-午後6時（日本時間）",
  },
};
