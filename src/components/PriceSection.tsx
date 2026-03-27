import Icon from "@/components/ui/icon";

const PRICE_LIST = [
  { name: "Комплексное техническое обслуживание", price: "от 2 999 ₽" },
  { name: "Замена масла в двигателе", price: "от 499 ₽" },
  { name: "Замена масла в вилке", price: "от 499 ₽" },
  { name: "Регулировка карбюратора", price: "от 999 ₽" },
  { name: "Регулировка клапанов", price: "от 999 ₽" },
  { name: "Синхронизация карбюраторов", price: "от 1 499 ₽" },
  { name: "Замена свечи зажигания", price: "99 ₽/шт" },
  { name: "Натяжка цепи", price: "от 499 ₽" },
  { name: "Чистка цепи", price: "299 ₽" },
  { name: "Смазка цепи", price: "399 ₽" },
  { name: "Чистка воздушного фильтра", price: "199 ₽" },
  { name: "Пропитка воздушного фильтра", price: "99 ₽" },
  { name: "Сборка, промазка мотоцикла с коробки", price: "от 2 499 ₽" },
  { name: "Замена звёзд", price: "от 399 ₽" },
  { name: "Замена цепи", price: "от 399 ₽" },
  { name: "Регулировка подвески", price: "от 499 ₽" },
];

const PRICE_ELECTRICS = [
  { name: "Диагностика электрики", price: "от 999 ₽" },
  { name: "Устранение неисправности в электрической цепи", price: "от 499 ₽" },
  { name: "Замена лампочки", price: "49 ₽/шт" },
  { name: "Замена реле поворотов", price: "от 199 ₽" },
  { name: "Замена реле зарядки", price: "от 199 ₽" },
  { name: "Замена реле стартера", price: "от 199 ₽" },
  { name: "Оборудование мототехники световыми приборами (фарой, поворотниками, стопсигналом, приборной панелью)", price: "от 1 999 ₽" },
];

const PRICE_ENGINE = [
  { name: "Диагностика двигателя", price: "от 499 ₽" },
  { name: "Замена клапанов", price: "от 799 ₽" },
  { name: "Замена маслосъёмных колпачков", price: "от 399 ₽" },
  { name: "Замена цилиндра поршневой группы", price: "от 999 ₽" },
  { name: "Замена цепи ГРМ", price: "от 399 ₽" },
  { name: "Замена сальников", price: "от 499 ₽" },
];

const PRICE_BRAKES = [
  { name: "Замена тормозной жидкости", price: "от 499 ₽" },
  { name: "Замена колодок", price: "от 399 ₽/пара" },
  { name: "Прокачка тормозов", price: "от 199 ₽" },
];

const PRICE_SUSPENSION = [
  { name: "Диагностика", price: "от 999 ₽" },
  { name: "Ремонт подвески", price: "от 1 299 ₽" },
  { name: "Ремонт рамы (сварка, порошковая покраска)", price: "от 3 999 ₽" },
];

interface PriceItem {
  name: string;
  price: string;
}

const PriceTable = ({ items, highlight }: { items: PriceItem[]; highlight?: boolean }) => (
  <div className="border border-white/5 divide-y divide-white/5">
    {items.map((item, i) => (
      <div
        key={i}
        className={`flex items-center justify-between px-6 py-4 hover:bg-white/[0.03] transition-colors duration-200 ${highlight && i === 0 ? "bg-[#E8570A]/10 border-l-2 border-l-[#E8570A]" : ""}`}
      >
        <div className="flex items-center gap-3">
          {highlight && i === 0 && <Icon name="Star" size={14} className="text-[#E8570A] shrink-0" />}
          <span className={`text-sm ${highlight && i === 0 ? "text-white font-medium" : "text-white/70"}`}>
            {item.name}
          </span>
        </div>
        <span
          style={{ fontFamily: "'Oswald', sans-serif" }}
          className={`text-sm tracking-wide shrink-0 ml-8 ${highlight && i === 0 ? "text-[#E8570A]" : "text-white/90"}`}
        >
          {item.price}
        </span>
      </div>
    ))}
  </div>
);

interface CategoryHeaderProps {
  icon: string;
  title: string;
}

const CategoryHeader = ({ icon, title }: CategoryHeaderProps) => (
  <div className="flex items-center gap-3 mt-14 mb-6">
    <div className="w-8 h-8 border border-[#E8570A]/30 flex items-center justify-center">
      <Icon name={icon} size={15} className="text-[#E8570A]" />
    </div>
    <h3 style={{ fontFamily: "'Oswald', sans-serif" }} className="text-2xl font-bold tracking-wide">
      {title}
    </h3>
  </div>
);

const PriceSection = () => {
  return (
    <section id="price" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-[1px] w-10 bg-[#E8570A]" />
          <span className="text-[#E8570A] text-xs tracking-[0.25em] uppercase">Стоимость работ</span>
        </div>
        <h2 style={{ fontFamily: "'Oswald', sans-serif" }} className="text-4xl md:text-5xl font-bold mb-3">
          ПРАЙС-ЛИСТ
        </h2>
        <p className="text-white/40 mb-12 font-light">
          Техническое обслуживание · Цены указаны без учёта стоимости запчастей
        </p>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 border border-[#E8570A]/30 flex items-center justify-center">
            <Icon name="Wrench" size={15} className="text-[#E8570A]" />
          </div>
          <h3 style={{ fontFamily: "'Oswald', sans-serif" }} className="text-2xl font-bold tracking-wide">
            ТЕХНИЧЕСКОЕ ОБСЛУЖИВАНИЕ
          </h3>
        </div>
        <PriceTable items={PRICE_LIST} highlight />

        <CategoryHeader icon="Zap" title="ЭЛЕКТРИКА И ПРОВОДКА" />
        <PriceTable items={PRICE_ELECTRICS} />

        <CategoryHeader icon="Shield" title="ТОРМОЗНАЯ СИСТЕМА" />
        <PriceTable items={PRICE_BRAKES} />

        <CategoryHeader icon="Settings" title="ДВИГАТЕЛЬ" />
        <PriceTable items={PRICE_ENGINE} />

        <CategoryHeader icon="Gauge" title="ПОДВЕСКА И РУЛЕВОЕ" />
        <PriceTable items={PRICE_SUSPENSION} />

        <p className="text-white/25 text-xs mt-6 font-light">
          * Окончательная стоимость определяется после диагностики. Запчасти оплачиваются отдельно.
        </p>
      </div>
    </section>
  );
};

export default PriceSection;
