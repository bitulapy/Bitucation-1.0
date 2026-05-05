// =============================================
// BITUCATION — LANGUAGE SYSTEM (EN / ZH-TW)
// =============================================

const TRANSLATIONS = {
  en: {
    // NAVBAR
    "nav.home": "Home",
    "nav.about": "Meet Bitula",
    "nav.lessons": "Lessons",
    "nav.login": "Login",

    // INDEX — HERO
    "hero.badge": "✦ Free Learning Platform",
    "hero.title.line1": "Learn",
    "hero.title.highlight": "Computer Science",
    "hero.title.line2": "with Bitula!",
    "hero.subtitle": "A free learning platform for everyone. From coding fundamentals and algorithms to Machine Learning, guided by Bitula, your favorite edu-VTuber! 🌙",
    "hero.cta.start": "Start Learning",
    "hero.cta.about": "Meet Bitula",
    "hero.stat1.num": "50+",
    "hero.stat1.label": "Topics",
    "hero.stat2.num": "7",
    "hero.stat2.label": "Categories",
    "hero.stat3.num": "100%",
    "hero.stat3.label": "Free",
    "hero.bubble": "\"Hey! I'm Bitula~ Let's learn together! Knowledge is power! ✨\"",

    // INDEX — CATEGORIES
    "cat.badge": "📚 What You Can Learn",
    "cat.title.pre": "Choose Your",
    "cat.title.highlight": "Category",
    "cat.sub": "From beginner to advanced, all free!",
    "cat.fundamental.title": "Coding Fundamentals",
    "cat.fundamental.desc": "Logic, Algorithms, Data Structures, and core programming concepts",
    "cat.math.title": "Mathematics",
    "cat.math.desc": "Calculus, Probability, Statistics, and Linear Algebra",
    "cat.cs.title": "CS Advanced",
    "cat.cs.desc": "OS, Computer Networks, Databases, Digital Logic",
    "cat.ml.title": "ML & Data Science",
    "cat.ml.desc": "Neural Networks, Deep Learning, and Data Analysis",
    "cat.data.title": "Data Engineering",
    "cat.data.desc": "Data Pipelines, Data Warehouses, ETL Process",
    "cat.cloud.title": "Cloud Computing",
    "cat.cloud.desc": "AWS, Azure, GCP — all major cloud platforms",
    "cat.bigdata.title": "Big Data",
    "cat.bigdata.desc": "Hadoop, Spark, and other Big Data technologies",

    // INDEX — HOW IT WORKS
    "how.badge": "🌙 How Bitucation Works",
    "how.title.pre": "Learn in Just",
    "how.title.highlight": "3 Steps",
    "how.step1.title": "Pick a Topic",
    "how.step1.desc": "Choose what you want to learn from our wide range of categories",
    "how.step2.title": "Learn with Bitula",
    "how.step2.desc": "Follow along with notes and Bitula's explanations",
    "how.step3.title": "Take the Quiz",
    "how.step3.desc": "Test your understanding with interactive quizzes and keep your streak!",

    // INDEX — BITULA SAYS
    "says.badge": "💬 Bitula Says...",
    "says.attr": "— Bitula ✦",
    "says.next": "Next quote ✦",

    // INDEX — TOPIC OF DAY
    "tod.badge": "🌟 Topic of the Day",
    "tod.title.pre": "Today's",
    "tod.title.highlight": "Topic",
    "tod.card.badge": "Today's Pick",
    "tod.lesson.title": "Algorithm: Big-O Notation",
    "tod.lesson.desc": "Understanding time and space complexity is key to becoming a great programmer. Learn how to measure your code's efficiency!",
    "tod.tag1": "⚡ Fundamental",
    "tod.tag2": "⏱ 20 min",
    "tod.tag3": "🔰 Beginner",
    "tod.cta": "Study Now →",

    // FOOTER
    "footer.desc": "Free Computer Science and Math learning platform with Bitula VTuber!",
    "footer.lessons": "Lessons",
    "footer.platform": "Platform",
    "footer.follow": "Follow Bitula",
    "footer.copy": "© 2025 Bitucation — Made with 💜 by Rae",

    // ABOUT
    "about.badge": "🌙 Get to Know Bitula",
    "about.h1.pre": "Hey, I'm",
    "about.h1.highlight": "Bitula!",
    "about.lead": "I'm a VTuber focused on teaching <strong>Computer Science</strong> and <strong>Mathematics</strong>. I believe knowledge should be accessible to everyone, free, fun, and full of energy!",
    "about.body": "With a cybertech and sci-fi style and an undying love for learning, I'm here to guide you on your journey, from knowing nothing to becoming an expert!",
    "about.lore.badge": "📜 Bitula's Lore",
    "about.lore.title.pre": "Who is",
    "about.lore.title.highlight": "Bitula",
    "about.lore.title.post": "Really?",
    "about.lore1.title": "Origin",
    "about.lore1.desc": "Bitula comes from a dimension where knowledge and cyber magic intertwine. She arrived in this world with one mission: to spread Computer Science to everyone.",
    "about.lore2.title": "Power",
    "about.lore2.desc": "Bitula's ability lies in turning complex technical concepts into easy-to-understand stories. She can \"read\" code like a wizard reading a spell.",
    "about.lore3.title": "Mission",
    "about.lore3.desc": "To prove that anyone can learn programming and math, regardless of background, age, or experience. Knowledge is for everyone.",
    "about.lore4.title": "Aesthetic",
    "about.lore4.desc": "Cybertech with magenta, pink, and purple. Bitula believes learning should be stylish! Her crystal crown and black robe symbolize intellectual elegance.",
    "about.personality.badge": "💜 Bitula's Personality",
    "about.personality.title": "Energetic, Smart,",
    "about.personality.highlight": "and Supportive!",
    "about.trait1.title": "Enthusiastic",
    "about.trait1.desc": "Always upbeat and positive! Bitula believes everyone can succeed with the right effort.",
    "about.trait2.title": "Analytical",
    "about.trait2.desc": "Loves breaking complex problems into small, digestible pieces.",
    "about.trait3.title": "Supportive",
    "about.trait3.desc": "Never judgmental if you don't get it yet. Bitula stays by your side until it clicks!",
    "about.trait4.title": "Creative",
    "about.trait4.desc": "Uses analogies, stories, and unique visuals to explain technical concepts.",
    "about.vision.badge": "🔭 Vision and Mission",
    "about.vision.title.pre": "Why",
    "about.vision.title.highlight": "Bitucation",
    "about.vision.title.post": "?",
    "about.v1.title": "Educational Accessibility",
    "about.v1.desc": "High-quality CS and Math content should be accessible to everyone, not just those who can afford expensive courses.",
    "about.v2.title": "Fun Learning",
    "about.v2.desc": "With a VTuber approach and gamification (streaks, quizzes), studying becomes an adventure, not a burden!",
    "about.v3.title": "A Supportive Community",
    "about.v3.desc": "Building a learner community that supports each other, shares knowledge, and grows together.",
    "about.cta": "Start Learning Now →",

    // DASHBOARD
    "dash.badge": "📚 All Lessons",
    "dash.title.pre": "Choose Your",
    "dash.title.highlight": "Lesson",
    "dash.sub": "Start anywhere, all free and available anytime!",
    "dash.streak.label": "Day Streak",
    "dash.filter.all": "All",
    "dash.cta.quote": "\"Start with one small step. I'll always be here with you! 🌙\"",
    "dash.cta.sub": "Pick a topic above and start your learning journey today!",
    "lesson.coming.soon": "🔜 Coming Soon",

    // LOGIN
    "login.back": "Back to Home",
    "login.brand.title": "Welcome Back!",
    "login.brand.sub": "Login and continue your learning adventure with Bitula 🌙",
    "login.bubble": "Hey! It's been a while~ Let's pick up where you left off! ✨",
    "login.tab.login": "Login",
    "login.tab.register": "Sign Up",
    "login.form.title": "Sign In",
    "login.form.sub": "Enter your email and password",
    "login.google": "Continue with Google",
    "login.or": "or",
    "login.email.label": "Email",
    "login.email.ph": "example@email.com",
    "login.pw.label": "Password",
    "login.pw.ph": "Enter your password",
    "login.remember": "Remember me",
    "login.forgot": "Forgot password?",
    "login.btn": "Login",
    "login.switch": "Don't have an account?",
    "login.switch.link": "Sign up now",
    "reg.form.title": "Create Account",
    "reg.form.sub": "Join for free and start learning!",
    "reg.google": "Sign up with Google",
    "reg.name.label": "Full Name",
    "reg.name.ph": "Your name",
    "reg.btn": "Create Account",
    "reg.switch": "Already have an account?",
    "reg.switch.link": "Login here",
    "toast.coming.soon": "🚀 This feature is coming soon! Stay tuned, Bitulers~",
  },
  zh: {
    // NAVBAR
    "nav.home": "首頁",
    "nav.about": "認識蟲梨花",
    "nav.lessons": "課程",
    "nav.login": "登入",

    // INDEX — HERO
    "hero.badge": "✦ 免費學習平台",
    "hero.title.line1": "和蟲梨花一起學習",
    "hero.title.highlight": "電腦科學",
    "hero.title.line2": "吧！",
    "hero.subtitle": "面向所有人的免費學習平台。從程式設計基礎、演算法，到機器學習，由你最喜愛的教育型VTuber蟲梨花親自引導！🌙",
    "hero.cta.start": "開始學習",
    "hero.cta.about": "認識蟲梨花",
    "hero.stat1.num": "50+",
    "hero.stat1.label": "主題",
    "hero.stat2.num": "7",
    "hero.stat2.label": "分類",
    "hero.stat3.num": "100%",
    "hero.stat3.label": "免費",
    "hero.bubble": "\"嗨！我是蟲梨花~ 一起學習吧！知識就是力量！✨\"",

    // INDEX — CATEGORIES
    "cat.badge": "📚 你可以學什麼",
    "cat.title.pre": "選擇你的",
    "cat.title.highlight": "學習分類",
    "cat.sub": "從初學到進階，全部免費！",
    "cat.fundamental.title": "程式設計基礎",
    "cat.fundamental.desc": "邏輯、演算法、資料結構與核心程式概念",
    "cat.math.title": "數學",
    "cat.math.desc": "微積分、機率、統計與線性代數",
    "cat.cs.title": "進階電腦科學",
    "cat.cs.desc": "作業系統、計算機網路、資料庫、數位邏輯",
    "cat.ml.title": "機器學習與資料科學",
    "cat.ml.desc": "神經網路、深度學習與資料分析",
    "cat.data.title": "資料工程",
    "cat.data.desc": "資料管線、資料倉儲、ETL流程",
    "cat.cloud.title": "雲端運算",
    "cat.cloud.desc": "AWS、Azure、GCP等主流雲端平台",
    "cat.bigdata.title": "大數據",
    "cat.bigdata.desc": "Hadoop、Spark與其他大數據技術",

    // INDEX — HOW IT WORKS
    "how.badge": "🌙 Bitucation 如何運作",
    "how.title.pre": "只需",
    "how.title.highlight": "三個步驟",
    "how.step1.title": "選擇主題",
    "how.step1.desc": "從我們豐富的分類中選擇你想學習的內容",
    "how.step2.title": "和蟲梨花一起學習",
    "how.step2.desc": "跟隨筆記和蟲梨花的講解一步步前進",
    "how.step3.title": "完成測驗",
    "how.step3.desc": "透過互動測驗測試理解程度，保持連續學習紀錄！",

    // INDEX — BITULA SAYS
    "says.badge": "💬 蟲梨花 說...",
    "says.attr": "— 蟲梨花 ✦",
    "says.next": "下一句話 ✦",

    // INDEX — TOPIC OF DAY
    "tod.badge": "🌟 今日主題",
    "tod.title.pre": "今天的",
    "tod.title.highlight": "主題",
    "tod.card.badge": "今日精選",
    "tod.lesson.title": "演算法：大O符號",
    "tod.lesson.desc": "理解時間和空間複雜度是成為優秀程式設計師的關鍵。學習如何衡量你的程式效率！",
    "tod.tag1": "⚡ 基礎",
    "tod.tag2": "⏱ 20分鐘",
    "tod.tag3": "🔰 初學者",
    "tod.cta": "立即學習 →",

    // FOOTER
    "footer.desc": "由VTuber 蟲梨花主持的免費電腦科學與數學學習平台！",
    "footer.lessons": "課程",
    "footer.platform": "平台",
    "footer.follow": "追蹤蟲梨花",
    "footer.copy": "© 2025 Bitucation — 由 Rae 以 💜 製作",

    // ABOUT
    "about.badge": "🌙 認識蟲梨花",
    "about.h1.pre": "嗨，我是",
    "about.h1.highlight": "蟲梨花！",
    "about.lead": "我是一位專注於教授<strong>電腦科學</strong>和<strong>數學</strong>的VTuber。我相信知識應該對所有人開放，免費、有趣，充滿活力！",
    "about.body": "帶著哥德式科幻風格和對學習的熱情，我在這裡引導你踏上學習之旅，從零基礎到成為專家！",
    "about.lore.badge": "📜 蟲梨花的背景故事",
    "about.lore.title.pre": "蟲梨花",
    "about.lore.title.highlight": "究竟是誰",
    "about.lore.title.post": "？",
    "about.lore1.title": "起源",
    "about.lore1.desc": "Bitula來自一個知識與哥德式魔法交融的次元。她來到這個世界，只有一個使命：向所有人傳播電腦科學。",
    "about.lore2.title": "能力",
    "about.lore2.desc": "Bitula的能力在於將複雜的技術概念轉化為易懂的故事。她能像巫師閱讀咒語一樣「閱讀」程式碼。",
    "about.lore3.title": "使命",
    "about.lore3.desc": "證明任何人都能學習程式設計和數學，不論背景、年齡或經驗。知識屬於每一個人。",
    "about.lore4.title": "美學風格",
    "about.lore4.desc": "哥德式科幻風，搭配洋紅色、粉紅色和紫色。Bitula認為學習應該有風格！她的水晶皇冠和黑色長袍是智識優雅的象徵。",
    "about.personality.badge": "💜 蟲梨花的個性",
    "about.personality.title": "活力充沛、聰明，",
    "about.personality.highlight": "充滿支持！",
    "about.trait1.title": "熱情",
    "about.trait1.desc": "永遠積極正向！Bitula相信只要努力，每個人都能成功。",
    "about.trait2.title": "分析力強",
    "about.trait2.desc": "喜歡將複雜問題拆解成小而易懂的部分。",
    "about.trait3.title": "支持性強",
    "about.trait3.desc": "不會因為你還不懂而評判你。Bitula會陪伴你，直到你「頓悟」那一刻！",
    "about.trait4.title": "創意十足",
    "about.trait4.desc": "用類比、故事和獨特的視覺化方式解釋技術概念。",
    "about.vision.badge": "🔭 願景與使命",
    "about.vision.title.pre": "為什麼選擇",
    "about.vision.title.highlight": "Bitucation",
    "about.vision.title.post": "？",
    "about.v1.title": "教育可及性",
    "about.v1.desc": "高品質的CS和數學內容應該對所有人開放，而不僅限於能負擔昂貴課程的人。",
    "about.v2.title": "快樂學習",
    "about.v2.desc": "透過VTuber方式和遊戲化機制（連續學習、測驗），學習變成冒險，而不是負擔！",
    "about.v3.title": "互相支持的社群",
    "about.v3.desc": "建立一個學習者社群，互相支持、分享知識、共同成長。",
    "about.cta": "立即開始學習 →",

    // DASHBOARD
    "dash.badge": "📚 所有課程",
    "dash.title.pre": "選擇你的",
    "dash.title.highlight": "課程",
    "dash.sub": "從任何地方開始，全部免費，隨時可學！",
    "dash.streak.label": "連續學習天數",
    "dash.filter.all": "全部",
    "dash.cta.quote": "\"從一小步開始。我永遠陪著你！🌙\"",
    "dash.cta.sub": "選擇上方的課程，今天就開始你的學習之旅！",
    "lesson.coming.soon": "🔜 即將推出",

    // LOGIN
    "login.back": "返回首頁",
    "login.brand.title": "歡迎回來！",
    "login.brand.sub": "登入並繼續你與蟲梨花的學習冒險 🌙",
    "login.bubble": "嗨！好久不見~ 繼續從上次停下的地方開始吧！✨",
    "login.tab.login": "登入",
    "login.tab.register": "註冊",
    "login.form.title": "登入帳號",
    "login.form.sub": "輸入你的電子郵件和密碼",
    "login.google": "使用Google繼續",
    "login.or": "或",
    "login.email.label": "電子郵件",
    "login.email.ph": "example@email.com",
    "login.pw.label": "密碼",
    "login.pw.ph": "輸入你的密碼",
    "login.remember": "記住我",
    "login.forgot": "忘記密碼？",
    "login.btn": "登入",
    "login.switch": "還沒有帳號？",
    "login.switch.link": "立即註冊",
    "reg.form.title": "建立帳號",
    "reg.form.sub": "免費加入並開始學習！",
    "reg.google": "使用Google註冊",
    "reg.name.label": "姓名",
    "reg.name.ph": "你的姓名",
    "reg.btn": "建立帳號",
    "reg.switch": "已有帳號？",
    "reg.switch.link": "在這裡登入",
    "toast.coming.soon": "🚀 此功能即將推出！敬請期待，Bitulers~",
  }
};

const QUOTES = {
  en: [
    "\"Knowledge is the most powerful weapon you can use to change the world. One line of code today could be the solution for millions tomorrow.\"",
    "\"Don't be afraid of errors. An error isn't the end, it's the beginning of deeper understanding. Debugging is actually fun!\"",
    "\"Every great programmer was once confused too. The difference is they never stopped learning. You can do it!\"",
    "\"Math and coding are like music. At first it's hard, but once you get it, everything flows beautifully.\"",
    "\"Consistency beats talent. Studying 30 minutes every day is more powerful than 5 hours once a week!\"",
    "\"Data is the new oil, but the ones who can process data are the true masters. Let's learn together!\""
  ],
  zh: [
    "\"知識是你改變世界最強大的武器。今天的一行程式碼，可能是明天造福百萬人的解決方案。\"",
    "\"不要害怕錯誤。錯誤不是終點，而是更深理解的起點。除錯其實很有趣！\"",
    "\"每一位偉大的程式設計師曾經也感到困惑。差別在於他們從未停止學習。你也可以做到！\"",
    "\"數學和程式設計就像音樂。一開始很難，但一旦你懂了，一切就自然流動。\"",
    "\"持之以恆勝過天賦。每天學習30分鐘比一週學習5小時更有效！\"",
    "\"數據是新石油，但能處理數據的人才是真正的主宰。一起學習吧！\""
  ]
};

let currentLang = localStorage.getItem('bitucation_lang') || 'en';
let currentQuoteIdx = 0;

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('bitucation_lang', lang);
  const t = TRANSLATIONS[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      if (el.tagName === 'INPUT') {
        el.placeholder = t[key];
      } else if (key.includes('.lead') || key.includes('.body')) {
        el.innerHTML = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });
  // Update lang toggle button
  document.querySelectorAll('.nav-lang-toggle').forEach(btn => {
    btn.textContent = lang === 'en' ? '繁中' : 'EN';
  });
  // Update quote
  const quoteEl = document.getElementById('bitula-quote');
  if (quoteEl) quoteEl.textContent = QUOTES[lang][currentQuoteIdx] || QUOTES[lang][0];
  // Update html lang attr
  document.documentElement.lang = lang === 'en' ? 'en' : 'zh-TW';
}

function toggleLanguage() {
  applyLanguage(currentLang === 'en' ? 'zh' : 'en');
}

function nextQuote() {
  const quotes = QUOTES[currentLang];
  currentQuoteIdx = (currentQuoteIdx + 1) % quotes.length;
  const el = document.getElementById('bitula-quote');
  if (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(8px)';
    setTimeout(() => {
      el.textContent = quotes[currentQuoteIdx];
      el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 200);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  applyLanguage(currentLang);
});
