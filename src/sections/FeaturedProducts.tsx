import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, ArrowRight, ShoppingCart, Zap, Users } from 'lucide-react';

export default function FeaturedProducts() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const leftCard = section.querySelector('.fp-left');
    const rightCard = section.querySelector('.fp-right');
    if (!leftCard || !rightCard) return;

    gsap.fromTo(leftCard,
      { opacity: 0, x: -30 },
      {
        opacity: 1, x: 0, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: section, start: 'top 75%' },
      }
    );
    gsap.fromTo(rightCard,
      { opacity: 0, x: 30 },
      {
        opacity: 1, x: 0, duration: 0.6, delay: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: section, start: 'top 75%' },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === section) st.kill();
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-24 bg-[#F8F9FB]">
      <div className="max-w-container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Code Advantage Card */}
          <div
            className="fp-left relative overflow-hidden rounded-3xl p-8 lg:p-10 text-white min-h-[500px] flex flex-col justify-between"
            style={{ background: 'linear-gradient(135deg, #0A1628 0%, #0D1E3C 50%, #071321 100%)' }}
          >
            <div className="relative z-10">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-buzsu-blue text-white text-xs font-semibold rounded-full">
                  <Zap className="w-3 h-3" /> EN ÇOK SATAN
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/15 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                  <Users className="w-3 h-3" /> 5.512 kişi satın aldı
                </span>
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold mb-2">Buzsu Code Advantage</h3>
              <p className="text-sm text-white/60 mb-5">Musluk suyunuzu şişe su kalitesine çıkaran 7 aşamalı su arıtma sistemi</p>

              <ul className="space-y-2.5 mb-6">
                {[
                  '7 aşamalı gelişmiş filtrasyon (Kore)',
                  'Alkali mineral + antioksidan su',
                  'Kompakt tezgah altı tasarım',
                  'Dijital TDS göstergesi',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white/85">
                    <Check className="w-4 h-4 text-buzsu-blue flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>

              <div className="mb-1 flex items-baseline gap-2">
                <span className="text-base text-white/40 line-through">24.900 TL</span>
                <span className="text-3xl font-bold text-white">19.900 TL</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs text-buzsu-green font-semibold bg-buzsu-green/20 px-2.5 py-1 rounded-full">%20 İNDİRİM</span>
                <span className="text-xs text-white/60">Peşin Fiyatına 3 Taksit</span>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="https://www.buzsu.com.tr/code-su-aritma-cihazi/" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-buzsu-blue text-white font-semibold text-sm rounded-lg hover:bg-buzsu-blue-accent hover:-translate-y-0.5 hover:shadow-blue transition-all"
                >
                  <ShoppingCart className="w-4 h-4" /> Hemen Satın Al
                </a>
                <a href="https://www.buzsu.com.tr/code-su-aritma-cihazi/" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-semibold text-sm rounded-lg hover:bg-white/10 transition-all"
                >
                  Ürünü İncele <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <p className="mt-5 text-[11px] text-white/40 flex items-center gap-2">
                <span className="inline-flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-buzsu-green inline-block"></span>Stokta</span><span className="text-white/20">|</span><span>Bugün kargoda</span><span className="text-white/20">|</span><span>14 gün iade</span>
              </p>
            </div>
            <img src="/assets/featured-code-device.png" alt="Buzsu Code Advantage"
              className="absolute right-0 bottom-0 w-[120px] sm:w-[160px] lg:w-[200px] h-auto object-contain opacity-90"
            />
          </div>

          {/* UltraMag Card */}
          <div
            className="fp-right relative overflow-hidden rounded-3xl p-8 lg:p-10 text-white min-h-[500px] flex flex-col justify-between"
            style={{ background: 'linear-gradient(135deg, #0A1F14 0%, #0D2818 50%, #051F0E 100%)' }}
          >
            <div className="relative z-10">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-buzsu-green text-white text-xs font-semibold rounded-full">EV TESİSAT KORUMASI</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/15 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                  <Users className="w-3 h-3" /> 4.720 kişi satın aldı
                </span>
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold mb-2">UltraMag Kireç Önleyici</h3>
              <p className="text-sm text-white/60 mb-5">Evinizin TÜM tesisatını kireçten korur — kombi, bulaşık, çamaşır makinesi</p>

              <ul className="space-y-2.5 mb-6">
                {[
                  'Elektrik gerektirmez — %0 enerji',
                  'Kimyasal kullanmaz — %100 doğal',
                  'Bakım gerektirmez — tak çalıştır',
                  '10 yıl garanti — paslanmaz çelik',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white/85">
                    <Check className="w-4 h-4 text-buzsu-green flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>

              <div className="mb-1 flex items-baseline gap-2">
                <span className="text-base text-white/40 line-through">9.490 TL</span>
                <span className="text-3xl font-bold text-white">6.990 TL</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs text-buzsu-green font-semibold bg-buzsu-green/20 px-2.5 py-1 rounded-full">%26 İNDİRİM</span>
                <span className="text-xs text-white/60">Peşin Fiyatına 3 Taksit</span>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="https://www.buzsu.com.tr/ultra-manyetik-kirec-onleyici/" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-buzsu-green text-white font-semibold text-sm rounded-lg hover:bg-buzsu-green-dark hover:-translate-y-0.5 transition-all"
                >
                  <ShoppingCart className="w-4 h-4" /> Hemen Satın Al
                </a>
                <a href="https://www.buzsu.com.tr/ultra-manyetik-kirec-onleyici/" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-semibold text-sm rounded-lg hover:bg-white/10 transition-all"
                >
                  Ürünü İncele <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <p className="mt-5 text-[11px] text-white/40 flex items-center gap-2">
                <span className="inline-flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-buzsu-green inline-block"></span>Stokta</span><span className="text-white/20">|</span><span>Bugün kargoda</span><span className="text-white/20">|</span><span>14 gün iade</span>
              </p>
            </div>
            <img src="/assets/featured-ultramag-device.png" alt="UltraMag"
              className="absolute right-0 bottom-0 w-[110px] sm:w-[140px] lg:w-[180px] h-auto object-contain opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
