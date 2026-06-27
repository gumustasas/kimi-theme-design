import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Shield, MapPin, Truck, CreditCard, ShoppingCart, RefreshCw, Zap } from 'lucide-react';

const trustIcons = [
  { icon: Shield, label: '5 Yıl Garanti' },
  { icon: MapPin, label: '81 İl Servis' },
  { icon: Truck, label: 'Ücretsiz Kargo' },
  { icon: Zap, label: 'Ücretsiz Montaj' },
  { icon: CreditCard, label: '14 Gün İade' },
];

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const codeDeviceRef = useRef<HTMLImageElement>(null);
  const ultramagRef = useRef<HTMLImageElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(headlineRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 }, 0.1)
        .fromTo(subRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, 0.25)
        .fromTo(iconsRef.current?.children || [], { opacity: 0, y: 15 }, { opacity: 1, y: 0, stagger: 0.08, duration: 0.4 }, 0.4)
        .fromTo(ctaRef.current?.children || [], { opacity: 0, y: 15 }, { opacity: 1, y: 0, stagger: 0.1, duration: 0.4 }, 0.55)
        .fromTo(codeDeviceRef.current, { opacity: 0, x: 40, scale: 0.95 }, { opacity: 1, x: 0, scale: 1, duration: 0.8, ease: 'power2.out' }, 0.3)
        .fromTo(ultramagRef.current, { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 0.7 }, 0.5)
        .fromTo(badgeRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.4 }, 0.7);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[700px] pt-20 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #071321 0%, #0A1A2E 50%, #051220 100%)' }}
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="relative max-w-container mx-auto px-6 py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Left Content */}
          <div className="flex-1 max-w-xl lg:max-w-none">
            {/* Micro-badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/10 rounded-full mb-5">
              <span className="w-2 h-2 rounded-full bg-buzsu-green animate-pulse" />
              <span className="text-xs text-white/80 font-medium">200.000+ hanenin tercihi</span>
            </div>

            <h1
              ref={headlineRef}
              className="text-[28px] sm:text-4xl lg:text-[52px] font-extrabold text-white leading-[1.1] tracking-tight opacity-0"
            >
              Evinize En İyi Su Arıtma Cihazı —{' '}
              <span className="text-buzsu-blue">5.512 Kişi Satın Aldı</span>
            </h1>

            <p
              ref={subRef}
              className="mt-5 text-base lg:text-lg text-white/75 max-w-[540px] leading-relaxed opacity-0"
            >
              Buzsu Code Advantage ile musluk suyunuzu şişe su kalitesine çıkarın. UltraMag ile evinizin TÜM tesisatını kireçten koruyun. 7 aşamalı filtrasyon, alkali mineral su.
            </p>

            {/* Trust Icons */}
            <div ref={iconsRef} className="mt-7 flex flex-wrap gap-3 lg:gap-4">
              {trustIcons.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 text-white/90 opacity-0 bg-white/[0.07] border border-white/[0.06] px-3 py-2 rounded-lg">
                  <Icon className="w-4 h-4 text-buzsu-blue" />
                  <span className="text-xs font-semibold">{label}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div ref={ctaRef} className="mt-7 flex flex-wrap gap-4">
              <a
                href="#products"
                className="inline-flex items-center gap-2 px-7 py-4 bg-buzsu-blue text-white font-semibold text-sm rounded-lg hover:bg-buzsu-blue-accent hover:-translate-y-0.5 hover:shadow-blue transition-all duration-250 opacity-0"
              >
                <ShoppingCart className="w-4 h-4" /> Hemen Satın Al
              </a>
              <a
                href="#water-intelligence"
                className="inline-flex items-center gap-2 px-7 py-4 border border-white/40 text-white font-semibold text-sm rounded-lg hover:bg-white/10 hover:border-white/60 transition-all duration-250 opacity-0"
              >
                <RefreshCw className="w-4 h-4" /> Su Kalitesi Analizi (Ücretsiz)
              </a>
            </div>

            {/* Social proof microcopy */}
            <p className="mt-5 text-xs text-white/50 flex items-center gap-2">
              <span className="inline-flex items-center gap-1">
                <span className="text-buzsu-star">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                <span>4.9/5 — 1.244 değerlendirme</span>
              </span>
              <span className="text-white/30">|</span>
              <span>81 ilde servis</span>
              <span className="text-white/30">|</span>
              <span>14 gün iade garantisi</span>
            </p>
          </div>

          {/* Right Content - Product Composition */}
          <div className="flex-1 relative min-h-[280px] sm:min-h-[400px] lg:min-h-[500px] w-full flex items-center justify-center">
            {/* Water splash behind */}
            <img
              src="/assets/hero-water-splash.png"
              alt=""
              className="absolute w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] object-contain opacity-30 -z-10"
              style={{ top: '10%', right: '5%' }}
            />

            {/* Code Advantage Device */}
            <img
              ref={codeDeviceRef}
              src="/assets/hero-code-device.png"
              alt="Buzsu Code Advantage Su Arıtma Cihazı"
              className="relative w-[240px] lg:w-[300px] h-auto object-contain z-10 animate-float opacity-0"
            />

            {/* UltraMag Device */}
            <img
              ref={ultramagRef}
              src="/assets/hero-ultramag-device.png"
              alt="UltraMag Manyetik Kireç Önleyici"
              className="absolute w-[140px] lg:w-[180px] h-auto object-contain z-20 animate-float-delayed opacity-0"
              style={{ bottom: '5%', right: '0%' }}
            />

            {/* Warranty Badge */}
            <div
              ref={badgeRef}
              className="absolute top-0 right-0 lg:right-[5%] bg-buzsu-dark border border-buzsu-blue/40 rounded-xl px-4 py-3 z-30 opacity-0"
            >
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-extrabold text-white">5 YIL</div>
                <div className="text-xs font-semibold text-white/90 uppercase tracking-wide">Garanti</div>
                <div className="mt-1 flex items-center gap-1 justify-center">
                  <div className="w-3 h-3 rounded-full bg-buzsu-blue" />
                  <span className="text-[10px] text-white/70">Kore Teknolojisi</span>
                </div>
                <div className="mt-1 text-[10px] text-buzsu-green font-medium">+ Ücretsiz Montaj</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
