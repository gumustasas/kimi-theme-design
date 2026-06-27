import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

const categories = [
  { title: 'Ev Tipi Arıtma Sistemleri', desc: 'Tezgah altı ve tezgah üstü çözümler', image: '/assets/cat-home-device.png' },
  { title: 'Su Sebili Sistemleri', desc: 'Sıcak & soğuk, arıtmalı modeller', image: '/assets/cat-water-dispenser.png' },
  { title: 'Filtre Setleri & Kartuşlar', desc: 'Orjinal yedek filtreler', image: '/assets/cat-filter-set.png' },
  { title: 'Kireç Önleme Sistemleri', desc: 'Tesisat koruması için manyetik çözümler', image: '/assets/cat-ultramag.png' },
  { title: 'Yedek Parçalar & Aksesuar', desc: 'Bakım ve onarım parçaları', image: '/assets/cat-spare-parts.png' },
  { title: 'Servis & Destek', desc: '81 ilde profesyonel teknik servis', image: '/assets/cat-service.png' },
];

export default function CategoryGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll('.cat-card');
    if (cards.length === 0) return;

    gsap.fromTo(
      cards,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.08,
        duration: 0.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === section) st.kill();
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-24 bg-white" id="products">
      <div className="max-w-container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-10">
          <h2 className="text-2xl lg:text-4xl font-bold text-buzsu-text">
            İhtiyacınıza en uygun çözüm
          </h2>
          <p className="text-sm text-buzsu-text-secondary mt-2 lg:mt-0">
            Tüm ürünlerde ücretsiz kargo ve montaj
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="cat-card group bg-white border border-buzsu-border rounded-2xl p-6 lg:p-8 cursor-pointer hover:-translate-y-1 hover:shadow-card-hover hover:border-buzsu-blue/20 transition-all duration-300"
            >
              <div className="h-28 lg:h-32 flex items-center justify-center mb-4">
                <img
                  src={cat.image}
                  alt={cat.title}
                  width="200"
                  height="200"
                  className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-base lg:text-lg font-semibold text-buzsu-text">
                {cat.title}
              </h3>
              <p className="text-xs text-buzsu-text-secondary mt-1 mb-2">{cat.desc}</p>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-buzsu-blue uppercase tracking-wide group-hover:gap-2 transition-all">
                İncele <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
