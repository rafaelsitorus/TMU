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
  <div class="bg-white rounded-3xl p-8 md:p-12 text-gray-900">
    <div class="grid md:grid-cols-3 gap-8 md:gap-10">
      <div>
        <h2 class="text-3xl md:text-4xl font-light leading-tight tracking-tight">Peralatan kelistrikan berstandar tinggi.</h2>
      </div>
      <div class="text-sm text-gray-600 leading-relaxed space-y-4">
        <p>Kami menyediakan berbagai produk dan peralatan kelistrikan berkualitas untuk mendukung proyek konstruksi Anda. Semua produk memenuhi standar nasional dan internasional.</p>
      </div>
      <div class="text-sm text-gray-500 leading-relaxed space-y-4">
        <p>Dari panel listrik hingga solar panel, setiap produk dipilih dari produsen terpercaya untuk menjamin keandalan dan keamanan.</p>
        <p class="text-gray-900 font-medium">Minta penawaran harga.</p>
      </div>
    </div>
  </div>

  <!-- Categories -->
  <div class="bg-white rounded-3xl p-8 md:p-12 text-gray-900">
    <div class="flex items-center gap-2 mb-8">
      <span class="w-1.5 h-1.5 bg-gray-900 rounded-sm block"></span>
      <span class="text-[11px] tracking-[0.2em] text-gray-400 uppercase">Kategori Produk</span>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-5 text-center">
        <div class="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>
        </div>
        <h4 class="text-sm font-medium text-gray-900 mb-1">Panel Listrik</h4>
        <p class="text-[11px] text-gray-500">Distribusi & kontrol</p>
      </div>
      <div class="bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl p-5 text-center">
        <div class="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-3">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
          </svg>
        </div>
        <h4 class="text-sm font-medium text-gray-900 mb-1">Solar Panel</h4>
        <p class="text-[11px] text-gray-500">Energi terbarukan</p>
      </div>
      <div class="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-2xl p-5 text-center">
        <div class="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-3">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
          </svg>
        </div>
        <h4 class="text-sm font-medium text-gray-900 mb-1">Transformator</h4>
        <p class="text-[11px] text-gray-500">Step up & down</p>
      </div>
      <div class="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl p-5 text-center">
        <div class="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"/>
          </svg>
        </div>
        <h4 class="text-sm font-medium text-gray-900 mb-1">Kabel & Aksesoris</h4>
        <p class="text-[11px] text-gray-500">Berbagai jenis</p>
      </div>
    </div>
  </div>

  <!-- Products Grid -->
  <div class="grid md:grid-cols-2 gap-5 md:gap-6">
    <div class="bg-white rounded-3xl overflow-hidden text-gray-900">
      <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=300&fit=crop" alt="Panel Distribusi" class="w-full h-44 object-cover">
      <div class="p-6">
        <span class="text-[10px] tracking-[0.15em] text-blue-600 uppercase font-medium">Panel Listrik</span>
        <h4 class="font-medium text-gray-900 mt-1 mb-2">Panel Distribusi MDP</h4>
        <p class="text-sm text-gray-500 leading-relaxed">Panel distribusi utama kapasitas tinggi untuk gedung komersial dan industri.</p>
      </div>
    </div>

    <div class="bg-white rounded-3xl overflow-hidden text-gray-900">
      <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=300&fit=crop" alt="Solar Panel" class="w-full h-44 object-cover">
      <div class="p-6">
        <span class="text-[10px] tracking-[0.15em] text-green-600 uppercase font-medium">Solar Panel</span>
        <h4 class="font-medium text-gray-900 mt-1 mb-2">Panel Surya 450W</h4>
        <p class="text-sm text-gray-500 leading-relaxed">Panel surya monokristalin efisiensi tinggi untuk pembangkit listrik tenaga surya.</p>
      </div>
    </div>

    <div class="bg-white rounded-3xl overflow-hidden text-gray-900">
      <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=300&fit=crop" alt="Transformator" class="w-full h-44 object-cover">
      <div class="p-6">
        <span class="text-[10px] tracking-[0.15em] text-orange-500 uppercase font-medium">Transformator</span>
        <h4 class="font-medium text-gray-900 mt-1 mb-2">Transformator 500 kVA</h4>
        <p class="text-sm text-gray-500 leading-relaxed">Transformator distribusi tegangan menengah dengan efisiensi tinggi dan rendah rugi.</p>
      </div>
    </div>

    <div class="bg-white rounded-3xl overflow-hidden text-gray-900">
      <img src="https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=600&h=300&fit=crop" alt="Kabel" class="w-full h-44 object-cover">
      <div class="p-6">
        <span class="text-[10px] tracking-[0.15em] text-purple-600 uppercase font-medium">Kabel</span>
        <h4 class="font-medium text-gray-900 mt-1 mb-2">Kabel NYY 4x70mm</h4>
        <p class="text-sm text-gray-500 leading-relaxed">Kabel power underground untuk instalasi tegangan rendah dengan isolasi PVC.</p>
      </div>
    </div>

    <div class="bg-white rounded-3xl overflow-hidden text-gray-900">
      <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=300&fit=crop" alt="Genset" class="w-full h-44 object-cover">
      <div class="p-6">
        <span class="text-[10px] tracking-[0.15em] text-blue-600 uppercase font-medium">Generator</span>
        <h4 class="font-medium text-gray-900 mt-1 mb-2">Genset 500 kVA</h4>
        <p class="text-sm text-gray-500 leading-relaxed">Generator set diesel untuk backup power gedung komersial dan industri.</p>
      </div>
    </div>

    <div class="bg-white rounded-3xl overflow-hidden text-gray-900">
      <img src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&h=300&fit=crop" alt="UPS" class="w-full h-44 object-cover">
      <div class="p-6">
        <span class="text-[10px] tracking-[0.15em] text-amber-600 uppercase font-medium">UPS System</span>
        <h4 class="font-medium text-gray-900 mt-1 mb-2">UPS 100 kVA Online</h4>
        <p class="text-sm text-gray-500 leading-relaxed">Uninterruptible power supply untuk proteksi peralatan kritis dan data center.</p>
      </div>
    </div>
  </div>

  <!-- Quality Assurance -->
  <div class="bg-[#111] rounded-3xl p-8 md:p-12">
    <div class="flex items-center gap-2 mb-6">
      <span class="w-1.5 h-1.5 bg-white rounded-sm block"></span>
      <span class="text-[11px] tracking-[0.2em] text-white/50 uppercase">Jaminan Kualitas</span>
    </div>
    <div class="grid md:grid-cols-3 gap-8">
      <div>
        <h3 class="text-xl font-light text-white/90 mb-3">Standar internasional untuk setiap produk.</h3>
      </div>
      <div class="text-sm text-white/40 leading-relaxed">
        <p>Semua produk telah melalui proses quality control ketat dan memiliki sertifikasi SNI, IEC, dan standar internasional lainnya.</p>
      </div>
      <div class="text-sm text-white/40 leading-relaxed">
        <p>Kami bekerja sama dengan produsen dan distributor resmi untuk memastikan keaslian dan garansi setiap produk.</p>
      </div>
    </div>
  </div>

  <!-- CTA -->
  <div class="bg-white rounded-3xl p-8 md:p-12 text-gray-900">
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      <div>
        <h3 class="text-xl font-light mb-2">Butuh produk untuk proyek Anda?</h3>
        <p class="text-sm text-gray-500">Hubungi kami untuk katalog lengkap dan penawaran harga terbaik.</p>
      </div>
      <a href="/contact.html" class="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl text-sm font-medium text-white tracking-wider transition-colors text-center">
        MINTA PENAWARAN
      </a>
    </div>
  </div>

  `
}

renderPage('Product', pageTitle, activeBrand ? buildBrandPage() : buildOverviewPage())
