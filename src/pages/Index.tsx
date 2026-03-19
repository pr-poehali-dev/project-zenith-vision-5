import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const solarSystemObjects = [
  { name: "Меркурий", distance: "57.9 млн км", diameter: "4 879 км", moons: 0, color: "from-gray-400 to-gray-600", emoji: "⚫" },
  { name: "Венера", distance: "108.2 млн км", diameter: "12 104 км", moons: 0, color: "from-yellow-500 to-orange-500", emoji: "🟡" },
  { name: "Земля", distance: "149.6 млн км", diameter: "12 756 км", moons: 1, color: "from-blue-500 to-green-500", emoji: "🔵" },
  { name: "Марс", distance: "227.9 млн км", diameter: "6 792 км", moons: 2, color: "from-red-500 to-orange-600", emoji: "🔴" },
  { name: "Юпитер", distance: "778.5 млн км", diameter: "142 984 км", moons: 95, color: "from-orange-400 to-yellow-600", emoji: "🟠" },
  { name: "Сатурн", distance: "1.43 млрд км", diameter: "120 536 км", moons: 146, color: "from-yellow-300 to-amber-500", emoji: "🪐" },
  { name: "Уран", distance: "2.87 млрд км", diameter: "51 118 км", moons: 28, color: "from-cyan-400 to-teal-500", emoji: "🔵" },
  { name: "Нептун", distance: "4.5 млрд км", diameter: "49 528 км", moons: 16, color: "from-blue-600 to-indigo-700", emoji: "💙" },
];

const cosmicObjects = [
  {
    title: "Чёрные дыры",
    icon: "Circle",
    desc: "Области пространства с настолько сильной гравитацией, что даже свет не может покинуть их. Первая фотография чёрной дыры M87* была сделана в 2019 году.",
    fact: "Масса M87* — 6.5 млрд солнечных масс"
  },
  {
    title: "Нейтронные звёзды",
    icon: "Star",
    desc: "Сверхплотные остатки взорвавшихся звёзд. Одна чайная ложка вещества нейтронной звезды весила бы около миллиарда тонн на Земле.",
    fact: "Диаметр всего ~20 км, но масса — 1.5 Солнца"
  },
  {
    title: "Туманности",
    icon: "Cloud",
    desc: "Гигантские облака газа и пыли в космосе — колыбели новых звёзд. Туманность Ориона видна невооружённым глазом как туманное пятно.",
    fact: "Туманность Орла простирается на 70 световых лет"
  },
  {
    title: "Квазары",
    icon: "Zap",
    desc: "Самые яркие объекты во Вселенной — активные ядра далёких галактик. Квазар 3C 273 светит в 4 триллиона раз ярче Солнца.",
    fact: "Обнаружены на расстоянии свыше 13 млрд световых лет"
  },
  {
    title: "Экзопланеты",
    icon: "Globe",
    desc: "Планеты за пределами нашей Солнечной системы. Телескоп Кеплер открыл тысячи таких планет, среди которых есть потенциально обитаемые.",
    fact: "Открыто более 5 500 подтверждённых экзопланет"
  },
  {
    title: "Галактики",
    icon: "Sparkles",
    desc: "Гигантские системы из звёзд, газа, пыли и тёмной материи. Наш Млечный Путь содержит от 100 до 400 миллиардов звёзд.",
    fact: "В наблюдаемой Вселенной ~2 триллиона галактик"
  },
];

const news = [
  {
    date: "Март 2025",
    tag: "Телескопы",
    title: "Джеймс Уэбб запечатлел атмосферу экзопланеты в деталях",
    desc: "JWST обнаружил в атмосфере планеты WASP-39b молекулы CO₂, SO₂ и воду — новый шаг к поиску биомаркеров жизни.",
  },
  {
    date: "Февраль 2025",
    tag: "Марс",
    title: "Perseverance обнаружил органические молекулы в древних скалах",
    desc: "Марсоход нашёл сложные органические соединения в образцах возрастом 3.5 млрд лет из кратера Езеро.",
  },
  {
    date: "Январь 2025",
    tag: "Солнечная система",
    title: "Открыт новый транснептуновый объект на краю Солнечной системы",
    desc: "Обнаружен объект с необычной орбитой на расстоянии 800 а.е., что указывает на возможную девятую планету.",
  },
  {
    date: "Декабрь 2024",
    tag: "Гравитационные волны",
    title: "LIGO зафиксировал слияние нейтронных звёзд в реальном времени",
    desc: "Совместное наблюдение гравитационных волн и электромагнитного излучения открывает эпоху многоканальной астрономии.",
  },
  {
    date: "Ноябрь 2024",
    tag: "Луна",
    title: "Artemis III назначена на 2026 год — люди вернутся на Луну",
    desc: "NASA подтвердило план высадки астронавтов у южного полюса Луны для исследования водяного льда.",
  },
  {
    date: "Октябрь 2024",
    tag: "Тёмная материя",
    title: "Новые данные Euclid бросают вызов стандартной модели Вселенной",
    desc: "Европейский телескоп Euclid представил карту тёмной материи с беспрецедентным разрешением.",
  },
];

const facts = [
  { num: "13.8", unit: "млрд лет", label: "Возраст Вселенной" },
  { num: "2 трлн", unit: "галактик", label: "В наблюдаемой Вселенной" },
  { num: "299 792", unit: "км/с", label: "Скорость света" },
  { num: "5 500+", unit: "экзопланет", label: "Открыто за всё время" },
  { num: "100 000", unit: "св. лет", label: "Диаметр Млечного Пути" },
  { num: "8.3", unit: "минуты", label: "Свет летит от Солнца до Земли" },
];

const olympiads = [
  {
    name: "Всероссийская олимпиада школьников",
    level: "Федеральный",
    site: "https://vserosolymp.rudn.ru",
    desc: "Главная олимпиада страны по астрономии. Проходит в несколько этапов: школьный, муниципальный, региональный и заключительный.",
    icon: "Trophy",
    color: "from-yellow-500/20 to-amber-500/10",
    border: "border-yellow-500/30"
  },
  {
    name: "Международная олимпиада по астрономии (IOAA)",
    level: "Международный",
    site: "https://ioaastrophysics.org",
    desc: "Ежегодное международное соревнование для школьников. Включает теоретические задачи, наблюдательный и аналитический туры.",
    icon: "Globe",
    color: "from-blue-500/20 to-cyan-500/10",
    border: "border-blue-500/30"
  },
  {
    name: "Олимпиада «Ломоносов»",
    level: "Федеральный",
    site: "https://olymp.msu.ru",
    desc: "Олимпиада МГУ им. М.В. Ломоносова с секцией по астрономии и астрофизике. Даёт льготы при поступлении в МГУ.",
    icon: "University",
    color: "from-purple-500/20 to-violet-500/10",
    border: "border-purple-500/30"
  },
  {
    name: "Олимпиада СПбГУ",
    level: "Федеральный",
    site: "https://olympiada.spbu.ru",
    desc: "Олимпиада Санкт-Петербургского государственного университета по астрономии. Высокий уровень задач, признана рейтинговой.",
    icon: "Award",
    color: "from-green-500/20 to-emerald-500/10",
    border: "border-green-500/30"
  },
  {
    name: "Турнир им. М.В. Ломоносова",
    level: "Командный",
    site: "https://turlom.olimpiada.ru",
    desc: "Командное соревнование с нестандартными задачами по астрономии. Проходит в октябре, открыт для школьников 6–11 классов.",
    icon: "Users",
    color: "from-orange-500/20 to-red-500/10",
    border: "border-orange-500/30"
  },
  {
    name: "Олимпиада «Звезда»",
    level: "Федеральный",
    site: "https://olimpiada.ru",
    desc: "Многопрофильная олимпиада с секцией по астрономии. Проводится онлайн и очно, доступна школьникам 5–11 классов.",
    icon: "Star",
    color: "from-cyan-500/20 to-teal-500/10",
    border: "border-cyan-500/30"
  },
];

const interestingFacts = [
  {
    icon: "Flame",
    title: "Солнце не горит",
    text: "Солнце светит не за счёт горения, а благодаря ядерному синтезу — каждую секунду оно превращает 600 млн тонн водорода в гелий.",
  },
  {
    icon: "Volume2",
    title: "В космосе нет звука",
    text: "Космос — почти абсолютный вакуум. Звуковые волны не могут распространяться без среды, поэтому взрывы звёзд беззвучны.",
  },
  {
    icon: "Clock",
    title: "Год на Венере короче дня",
    text: "Венера вращается вокруг своей оси так медленно, что один день (243 земных дня) длиннее её года (225 дней).",
  },
  {
    icon: "Footprints",
    title: "Следы на Луне вечны",
    text: "На Луне нет ветра и атмосферы, поэтому следы астронавтов Аполлона останутся там на миллионы лет.",
  },
  {
    icon: "Snowflake",
    title: "Горячий лёд Нептуна",
    text: "Внутри Нептуна — океан горячего льда при температуре ~7 000°C. Огромное давление не даёт воде превратиться в пар.",
  },
  {
    icon: "Eye",
    title: "Свет из прошлого",
    text: "Наблюдая далёкую галактику в 1 млрд световых лет, мы видим её такой, какой она была 1 млрд лет назад.",
  },
];

const Index = () => {
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});
  const [activePlanet, setActivePlanet] = useState(0);

  useEffect(() => {
    const observers: Record<string, IntersectionObserver> = {};
    const sectionIds = ["hero", "news", "solar", "cosmic", "facts", "olympiads", "interesting"];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      observers[id] = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [id]: true }));
            observers[id].unobserve(element);
          }
        },
        { threshold: 0.1 }
      );
      observers[id].observe(element);
    });

    return () => {
      Object.values(observers).forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-2xl border-b border-accent/20 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔭</span>
            <div className="font-display font-bold text-2xl tracking-tighter bg-gradient-to-r from-white via-accent to-accent/80 bg-clip-text text-transparent">
              КосмосПортал
            </div>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#news" className="text-muted-foreground hover:text-white transition-colors">Новости</a>
            <a href="#solar" className="text-muted-foreground hover:text-white transition-colors">Солнечная система</a>
            <a href="#cosmic" className="text-muted-foreground hover:text-white transition-colors">Объекты</a>
            <a href="#olympiads" className="text-muted-foreground hover:text-white transition-colors">Олимпиады</a>
          </nav>
          <button className="px-5 py-2.5 text-sm font-semibold bg-gradient-to-r from-accent to-accent/80 text-black rounded-full hover:shadow-lg hover:shadow-accent/40 transition-all">
            Начать изучение
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-32 px-6 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/59de7993-425b-42f1-8481-9be30b5d3860/files/90aaf00d-02b7-419c-885e-513d2f2b1dc0.jpg"
            alt="Космос"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 ${visibleSections["hero"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="mb-8 inline-block">
                <span className="text-xs font-medium tracking-widest text-accent/80 uppercase">
                  Путеводитель по Вселенной
                </span>
              </div>
              <h1 className="text-6xl lg:text-7xl font-display font-black leading-tight mb-8 tracking-tighter">
                <span className="bg-gradient-to-br from-white via-white to-accent/40 bg-clip-text text-transparent">
                  Исследуй.
                </span>
                <br />
                <span className="bg-gradient-to-br from-white via-white to-accent/40 bg-clip-text text-transparent">
                  Открывай.
                </span>
                <br />
                <span className="text-accent">Вдохновляйся.</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed mb-10 max-w-xl font-light">
                Всё о космосе на одной странице — от планет Солнечной системы до загадочных квазаров на краю Вселенной. Астрономия без границ.
              </p>
              <div className="flex gap-4 mb-12 flex-col sm:flex-row">
                <a href="#solar" className="group px-8 py-4 bg-gradient-to-r from-accent to-accent/90 text-black rounded-full hover:shadow-2xl hover:shadow-accent/50 transition-all font-semibold text-lg flex items-center gap-3 justify-center">
                  Изучить систему
                  <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition" />
                </a>
                <a href="#news" className="px-8 py-4 border border-accent/40 rounded-full hover:border-accent/70 hover:bg-accent/10 transition-all font-medium text-lg text-white text-center">
                  Последние новости
                </a>
              </div>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                <div>
                  <div className="text-2xl font-bold text-accent mb-2">8</div>
                  <p className="text-sm text-white/60">Планет в системе</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-2">5 500+</div>
                  <p className="text-sm text-white/60">Экзопланет открыто</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent mb-2">13.8 млрд</div>
                  <p className="text-sm text-white/60">Лет Вселенной</p>
                </div>
              </div>
            </div>

            <div className={`relative h-96 lg:h-[550px] transition-all duration-1000 flex items-center justify-center ${visibleSections["hero"] ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-purple-500/10 to-transparent rounded-3xl blur-3xl animate-pulse" />
              <img
                src="https://cdn.poehali.dev/projects/59de7993-425b-42f1-8481-9be30b5d3860/files/1321b032-8399-4679-a3dd-23687e950276.jpg"
                alt="Солнечная система"
                className="w-full h-full object-cover rounded-3xl relative z-10 shadow-2xl shadow-accent/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section id="news" className="py-32 px-6 bg-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${visibleSections["news"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">Актуально</span>
            <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mt-4 mb-6">
              <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
                Последние новости
              </span>
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">Самые важные события и открытия в мире астрономии и космонавтики</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item, i) => (
              <div
                key={i}
                style={{ transitionDelay: `${i * 100}ms` }}
                className={`group p-6 border border-accent/10 hover:border-accent/40 rounded-2xl bg-card/50 hover:bg-card/80 transition-all duration-700 ${visibleSections["news"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">{item.tag}</span>
                  <span className="text-xs text-white/40">{item.date}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 leading-snug group-hover:text-accent transition-colors">{item.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solar System */}
      <section id="solar" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${visibleSections["solar"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">Наш дом</span>
            <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mt-4 mb-6">
              <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
                Солнечная система
              </span>
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">Восемь планет, сотни спутников и миллиарды малых тел — всё это наш космический дом</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {solarSystemObjects.map((planet, i) => (
              <button
                key={i}
                onClick={() => setActivePlanet(i)}
                className={`p-5 rounded-2xl border text-left transition-all duration-300 ${activePlanet === i ? "border-accent/60 bg-accent/10" : "border-accent/10 hover:border-accent/30 bg-card/30"}`}
              >
                <div className="text-3xl mb-3">{planet.emoji}</div>
                <div className="font-bold text-white">{planet.name}</div>
              </button>
            ))}
          </div>

          {/* Planet Detail */}
          <div className={`p-8 lg:p-12 rounded-3xl border border-accent/20 bg-gradient-to-br ${solarSystemObjects[activePlanet].color} bg-opacity-10 relative overflow-hidden transition-all duration-500 ${visibleSections["solar"] ? "opacity-100" : "opacity-0"}`}>
            <div className="absolute top-0 right-0 text-[200px] opacity-10 leading-none select-none">{solarSystemObjects[activePlanet].emoji}</div>
            <div className="relative z-10 grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-4xl font-black text-white mb-2">{solarSystemObjects[activePlanet].name}</h3>
                <p className="text-white/50 text-sm">Планета Солнечной системы</p>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-accent/70 uppercase tracking-wider mb-1">Расстояние от Солнца</p>
                  <p className="text-xl font-bold text-white">{solarSystemObjects[activePlanet].distance}</p>
                </div>
                <div>
                  <p className="text-xs text-accent/70 uppercase tracking-wider mb-1">Диаметр</p>
                  <p className="text-xl font-bold text-white">{solarSystemObjects[activePlanet].diameter}</p>
                </div>
              </div>
              <div>
                <p className="text-xs text-accent/70 uppercase tracking-wider mb-1">Количество спутников</p>
                <p className="text-5xl font-black text-accent">{solarSystemObjects[activePlanet].moons}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cosmic Objects */}
      <section id="cosmic" className="py-32 px-6 bg-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${visibleSections["cosmic"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">За пределами системы</span>
            <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mt-4 mb-6">
              <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
                Объекты Вселенной
              </span>
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">Самые удивительные и загадочные объекты, которые изучила современная астрофизика</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cosmicObjects.map((obj, i) => (
              <div
                key={i}
                style={{ transitionDelay: `${i * 100}ms` }}
                className={`group p-8 border border-accent/10 hover:border-accent/40 rounded-2xl bg-card/50 hover:bg-card/80 transition-all duration-700 ${visibleSections["cosmic"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center mb-6 transition-colors">
                  <Icon name={obj.icon} size={22} className="text-accent" fallback="Star" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{obj.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">{obj.desc}</p>
                <div className="p-3 rounded-xl bg-accent/5 border border-accent/10">
                  <p className="text-xs text-accent font-semibold">📡 {obj.fact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interesting Facts */}
      <section id="interesting" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${visibleSections["interesting"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">Удивительно, но факт</span>
            <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mt-4 mb-6">
              <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
                Интересные факты
              </span>
            </h2>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
            {facts.map((f, i) => (
              <div key={i} className={`text-center p-6 rounded-2xl border border-accent/10 bg-card/30 transition-all duration-700 ${visibleSections["interesting"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="text-2xl font-black text-accent mb-1">{f.num}</div>
                <div className="text-xs text-accent/70 mb-2">{f.unit}</div>
                <div className="text-xs text-white/50">{f.label}</div>
              </div>
            ))}
          </div>

          {/* Fact cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interestingFacts.map((fact, i) => (
              <div
                key={i}
                style={{ transitionDelay: `${i * 100}ms` }}
                className={`group p-8 border border-accent/10 hover:border-accent/40 rounded-2xl bg-card/50 hover:bg-card/80 transition-all duration-700 ${visibleSections["interesting"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center mb-6 transition-colors">
                  <Icon name={fact.icon} size={22} className="text-accent" fallback="Star" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{fact.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{fact.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Olympiads */}
      <section id="olympiads" className="py-32 px-6 bg-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${visibleSections["olympiads"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">Для юных астрономов</span>
            <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mt-4 mb-6">
              <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
                Олимпиады по астрономии
              </span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">Проверь свои знания о Вселенной и получи льготы при поступлении в лучшие вузы страны</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {olympiads.map((ol, i) => (
              <a
                key={i}
                href={ol.site}
                target="_blank"
                rel="noopener noreferrer"
                style={{ transitionDelay: `${i * 100}ms` }}
                className={`group p-8 border rounded-2xl bg-gradient-to-br ${ol.color} ${ol.border} hover:scale-[1.02] transition-all duration-500 block ${visibleSections["olympiads"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Icon name={ol.icon} size={22} className="text-white" fallback="Star" />
                  </div>
                  <span className="text-xs font-semibold text-white/60 bg-white/10 px-3 py-1 rounded-full">{ol.level}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 leading-snug">{ol.name}</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-4">{ol.desc}</p>
                <div className="flex items-center gap-2 text-accent text-sm font-semibold group-hover:gap-3 transition-all">
                  Перейти на сайт <Icon name="ExternalLink" size={14} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section id="cta" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-accent/10" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-8">🌌</div>
          <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mb-6">
            <span className="bg-gradient-to-r from-white via-white to-accent/60 bg-clip-text text-transparent">
              Вселенная ждёт
            </span>
          </h2>
          <p className="text-xl text-white/60 mb-12 leading-relaxed max-w-2xl mx-auto">
            Начни своё путешествие к звёздам прямо сейчас. Каждый великий астроном когда-то впервые посмотрел в небо.
          </p>
          <div className="flex gap-4 justify-center flex-col sm:flex-row">
            <a href="#solar" className="group px-10 py-4 bg-gradient-to-r from-accent to-accent/80 text-black rounded-full hover:shadow-2xl hover:shadow-accent/40 transition-all font-bold text-lg flex items-center gap-3 justify-center">
              Изучить Вселенную
              <Icon name="Rocket" size={20} className="group-hover:translate-x-1 transition" />
            </a>
            <a href="#olympiads" className="px-10 py-4 border border-accent/40 rounded-full hover:border-accent/70 hover:bg-accent/10 transition-all font-medium text-lg text-white text-center">
              Участвовать в олимпиадах
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-accent/10 px-6 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">🔭</span>
            <span className="font-display font-bold text-xl bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
              КосмосПортал
            </span>
          </div>
          <p className="text-sm text-white/30">Познаём Вселенную вместе · 2025</p>
          <div className="flex gap-6 text-sm text-white/40">
            <a href="#news" className="hover:text-white transition-colors">Новости</a>
            <a href="#solar" className="hover:text-white transition-colors">Планеты</a>
            <a href="#olympiads" className="hover:text-white transition-colors">Олимпиады</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;