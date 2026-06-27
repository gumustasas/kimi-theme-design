import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X, Check, Flame, UtensilsCrossed, WashingMachine, Bath, GlassWater, Droplets, Home, ArrowRight } from 'lucide-react';

export default function TechnologyFlow() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const nodes = section.querySelectorAll('.flow-node');
    if (nodes.length === 0) return;

    gsap.fromTo(nodes,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1, scale: 1, stagger: 0.2, duration: 0.4, ease: 'power2.out',
        scrollTrigger: { trigger: section, start: 'top 70%' },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === section) st.kill();
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-24 bg-white" id="technology">
      <div className="max-w-container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-buzsu-blue/10 text-buzsu-blue text-xs font-semibold rounded-full mb-4">
            <Droplets className="w-3.5 h-3.5" /> ÇİFT KORUMA SİSTEMİ
          </span>
          <h2 className="text-2xl lg:text-4xl font-bold text-buzsu-text mb-4">
            Evinizdeki Her Musluktan Temiz Su
          </h2>
          <p className="text-buzsu-text-secondary max-w-2xl mx-auto text-sm lg:text-base">
            UltraMag tesisat suyunuzu korur, Buzsu Code içme suyunuzu arıtır.
            İki sistem, bir çözüm: <span className="font-semibold text-buzsu-text">Evinizdeki her damla saf.</span>
          </p>
        </div>

        {/* Flow */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-3 lg:gap-5 flex-wrap">
            <div className="flow-node flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-gray-100 border-2 border-buzsu-border flex items-center justify-center mb-2">
                <Droplets className="w-6 h-6 text-gray-400" />
              </div>
              <span className="text-xs font-medium text-buzsu-text-secondary">Şebeke Suyu</span>
            </div>

            <div className="flex flex-col items-center">
              <ArrowRight className="w-5 h-5 text-buzsu-border mb-1" />
              <span className="text-[10px] text-buzsu-text-muted">Kireçli, klorlu</span>
            </div>

            <div className="flow-node flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-buzsu-green/10 border-2 border-buzsu-green flex items-center justify-center mb-2">
                <Droplets className="w-7 h-7 text-buzsu-green" />
              </div>
              <span className="text-xs font-bold text-buzsu-text">UltraMag</span>
              <span className="text-[10px] text-buzsu-green font-medium">Kireç Önleyici</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex gap-1">
                <ArrowRight className="w-4 h-4 text-buzsu-border" />
                <ArrowRight className="w-4 h-4 text-buzsu-blue" />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flow-node flex items-center gap-2 bg-buzsu-blue/5 border border-buzsu-blue/20 rounded-lg px-3 py-2">
                <GlassWater className="w-4 h-4 text-buzsu-blue" />
                <div>
                  <span className="text-xs font-bold text-buzsu-text block">Buzsu Code</span>
                  <span className="text-[10px] text-buzsu-blue">İçme Suyu</span>
                </div>
              </div>
              <div className="flow-node flex items-center gap-2 bg-gray-50 border border-buzsu-border rounded-lg px-3 py-2">
                <Home className="w-4 h-4 text-buzsu-text-secondary" />
                <span className="text-xs text-buzsu-text-secondary">Tüm Ev Aletleri</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {[
              { icon: Flame, label: 'Kombi' },
              { icon: UtensilsCrossed, label: 'Bulaşık' },
              { icon: WashingMachine, label: 'Çamaşır' },
              { icon: Bath, label: 'Duş' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flow-node flex items-center gap-2 bg-white border border-buzsu-border rounded-full px-4 py-2">
                <Icon className="w-4 h-4 text-buzsu-text-secondary" />
                <span className="text-xs font-medium text-buzsu-text">{label}</span>
                <Check className="w-3 h-3 text-buzsu-green" />
              </div>
            ))}
          </div>
        </div>

        {/* Info Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="bg-red-50 rounded-xl p-5 border border-red-100">
            <h4 className="text-sm font-bold text-red-800 mb-3 flex items-center gap-2">
              <X className="w-4 h-4" /> Kireçsiz Sistemle Kaybettikleriniz
            </h4>
            <ul className="space-y-2">
              {[
                'Fatura: %30 fazla enerji tüketimi',
                'Kombi: Yılda ort. 2.400 TL bakım',
                'Çamaşır: Kıyafet ömrü %50 azalır',
                'Musluk: 2-3 yılda değiştirme',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-xs text-red-700">
                  <X className="w-3 h-3 flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center justify-center bg-buzsu-dark rounded-xl p-5 text-center">
            <Droplets className="w-10 h-10 text-buzsu-blue mb-3" />
            <h4 className="text-base font-bold text-white mb-2">Hangisi Size Uygun?</h4>
            <p className="text-xs text-white/60 mb-4 max-w-[200px]">
              2 dakikalık testle su arıtma ve kireç önleme çözümünüzü öğrenin.
            </p>
            <a href="#water-intelligence"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-buzsu-blue text-white text-sm font-semibold rounded-lg hover:bg-buzsu-blue-accent transition-colors"
            >
              Testi Başlat <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-green-50 rounded-xl p-5 border border-green-100">
            <h4 className="text-sm font-bold text-green-800 mb-3 flex items-center gap-2">
              <Check className="w-4 h-4" /> UltraMag ile Kazanımlarınız
            </h4>
            <ul className="space-y-2">
              {[
                'Yıllık 2.400+ TL kombi bakım tasarrufu',
                'Enerji faturasında %30 azalma',
                'Ev aletleri ömrü 2 kat uzar',
                '10 yıl garanti, bakım yok',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-xs text-green-700">
                  <Check className="w-3 h-3 flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
