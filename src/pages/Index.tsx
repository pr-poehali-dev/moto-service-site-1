import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/c5fbc9e2-9feb-4554-a2f4-b4143f23788c/files/1b540e5c-4654-4388-b300-06c5fc40963f.jpg";
const DIAG_IMG = "https://cdn.poehali.dev/projects/c5fbc9e2-9feb-4554-a2f4-b4143f23788c/files/db63198a-3dfc-4fb0-9b8d-967d5a15c327.jpg";

const NAV_LINKS = [
  { label: "Главная", href: "#home" },
  { label: "Услуги", href: "#services" },
  { label: "О нас", href: "#about" },
  { label: "Контакты", href: "#contacts" },
];

const SERVICES = [
  {
    icon: "Monitor",
    title: "Компьютерная диагностика",
    desc: "Профессиональная диагностика мотоциклов и скутеров любых марок на современном оборудовании. Точное выявление неисправностей за 30 минут.",
    tag: "Флагманская услуга",
  },
  {
    icon: "Wrench",
    title: "Техническое обслуживание",
    desc: "Плановое ТО по регламенту производителя: замена масла, фильтров, свечей, регулировка клапанов и карбюратора.",
    tag: "",
  },
  {
    icon: "Zap",
    title: "Электрика и проводка",
    desc: "Диагностика и ремонт электросистем, замена проводки, установка дополнительного оборудования.",
    tag: "",
  },
  {
    icon: "Settings",
    title: "Двигатель и трансмиссия",
    desc: "Капитальный ремонт двигателей, замена поршневой, ремонт КПП и сцепления.",
    tag: "",
  },
  {
    icon: "Shield",
    title: "Тормозная система",
    desc: "Замена колодок, дисков, прокачка тормозов, ремонт тормозных цилиндров.",
    tag: "",
  },
  {
    icon: "Gauge",
    title: "Подвеска и рулевое",
    desc: "Обслуживание вилки, амортизаторов, подшипников рулевой колонки и колёс.",
    tag: "",
  },
];

const STATS = [
  { value: "12+", label: "лет опыта" },
  { value: "3000+", label: "мотоциклов обслужено" },
  { value: "48ч", label: "среднее время ремонта" },
  { value: "100%", label: "гарантия на работы" },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ fontFamily: "'IBM Plex Sans', sans-serif" }} className="bg-[#0f0f0f] text-white min-h-screen overflow-x-hidden">

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f0f]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <span style={{ fontFamily: "'Oswald', sans-serif" }} className="text-xl tracking-widest text-white">
            МОТО<span className="text-[#E8570A]">СЕРВИС</span>
          </span>

          <ul className="hidden md:flex gap-8">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <button
                  onClick={() => scrollTo(l.href)}
                  className="text-sm tracking-wider text-white/60 hover:text-[#E8570A] transition-colors duration-200 uppercase"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          <a
            href="tel:+79001234567"
            className="hidden md:flex items-center gap-2 bg-[#E8570A] hover:bg-[#c94608] text-white px-4 py-2 text-sm transition-colors duration-200"
            style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.1em" }}
          >
            <Icon name="Phone" size={14} />
            +7 (900) 123-45-67
          </a>

          <button
            className="md:hidden text-white/70 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-[#141414] border-t border-white/5 px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-left text-sm uppercase tracking-wider text-white/70 hover:text-[#E8570A] transition-colors"
              >
                {l.label}
              </button>
            ))}
            <a
              href="tel:+79001234567"
              className="flex items-center gap-2 bg-[#E8570A] text-white px-4 py-2 text-sm w-fit"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              <Icon name="Phone" size={14} />
              +7 (900) 123-45-67
            </a>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Мотосервис" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f0f] via-[#0f0f0f]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent" />
        </div>

        <div
          className="absolute right-0 top-0 h-full w-1/2 hidden lg:block"
          style={{ background: "linear-gradient(135deg, transparent 40%, rgba(232,87,10,0.06) 100%)" }}
        />
        <div className="absolute right-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-[#E8570A]/40 to-transparent hidden lg:block" />

        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-36">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-10 bg-[#E8570A]" />
              <span className="text-[#E8570A] text-xs tracking-[0.25em] uppercase">
                Профессиональный мотосервис
              </span>
            </div>

            <h1
              style={{ fontFamily: "'Oswald', sans-serif" }}
              className="text-6xl md:text-8xl font-bold leading-none tracking-tight mb-6"
            >
              ТОЧНАЯ
              <br />
              <span className="text-[#E8570A]">ДИАГНОСТИКА</span>
              <br />
              МОТОЦИКЛА
            </h1>

            <p className="text-white/60 text-lg leading-relaxed mb-10 font-light max-w-lg">
              Компьютерная диагностика мотоциклов и скутеров любых марок.
              Современное оборудование. Опытные мастера. Результат — не предположение, а точный диагноз.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("#contacts")}
                className="bg-[#E8570A] hover:bg-[#c94608] text-white px-8 py-4 text-sm transition-colors duration-200 flex items-center gap-2"
                style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.15em" }}
              >
                ЗАПИСАТЬСЯ НА ДИАГНОСТИКУ
                <Icon name="ArrowRight" size={16} />
              </button>
              <button
                onClick={() => scrollTo("#services")}
                className="border border-white/20 hover:border-[#E8570A] text-white/70 hover:text-white px-8 py-4 text-sm transition-all duration-200"
                style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.15em" }}
              >
                НАШИ УСЛУГИ
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-[#141414]/80 backdrop-blur-sm border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-bold text-[#E8570A]" style={{ fontFamily: "'Oswald', sans-serif" }}>{s.value}</div>
                <div className="text-white/40 text-xs tracking-wider uppercase mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-24 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-10 bg-[#E8570A]" />
            <span className="text-[#E8570A] text-xs tracking-[0.25em] uppercase">Что мы делаем</span>
          </div>
          <h2 style={{ fontFamily: "'Oswald', sans-serif" }} className="text-4xl md:text-5xl font-bold mb-3">
            НАШИ УСЛУГИ
          </h2>
          <p className="text-white/40 mb-14 max-w-lg font-light">
            Полный спектр работ по обслуживанию и ремонту мотоциклов и скутеров
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {SERVICES.map((s, i) => (
              <div
                key={i}
                className="bg-[#0f0f0f] p-8 hover:bg-[#141414] transition-colors duration-300 group relative"
              >
                {s.tag && (
                  <span className="absolute top-6 right-6 text-[10px] bg-[#E8570A] text-white px-2 py-1 tracking-wider uppercase">
                    {s.tag}
                  </span>
                )}
                <div className="w-10 h-10 border border-[#E8570A]/30 flex items-center justify-center mb-5 group-hover:border-[#E8570A] group-hover:bg-[#E8570A]/10 transition-all duration-300">
                  <Icon name={s.icon} size={18} className="text-[#E8570A]" />
                </div>
                <h3
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                  className="text-xl font-semibold mb-3 tracking-wide group-hover:text-[#E8570A] transition-colors duration-300"
                >
                  {s.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed font-light">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border border-[#E8570A]/20" />
              <img
                src={DIAG_IMG}
                alt="Компьютерная диагностика"
                className="w-full h-80 lg:h-[480px] object-cover relative z-10"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#111111] to-transparent h-24 z-20" />
              <div className="absolute bottom-6 left-6 z-30 flex items-center gap-3">
                <div className="w-2 h-2 bg-[#E8570A] rounded-full animate-pulse" />
                <span className="text-xs text-white/60 uppercase tracking-widest">Диагностика в реальном времени</span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[1px] w-10 bg-[#E8570A]" />
                <span className="text-[#E8570A] text-xs tracking-[0.25em] uppercase">О компании</span>
              </div>
              <h2 style={{ fontFamily: "'Oswald', sans-serif" }} className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                ОПЫТ И ТОЧНОСТЬ
                <br />
                <span className="text-white/30">В КАЖДОЙ РАБОТЕ</span>
              </h2>
              <div className="space-y-4 text-white/55 font-light leading-relaxed">
                <p>
                  Более 12 лет мы специализируемся на обслуживании мотоциклов и скутеров. За это время
                  через наш сервис прошло более 3000 единиц техники — от городских скутеров до
                  спортивных мотоциклов премиум-класса.
                </p>
                <p>
                  Наша специализация — <span className="text-white">компьютерная диагностика</span>. Современное диагностическое
                  оборудование позволяет нам точно определить неисправность за 30 минут, не тратя ваше
                  время и деньги на ненужные замены деталей.
                </p>
                <p>
                  Мы работаем с техникой Honda, Yamaha, Kawasaki, Suzuki, BMW, Ducati, KTM и другими
                  марками. Каждый мастер проходит регулярное обучение и сертификацию.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  "Гарантия на все виды работ",
                  "Оригинальные запчасти",
                  "Фото-отчёт о ремонте",
                  "Чёткие сроки выполнения",
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Icon name="CheckCircle" size={16} className="text-[#E8570A] shrink-0" />
                    <span className="text-white/60 text-sm">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACTS ── */}
      <section id="contacts" className="py-24 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[1px] w-10 bg-[#E8570A]" />
                <span className="text-[#E8570A] text-xs tracking-[0.25em] uppercase">Связаться с нами</span>
              </div>
              <h2 style={{ fontFamily: "'Oswald', sans-serif" }} className="text-4xl md:text-5xl font-bold mb-6">
                ЗАПИШИТЕСЬ
                <br />
                НА ДИАГНОСТИКУ
              </h2>
              <p className="text-white/50 font-light leading-relaxed mb-10">
                Оставьте заявку и мы перезвоним в течение 15 минут,
                чтобы согласовать удобное время визита.
              </p>

              <div className="space-y-6">
                {[
                  { icon: "Phone", label: "Телефон", value: "+7 (900) 123-45-67", href: "tel:+79001234567" },
                  { icon: "MessageCircle", label: "WhatsApp / Telegram", value: "+7 (900) 123-45-67", href: "#" },
                  { icon: "MapPin", label: "Адрес", value: "г. Москва, ул. Примерная, 42", href: "" },
                  { icon: "Clock", label: "Режим работы", value: "Пн–Сб: 9:00–20:00", href: "" },
                ].map((c, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#E8570A]/50 transition-colors">
                      <Icon name={c.icon} size={16} className="text-[#E8570A]" />
                    </div>
                    <div>
                      <div className="text-white/30 text-xs uppercase tracking-wider mb-1">{c.label}</div>
                      {c.href ? (
                        <a href={c.href} className="text-white hover:text-[#E8570A] transition-colors">{c.value}</a>
                      ) : (
                        <span className="text-white">{c.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#141414] border border-white/5 p-8">
              <h3 style={{ fontFamily: "'Oswald', sans-serif" }} className="text-xl font-semibold mb-6 tracking-wide">
                ОСТАВИТЬ ЗАЯВКУ
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="text-white/40 text-xs uppercase tracking-wider mb-2 block">Ваше имя</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Иван Петров"
                    className="w-full bg-[#0f0f0f] border border-white/10 focus:border-[#E8570A] text-white placeholder-white/20 px-4 py-3 outline-none transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="text-white/40 text-xs uppercase tracking-wider mb-2 block">Телефон</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (___) ___-__-__"
                    className="w-full bg-[#0f0f0f] border border-white/10 focus:border-[#E8570A] text-white placeholder-white/20 px-4 py-3 outline-none transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="text-white/40 text-xs uppercase tracking-wider mb-2 block">Сообщение (необязательно)</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Марка и модель мотоцикла, описание проблемы..."
                    rows={4}
                    className="w-full bg-[#0f0f0f] border border-white/10 focus:border-[#E8570A] text-white placeholder-white/20 px-4 py-3 outline-none transition-colors text-sm resize-none"
                  />
                </div>
                <button
                  className="w-full bg-[#E8570A] hover:bg-[#c94608] text-white py-4 text-sm transition-colors duration-200 flex items-center justify-center gap-2"
                  style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.15em" }}
                >
                  ОТПРАВИТЬ ЗАЯВКУ
                  <Icon name="ArrowRight" size={16} />
                </button>
                <p className="text-white/20 text-xs text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#080808] border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span style={{ fontFamily: "'Oswald', sans-serif" }} className="text-lg tracking-widest">
            МОТО<span className="text-[#E8570A]">СЕРВИС</span>
          </span>
          <span className="text-white/20 text-xs">
            © 2026 МотоСервис. Все права защищены.
          </span>
          <div className="flex gap-6">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-white/30 hover:text-[#E8570A] text-xs uppercase tracking-wider transition-colors"
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;