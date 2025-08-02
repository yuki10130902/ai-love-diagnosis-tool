import React, { useState } from 'react';
import { 
  Heart, RotateCcw, Bot, Zap, Brain, Star, TrendingUp,
  Target, Play, Shield, Sparkles, Eye, Moon, Compass, BarChart3, ArrowLeft,
  MessageCircle, Calendar, Users, Lightbulb, AlertTriangle
} from 'lucide-react';

const AILoveDiagnosticTool = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [aiAnalyzing, setAiAnalyzing] = useState(false);
  const [currentScreen, setCurrentScreen] = useState('intro');

  const questions = [
    {
      id: 1,
      text: "気になる人とマッチした時、あなたの反応は？",
      aiContext: "初期アプローチの分析",
      options: [
        { value: 'A', text: "すぐにメッセージを送る", type: 'ピュア・ハート型' },
        { value: 'B', text: "相手のプロフィールを詳しく分析してから連絡", type: 'アナライザー型' },
        { value: 'C', text: "しばらく様子を見る", type: 'ガーディアン型' },
        { value: 'D', text: "相手からの連絡を待つ", type: 'ドリーマー型' },
        { value: 'E', text: "複数の人と同時並行でやり取り", type: 'フリーダム型' },
        { value: 'F', text: "いいねした理由を整理してから連絡", type: 'ロジック型' }
      ]
    },
    {
      id: 2,
      text: "SNSで恋人の投稿に知らない異性がコメントしていたら？",
      aiContext: "嫉妬・信頼度の分析",
      options: [
        { value: 'A', text: "気になって直接聞いてしまう", type: 'ピュア・ハート型' },
        { value: 'B', text: "その人のプロフィールをこっそりチェック", type: 'アナライザー型' },
        { value: 'C', text: "恋人を信じて何もしない", type: 'ガーディアン型' },
        { value: 'D', text: "不安になるけど我慢する", type: 'ドリーマー型' },
        { value: 'E', text: "気にならない、自分も自由にする", type: 'フリーダム型' },
        { value: 'F', text: "関係性を冷静に判断する", type: 'ロジック型' }
      ]
    },
    {
      id: 3,
      text: "デートの計画を立てる時、あなたのスタイルは？",
      aiContext: "計画性・配慮の分析",
      options: [
        { value: 'A', text: "相手の好みを最優先に考える", type: 'ピュア・ハート型' },
        { value: 'B', text: "レビューサイトで評判を調べてから決める", type: 'アナライザー型' },
        { value: 'C', text: "いつものお気に入りの場所を選ぶ", type: 'ガーディアン型' },
        { value: 'D', text: "相手に決めてもらう", type: 'ドリーマー型' },
        { value: 'E', text: "その日の気分で決める", type: 'フリーダム型' },
        { value: 'F', text: "予算・アクセス・時間を総合的に判断", type: 'ロジック型' }
      ]
    },
    {
      id: 4,
      text: "恋人との連絡頻度で理想的なのは？",
      aiContext: "コミュニケーション傾向",
      options: [
        { value: 'A', text: "毎日こまめに連絡を取り合いたい", type: 'ピュア・ハート型' },
        { value: 'B', text: "相手の生活パターンに合わせて調整", type: 'アナライザー型' },
        { value: 'C', text: "安定したペースで適度に", type: 'ガーディアン型' },
        { value: 'D', text: "相手から連絡をもらえると嬉しい", type: 'ドリーマー型' },
        { value: 'E', text: "お互い自由なタイミングで", type: 'フリーダム型' },
        { value: 'F', text: "必要な時に効率的に", type: 'ロジック型' }
      ]
    },
    {
      id: 5,
      text: "将来のパートナーに最も求めるものは？",
      aiContext: "価値観・優先順位",
      options: [
        { value: 'A', text: "愛情深さと思いやり", type: 'ピュア・ハート型' },
        { value: 'B', text: "価値観の一致", type: 'アナライザー型' },
        { value: 'C', text: "信頼関係と安定感", type: 'ガーディアン型' },
        { value: 'D', text: "運命的なつながり", type: 'ドリーマー型' },
        { value: 'E', text: "お互いの自由を尊重する関係", type: 'フリーダム型' },
        { value: 'F', text: "現実的な将来設計", type: 'ロジック型' }
      ]
    },
    {
      id: 6,
      text: "恋愛で辛い時期があった時の乗り越え方は？",
      aiContext: "ストレス対処法",
      options: [
        { value: 'A', text: "友達や家族に相談する", type: 'ピュア・ハート型' },
        { value: 'B', text: "恋愛本や記事を読んで解決策を探す", type: 'アナライザー型' },
        { value: 'C', text: "時間が解決してくれると信じて待つ", type: 'ガーディアン型' },
        { value: 'D', text: "一人で抱え込んでしまう", type: 'ドリーマー型' },
        { value: 'E', text: "新しい出会いを求めて行動する", type: 'フリーダム型' },
        { value: 'F', text: "問題を整理して具体的な対策を立てる", type: 'ロジック型' }
      ]
    },
    {
      id: 7,
      text: "理想のデートプランをAIが提案するとしたら？",
      aiContext: "デート志向性の分析",
      options: [
        { value: 'A', text: "感情を重視したロマンチックプラン", type: 'ピュア・ハート型' },
        { value: 'B', text: "共通の趣味を深掘りできるプラン", type: 'アナライザー型' },
        { value: 'C', text: "安心できる定番の王道プラン", type: 'ガーディアン型' },
        { value: 'D', text: "映画のようなドラマチックプラン", type: 'ドリーマー型' },
        { value: 'E', text: "自由度の高い冒険的プラン", type: 'フリーダム型' },
        { value: 'F', text: "効率的で合理的なプラン", type: 'ロジック型' }
      ]
    },
    {
      id: 8,
      text: "理想の恋愛のゴールは？",
      aiContext: "将来ビジョン",
      options: [
        { value: 'A', text: "愛に満たされた日々を送ること", type: 'ピュア・ハート型' },
        { value: 'B', text: "互いを理解し成長し合える関係", type: 'アナライザー型' },
        { value: 'C', text: "安心できる家庭を築くこと", type: 'ガーディアン型' },
        { value: 'D', text: "映画のような美しい愛の物語", type: 'ドリーマー型' },
        { value: 'E', text: "束縛のない自由な愛情関係", type: 'フリーダム型' },
        { value: 'F', text: "現実的で持続可能なパートナーシップ", type: 'ロジック型' }
      ]
    }
  ];

  const typeDetails = {
    'ピュア・ハート型': {
      title: 'ピュア・ハート型',
      icon: Heart,
      color: 'bg-pink-50 border-pink-200',
      textColor: 'text-pink-800',
      gradientFrom: 'from-pink-500',
      gradientTo: 'to-rose-500',
      description: '素直で愛情深い、感情を大切にするタイプ',
      percentage: '28%',
      traits: [
        '相手への愛情表現が自然で豊か',
        '直感的で感情に素直に行動する',
        '相手を思いやる気持ちが人一倍強い',
        '愛情確認や甘い時間を大切にする',
        '感受性が高く、相手の気持ちに敏感',
        'ロマンチックなサプライズを好む',
        '相手との深い絆を何より重視する'
      ],
      detailedAdvice: {
        loveStyle: {
          title: "恋愛スタイル",
          content: 
"あなたは感情を軸とした直感的な恋愛をします。「この人だ」と思ったら一途に愛し続ける傾向があり、相手への愛情表現も自然で豊かです。愛している気持ちを言葉や行動で積極的に示し、相手からも同じような愛情確認を求める傾向があります。記念日や特別な瞬間を大切にし、二人だけの思い出作りに情熱を注ぎます。"
        },
        communication: {
          title: "コミュニケーション",
          content: 
"感情的なつながりを重視し、相手の気持ちを深く理解しようとします。「今日はどんな気分？」「何か悩みがある？」といった心情を確認する会話を好み、相手の感情の変化に敏感に反応します。ただし、感情が高ぶった時は理性よりも感情が先行しがちで、時として相手を困らせてしまうことも。素直な気持ちを伝えることは得意ですが、冷静な話し合いの技術を身につけると関係がより安定します。"
        },
        dating: {
          title: "デートの傾向",
          content: 
"ロマンチックで感情的なつながりを深められるデートを好みます。夕日を見ながらの散歩、キャンドルディナー、映画館での感動作品鑑賞など、二人の心が通じ合う瞬間を大切にします。相手の喜ぶ顔を見るのが何より嬉しく、サプライズやプレゼントにも積極的です。ただし、相手のペースよりも自分の愛情表現を優先してしまい、相手が疲れてしまうことがあるので注意が必要です。"
        },
        partnership: {
          title: "パートナーシップ",
          content: 
"深い愛情と信頼に基づいた、感情的に密接な関係を築きます。「二人は運命で結ばれている」という感覚を大切にし、パートナーとの一体感を求めます。相手の幸せを自分の幸せと感じ、献身的にサポートします。しかし、愛が深すぎるあまり、相手の自由や個人的な時間を尊重できなくなることがあります。愛情と自立のバランスを意識することで、より健全な関係を築けるでしょう。"
        },
        growth: {
          title: "成長のためのアドバイス",
          content: 
"感情コントロールのスキルを身につけることが最も重要です。「相手を愛している気持ち」と「相手にとって良いこと」は必ずしも一致しないことを理解しましょう。週に一度は一人の時間を作り、客観的に関係を振り返る習慣をつけてください。また、相手の価値観や生活リズムを尊重することで、より安定した愛情関係を築けます。感情の波に飲まれそうになったら、「相手の立場だったらどう感じるか？」を考える癖をつけましょう。"
        }
      },
      compatibility: 'ガーディアン型・アナライザー型',
      detailedChallenge: {
        title: "具体的な注意ポイント",
        content: 
"最大の課題は「愛情の押し付け」です。例えば、相手が仕事で疲れている時に「愛情確認をしたい」気持ちを優先してしまい、結果的に相手をさらに疲れさせてしまうケースがよくあります。また、「愛しているなら毎日連絡するべき」「記念日は絶対に大切にするべき」といった自分の愛情基準を相手に押し付けがちです。相手からの愛情表現が期待より少ないと不安になり、「私のことを本当に愛してる？」と繰り返し確認してしまう傾向も。これらの行動は相手にプレッシャーを与え、距離を置かれる原因となります。愛情を示すタイミングと方法を相手に合わせることが重要です。"
      },
      successRate: '87%',
      matchingAI: 'EmotionSync AI'
    },
    'アナライザー型': {
      title: 'アナライザー型', 
      icon: Eye,
      color: 'bg-blue-50 border-blue-200',
      textColor: 'text-blue-800',
      gradientFrom: 'from-blue-500',
      gradientTo: 'to-indigo-500',
      description: '論理的で分析好き、データを重視するタイプ',
      percentage: '22%',
      traits: [
        '冷静で客観的な判断力を持つ',
        '情報収集と分析が得意',
        '計画的かつ戦略的に行動する',
        '相手の言動から深層心理を読み取る',
        '問題解決能力が高い',
        '論理的な会話を好む',
        '長期的な視点で関係を築く'
      ],
      detailedAdvice: {
        loveStyle: {
          title: "恋愛スタイル",
          content: 
"あなたは慎重で戦略的な恋愛アプローチを取ります。気になる人ができると、SNSやプロフィールを詳細に分析し、相手の興味関心、価値観、ライフスタイルを把握してからアプローチします。恋愛においても論理的思考を重視し、感情よりも「この人との将来性はあるか？」「価値観は合うか？」を慎重に判断します。一度相手を選んだら、長期的な視点で関係を築いていく計画性があります。"
        },
        communication: {
          title: "コミュニケーション",
          content: 
"深い議論や知的な会話を好み、相手の考え方や価値観を理解しようと努めます。相手の言動から心理状態を分析し、適切なタイミングでサポートやアドバイスを提供します。論理的で建設的な会話は得意ですが、感情的な慰めや共感の表現は苦手な傾向があります。「なぜそう感じるの？」「どうすれば解決できる？」という問題解決的なアプローチを取りがちですが、時には理屈抜きで感情に寄り添うことも大切です。"
        },
        dating: {
          title: "デートの傾向",
          content: 
"事前のリサーチを重視し、相手の好みや興味に合わせた計画的なデートを企画します。レストランの評価やアクセス、時間配分まで綿密に計算し、効率的で満足度の高いデートプランを立てます。美術館や博物館、知的好奇心を刺激する場所を選ぶことが多く、相手との会話のネタも事前に準備することがあります。ただし、計画に固執しすぎて、その場の雰囲気や相手の気分の変化に対応できないことがあります。"
        },
        partnership: {
          title: "パートナーシップ",
          content: 
"長期的で安定した関係を築くことを重視し、お互いの成長と発展を支え合えるパートナーシップを理想とします。相手の目標達成をサポートし、二人で将来設計を立てることを好みます。問題が生じた時は客観的に分析し、建設的な解決策を提案します。しかし、感情的な結びつきよりも論理的な一致を重視しがちで、相手が感情的なサポートを求めている時に適切に応えられないことがあります。理論と感情のバランスが重要です。"
        },
        growth: {
          title: "成長のためのアドバイス",
          content: 
"分析力は大きな強みですが、時には分析を止めて直感や感情に従うことも大切です。「なぜ」を考える前に「どう感じているか」に注目する練習をしてください。相手が感情的になっている時は、解決策を提示する前に、まず「辛いね」「大変だったね」と感情に共感することから始めましょう。また、完璧な計画よりも、その場の雰囲気を楽しむ柔軟性を身につけることで、より豊かな恋愛体験ができるでしょう。月に一度は計画なしの自由なデートを試してみてください。"
        }
      },
      compatibility: 'ロジック型・ピュア・ハート型',
      detailedChallenge: {
        title: "具体的な注意ポイント",
        content: 
"最大の問題は「感情の軽視」です。相手が悩みを相談してきた時に、すぐに論理的な解決策を提示してしまい、「ただ話を聞いて欲しかっただけなのに...」と相手を失望させることがよくあります。また、分析のしすぎでタイミングを逃すことも多く、「あの時告白していれば...」と後悔するケースが頻発します。デートでも計画を重視しすぎて、相手が「もっと自然に楽しみたい」と感じているのに気づかないことがあります。さらに、相手の感情的な行動を「非論理的」と判断し、無意識に批判的な態度を取ってしまう傾向も。感情も立派な人間の一部であることを受け入れ、論理と感情の両方を大切にすることが必要です。"
      },
      successRate: '91%',
      matchingAI: 'DataLove AI'
    },
    'ガーディアン型': {
      title: 'ガーディアン型',
      icon: Shield,
      color: 'bg-green-50 border-green-200',
      textColor: 'text-green-800',
      gradientFrom: 'from-green-500',
      gradientTo: 'to-emerald-500',
      description: '安定志向で信頼を大切にするタイプ',
      percentage: '25%',
      traits: [
        '安定した長期的な関係を重視する',
        '信頼関係の構築が得意',
        '責任感が強く、約束を大切にする',
        '相手を守り支える意識が高い',
        '堅実で現実的な判断をする',
        '家庭的で温かい雰囲気を作る',
        '相手の安心感を最優先に考える'
      ],
      detailedAdvice: {
        loveStyle: {
          title: "恋愛スタイル",
          content: 
"あなたは着実で信頼性の高い恋愛アプローチを取ります。一目惚れよりも、時間をかけて相手を知り、お互いの信頼関係を築いてから深い関係に発展させることを好みます。恋愛における安定性と安心感を何より重視し、相手に対しても同じような価値観を求めます。浮気や裏切りを絶対に許さず、誠実さと一途さで相手の信頼を獲得します。長期的な関係を前提として恋愛に臨み、結婚や家庭を築くことを自然に意識します。"
        },
        communication: {
          title: "コミュニケーション",
          content: 
"穏やかで安定したコミュニケーションを好み、相手が安心して話せる環境を作ります。聞き上手で、相手の悩みや不安に対して親身になってアドバイスします。感情的になることは少なく、冷静で建設的な話し合いを重視します。ただし、変化や新しい話題に対しては慎重になりがちで、相手が新しい挑戦や冒険について話している時に、安全性や現実性ばかりを強調してしまう傾向があります。時には相手の夢や理想に寄り添うことも大切です。"
        },
        dating: {
          title: "デートの傾向",
          content: 
"安心できる定番のデートプランを好み、リスクの少ない王道スポットを選びます。お気に入りのレストランや慣れ親しんだ場所でのデートを重視し、相手が居心地よく過ごせることを最優先に考えます。サプライズよりも確実性を重視し、相手の好みを把握してから計画を立てます。家庭的な雰囲気のあるデートスポットや、二人でゆっくり話せる環境を選ぶことが多く、落ち着いて相手との時間を楽しみます。ただし、同じパターンの繰り返しになりがちです。"
        },
        partnership: {
          title: "パートナーシップ",
          content: 
"安定した信頼関係に基づく、長期的なパートナーシップを築きます。相手を守り支える意識が強く、困った時には必ず側にいてサポートします。約束は必ず守り、相手にとって頼りになる存在であり続けることを重視します。将来の計画を一緒に立て、現実的で持続可能な関係を構築します。しかし、安定を重視するあまり、相手の成長や変化に対して保守的になりがちで、新しいチャレンジを控えめに評価してしまうことがあります。"
        },
        growth: {
          title: "成長のためのアドバイス",
          content: 
"安定性は大きな強みですが、時には新しい体験や変化を積極的に取り入れることが重要です。月に一度は普段しないタイプのデートやアクティビティにチャレンジしてみてください。相手が新しいことに挑戦したいと言った時は、リスクよりも可能性に注目し、応援する姿勢を示しましょう。また、自分の意見や感情をもっと積極的に表現することで、より深い関係を築けます。「安全だから」ではなく「楽しそうだから」という理由で選択肢を増やしてみることが、関係に新鮮さをもたらします。"
        }
      },
      compatibility: 'ピュア・ハート型・ロジック型',
      detailedChallenge: {
        title: "具体的な注意ポイント",
        content: 
"最大の課題は「変化への抵抗」と「マンネリ化」です。例えば、相手が「新しいレストランに行ってみない？」と提案した時に、「いつものお店の方が安心だよ」と無意識に変化を避けてしまいます。また、相手が転職や新しい趣味に挑戦したいと相談してきた時に、リスクや困難ばかりを指摘して、相手の気持ちに水を差してしまうことがあります。デートプランも同じパターンの繰り返しになりがちで、相手が「たまには違うことがしたい」と感じていることに気づかないことも。安定性は美徳ですが、成長のない関係は徐々に活力を失います。相手の新しい一面を発見する喜びや、一緒に成長する楽しさを意識的に取り入れることが必要です。"
      },
      successRate: '93%',
      matchingAI: 'StabilityGuard AI'
    },
    'ドリーマー型': {
      title: 'ドリーマー型',
      icon: Moon,
      color: 'bg-purple-50 border-purple-200',
      textColor: 'text-purple-800',
      gradientFrom: 'from-purple-500',
      gradientTo: 'to-violet-500',
      description: '理想を追い求める、ロマンチックなタイプ',
      percentage: '15%',
      traits: [
        '高い理想と美的センスを持つ',
        'ロマンチックな演出や雰囲気を大切にする',
        '感受性が豊かで芸術的な感性がある',
        '運命的な出会いや特別な瞬間を信じる',
        '相手への深い愛情と献身性がある',
        '創造性と想像力に富んでいる',
        '美しいものや特別な体験を重視する'
      ],
      detailedAdvice: {
        loveStyle: {
          title: "恋愛スタイル",
          content: 
"あなたは理想的で美しい恋愛を追求します。映画や小説のような運命的な出会いと深い愛情を信じ、特別で唯一無二の関係を築くことを夢見ています。恋愛における美しさと特別感を何より重視し、相手との関係に物語性を求めます。「この人こそが運命の人」という感覚を大切にし、愛情深く献身的に相手に尽くします。理想の恋愛像がはっきりしており、それに近づけるために努力を惜しみません。ロマンチックな演出や特別な瞬間を創造することに長けています。"
        },
        communication: {
          title: "コミュニケーション",
          content: 
"感情豊かで詩的な表現を好み、相手との心の通じ合いを大切にします。美しい言葉や比喩を使って気持ちを伝え、相手にも同じような感性を求める傾向があります。深い愛情を言葉で表現することが得意で、相手を特別な存在として扱います。ただし、現実的な話題や日常的な問題について話すことは苦手で、「もっとロマンチックに話してほしい」という期待を相手に抱きがちです。実用的なコミュニケーションも恋愛には必要であることを理解することが大切です。"
        },
        dating: {
          title: "デートの傾向",
          content: 
"映画のワンシーンのような美しくロマンチックなデートを好みます。夕日の見える場所、美しい景色、特別な雰囲気のあるレストランなど、思い出に残る特別な体験を重視します。記念日や特別な日には、サプライズやプレゼントに特別な意味を込めます。美術館や音楽会、芸術的な体験も好み、相手と感動を共有することを大切にします。ただし、理想が高すぎて現実的な制約（予算、時間、相手の都合）を軽視してしまうことがあります。"
        },
        partnership: {
          title: "パートナーシップ",
          content: 
"深い精神的なつながりと美しい愛情に基づく、理想的なパートナーシップを追求します。相手を人生の伴侶として深く愛し、一緒に美しい人生を創造していくことを夢見ています。相手の内面の美しさや特別さを見つけることが得意で、愛情深く相手を支えます。芸術や文化への共通の関心を通じて、深い絆を築くことを好みます。しかし、理想と現実のギャップに落胆しやすく、相手の欠点や日常的な問題に対処することが苦手な傾向があります。"
        },
        growth: {
          title: "成長のためのアドバイス",
          content: 
"美しい理想を持つことは素晴らしい才能ですが、現実的な視点も身につけることが重要です。相手の良い面だけでなく、欠点も含めて愛することの大切さを理解しましょう。日常的な問題や実用的な話題にも関心を示し、パートナーシップの実務的な側面もサポートできるようになることが成長につながります。理想の追求と現実的な問題解決のバランスを取る練習をしてください。また、相手が疲れている時は、ロマンチックな時間よりも実用的なサポートを求めていることもあることを理解しましょう。"
        }
      },
      compatibility: 'フリーダム型・ピュア・ハート型',
      detailedChallenge: {
        title: "具体的な注意ポイント",
        content: 
"最大の課題は「理想と現実のギャップに対する耐性の低さ」です。例えば、相手が仕事で疲れて帰ってきた時に、「もっとロマンチックに迎えてほしかった」と失望してしまうことがあります。また、記念日に期待していたサプライズがなかった時や、デートが思い描いていた通りにならなかった時に、大きく落ち込んでしまう傾向があります。現実的な問題（お金の管理、将来の計画、日常的な家事分担など）を「ロマンチックじゃない」として避けがちで、これが関係の実務的な問題を引き起こします。さらに、相手に対して過度に理想的な行動を期待し、「普通の恋人」では満足できなくなることも。完璧な恋愛は存在しないことを受け入れ、日常の小さな愛情も大切にする視点が必要です。"
      },
      successRate: '78%',
      matchingAI: 'DreamWeaver AI'
    },
    'フリーダム型': {
      title: 'フリーダム型',
      icon: Compass,
      color: 'bg-orange-50 border-orange-200',
      textColor: 'text-orange-800',
      gradientFrom: 'from-orange-500',
      gradientTo: 'to-amber-500',
      description: '自由を愛し、新しい体験を求めるタイプ',
      percentage: '18%',
      traits: [
        '独立心が強く、自分らしさを大切にする',
        '新しい体験や冒険を積極的に求める',
        '束縛や制約を嫌い、自由な関係を好む',
        '多様な価値観を受け入れる柔軟性がある',
        '個性的で魅力的な人柄を持つ',
        '変化を恐れず、チャレンジ精神が旺盛',
        '相手の自主性も尊重する'
      ],
      detailedAdvice: {
        loveStyle: {
          title: "恋愛スタイル",
          content: 
"あなたは自由で開放的な恋愛アプローチを取ります。束縛や制約を嫌い、お互いの個性と自主性を尊重する関係を理想とします。恋愛においても自分らしさを失わず、相手にも同じような独立性を求めます。新しい体験や冒険を一緒に楽しめるパートナーを好み、刺激的で変化に富んだ関係を築きます。従来の恋愛の「常識」にとらわれず、二人だけのユニークな関係性を創造することを好みます。複数の人との関係を同時進行することもあり、一つの関係に固執しない柔軟性があります。"
        },
        communication: {
          title: "コミュニケーション",
          content: 
"オープンで率直なコミュニケーションを好み、タブーや制限の少ない自由な会話を楽しみます。多様な話題に興味を持ち、相手の新しい一面や変化を受け入れる柔軟性があります。束縛的な質問や行動の制限を嫌い、お互いの自由を尊重した対話を重視します。ただし、深刻な話題や将来の約束について話すことは苦手で、「重い話」を避けがちです。相手が安定性や確約を求めている時に、適切に応えられないことがあります。"
        },
        dating: {
          title: "デートの傾向",
          content: 
"新しい場所や体験を求める冒険的なデートを好みます。定番のデートプランよりも、その時の気分や興味に合わせた自由度の高い計画を立てます。アウトドア活動、新しいレストランの開拓、イベントやフェスティバルなど、刺激的で変化に富んだデートを企画します。相手の新しい興味や提案も積極的に受け入れ、一緒に新しい体験を楽しみます。ただし、計画性に欠けることがあり、相手が安定したデートプランを望んでいる時に対応できないことがあります。"
        },
        partnership: {
          title: "パートナーシップ",
          content: 
"お互いの独立性と自由を尊重した、現代的なパートナーシップを築きます。束縛せず束縛されない関係を理想とし、それぞれが個人として成長できる環境を大切にします。多様な価値観や生き方を受け入れ、相手の変化や新しい挑戦を応援します。伝統的な役割分担にとらわれず、柔軟で平等な関係を構築します。しかし、深いコミットメントや長期的な約束を避ける傾向があり、相手が安定性や確実性を求めている時に不安を与えてしまうことがあります。"
        },
        growth: {
          title: "成長のためのアドバイス",
          content: 
"自由と責任のバランスを学ぶことが重要です。真の自由とは、自分の選択に責任を持つことでもあります。相手との関係においても、自由を求めるだけでなく、相手の気持ちや不安にも配慮することが大切です。時には安定性や一貫性を示すことで、相手により深い安心感を与えることができます。また、表面的な関係に留まらず、深いコミットメントを通じて得られる喜びや成長も体験してみてください。自由な関係の中にも、信頼と責任という要素を取り入れることで、より豊かなパートナーシップを築けるでしょう。"
        }
      },
      compatibility: 'ドリーマー型・同じフリーダム型',
      detailedChallenge: {
        title: "具体的な注意ポイント",
        content: 
"最大の問題は「コミットメント回避」と「深い関係構築の困難」です。例えば、相手が将来について話そうとした時に「まだ分からないよ」「その時考えよう」と話を避けてしまい、相手に不安感を与えることがよくあります。また、関係が深くなりそうになると「束縛されるかも」という恐れから距離を置いてしまう傾向があります。デートでも「今日は気分が乗らない」「急に予定が変わった」といった理由でキャンセルすることが多く、相手が「大切に思われていない」と感じることも。さらに、複数の人との関係を同時進行する際に、相手の独占欲や嫉妬心を軽視してしまうことがあります。自由は大切ですが、相手の感情や期待を無視した自由は自分勝手になってしまいます。適度なコミットメントと責任感を身につけることが必要です。"
      },
      successRate: '82%',
      matchingAI: 'FreeSpirit AI'
    },
    'ロジック型': {
      title: 'ロジック型',
      icon: BarChart3,
      color: 'bg-gray-50 border-gray-200',
      textColor: 'text-gray-800',
      gradientFrom: 'from-gray-500',
      gradientTo: 'to-slate-500',
      description: '合理的で効率を重視する現実主義タイプ',
      percentage: '12%',
      traits: [
        '論理的思考と合理的な判断を重視する',
        '効率性と実用性を追求する',
        '将来設計と長期的な計画が得意',
        '現実的で地に足のついた考え方をする',
        '問題解決能力と決断力が高い',
        '感情に流されず冷静に状況を判断する',
        '目標達成への強い意志を持つ'
      ],
      detailedAdvice: {
        loveStyle: {
          title: "恋愛スタイル",
          content: 
"あなたは効率的で合理的な恋愛アプローチを取ります。感情よりも論理と実用性を重視し、将来性のあるパートナーを選ぶことを重要視します。恋愛における投資対効果を考え、時間やエネルギーを無駄にしない戦略的な関係構築を行います。相手との相性を客観的に分析し、長期的な目標達成に向けて協力できるパートナーシップを求めます。感情的な恋愛よりも、実用的で持続可能な関係を優先し、結婚や将来設計を念頭に置いた現実的な恋愛をします。"
        },
        communication: {
          title: "コミュニケーション",
          content: 
"論理的で効率的なコミュニケーションを好み、明確で建設的な会話を重視します。問題が生じた時は感情的になることなく、冷静に状況を分析して具体的な解決策を提示します。無駄な会話よりも、目的のある意味のある対話を好みます。相手の問題に対しても合理的なアドバイスを提供し、感情よりも論理に基づいた判断を促します。ただし、相手が感情的なサポートや共感を求めている時に、論理的な回答ばかりを提供してしまい、心の支えになれないことがあります。"
        },
        dating: {
          title: "デートの傾向",
          content: 
"コストパフォーマンスと効率性を重視したデートプランを立てます。時間、予算、移動距離、相手の満足度を総合的に計算し、最適化されたデートを企画します。レビューサイトや評価を事前にチェックし、確実に満足できる場所を選びます。無駄な時間や非効率な移動を避け、限られた時間で最大の効果を得られるプランを好みます。実用的で将来に役立つ体験（スキル習得、知識向上、ネットワーキングなど）を含むデートも好みます。ただし、雰囲気や感情的な価値を軽視してしまうことがあります。"
        },
        partnership: {
          title: "パートナーシップ",
          content: 
"目標達成と相互成長を重視した、実用的なパートナーシップを築きます。お互いの強みを活かし、弱みを補完し合える効率的な関係を理想とします。将来設計を共に立て、それぞれの役割と責任を明確にした協力体制を構築します。問題解決能力が高く、困難な状況でも冷静に対処してパートナーを支えます。経済的な安定性や実用的な生活スキルを重視し、現実的で持続可能な関係を築きます。しかし、感情的なつながりや心の支えという側面を軽視してしまう傾向があります。"
        },
        growth: {
          title: "成長のためのアドバイス",
          content: 
"論理性と効率性は大きな強みですが、感情的な価値や人間関係の温かさも同様に重要であることを理解しましょう。相手が論理的な解決策ではなく、共感や感情的な支えを求めている時があることを認識してください。効率よりも「一緒にいる時間そのもの」を楽しむ経験を積むことが大切です。月に一度は計画性を度外視して、相手の感情や気分を最優先にした時間を作ってみてください。また、「なぜそうするのか」だけでなく「どう感じるか」にも注意を向ける習慣をつけることで、より豊かな人間関係を築けるでしょう。"
        }
      },
      compatibility: 'アナライザー型・ガーディアン型',
      detailedChallenge: {
        title: "具体的な注意ポイント",
        content: 
"最大の課題は「感情軽視」と「効率性の過度な追求」です。例えば、相手が疲れて愚痴を言っている時に、「なぜそんな非効率な方法を取るの？」「こうすれば解決できるよ」とすぐに解決策を提示してしまい、相手が求めていた「ただ聞いて欲しい」「共感して欲しい」という気持ちを無視してしまうことがよくあります。デートでも「このレストランは評価が高くてコスパが良い」という理由ばかりを重視し、「雰囲気が良くて特別感がある」という相手の希望を理解できないことがあります。また、記念日などの感情的な意味を「非合理的」として軽視し、相手を傷つけてしまうケースも。効率や論理も大切ですが、人間関係には論理では説明できない感情的な価値があることを受け入れることが必要です。"
      },
      successRate: '89%',
      matchingAI: 'LogicFlow AI'
    }
  };

  const simulateAIAnalysis = () => {
    setAiAnalyzing(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        setAiAnalyzing(false);
        resolve();
      }, 3000);
    });
  };

  const IntroScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-rose-900 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-rose-600/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto p-6 text-center">
        <div className="pt-20">
          <div className="relative mb-8">
            <div className="w-24 h-24 mx-auto mb-4 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-full blur-xl"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-white to-pink-100 rounded-full flex items-center justify-center shadow-2xl">
                <Bot className="text-purple-600" size={48} />
              </div>
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-xs font-bold animate-bounce shadow-lg">
                AI
              </div>
            </div>
          </div>

          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white via-pink-100 to-white bg-clip-text text-transparent">
            AI恋愛DNA診断
          </h1>
          <p className="text-xl text-pink-100 mb-8 font-light">
            最先端AIが解析する、あなただけの恋愛パターン
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-3 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                <Brain className="text-blue-300 group-hover:scale-110 transition-transform" size={32} />
              </div>
              <p className="text-sm font-medium">AI分析</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-3 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                <Zap className="text-yellow-300 group-hover:scale-110 transition-transform" size={32} />
              </div>
              <p className="text-sm font-medium">瞬間診断</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-3 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                <Target className="text-green-300 group-hover:scale-110 transition-transform" size={32} />
              </div>
              <p className="text-sm font-medium">高精度</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-3 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                <TrendingUp className="text-red-300 group-hover:scale-110 transition-transform" size={32} />
              </div>
              <p className="text-sm font-medium">成長支援</p>
            </div>
          </div>

          <button
            onClick={() => setCurrentScreen('quiz')}
            className="group bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-400 hover:to-rose-400 text-white px-12 py-4 rounded-full text-lg font-bold transition-all duration-300 
transform hover:scale-105 shadow-2xl mb-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            <Play className="inline mr-3 group-hover:scale-110 transition-transform" size={20} />
            AI診断を開始
          </button>

          <p className="text-sm text-pink-200/80 font-light">
            AIによる診断結果は心理学理論に基づいています
          </p>
        </div>
      </div>
    </div>
  );

  const AIAnalysisScreen = () => (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full mx-4 text-center shadow-2xl border border-gray-100">
        <div className="relative mb-6">
          <div className="w-24 h-24 mx-auto mb-6 relative">
            <div className="absolute inset-0 border-4 border-blue-100 rounded-full animate-spin border-t-blue-600"></div>
            <div className="absolute inset-0 border-4 border-purple-100 rounded-full animate-spin animate-reverse border-t-purple-600" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Brain className="text-blue-600" size={40} />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-3">AI分析中</h3>
          <p className="text-gray-600">
            1000万件のデータベースから<br />
            あなたの恋愛パターンを解析しています
          </p>
        </div>

        <div className="space-y-3 text-left">
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <span className="text-sm font-medium text-gray-700">感情パターン分析</span>
            <div className="flex items-center text-green-600">
              <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
              <span className="text-sm font-medium">完了</span>
            </div>
          </div>
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <span className="text-sm font-medium text-gray-700">相性マッチング計算</span>
            <div className="flex items-center text-green-600">
              <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
              <span className="text-sm font-medium">完了</span>
            </div>
          </div>
          <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
            <span className="text-sm font-medium text-gray-700">個別アドバイス生成</span>
            <div className="flex items-center text-blue-600">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-medium">処理中...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const goToPreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      // 前の質問の回答を削除
      const newAnswers = { ...answers };
      delete newAnswers[questions[currentQuestion].id];
      setAnswers(newAnswers);
    }
  };

  const handleAnswer = (questionId, answer, type) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: { answer, type }
    }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult();
    }
  };

  const calculateResult = async () => {
    await simulateAIAnalysis();
    
    const typeCount = {};
    Object.values(answers).forEach(answer => {
      typeCount[answer.type] = (typeCount[answer.type] || 0) + 1;
    });

    const sortedTypes = Object.entries(typeCount)
      .sort(([,a], [,b]) => b - a);

    const primaryType = sortedTypes[0][0];

    setResult({
      primary: primaryType,
      scores: typeCount,
      total: Object.keys(answers).length
    });

    setCurrentScreen('result');
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setResult(null);
    setCurrentScreen('intro');
  };

  const shareToTwitter = () => {
    const primaryTypeDetail = typeDetails[result.primary];
    const text = `私の恋愛タイプは「${primaryTypeDetail.title}」でした！\n\n${primaryTypeDetail.description}\n\n#AI恋愛DNA診断`;
    const url = window.location.href;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, '_blank');
  };

  // 画面分岐
  if (currentScreen === 'intro') {
    return <IntroScreen />;
  }

  if (currentScreen === 'result' && result) {
    const primaryTypeDetail = typeDetails[result.primary];
    const IconComponent = primaryTypeDetail.icon;
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
        {aiAnalyzing && <AIAnalysisScreen />}
        
        <div className="max-w-5xl mx-auto p-4">
          <div className="text-center mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100/50 via-pink-100/50 to-purple-100/50 rounded-3xl"></div>
            <div className="relative p-8">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <Bot className="text-white" size={32} />
                </div>
                <Sparkles className="text-yellow-500 animate-pulse" size={32} />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                AI診断完了
              </h1>
              <div className="mb-4">
                <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${primaryTypeDetail.gradientFrom} ${primaryTypeDetail.gradientTo} rounded-full flex items-center justify-center shadow-lg 
animate-bounce`}>
                  <IconComponent className="text-white" size={40} />
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 inline-block shadow-sm">
                <span className="text-sm font-medium text-gray-700">
                  的中率 {primaryTypeDetail.successRate} | {primaryTypeDetail.matchingAI}
                </span>
              </div>
            </div>
          </div>

          <div className={`${primaryTypeDetail.color} border-2 rounded-3xl p-8 mb-8 shadow-xl relative overflow-hidden`}>
            <div className="absolute top-6 right-6">
              <div className="bg-gradient-to-r from-emerald-400 to-blue-400 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                AI分析済み
              </div>
            </div>
            
            <div className="text-center mb-8">
              <h2 className={`text-3xl font-bold ${primaryTypeDetail.textColor} mb-3`}>
                あなたは「{primaryTypeDetail.title}」
              </h2>
              <div className="inline-block bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-4 shadow-sm">
                <span className="text-sm font-medium text-gray-700">
                  全体の{primaryTypeDetail.percentage}が該当
                </span>
              </div>
              <p className={`${primaryTypeDetail.textColor} text-lg font-medium`}>
                {primaryTypeDetail.description}
              </p>
            </div>

            <div className="grid md:grid-cols-1 gap-6 mb-6">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
                <h4 className="font-bold text-gray-800 mb-4 text-lg flex items-center">
                  <Sparkles className="mr-2 text-yellow-500" size={20} />
                  あなたの特徴
                </h4>
                <ul className="space-y-3">
                  {primaryTypeDetail.traits.map((trait, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-sm leading-relaxed">{trait}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 詳細アドバイスセクション */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {Object.entries(primaryTypeDetail.detailedAdvice).map(([key, advice]) => (
                <div key={key} className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
                  <h4 className="font-bold text-gray-800 mb-3 text-lg flex items-center">
                    {key === 'loveStyle' && <Heart className="mr-2 text-red-500" size={20} />}
                    {key === 'communication' && <MessageCircle className="mr-2 text-blue-500" size={20} />}
                    {key === 'dating' && <Calendar className="mr-2 text-green-500" size={20} />}
                    {key === 'partnership' && <Users className="mr-2 text-purple-500" size={20} />}
                    {key === 'growth' && <Lightbulb className="mr-2 text-yellow-500" size={20} />}
                    {advice.title}
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">{advice.content}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                <Heart className="mr-2 text-red-500" size={20} />
                相性の良いタイプ
              </h4>
              <p className="text-gray-700">{primaryTypeDetail.compatibility}</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                <AlertTriangle className="mr-2 text-orange-500" size={20} />
                {primaryTypeDetail.detailedChallenge.title}
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">{primaryTypeDetail.detailedChallenge.content}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 mb-8">
            <button
              onClick={shareToTwitter}
              className="group flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-2xl font-medium transition-all duration-300 shadow-lg"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              Twitterでシェア
            </button>
          </div>
        </div>
      </div>
    );
  }

  // クイズ画面
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {aiAnalyzing && <AIAnalysisScreen />}
      
      <div className="max-w-4xl mx-auto p-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3 shadow-lg">
              <Bot className="text-white" size={24} />
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
              <Heart className="text-white" size={24} />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">AI恋愛DNA診断</h1>
          <p className="text-gray-600">AIがあなたの深層心理から恋愛タイプを発見</p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-medium text-gray-600">質問 {currentQuestion + 1} / {questions.length}</span>
            <span className="text-sm font-medium text-gray-600">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
            <div 
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-500 shadow-sm"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-xl mb-8 relative border border-gray-100">
          <div className="absolute top-6 right-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
            AI分析中
          </div>
          
          <h2 className="text-xl font-semibold mb-3 text-gray-800">
            {questions[currentQuestion].text}
          </h2>
          <p className="text-sm text-gray-500 mb-8 flex items-center">
            <Brain className="mr-2" size={16} />
            {questions[currentQuestion].aiContext}
          </p>
          
          <div className="space-y-4">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  handleAnswer(questions[currentQuestion].id, option.value, option.type);
                  setTimeout(nextQuestion, 300);
                }}
                className="group w-full p-5 text-left rounded-2xl border-2 transition-all duration-200 hover:border-pink-300 hover:bg-pink-50 active:scale-[0.98] border-gray-200 bg-white relative 
overflow-hidden shadow-sm hover:shadow-md"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-pink-500/5 to-pink-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform 
duration-1000"></div>
                <div className="flex items-start relative">
                  <span className="font-bold text-pink-600 mr-4 mt-1 group-hover:scale-110 transition-transform text-lg">{option.value}</span>
                  <span className="text-gray-800 font-medium">{option.text}</span>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Zap className="text-blue-500" size={18} />
                </div>
              </button>
            ))}
          </div>

          {/* 戻るボタン */}
          {currentQuestion > 0 && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <button
                onClick={goToPreviousQuestion}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                <ArrowLeft size={18} />
                前の質問に戻る
              </button>
            </div>
          )}
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-500 mb-3 font-medium">
            AI × 愛着理論による科学的診断
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <span className="flex items-center">
              <Brain className="mr-1" size={14} />
              深層学習
            </span>
            <span className="flex items-center">
              <BarChart3 className="mr-1" size={14} />
              ビッグデータ
            </span>
            <span className="flex items-center">
              <Target className="mr-1" size={14} />
              個別最適化
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AILoveDiagnosticTool;

