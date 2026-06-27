import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, MapPin, Wrench, Package, Star, Clock, Shield } from 'lucide-react';

const stats = [
  { icon: Users, value: 10000, suffix: '+', label: 'Mutlu Aile' },
  { icon: MapPin, value: 81, suffix: '', label: 'İlde Hizmet' },
  { icon: Wrench, value: 500, suffix: '+', label: 'Servis Noktası' },
  { icon: Package, value: 14, suffix: '', label: 'Gün İade Garantisi' },
];

const trustBadges = [
  { icon: Star, text: '4.9/5 Puan' },
  { icon: Clock, text: 'Bugün Kargoda' },
  { icon: Shield, text: 'NSF Onaylı' },
];

export default function TrustBar() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const hasAnimated = useRef(false);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 85%',
      onEnter: () => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;

        stats.forEach((stat, i) => {
          const obj = { val: 0 };
          gsap.to(obj, {
            val: stat.value,
            duration: 1.5,
            ease: 'power2.out',
            delay: i * 0.15,
            onUpdate: () => {
              setCounts(prev => {
                const next = [...prev];
                next[i] = Math.round(obj.val);
                return next;
              });
            },
          });
        });
      },
    });

    return () => trigger.kill();
  }, []);

  return (
    <div className="relative z-10 px-6 -mt-10">
      <div
        ref={sectionRef}
        className="max-w-[1200px] mx-auto rounded-2xl px-6 lg:px-10 py-6"
        style={{ background: '#0A1A2E' }}
      >
        {/* Main Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {stats.map(({ icon: Icon, suffix, label }, i) => (
            <div key={label} className="flex flex-col items-center text-center">
              <Icon className="w-6 h-6 text-buzsu-blue mb-2" />
              <span className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-none">
                {counts[i].toLocaleString()}{suffix}
              </span>
              <span className="text-xs text-white/60 mt-0.5">{label}</span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-4 border-t border-white/10" />

        {/* Trust Badges Row */}
        <div className="flex flex-wrap justify-center gap-5 lg:gap-10">
          {trustBadges.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-white/70">
              <Icon className="w-4 h-4 text-buzsu-green flex-shrink-0" />
              <span className="text-xs font-semibold text-white/80">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
