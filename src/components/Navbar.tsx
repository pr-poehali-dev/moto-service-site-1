import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "Главная", href: "#home" },
  { label: "Услуги", href: "#services" },
  { label: "Прайс", href: "#price" },
  { label: "О нас", href: "#about" },
  { label: "Контакты", href: "#contacts" },
];

interface NavbarProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  scrollTo: (href: string) => void;
}

const Navbar = ({ menuOpen, setMenuOpen, scrollTo }: NavbarProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f0f]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <img
          src="https://cdn.poehali.dev/projects/c5fbc9e2-9feb-4554-a2f4-b4143f23788c/bucket/f73e9b11-b542-4352-97ea-f60f3c87a47b.jpg"
          alt="The Wrench House"
          className="h-10 w-auto object-contain"
        />

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
          href="tel:+79202282493"
          className="hidden md:flex items-center gap-2 bg-[#E8570A] hover:bg-[#c94608] text-white px-4 py-2 text-sm transition-colors duration-200"
          style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.1em" }}
        >
          <Icon name="Phone" size={14} />
          +7 (920) 228-24-93
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
            href="tel:+79202282493"
            className="flex items-center gap-2 bg-[#E8570A] text-white px-4 py-2 text-sm w-fit"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            <Icon name="Phone" size={14} />
            +7 (920) 228-24-93
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
