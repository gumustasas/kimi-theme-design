# Buzsu V8 — Production Release

Premium su arıtma e-ticaret ana sayfası. Türkiye'nin en gelişmiş su arıtma teknolojilerini sunan Buzsu markası için üretilmiştir.

## 🚀 Deploy

### Vercel (Önerilen)

1. GitHub'da yeni repo oluştur
2. Bu dosyaları push et
3. [vercel.com](https://vercel.com) → Import Git Repository
4. Framework: Vite → Deploy

### Manuel Deploy

```bash
npm install
npm run build
# dist/ klasörünü herhangi bir statik hosta yükle
```

## 🛠 Geliştirme

```bash
npm install
npm run dev
# http://localhost:3000
```

## 📁 Proje Yapısı

```
src/
  sections/
    Navigation.tsx      # Sticky glass nav
    Hero.tsx            # Dark gradient + 2 ürün
    TrustBar.tsx        # 4 istatistik + 3 badge
    CategoryGrid.tsx    # 6 kategori kartı
    FeaturedProducts.tsx # Code + UltraMag kartları
    TechnologyFlow.tsx   # Su akış şeması
    WaterIntelligence.tsx # Türkiye haritası
    WhyBuzsu.tsx        # 5 avantaj
    SocialProof.tsx     # Google 4.9/5 + yorumlar
    FilterReminder.tsx  # Mavi CTA
    Footer.tsx          # 5 kolon + trust şeridi
  App.tsx               # Root
  index.css             # Global stiller + Tailwind
public/assets/          # 14 görsel (PNG/JPG)
```

## 🎯 Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS
- GSAP (animasyonlar)
- Lucide React (ikonlar)

## 📦 Build Pipeline

`npm run build` otomatik olarak:
1. TypeScript derler
2. Vite production build
3. Public asset'leri dist'e kopyalar (postbuild)
4. 16 dosya doğrulaması yapar

## 🔍 SEO

- `lang="tr"`
- Meta description (Buzsu Code Advantage + UltraMag)
- Optimize edilmiş title
- Semantic HTML (section, nav, footer)
- Heading hierarchy (h1→h2→h3)

## 📄 Lisans

© 2024 Buzsu. Tüm hakları saklıdır.
