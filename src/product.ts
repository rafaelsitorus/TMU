import { renderPage } from './layout'

// ─── Editable text constants ────────────────────────────────
const PAGE_TITLE = 'Produk berkualitas tinggi'

const INTRO_HEADING = 'Peralatan kelistrikan berstandar tinggi.'
const INTRO_PARAGRAPH_1 = 'Kami menyediakan berbagai produk dan peralatan kelistrikan berkualitas untuk mendukung proyek konstruksi Anda. Semua produk memenuhi standar nasional dan internasional.'
const INTRO_PARAGRAPH_2 = 'Dari panel listrik hingga solar panel, setiap produk dipilih dari produsen terpercaya untuk menjamin keandalan dan keamanan.'
const INTRO_CTA = 'Minta penawaran harga.'

const CATEGORIES_LABEL = 'Kategori Produk'

interface Category {
  name: string
  desc: string
  color: string        // tailwind color prefix e.g. 'blue', 'green'
  iconPath: string     // SVG path d attribute
}

const CATEGORIES: Category[] = [
  { name: 'Panel Listrik', desc: 'Distribusi & kontrol', color: 'blue', iconPath: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { name: 'Solar Panel', desc: 'Energi terbarukan', color: 'green', iconPath: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z' },
  { name: 'Transformator', desc: 'Step up & down', color: 'orange', iconPath: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z' },
  { name: 'Kabel & Aksesoris', desc: 'Berbagai jenis', color: 'purple', iconPath: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4' },
]

interface Product {
  category: string
  name: string
  description: string
  image: string
  categoryColor: string  // tailwind color for label e.g. 'blue-400'
}

const PRODUCTS: Product[] = [
  { category: 'Panel Listrik', name: 'Panel Distribusi MDP', description: 'Panel distribusi utama kapasitas tinggi untuk gedung komersial dan industri.', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop', categoryColor: 'blue-400' },
  { category: 'Solar Panel', name: 'Panel Surya 450W', description: 'Panel surya monokristalin efisiensi tinggi untuk pembangkit listrik tenaga surya.', image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop', categoryColor: 'green-400' },
  { category: 'Transformator', name: 'Transformator 500 kVA', description: 'Transformator distribusi tegangan menengah dengan efisiensi tinggi dan rendah rugi.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop', categoryColor: 'orange-400' },
  { category: 'Kabel', name: 'Kabel NYY 4x70mm', description: 'Kabel power underground untuk instalasi tegangan rendah dengan isolasi PVC.', image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=600&h=400&fit=crop', categoryColor: 'purple-400' },
  { category: 'Generator', name: 'Genset 500 kVA', description: 'Generator set diesel untuk backup power gedung komersial dan industri.', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop', categoryColor: 'blue-400' },
  { category: 'UPS System', name: 'UPS 100 kVA Online', description: 'Uninterruptible power supply untuk proteksi peralatan kritis dan data center.', image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&h=400&fit=crop', categoryColor: 'amber-400' },
]

const QUALITY_LABEL = 'Jaminan Kualitas'
const QUALITY_HEADING = 'Standar internasional untuk setiap produk.'
const QUALITY_PARAGRAPH_1 = 'Semua produk telah melalui proses quality control ketat dan memiliki sertifikasi SNI, IEC, dan standar internasional lainnya.'
const QUALITY_PARAGRAPH_2 = 'Kami bekerja sama dengan produsen dan distributor resmi untuk memastikan keaslian dan garansi setiap produk.'

const CTA_HEADING = 'Butuh produk untuk proyek Anda?'
const CTA_DESCRIPTION = 'Hubungi kami untuk katalog lengkap dan penawaran harga terbaik.'
const CTA_BUTTON = 'MINTA PENAWARAN'

// ─── Build HTML helpers ─────────────────────────────────────
const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  blue:   { bg: 'bg-blue-600/20',   border: 'border-blue-500/30',   text: 'text-blue-400' },
  green:  { bg: 'bg-green-600/20',  border: 'border-green-500/30',  text: 'text-green-400' },
  orange: { bg: 'bg-orange-500/20', border: 'border-orange-400/30', text: 'text-orange-400' },
  purple: { bg: 'bg-purple-600/20', border: 'border-purple-500/30', text: 'text-purple-400' },
}

const categoriesHTML = CATEGORIES.map(c => {
  const clr = colorMap[c.color] || colorMap.blue
  return `
      <div class="glass-panel p-5 text-center">
        <div class="w-12 h-12 ${clr.bg} border ${clr.border} rounded-xl flex items-center justify-center mx-auto mb-3">
          <svg class="w-6 h-6 ${clr.text}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${c.iconPath}"/>
          </svg>
        </div>
        <h4 class="text-sm font-medium text-white/80 mb-1">${c.name}</h4>
        <p class="text-[11px] text-white/35">${c.desc}</p>
      </div>`
}).join('')

const productsHTML = PRODUCTS.map(p => `
    <div class="img-overlay-card">
      <img src="${p.image}" alt="${p.name}" class="w-full h-56 object-cover opacity-60">
      <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
      <div class="absolute bottom-0 left-0 right-0 p-6">
        <span class="text-[10px] tracking-[0.15em] text-${p.categoryColor} uppercase font-medium">${p.category}</span>
        <h4 class="font-medium text-white/90 mt-1 mb-2">${p.name}</h4>
        <p class="text-sm text-white/45 leading-relaxed">${p.description}</p>
      </div>
    </div>`).join('\n')

// ─── Render ─────────────────────────────────────────────────
renderPage('Product', PAGE_TITLE, `

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

`)
