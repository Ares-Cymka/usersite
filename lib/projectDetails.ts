export type ProjectDetail = {
  overlayText?: string;
  status: string;
  duration: string;
  keyFeatures: string[];
  challenges: string;
  solutions: string;
  achievements?: string[];
  liveUrl?: string;
};

const BASE = "https://stealthemoon0331-tatusya.vercel.app";

function projectImageUrl(i: number) {
  return `${BASE}/images/projects/project-${i}.png`;
}

export const projectDetailsJa: (ProjectDetail & { headerImage?: string })[] = [
  {
    headerImage: projectImageUrl(1),
    overlayText: "問いを深め、\n技術を繋ぎ、\n明日を拓く",
    status: "完了",
    duration: "6ヶ月",
    keyFeatures: [
      "リアルタイム在庫管理",
      "多言語対応（日/英/中）",
      "決済ゲートウェイ連携",
      "AIによる求人レコメンド",
      "AIによる商品レコメンド",
      "モバイルレスポンシブ対応",
      "分析付き管理ダッシュボード",
    ],
    challenges:
      "マイクロサービス間でリアルタイム同期を実現しつつデータ整合性を保つこと、およびAIによる求人レコメンデーションの実装が課題でした。",
    solutions:
      "Apache Kafkaを用いたイベント駆動アーキテクチャでメッセージキューと結果的整合性を実現し、AIによる求人レコメンデーションを組み込みました。",
  },
  {
    headerImage: projectImageUrl(2),
    status: "完了",
    duration: "4ヶ月",
    keyFeatures: [
      "ドラッグ&ドロップ対応のカンバンボード",
      "マインドフルネスリマインダー",
      "チームチャット統合",
      "リアルタイムコラボレーション",
      "ポモドーロテクニックによる時間追跡",
      "カスタマイズ可能なテーマ",
    ],
    challenges:
      "強力なプロジェクト管理機能を維持しながら、集中を促進する直感的なインターフェースの作成",
    solutions:
      "段階的開示とミニマルデザインの原則を適用し、慎重に設計されたユーザーフローを実装",
    achievements: [
      "85%のユーザー満足度",
      "プロジェクト完了時間30%短縮",
      "チーム生産性60%向上",
      "500人以上のアクティブユーザー",
    ],
  },
  {
    headerImage: projectImageUrl(3),
    status: "完了",
    duration: "3ヶ月",
    keyFeatures: [
      "リアルタイム在庫追跡",
      "多言語対応（英語/日本語/中国語）",
      "決済ゲートウェイ統合",
      "AI搭載ジョブレコメンデーション",
      "モバイルレスポンシブデザイン",
      "分析機能付き管理ダッシュボード",
    ],
    challenges:
      "パフォーマンスを維持しながら、異なるデバイスで動作するスムーズなアニメーションの作成",
    solutions:
      "最適化されたJSONファイルでLottieアニメーションを使用し、デバイス固有のパフォーマンススケーリングを実装",
    achievements: [
      "App Store評価4.8/5",
      "「お気に入りアプリ」セクションで紹介",
      "50,000回以上のダウンロード",
      "95%のユーザー継続率",
    ],
  },
  {
    headerImage: projectImageUrl(4),
    overlayText: "楽しみを、味わう。",
    status: "進行中",
    duration: "1ヶ月",
    keyFeatures: [
      "インタラクティブなコーディングチャレンジ",
      "進捗追跡と実績システム",
      "AI搭載コード提案",
      "日本の文化的学習メタファー",
      "ピアコードレビューシステム",
      "多言語対応",
    ],
    challenges:
      "プログラミング概念と日本文化を結びつける魅力的な教育コンテンツの作成",
    solutions:
      "プログラミング概念を説明するために日本の武道の原則を使用するユニークなカリキュラムを開発",
    achievements: [
      "500人以上のアクティブラーナー",
      "TechCrunch Japanで紹介",
      "90%のコース完了率",
      "3つのコーディングブートキャンプとのパートナーシップ",
    ],
  },
  {
    headerImage: projectImageUrl(5),
    status: "進行中",
    duration: "1ヶ月",
    keyFeatures: [
      "専門的なダンス・音楽教育",
      "海外留学・交流プログラム",
      "舞台・ステージ制作を通じた実践的な経験",
      "最新設備を備えたスタジオ・施設",
      "現役で活躍する講師・業界プロによる指導",
      "多ジャンル対応のダンスカリキュラム（ヒップホップ、ジャズ、バレエなど）",
    ],
    challenges:
      "学生と業界プロフェッショナルをつなげ、総合的な学習体験を提供するプラットフォームの作成",
    solutions:
      "学生と業界プロフェッショナルをつなぐオンラインプラットフォームを構築し、実践的なワークショップ・オーディション機会を提供",
    achievements: [
      "1,000以上の学生が在籍",
      "5つの芸術団体とのパートナーシップ",
      "20以上の教育機関で採用",
      "業界プロとの連携プログラム認定",
    ],
  },
  {
    headerImage: projectImageUrl(6),
    status: "進行中",
    duration: "4ヶ月",
    keyFeatures: [
      "視覚的なバグライフサイクル管理",
      "シームレスなチームコラボレーションツール",
      "自動テストの統合",
      "金継ぎから着想を得たUIデザイン",
      "高度なバグパターン分析",
      "リアルタイムのパフォーマンス影響追跡",
    ],
    challenges:
      "技術的精度と効率性を維持しながら、バグ修正に対するポジティブなマインドセットを作成",
    solutions:
      "バグ修正を創造的な問題解決プロセスとして再構築するために、ゲーミフィケーション要素とポジティブ強化を実装",
    achievements: [
      "バグ解決時間40%短縮",
      "バグ再発率60%削減",
      "85%の開発者満足度",
      "10以上の開発チームで採用",
    ],
  },
  {
    headerImage: projectImageUrl(7),
    status: "進行中",
    duration: "4ヶ月",
    keyFeatures: [
      "視覚的なバグライフサイクル管理",
      "シームレスなチームコラボレーションツール",
      "自動テスト統合",
      "金継ぎをモチーフにしたUIデザイン",
      "高度なバグパターン分析",
      "リアルタイムでのパフォーマンス影響追跡",
    ],
    challenges:
      "技術的精度と効率性を維持しながら、バグ修正に対するポジティブなマインドセットを作成",
    solutions:
      "バグ修正を創造的な問題解決プロセスとして再構築するために、ゲーミフィケーション要素とポジティブ強化を実装",
    achievements: [
      "バグ解決時間40%短縮",
      "バグ再発率60%削減",
      "85%の開発者満足度",
      "10以上の開発チームで採用",
    ],
  },
  {
    headerImage: projectImageUrl(8),
    status: "進行中",
    duration: "4ヶ月",
    keyFeatures: [
      "視覚的なバグライフサイクル管理",
      "シームレスなチームコラボレーションツール",
      "自動テスト統合",
      "金継ぎをモチーフにしたUIデザイン",
      "高度なバグパターン分析",
      "リアルタイムのパフォーマンス影響追跡",
    ],
    challenges:
      "技術的精度と効率性を維持しながら、バグ修正に対するポジティブなマインドセットを作成",
    solutions:
      "バグ修正を創造的な問題解決プロセスとして再構築するために、ゲーミフィケーション要素とポジティブ強化を実装",
    achievements: [
      "バグ解決時間40%短縮",
      "バグ再発率60%削減",
      "85%の開発者満足度",
      "10以上の開発チームで採用",
    ],
  },
  {
    headerImage: projectImageUrl(9),
    status: "進行中",
    duration: "4ヶ月",
    keyFeatures: [
      "視覚的なバグライフサイクル管理",
      "シームレスなチームコラボレーションツール",
      "自動テスト統合",
      "金継ぎにインスパイアされたUIデザイン",
      "高度なバグパターン分析",
      "リアルタイムのパフォーマンス影響追跡",
    ],
    challenges:
      "技術的精度と効率性を維持しながら、バグ修正に対するポジティブなマインドセットを作成",
    solutions:
      "バグ修正を創造的な問題解決プロセスとして再構築するために、ゲーミフィケーション要素とポジティブ強化を実装",
    achievements: [
      "バグ解決時間40%短縮",
      "バグ再発率60%削減",
      "85%の開発者満足度",
      "10以上の開発チームで採用",
    ],
  },
];

export const projectDetailsEn: (ProjectDetail & { headerImage?: string })[] = [
  {
    headerImage: projectImageUrl(1),
    overlayText: "Deepen inquiries,\nConnect technology,\nOpen up the future.",
    status: "Completed",
    duration: "6 months",
    keyFeatures: [
      "Real-time inventory tracking",
      "Multi-language support (EN/JP/CN)",
      "Payment gateway integration",
      "AI-powered job recommendations",
      "AI-powered product recommendations",
      "Mobile-responsive design",
      "Admin dashboard with analytics",
    ],
    challenges:
      "Implementing real-time synchronization across microservices while maintaining data consistency, and AI-powered job recommendations.",
    solutions:
      "Used event-driven architecture with Apache Kafka for reliable message queuing and eventual consistency, and AI-powered job recommendations.",
  },
  {
    headerImage: projectImageUrl(2),
    status: "Completed",
    duration: "4 months",
    keyFeatures: [
      "Drag & drop Kanban board",
      "Mindfulness reminders",
      "Team chat integration",
      "Real-time collaboration",
      "Pomodoro technique time tracking",
      "Customizable themes",
    ],
    challenges:
      "Creating an intuitive interface that promotes focus while maintaining powerful project management functions.",
    solutions:
      "Implemented carefully designed user flows, applying principles of progressive disclosure and minimalist design.",
    achievements: [
      "85% user satisfaction",
      "30% reduction in project completion time",
      "60% increase in team productivity",
      "500+ active users",
    ],
  },
  {
    headerImage: projectImageUrl(3),
    status: "Completed",
    duration: "3 months",
    keyFeatures: [
      "Real-time inventory tracking",
      "Multilingual support (EN/JP/CN)",
      "Payment gateway integration",
      "AI-powered job recommendations",
      "Mobile-responsive design",
      "Analytics-enabled management dashboard",
    ],
    challenges:
      "Creating smooth animations that work on different devices while maintaining performance.",
    solutions:
      "Implemented device-specific performance scaling using Lottie animations with optimized JSON files.",
    achievements: [
      "App Store rating 4.8/5",
      "Featured in 'Favorite Apps' section",
      "Over 50,000 downloads",
      "95% user retention rate",
    ],
  },
  {
    headerImage: projectImageUrl(4),
    overlayText: "Savor the joy.",
    status: "In Progress",
    duration: "1 month",
    keyFeatures: [
      "Interactive coding challenges",
      "Progress tracking and achievement system",
      "AI-powered code suggestions",
      "Japanese cultural learning metaphors",
      "Peer code review system",
      "Multilingual support",
    ],
    challenges:
      "Creation of engaging educational content that connects programming concepts with Japanese culture.",
    solutions:
      "Development of a unique curriculum using the principles of Japanese martial arts to explain programming concepts.",
    achievements: [
      "Over 500 active learners",
      "Featured on TechCrunch Japan",
      "90% course completion rate",
      "Partnership with 3 coding bootcamps",
    ],
  },
  {
    headerImage: projectImageUrl(5),
    status: "In Progress",
    duration: "1 month",
    keyFeatures: [
      "Specialized dance and music education",
      "Overseas study and exchange programs",
      "Practical experience through stage production",
      "Studios and facilities with the latest equipment",
      "Guidance by active instructors and industry professionals",
      "Multi-genre dance curriculum (hip-hop, jazz, ballet, etc.)",
    ],
    challenges:
      "Creating a platform that connects students with industry professionals and provides comprehensive learning experiences.",
    solutions:
      "Built an online platform connecting students with industry professionals, offering practical workshops and audition opportunities.",
    achievements: [
      "Over 1,000 enrolled students",
      "Partnership with 5 arts organizations",
      "Adopted by over 20 educational institutions",
      "Industry-recognized partnership program certification",
    ],
  },
  {
    headerImage: projectImageUrl(6),
    status: "In Progress",
    duration: "4 months",
    keyFeatures: [
      "Visual bug lifecycle management",
      "Seamless team collaboration tool",
      "Automated test integration",
      "Kintsugi-inspired UI design",
      "Advanced bug pattern analysis",
      "Real-time performance impact tracking",
    ],
    challenges:
      "Creating a positive mindset for bug fixing while maintaining technical accuracy and efficiency.",
    solutions:
      "Implemented gamification elements and positive reinforcement to reconstruct bug fixing as a creative problem-solving process.",
    achievements: [
      "40% reduction in bug resolution time",
      "60% reduction in bug recurrence rate",
      "85% developer satisfaction",
      "Adopted by over 10 development teams",
    ],
  },
  {
    headerImage: projectImageUrl(7),
    status: "In Progress",
    duration: "4 months",
    keyFeatures: [
      "Visual bug lifecycle management",
      "Seamless team collaboration tool",
      "Automated test integration",
      "Kintsugi-inspired UI design",
      "Advanced bug pattern analysis",
      "Real-time performance impact tracking",
    ],
    challenges:
      "Creating a positive mindset for bug fixing while maintaining technical accuracy and efficiency.",
    solutions:
      "Implemented gamification elements and positive reinforcement to reconstruct bug fixing as a creative problem-solving process.",
    achievements: [
      "40% reduction in bug resolution time",
      "60% reduction in bug recurrence rate",
      "85% developer satisfaction",
      "Adopted by over 10 development teams",
    ],
  },
  {
    headerImage: projectImageUrl(8),
    status: "In Progress",
    duration: "4 months",
    keyFeatures: [
      "Visual bug lifecycle management",
      "Seamless team collaboration tool",
      "Automated test integration",
      "Kintsugi-inspired UI design",
      "Advanced bug pattern analysis",
      "Real-time performance impact tracking",
    ],
    challenges:
      "Creating a positive mindset for bug fixing while maintaining technical accuracy and efficiency.",
    solutions:
      "Implemented gamification elements and positive reinforcement to reconstruct bug fixing as a creative problem-solving process.",
    achievements: [
      "40% reduction in bug resolution time",
      "60% reduction in bug recurrence rate",
      "85% developer satisfaction",
      "Adopted by over 10 development teams",
    ],
  },
  {
    headerImage: projectImageUrl(9),
    status: "In Progress",
    duration: "4 months",
    keyFeatures: [
      "Visual bug lifecycle management",
      "Seamless team collaboration tool",
      "Automated test integration",
      "Kintsugi-inspired UI design",
      "Advanced bug pattern analysis",
      "Real-time performance impact tracking",
    ],
    challenges:
      "Creating a positive mindset for bug fixing while maintaining technical accuracy and efficiency.",
    solutions:
      "Implemented gamification elements and positive reinforcement to reconstruct bug fixing as a creative problem-solving process.",
    achievements: [
      "40% reduction in bug resolution time",
      "60% reduction in bug recurrence rate",
      "85% developer satisfaction",
      "Adopted by over 10 development teams",
    ],
  },
];
