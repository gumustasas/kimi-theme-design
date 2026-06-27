import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Search, TrendingUp, MapPin } from 'lucide-react';

const stats = [
  { value: '81', label: 'İl Kapsamı' },
  { value: '500+', label: 'İlçe Verisi' },
  { value: '10.000+', label: 'Su Analizi' },
  { value: '7/24', label: 'Güncel Veri' },
];

const cities = [
  { name: 'İstanbul', top: '18%', left: '28%' },
  { name: 'Ankara', top: '32%', left: '48%' },
  { name: 'İzmir', top: '48%', left: '12%' },
  { name: 'Antalya', top: '68%', left: '32%' },
  { name: 'Samsun', top: '22%', left: '62%' },
  { name: 'Gaziantep', top: '62%', left: '72%' },
  { name: 'Diyarbakır', top: '52%', left: '82%' },
];

export default function WaterIntelligence() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const left = section.querySelector('.wi-left');
    const right = section.querySelector('.wi-right');

    if (left) {
      gsap.fromTo(left, { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 75%' } }
      );
    }
    if (right) {
      gsap.fromTo(right, { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.8, delay: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 75%' } }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === section) st.kill();
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-24 overflow-hidden" style={{ background: '#071321' }} id="water-intelligence">
      <div className="max-w-container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="wi-left flex-1">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-buzsu-blue/20 text-buzsu-blue text-xs font-semibold rounded-full mb-4">
              <TrendingUp className="w-3.5 h-3.5" /> ÜCRETSİZ SU ANALİZİ
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
              Şehrinizin Suyu Ne Kadar Sağlıklı?
            </h2>
            <p className="text-white/70 mb-8 max-w-md text-sm lg:text-base">
              Türkiye'nin 81 ilinin su kalite verilerini analiz ediyoruz. Şehrinizi yazın,
              size özel su arıtma çözümünü önerelim. <span className="text-buzsu-blue font-medium">10.000+ kişi</span> analiz yaptırdı.
            </p>

            <div className="flex gap-3 mb-8 max-w-md">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input type="text" placeholder="Örn: İstanbul, Ankara, İzmir..."
                  className="w-full pl-10 pr-4 py-3.5 bg-white/[0.08] border border-white/[0.15] rounded-lg text-white placeholder:text-white/40 focus:border-buzsu-blue focus:outline-none transition-colors text-sm"
                />
              </div>
              <button className="px-6 py-3.5 bg-buzsu-blue text-white font-semibold text-sm rounded-lg hover:bg-buzsu-blue-accent transition-colors whitespace-nowrap">
                Analiz Et
              </button>
            </div>

            <div className="grid grid-cols-4 gap-3">
              {stats.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="text-xl lg:text-2xl font-bold text-white">{value}</div>
                  <div className="text-[11px] text-white/50 mt-0.5">{label}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {cities.slice(0, 4).map(city => (
                <span key={city.name} className="inline-flex items-center gap-1.5 text-xs bg-white/5 border border-white/10 rounded-full px-3 py-1.5 text-white/70">
                  <MapPin className="w-3 h-3" /> {city.name}
                </span>
              ))}
            </div>
          </div>

          <div className="wi-right flex-1 relative">
            <img src="/assets/water-map-turkey.jpg" alt="Türkiye Su Kalitesi Haritası" className="w-full rounded-2xl" />
            <div className="absolute inset-0">
              {cities.map((city, i) => (
                <div key={city.name} className="absolute flex flex-col items-center group cursor-pointer" style={{ top: city.top, left: city.left }}>
                  <div className="w-3 h-3 rounded-full bg-buzsu-blue animate-pulse-glow relative" style={{ animationDelay: `${i * 0.3}s` }}>
                    <div className="absolute inset-0 rounded-full bg-buzsu-blue animate-ping opacity-20" />
                  </div>
                  <span className="text-[10px] text-white/80 mt-1 whitespace-nowrap bg-buzsu-dark/70 px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {city.name}
                  </span>
                </div>
              ))}
            </div>
            <a href="#" className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-buzsu-blue hover:text-buzsu-blue-accent transition-colors">
              Tüm Şehirleri Gör <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
