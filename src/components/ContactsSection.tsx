import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "Главная", href: "#home" },
  { label: "Услуги", href: "#services" },
  { label: "Прайс", href: "#price" },
  { label: "О нас", href: "#about" },
  { label: "Контакты", href: "#contacts" },
];

interface ContactsSectionProps {
  scrollTo: (href: string) => void;
}

const ContactsSection = ({ scrollTo }: ContactsSectionProps) => {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  return (
    <>
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
                  { icon: "Phone", label: "Телефон", value: "+7 (920) 228-24-93", href: "tel:+79202282493" },
                  { icon: "MessageCircle", label: "WhatsApp / Telegram", value: "+7 (920) 228-24-93", href: "#" },
                  { icon: "MapPin", label: "Адрес", value: "г. Воронеж, ул. Столярная, 2б", href: "https://yandex.ru/maps/?text=Воронеж+ул.+Столярная+2б" },
                  { icon: "Clock", label: "Режим работы", value: "Пн–Сб: 9:00–20:00", href: "" },
                ].map((c, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#E8570A]/50 transition-colors">
                      <Icon name={c.icon} size={16} className="text-[#E8570A]" />
                    </div>
                    <div>
                      <div className="text-white/30 text-xs uppercase tracking-wider mb-1">{c.label}</div>
                      {c.href ? (
                        <a href={c.href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#E8570A] transition-colors">{c.value}</a>
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
          <img
            src="https://cdn.poehali.dev/projects/c5fbc9e2-9feb-4554-a2f4-b4143f23788c/bucket/f73e9b11-b542-4352-97ea-f60f3c87a47b.jpg"
            alt="The Wrench House"
            className="h-10 w-auto object-contain"
          />
          <span className="text-white/20 text-xs">
            © 2026 The Wrench House. Все права защищены.
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
    </>
  );
};

export default ContactsSection;
