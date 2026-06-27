import { useEffect, useRef, useState } from 'react';
import { Search, User, ShoppingCart, Phone, ChevronDown, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'ÜRÜNLER', hasDropdown: true },
  { label: 'FİLTRELER', hasDropdown: false },
  { label: 'YEDEK PARÇALAR', hasDropdown: false },
  { label: 'SERVİS', hasDropdown: false },
  { label: 'SU BİLGİ MERKEZİ', hasDropdown: false },
  { label: 'KURUMSAL', hasDropdown: true },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-[100] h-20 transition-all duration-300 ${
        scrolled ? 'glass-nav shadow-sm border-b border-buzsu-border' : 'bg-white/95 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-container mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img
            src="/assets/logo-buzsu.jpg"
            alt="Buzsu"
            className="h-10 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              className="flex items-center gap-1 text-sm font-medium text-buzsu-text hover:text-buzsu-blue transition-colors duration-200"
            >
              {link.label}
              {link.hasDropdown && <ChevronDown className="w-3.5 h-3.5" />}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-5">
          {/* Phone */}
          <a href="tel:08503022700" className="flex items-center gap-2 text-sm text-buzsu-text hover:text-buzsu-blue transition-colors">
            <Phone className="w-4 h-4" />
            <div className="flex flex-col leading-tight">
              <span className="font-medium">0850 302 27 00</span>
              <span className="text-[11px] text-buzsu-text-muted">7/24 Destek</span>
            </div>
          </a>

          {/* Icons */}
          <button className="p-2 hover:text-buzsu-blue transition-colors" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 hover:text-buzsu-blue transition-colors" aria-label="Account">
            <User className="w-5 h-5" />
          </button>
          <button className="p-2 hover:text-buzsu-blue transition-colors relative" aria-label="Cart">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
              0
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-white border-b border-buzsu-border shadow-lg">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href="#"
                className="flex items-center justify-between text-sm font-medium text-buzsu-text py-2 border-b border-buzsu-border/50"
              >
                {link.label}
                {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </a>
            ))}
            <a href="tel:08503022700" className="flex items-center gap-2 text-sm font-medium text-buzsu-text py-2">
              <Phone className="w-4 h-4" />
              0850 302 27 00
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
