import { Phone, MapPin, Mail, Shield, Award, Clock, Truck } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ background: '#050E1A' }}>
      {/* Trust Strip */}
      <div className="border-b border-white/10">
        <div className="max-w-container mx-auto px-6 py-5">
          <div className="flex flex-wrap justify-center gap-5 lg:gap-10">
            {[
              { icon: Shield, text: '256-bit SSL Güvenlik' },
              { icon: Award, text: 'NSF Onaylı Ürünler' },
              { icon: Clock, text: '7/24 Canlı Destek' },
              { icon: Truck, text: '81 İle Ücretsiz Kargo' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-white/50">
                <Icon className="w-4 h-4 text-buzsu-blue" />
                <span className="text-xs font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-container mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="/assets/logo-buzsu.jpg"
              alt="Buzsu"
              className="h-10 w-auto object-contain mb-4 brightness-200"
            />
            <p className="text-sm text-white/60 mb-4">
              2009'dan beri Türkiye'nin su arıtma teknolojisi. 
              200.000+ haneye temiz su ulaştırdık.
            </p>
            <div className="flex gap-2">
              {['Instagram', 'Facebook', 'YouTube', 'WhatsApp'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-buzsu-blue transition-colors"
                  aria-label={social}
                >
                  <span className="text-[10px] text-white/60 font-medium">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">Ürünler</h4>
            <ul className="space-y-2.5">
              {['Code Advantage', 'UltraMag Kireç Önleyici', 'Ev Tipi Arıtma', 'Endüstriyel Sistem', 'Su Sebili', 'Filtre Setleri'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">Kurumsal</h4>
            <ul className="space-y-2.5">
              {['Hakkımızda', 'Bayilik Başvurusu', 'İletişim', 'Blog', 'SSS'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">Destek</h4>
            <ul className="space-y-2.5">
              {['Servis Talebi', 'Filtre Değişimi', 'Garanti Koşulları', 'Kargo Takip', 'İade Politikası'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">İletişim</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-buzsu-blue flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:08503022700" className="text-sm text-white font-medium hover:text-buzsu-blue transition-colors">0850 302 27 00</a>
                  <div className="text-xs text-white/40">7/24 WhatsApp desteği</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-buzsu-blue flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/50">Kavallar Cad. No:42/1<br />Merkez / Bartın</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-buzsu-blue" />
                <span className="text-sm text-white/50">info@buzsu.com.tr</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">© 2024 Buzsu Su Arıtma Sistemleri. Tüm hakları saklıdır.</p>
          <div className="flex gap-4">
            <a href="#" className="text-xs text-white/40 hover:text-white/60 transition-colors">Gizlilik Politikası</a>
            <span className="text-white/20">|</span>
            <a href="#" className="text-xs text-white/40 hover:text-white/60 transition-colors">Kullanım Koşulları</a>
            <span className="text-white/20">|</span>
            <a href="#" className="text-xs text-white/40 hover:text-white/60 transition-colors">Mesafeli Satış Sözleşmesi</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
