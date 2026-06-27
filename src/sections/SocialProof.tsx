import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Play, Quote, TrendingUp, Shield } from 'lucide-react';

const reviews = [
  {
    name: 'Selin A.', city: 'İstanbul',
    text: 'Öncesi: Su tadı berbat, çayda tortu vardı. Sonrası: Şişe su aramıyoruz artık. Çayın tadı bambaşka!',
    rating: 5, product: 'Code Advantage', before: 'Su tadı kötü', after: 'Şişe su kalitesinde',
  },
  {
    name: 'Mehmet T.', city: 'Ankara',
    text: 'Kombi tamir parasını düşününce bu cihaz kendini 3 ayda amorti etti. 8 aydır kireç sorunu yok.',
    rating: 5, product: 'UltraMag', before: 'Kireçli tesisat', after: 'Kireçsiz, tasarruflu',
  },
  {
    name: 'Burak Y.', city: 'İzmir',
    text: 'Ayda 180 TL hazır su parası ödüyorduk. Şimdi 0 TL. 11. aydır kullanıyoruz, çok memnunuz.',
    rating: 5, product: 'Code + UltraMag', before: 'Aylık 180 TL su masrafı', after: 'Sınırsız temiz su',
  },
];

export default function SocialProof() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const left = section.querySelector('.sp-left');
    const cards = section.querySelectorAll('.sp-card');

    if (left) {
      gsap.fromTo(left, { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 80%' } }
      );
    }
    if (cards.length) {
      gsap.fromTo(cards, { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 80%' } }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === section) st.kill();
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-24 bg-[#F8F9FB]" id="reviews">
      <div className="max-w-container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-10">
          <div>
            <h2 className="text-2xl lg:text-4xl font-bold text-buzsu-text">Gerçek Müşteriler, Gerçek Sonuçlar</h2>
            <p className="text-buzsu-text-secondary mt-2">1.244 değerlendirme ortalaması — %99 müşteri memnuniyeti</p>
          </div>
          <div className="flex items-center gap-2 mt-4 lg:mt-0">
            <Shield className="w-4 h-4 text-buzsu-green" />
            <span className="text-xs text-buzsu-text-secondary">Onaylı alıcı değerlendirmeleri</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Google Rating */}
          <div className="sp-left flex-shrink-0 w-full lg:w-56">
            <div className="bg-white rounded-2xl p-6 border border-buzsu-border h-full flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 via-red-500 to-yellow-500 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">G</span>
                </div>
                <span className="text-sm text-buzsu-text-secondary">Google</span>
              </div>
              <div className="text-5xl font-extrabold text-buzsu-text mb-1">
                4.9<span className="text-xl text-buzsu-text-muted">/5</span>
              </div>
              <div className="flex gap-0.5 mb-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-6 h-6 text-buzsu-star fill-buzsu-star" />
                ))}
              </div>
              <div className="text-sm text-buzsu-text-secondary font-medium">1.244 değerlendirme</div>
              <div className="mt-3 pt-3 border-t border-buzsu-border space-y-1.5">
                <div className="flex items-center gap-2 text-xs text-buzsu-text-secondary">
                  <TrendingUp className="w-3.5 h-3.5 text-buzsu-green" />
                  <span>%93 tekrar tercih</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-buzsu-text-secondary">
                  <Shield className="w-3.5 h-3.5 text-buzsu-blue" />
                  <span>Doğrulanmış yorumlar</span>
                </div>
              </div>
            </div>
          </div>

          {/* Review Cards */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {reviews.map((review) => (
              <div key={review.name}
                className="sp-card bg-white rounded-xl overflow-hidden border border-buzsu-border group cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex">
                  <div className="flex-1 bg-red-50 px-3 py-2 border-r border-red-100">
                    <div className="text-[10px] text-red-500 font-semibold uppercase">Önce</div>
                    <div className="text-xs text-red-700 font-medium">{review.before}</div>
                  </div>
                  <div className="flex-1 bg-green-50 px-3 py-2">
                    <div className="text-[10px] text-green-600 font-semibold uppercase">Sonra</div>
                    <div className="text-xs text-green-700 font-medium">{review.after}</div>
                  </div>
                </div>

                <div className="relative h-28 bg-gradient-to-br from-buzsu-dark to-buzsu-trust flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <Play className="w-4 h-4 text-white fill-white" />
                  </div>
                  <div className="absolute bottom-2 left-2 flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3.5 h-3.5 text-buzsu-star fill-buzsu-star" />
                    ))}
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-start gap-2">
                    <Quote className="w-4 h-4 text-buzsu-blue/70 flex-shrink-0 mt-1" />
                    <p className="text-sm text-buzsu-text leading-normal">{review.text}</p>
                  </div>
                  <div className="mt-3 pt-3 border-t border-buzsu-border flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold text-buzsu-text">{review.name}</div>
                      <div className="text-xs text-buzsu-text-muted">{review.city}</div>
                    </div>
                    <span className="text-[10px] bg-buzsu-blue/10 text-buzsu-blue px-2 py-1 rounded-full font-medium">{review.product}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
