import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Bell, CheckCircle } from 'lucide-react';

export default function FilterReminder() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
        opacity: 0, y: 20, duration: 0.5, ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="px-6 py-4">
      <div
        ref={sectionRef}
        className="max-w-container mx-auto rounded-3xl px-8 lg:px-12 py-10 lg:py-14 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1F6BFF 0%, #0D4DD9 100%)' }}
      >
        {/* Water texture background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                <Bell className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-white">
                  Filtre Değişimini Unutmayın
                </h3>
              </div>
            </div>
            <p className="text-sm text-white/80 max-w-lg mb-4">
              Ailenizin sağlığı için filtrelerinizi zamanında değiştirin. Size ücretsiz hatırlatma SMS'i gönderelim. 
              <span className="text-white font-medium"> 2.400+ kişi</span> bu hizmetten faydalanıyor.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-white/60">
              <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-buzsu-green" /> Ücretsiz SMS hatırlatma</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-buzsu-green" /> Filtre siparişine özel indirim</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-buzsu-green" /> İstediğiniz zaman iptal</span>
            </div>
          </div>

          <div className="w-full lg:w-auto">
            {!submitted ? (
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="tel"
                  placeholder="05XX XXX XX XX"
                  className="flex-1 lg:w-60 px-5 py-3.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:border-white/40 focus:outline-none transition-colors text-sm"
                />
                <button
                  onClick={() => setSubmitted(true)}
                  className="px-6 py-3.5 bg-white text-buzsu-blue font-semibold text-sm rounded-lg hover:bg-white/90 transition-colors whitespace-nowrap"
                >
                  Hatırlatıcı Kur
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3 bg-white/15 rounded-lg px-6 py-4">
                <CheckCircle className="w-6 h-6 text-buzsu-green" />
                <div>
                  <div className="text-white font-semibold text-sm">Hatırlatıcı Kuruldu!</div>
                  <div className="text-white/70 text-xs">Filtre değişim zamanında SMS alacaksınız.</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
