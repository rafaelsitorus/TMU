import { renderPage, updateMainContent } from './layout'
import { productCategories } from './product-data'

// ─── Editable text constants ─────────────────────────────────
const PAGE_TITLE = 'Produk berkualitas tinggi'

const INTRO_HEADING = 'Peralatan kelistrikan berstandar tinggi.'
const INTRO_PARAGRAPH_1 = 'Kami menyediakan berbagai produk dan peralatan kelistrikan berkualitas untuk mendukung proyek konstruksi Anda. Semua produk memenuhi standar nasional dan internasional.'
const INTRO_PARAGRAPH_2 = 'Dari genset hingga kabel, setiap produk dipilih dari produsen terpercaya untuk menjamin keandalan dan keamanan sistem kelistrikan proyek Anda.'
const INTRO_CTA = 'Minta penawaran harga.'

const HERO_IMAGE = 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&h=500&fit=crop'

const CATEGORIES_LABEL = 'Kategori Produk'

const QUALITY_LABEL = 'Jaminan Kualitas'
const QUALITY_HEADING = 'Standar internasional untuk setiap produk.'
const QUALITY_PARAGRAPH_1 = 'Semua produk telah melalui proses quality control ketat dan memiliki sertifikasi SNI, IEC, dan standar internasional lainnya.'
const QUALITY_PARAGRAPH_2 = 'Kami bekerja sama dengan produsen dan distributor resmi untuk memastikan keaslian dan garansi setiap produk.'

const CTA_HEADING = 'Butuh produk untuk proyek Anda?'
const CTA_DESCRIPTION = 'Hubungi kami untuk katalog lengkap dan penawaran harga terbaik.'
const CTA_BUTTON = 'MINTA PENAWARAN'

// ─── Category display names ──────────────────────────────────
const catDisplayNames: Record<string, string> = {
  genset: 'Genset / Generator Set',
  panel: 'Panel Listrik',
  ups: 'UPS System',
  cable: 'Kabel & Aksesoris',
}

// ─── Category icon paths ─────────────────────────────────────
const catIcons: Record<string, { iconPath: string; colorBg: string; colorBorder: string; colorText: string }> = {
  genset: { iconPath: 'M13 10V3L4 14h7v7l9-11h-7z', colorBg: 'bg-blue-600/20', colorBorder: 'border-blue-500/30', colorText: 'text-blue-400' },
  panel:  { iconPath: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z', colorBg: 'bg-amber-500/20', colorBorder: 'border-amber-400/30', colorText: 'text-amber-400' },
  ups:    { iconPath: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4', colorBg: 'bg-green-600/20', colorBorder: 'border-green-500/30', colorText: 'text-green-400' },
  cable:  { iconPath: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4', colorBg: 'bg-purple-600/20', colorBorder: 'border-purple-500/30', colorText: 'text-purple-400' },
}

// ─── Brand info ──────────────────────────────────────────────
const brandInfo: Record<string, { tagline: string; desc: string; img: string }> = {
  caterpillar: { tagline: 'Power you can rely on.', desc: 'Genset Caterpillar terkenal dengan keandalan, daya tahan, dan performa tinggi. Tersedia dalam berbagai kapasitas untuk kebutuhan industri dan komersial.', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=500&fit=crop' },
  cummins:     { tagline: 'Dependable power solutions.', desc: 'Cummins menyediakan generator set diesel berkualitas tinggi dengan efisiensi bahan bakar optimal dan teknologi emisi rendah.', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=500&fit=crop' },
  perkins:     { tagline: 'Engineered for performance.', desc: 'Perkins dikenal sebagai mesin diesel ringan dan efisien, cocok untuk genset portable hingga aplikasi industri menengah.', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=500&fit=crop' },
  mtu:         { tagline: 'Premium power generation.', desc: 'MTU (Rolls-Royce Power Systems) menghadirkan genset premium kelas dunia untuk aplikasi kritis seperti data center dan rumah sakit.', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=500&fit=crop' },
  man:         { tagline: 'Engineered in Germany.', desc: 'MAN Energy Solutions menyediakan genset berkapasitas besar dengan teknologi Jerman untuk proyek infrastruktur dan industri berat.', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=500&fit=crop' },
  deutz:       { tagline: 'Innovation since 1864.', desc: 'Deutz memproduksi mesin diesel compact dan efisien dengan rekam jejak lebih dari 150 tahun di dunia power generation.', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=500&fit=crop' },
  schneider:   { tagline: 'Life is On.', desc: 'Schneider Electric menyediakan panel distribusi, kontrol, dan otomasi gedung dengan standar internasional terdepan.', img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&h=500&fit=crop' },
  abb:         { tagline: 'Pioneering technology.', desc: 'ABB menghadirkan panel listrik, switchgear, dan solusi distribusi tenaga untuk industri dan infrastruktur.', img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&h=500&fit=crop' },
  simetri:     { tagline: 'Kualitas lokal, standar global.', desc: 'Simetri memproduksi panel listrik berkualitas dengan harga kompetitif, memenuhi standar SNI untuk pasar Indonesia.', img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&h=500&fit=crop' },
  sier:        { tagline: 'Solusi panel terpercaya.', desc: 'Sier menyediakan panel distribusi dan kontrol untuk berbagai kebutuhan proyek mekanikal-elektrikal.', img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&h=500&fit=crop' },
  borri:       { tagline: 'Uninterrupted confidence.', desc: 'Borri UPS Italy memberikan perlindungan daya tak terputus untuk data center, rumah sakit, dan fasilitas kritis.', img: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1200&h=500&fit=crop' },
  dale:        { tagline: 'Reliable power protection.', desc: 'Dale menyediakan solusi UPS handal untuk kebutuhan industri dan komersial dengan desain modular.', img: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1200&h=500&fit=crop' },
  supreme:     { tagline: 'Supreme quality cables.', desc: 'Supreme Cable Manufacturing memproduksi berbagai jenis kabel listrik berkualitas tinggi standar SNI dan IEC.', img: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=1200&h=500&fit=crop' },
  metal:       { tagline: 'Connecting power.', desc: 'Metal Indonusa menyediakan kabel tegangan rendah hingga menengah untuk kebutuhan instalasi dan distribusi.', img: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=1200&h=500&fit=crop' },
  kabelindo:   { tagline: 'Trusted since 1973.', desc: 'Kabelindo Murni memproduksi kabel berkualitas dengan pengalaman lebih dari 50 tahun di industri kelistrikan Indonesia.', img: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=1200&h=500&fit=crop' },
  jembo:       { tagline: 'Quality cables for life.', desc: 'Jembo Cable Company menyediakan kabel tembaga dan aluminium berkualitas tinggi untuk berbagai aplikasi.', img: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=1200&h=500&fit=crop' },
}

// ─── URL params ──────────────────────────────────────────────
// ─── Render function ─────────────────────────────────────────
function render(isInitialLoad: boolean) {
  // ─── URL params ──────────────────────────────────────────────
  const params    = new URLSearchParams(window.location.search)
  const catSlug   = params.get('cat')
  const brandSlug = params.get('brand')

  const activeCat   = productCategories.find(c => c.slug === catSlug)
  const activeBrand = activeCat?.brands.find(b => b.slug === brandSlug)

  const pageTitle = activeBrand
    ? `${activeBrand.name} — ${activeCat!.name}`
    : PAGE_TITLE

  // ─── Helper: Brand page ────────────────────────────────────────
  function buildBrandPage(): string {
  if (!activeBrand || !activeCat) return buildOverviewPage()

  const info    = brandInfo[activeBrand.slug] || { tagline: '', desc: 'Informasi produk.', img: HERO_IMAGE }
  const catName = catDisplayNames[activeCat.slug] || activeCat.name

  const otherBrandsHTML = activeCat.brands
    .filter(b => b.slug !== activeBrand!.slug)
    .map(b => `<a href="/product.html?cat=${activeCat!.slug}&brand=${b.slug}" class="px-4 py-1.5 glass-panel text-xs text-white/60 hover:text-white/90 transition-colors">${b.name}</a>`)
    .join('')

  return `
  <!-- Accent line -->
  <div class="accent-line mb-10"></div>

  <!-- Brand intro -->
  <div class="fade-section">
    <div class="grid md:grid-cols-3 gap-8 md:gap-10 py-6">
      <div>
        <span class="text-[10px] tracking-[0.2em] text-white/30 uppercase">${catName}</span>
        <h2 class="text-3xl md:text-4xl font-light leading-tight tracking-tight text-white/90 mt-2">${activeBrand.name}</h2>
      </div>
      <div class="text-sm text-white/50 leading-relaxed space-y-4">
        <p class="text-lg text-white/40 font-light italic">${info.tagline}</p>
      </div>
      <div class="text-sm text-white/40 leading-relaxed space-y-4">
        <p>${info.desc}</p>
      </div>
    </div>
  </div>

  <!-- Section Divider -->
  <div class="section-divider my-4"></div>

  <!-- Hero image -->
  <div class="img-overlay-card">
    <img src="${info.img}" alt="${activeBrand.name}" class="w-full h-56 md:h-80 object-cover opacity-60 hover:opacity-80 transition-opacity duration-700">
    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
    <div class="absolute bottom-0 left-0 right-0 p-8 md:p-12">
      <span class="text-[10px] tracking-[0.2em] text-blue-400 uppercase font-medium">${catName} · Brand</span>
      <h3 class="text-2xl md:text-3xl font-light text-white/90 mt-2">${activeBrand.name}</h3>
    </div>
  </div>

  <!-- Section Divider -->
  <div class="section-divider my-4"></div>

  <!-- Key features -->
  <div class="py-8 fade-section">
    <div class="flex items-center gap-2 mb-8">
      <span class="glow-dot text-blue-400"></span>
      <span class="text-[11px] tracking-[0.2em] text-white/50 uppercase">Keunggulan</span>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div class="glass-panel p-6">
        <div class="text-2xl font-light text-white/80 mb-2">✓</div>
        <div class="text-[10px] tracking-[0.15em] text-white/40 uppercase">Garansi Resmi</div>
      </div>
      <div class="glass-panel p-6">
        <div class="text-2xl font-light text-white/80 mb-2">✓</div>
        <div class="text-[10px] tracking-[0.15em] text-white/40 uppercase">Sertifikasi SNI/IEC</div>
      </div>
      <div class="glass-panel p-6">
        <div class="text-2xl font-light text-white/80 mb-2">✓</div>
        <div class="text-[10px] tracking-[0.15em] text-white/40 uppercase">Support Teknis</div>
      </div>
      <div class="glass-panel p-6">
        <div class="text-2xl font-light text-white/80 mb-2">✓</div>
        <div class="text-[10px] tracking-[0.15em] text-white/40 uppercase">Spare Part Tersedia</div>
      </div>
    </div>
  </div>

  <!-- Section Divider -->
  <div class="section-divider my-4"></div>

  <!-- Other brands in category -->
  <div class="py-8 md:py-12">
    <div class="flex items-center gap-2 mb-6">
      <span class="glow-dot text-purple-400"></span>
      <span class="text-[11px] tracking-[0.2em] text-white/50 uppercase">Brand ${catName} Lainnya</span>
    </div>
    <div class="flex flex-wrap gap-2">
      ${otherBrandsHTML}
    </div>
  </div>

  <!-- Section Divider -->
  <div class="section-divider my-4"></div>

  <!-- CTA -->
  <div class="py-8 md:py-12">
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      <div>
        <h3 class="text-xl font-light mb-2 text-white/80">Tertarik dengan produk ${activeBrand.name}?</h3>
        <p class="text-sm text-white/40">Hubungi kami untuk katalog lengkap dan penawaran harga terbaik.</p>
      </div>
      <a href="/contact.html" class="contact-pill inline-block px-8 py-3 rounded-full text-sm font-medium text-white/80 tracking-wider text-center">
        MINTA PENAWARAN
      </a>
    </div>
  </div>

  `
}

// ─── Overview page ───────────────────────────────────────────
function buildOverviewPage(): string {
  const categoriesHTML = productCategories.map(cat => {
    const displayName = catDisplayNames[cat.slug] || cat.name
    const icon = catIcons[cat.slug] || catIcons.genset
    const brandsHTML = cat.brands
      .map(b => `<a href="/product.html?cat=${cat.slug}&brand=${b.slug}" class="px-3 py-1.5 glass-panel text-xs text-white/60 hover:text-white/90 transition-colors">${b.name}</a>`)
      .join('')
    return `
      <div class="glass-panel p-6 fade-section">
        <div class="w-10 h-10 ${icon.colorBg} border ${icon.colorBorder} rounded-xl flex items-center justify-center mb-4">
          <svg class="w-5 h-5 ${icon.colorText}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${icon.iconPath}"/>
          </svg>
        </div>
        <h4 class="font-medium text-white/85 mb-3">${displayName}</h4>
        <div class="flex flex-wrap gap-2">
          ${brandsHTML}
        </div>
      </div>`
  }).join('')

  return `
  <!-- Accent line -->
  <div class="accent-line mb-10"></div>

  <!-- Intro -->
  <div class="fade-section">
    <div class="grid md:grid-cols-3 gap-8 md:gap-10 py-6">
      <div>
        <h2 class="text-3xl md:text-4xl font-light leading-tight tracking-tight text-white/90">${INTRO_HEADING}</h2>
      </div>
      <div class="text-sm text-white/50 leading-relaxed space-y-4">
        <p>${INTRO_PARAGRAPH_1}</p>
      </div>
      <div class="text-sm text-white/40 leading-relaxed space-y-4">
        <p>${INTRO_PARAGRAPH_2}</p>
        <p class="text-blue-400 font-medium">${INTRO_CTA}</p>
      </div>
    </div>
  </div>

  <!-- Section Divider -->
  <div class="section-divider my-4"></div>

  <!-- Hero image -->
  <div class="rounded-2xl overflow-hidden my-2">
    <img src="${HERO_IMAGE}"
         alt="Electrical products"
         class="w-full h-56 md:h-80 object-cover opacity-80 hover:opacity-100 transition-opacity duration-700">
  </div>

  <!-- Section Divider -->
  <div class="section-divider my-4"></div>

  <!-- Categories -->
  <div class="py-8 fade-section">
    <div class="flex items-center gap-2 mb-8">
      <span class="glow-dot text-blue-400"></span>
      <span class="text-[11px] tracking-[0.2em] text-white/50 uppercase">${CATEGORIES_LABEL}</span>
    </div>
    <div class="grid md:grid-cols-2 gap-5">
      ${categoriesHTML}
    </div>
  </div>

  <!-- Section Divider -->
  <div class="section-divider my-4"></div>

  <!-- Quality assurance -->
  <div class="py-8 md:py-12">
    <div class="flex items-center gap-2 mb-6">
      <span class="glow-dot text-purple-400"></span>
      <span class="text-[11px] tracking-[0.2em] text-white/50 uppercase">${QUALITY_LABEL}</span>
    </div>
    <div class="grid md:grid-cols-3 gap-8">
      <div>
        <h3 class="text-xl font-light text-white/80 mb-3">${QUALITY_HEADING}</h3>
      </div>
      <div class="text-sm text-white/35 leading-relaxed">
        <p>${QUALITY_PARAGRAPH_1}</p>
      </div>
      <div class="text-sm text-white/35 leading-relaxed">
        <p>${QUALITY_PARAGRAPH_2}</p>
      </div>
    </div>
  </div>

  <!-- Section Divider -->
  <div class="section-divider my-4"></div>

  <!-- CTA -->
  <div class="py-8 md:py-12">
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      <div>
        <h3 class="text-xl font-light mb-2 text-white/80">${CTA_HEADING}</h3>
        <p class="text-sm text-white/40">${CTA_DESCRIPTION}</p>
      </div>
      <a href="/contact.html" class="contact-pill inline-block px-8 py-3 rounded-full text-sm font-medium text-white/80 tracking-wider text-center">
        ${CTA_BUTTON}
      </a>
    </div>
  </div>

  `
  }

  const content = activeBrand ? buildBrandPage() : buildOverviewPage()
  
  if (isInitialLoad) {
    renderPage('Product', pageTitle, content)
  } else {
    updateMainContent(content, pageTitle)
  }
}

// ─── Initialization & SPA Navigation ───────────────────────
render(true)

window.addEventListener('popstate', () => render(false))
window.addEventListener('spa-navigate', () => render(false))
