import { renderPage } from './layout'
import { productCategories } from './product-data'

// Read URL params
const params = new URLSearchParams(window.location.search)
const catSlug = params.get('cat')
const brandSlug = params.get('brand')

// Find matching category/brand
const activeCat = productCategories.find(c => c.slug === catSlug)
const activeBrand = activeCat?.brands.find(b => b.slug === brandSlug)

// Decide page title
const pageTitle = activeBrand
  ? `${activeBrand.name} — ${activeCat!.name}`
  : 'Produk berkualitas tinggi'

// Category labels for display
const catDisplayNames: Record<string, string> = {
  genset: 'Genset / Generator Set',
  panel: 'Panel Listrik',
  ups: 'UPS System',
  cable: 'Kabel & Aksesoris',
}

// Brand descriptions (brief blurb for each)
const brandInfo: Record<string, { tagline: string; desc: string; img: string }> = {
  caterpillar: { tagline: 'Power you can rely on.', desc: 'Genset Caterpillar terkenal dengan keandalan, daya tahan, dan performa tinggi. Tersedia dalam berbagai kapasitas untuk kebutuhan industri dan komersial.', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=500&fit=crop' },
  cummins: { tagline: 'Dependable power solutions.', desc: 'Cummins menyediakan generator set diesel berkualitas tinggi dengan efisiensi bahan bakar optimal dan teknologi emisi rendah.', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=500&fit=crop' },
  perkins: { tagline: 'Engineered for performance.', desc: 'Perkins dikenal sebagai mesin diesel ringan dan efisien, cocok untuk genset portable hingga aplikasi industri menengah.', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=500&fit=crop' },
  mtu: { tagline: 'Premium power generation.', desc: 'MTU (Rolls-Royce Power Systems) menghadirkan genset premium kelas dunia untuk aplikasi kritis seperti data center dan rumah sakit.', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=500&fit=crop' },
  man: { tagline: 'Engineered in Germany.', desc: 'MAN Energy Solutions menyediakan genset berkapasitas besar dengan teknologi Jerman untuk proyek infrastruktur dan industri berat.', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=500&fit=crop' },
  deutz: { tagline: 'Innovation since 1864.', desc: 'Deutz memproduksi mesin diesel compact dan efisien dengan rekam jejak lebih dari 150 tahun di dunia power generation.', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=500&fit=crop' },
  schneider: { tagline: 'Life is On.', desc: 'Schneider Electric menyediakan panel distribusi, kontrol, dan otomasi gedung dengan standar internasional terdepan.', img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&h=500&fit=crop' },
  abb: { tagline: 'Pioneering technology.', desc: 'ABB menghadirkan panel listrik, switchgear, dan solusi distribusi tenaga untuk industri dan infrastruktur.', img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&h=500&fit=crop' },
  simetri: { tagline: 'Kualitas lokal, standar global.', desc: 'Simetri memproduksi panel listrik berkualitas dengan harga kompetitif, memenuhi standar SNI untuk pasar Indonesia.', img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&h=500&fit=crop' },
  sier: { tagline: 'Solusi panel terpercaya.', desc: 'Sier menyediakan panel distribusi dan kontrol untuk berbagai kebutuhan proyek mekanikal-elektrikal.', img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&h=500&fit=crop' },
  borri: { tagline: 'Uninterrupted confidence.', desc: 'Borri UPS Italy memberikan perlindungan daya tak terputus untuk data center, rumah sakit, dan fasilitas kritis.', img: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1200&h=500&fit=crop' },
  dale: { tagline: 'Reliable power protection.', desc: 'Dale menyediakan solusi UPS handal untuk kebutuhan industri dan komersial dengan desain modular.', img: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1200&h=500&fit=crop' },
  supreme: { tagline: 'Supreme quality cables.', desc: 'Supreme Cable Manufacturing memproduksi berbagai jenis kabel listrik berkualitas tinggi standar SNI dan IEC.', img: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=1200&h=500&fit=crop' },
  metal: { tagline: 'Connecting power.', desc: 'Metal Indonusa menyediakan kabel tegangan rendah hingga menengah untuk kebutuhan instalasi dan distribusi.', img: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=1200&h=500&fit=crop' },
  kabelindo: { tagline: 'Trusted since 1973.', desc: 'Kabelindo Murni memproduksi kabel berkualitas dengan pengalaman lebih dari 50 tahun di industri kelistrikan Indonesia.', img: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=1200&h=500&fit=crop' },
  jembo: { tagline: 'Quality cables for life.', desc: 'Jembo Cable Company menyediakan kabel tembaga dan aluminium berkualitas tinggi untuk berbagai aplikasi.', img: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=1200&h=500&fit=crop' },
}

// Build content based on whether we have a brand or show overview
function buildBrandPage(): string {
  if (!activeBrand || !activeCat) return buildOverviewPage()
  const info = brandInfo[activeBrand.slug] || { tagline: '', desc: 'Informasi produk.', img: '' }
  const catName = catDisplayNames[activeCat.slug] || activeCat.name
  
  // Other brands in same category for quick navigation
  const otherBrands = activeCat.brands
    .filter(b => b.slug !== activeBrand!.slug)
    .map(b => `<a href="/product.html?cat=${activeCat!.slug}&brand=${b.slug}" class="px-4 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-xs text-gray-600 transition-colors">${b.name}</a>`)
    .join('')

  return `
  <!-- Brand Header -->
  <div class="bg-white rounded-3xl overflow-hidden text-gray-900">
    <img src="${info.img}" alt="${activeBrand.name}" class="w-full h-48 md:h-64 object-cover">
    <div class="p-8 md:p-12">
      <div class="flex items-center gap-2 mb-4">
        <span class="text-[10px] tracking-[0.2em] text-gray-400 uppercase">${catName}</span>
        <span class="text-gray-300">·</span>
        <span class="text-[10px] tracking-[0.2em] text-gray-400 uppercase">Brand</span>
      </div>
      <h2 class="text-3xl md:text-4xl font-light leading-tight tracking-tight mb-3">${activeBrand.name}</h2>
      <p class="text-lg text-gray-400 font-light italic mb-6">${info.tagline}</p>
      <p class="text-sm text-gray-600 leading-relaxed max-w-2xl">${info.desc}</p>
    </div>
  </div>

  <!-- Key Features -->
  <div class="bg-[#111] rounded-3xl p-8 md:p-12">
    <div class="flex items-center gap-2 mb-8">
      <span class="w-1.5 h-1.5 bg-white rounded-sm block"></span>
      <span class="text-[11px] tracking-[0.2em] text-white/50 uppercase">Keunggulan</span>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div>
        <div class="text-2xl font-light text-white mb-1">✓</div>
        <div class="text-[10px] tracking-[0.15em] text-white/40 uppercase">Garansi Resmi</div>
      </div>
      <div>
        <div class="text-2xl font-light text-white mb-1">✓</div>
        <div class="text-[10px] tracking-[0.15em] text-white/40 uppercase">Sertifikasi SNI/IEC</div>
      </div>
      <div>
        <div class="text-2xl font-light text-white mb-1">✓</div>
        <div class="text-[10px] tracking-[0.15em] text-white/40 uppercase">Support Teknis</div>
      </div>
      <div>
        <div class="text-2xl font-light text-white mb-1">✓</div>
        <div class="text-[10px] tracking-[0.15em] text-white/40 uppercase">Spare Part Tersedia</div>
      </div>
    </div>
  </div>

  <!-- Other Brands in Category -->
  <div class="bg-white rounded-3xl p-8 md:p-12 text-gray-900">
    <span class="text-[10px] tracking-[0.2em] text-gray-400 uppercase block mb-4">Brand ${catName} lainnya</span>
    <div class="flex flex-wrap gap-2">
      ${otherBrands}
    </div>
  </div>

  <!-- CTA -->
  <div class="bg-white rounded-3xl p-8 md:p-12 text-gray-900">
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      <div>
        <h3 class="text-xl font-light mb-2">Tertarik dengan produk ${activeBrand.name}?</h3>
        <p class="text-sm text-gray-500">Hubungi kami untuk katalog lengkap dan penawaran harga terbaik.</p>
      </div>
      <a href="/contact.html" class="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl text-sm font-medium text-white tracking-wider transition-colors text-center">
        MINTA PENAWARAN
      </a>
    </div>
  </div>
  `
}

function buildOverviewPage(): string {
  return `

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

  <!-- Categories -->
  <div class="py-8 fade-section">
    <div class="flex items-center gap-2 mb-8">
      <span class="glow-dot text-blue-400"></span>
      <span class="text-[11px] tracking-[0.2em] text-white/50 uppercase">${CATEGORIES_LABEL}</span>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      ${categoriesHTML}
    </div>
  </div>

  <!-- Section Divider -->
  <div class="section-divider my-4"></div>

  <!-- Products Grid -->
  <div class="grid md:grid-cols-2 gap-5 md:gap-6 fade-section">
    ${productsHTML}
  </div>

  <!-- Section Divider -->
  <div class="section-divider my-4"></div>

  <!-- Quality Assurance -->
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

renderPage('Product', pageTitle, activeBrand ? buildBrandPage() : buildOverviewPage())
