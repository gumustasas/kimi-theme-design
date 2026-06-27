import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Map, Package, RefreshCw, Headphones } from 'lucide-react';

const advantages = [
  { icon: Award, title: 'NSF Onaylı Bileşenler', desc: 'Dünya standartlarında kalite', detail: 'Tüm parçalar FDA onaylı' },
  { icon: Map, title: '81 İl Servis Ağı', desc: 'Kapınıza kadar montaj', detail: 'Ortalama 48 saatte kurulum' },
  { icon: Package, title: '10 Yıl Parça Garantisi', desc: 'Uzun ömürlü yedek parça', detail: 'Stoktan hızlı teslimat' },
  { icon: RefreshCw, title: 'Kolay Filtre Değişimi', desc: 'Kendiniz yapabilirsiniz', detail: 'Videolu anlatım desteği' },
  { icon: Headphones, title: '7/24 Canlı Destek', desc: 'WhatsApp + Telefon', detail: 'Ortalama 2 dk yanıt süresi' },
];

export default function WhyBuzsu() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll('.why-item');
    if (items.length === 0) return;

    gsap.fromTo(items,
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0, stagger: 0.1, duration: 0.5, ease: 'power3.out',
        scrollTrigger: { trigger: section, start: 'top 80%' },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === section) st.kill();
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-24 bg-white" id="why-buzsu">
      <div className="max-w-container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-4xl font-bold text-buzsu-text mb-3">
            Neden 10.000+ Aile Buzsu'yu Tercih Etti?
          </h2>
          <p className="text-buzsu-text-secondary text-sm max-w-lg mx-auto">
            Türkiye'nin her yerinden müşterilerimizin bizi seçme nedenleri
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {advantages.map(({ icon: Icon, title, desc, detail }) => (
            <div key={title} className="why-item flex flex-col items-center text-center max-w-[180px] group">
              <div className="w-14 h-14 rounded-full bg-buzsu-blue/10 flex items-center justify-center mb-4 group-hover:bg-buzsu-blue/20 transition-colors">
                <Icon className="w-7 h-7 text-buzsu-blue" />
              </div>
              <h3 className="text-sm font-semibold text-buzsu-text mb-1">{title}</h3>
              <p className="text-xs text-buzsu-text-secondary mb-1">{desc}</p>
              <p className="text-[11px] text-buzsu-text-muted">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
