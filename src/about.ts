import { renderPage } from './layout'

// ─── Editable text constants ────────────────────────────────
const PAGE_TITLE = 'Mengenal perusahaan kami'

const INTRO_HEADING = 'Membangun masa depan konstruksi Indonesia.'
const INTRO_PARAGRAPH_1 = 'PT. Todo Mitra Utama adalah perusahaan konstruksi yang bergerak di bidang mekanikal dan elektrikal. Berkantor pusat di Jakarta Barat, kami telah melayani berbagai proyek komersial dan industri dengan standar kualitas tertinggi.'
const INTRO_PARAGRAPH_2 = 'Sebagai anggota AKLI (Asosiasi Kontraktor Listrik dan Mekanikal Indonesia), kami berkomitmen untuk memberikan layanan profesional dan terpercaya.'
const INTRO_PARAGRAPH_3 = 'Kami percaya bahwa infrastruktur kelistrikan yang handal adalah fondasi bagi kemajuan. Setiap proyek yang kami kerjakan mencerminkan dedikasi kami terhadap kualitas dan keselamatan.'
const INTRO_CTA = 'Mulai membangun bersama kami.'

const VISION_HEADING = 'Menjadi mitra konstruksi terpercaya di Indonesia.'
const VISION_DESCRIPTION = 'Kami berkomitmen untuk menjadi perusahaan konstruksi mekanikal dan elektrikal terdepan yang mengutamakan inovasi, kualitas, dan kepuasan pelanggan dalam setiap proyek.'
const VISION_VALUES = ['Inovasi', 'Kualitas', 'Keselamatan', 'Integritas']

const STATS_LABEL = 'Pencapaian'
const STATS = [
  { value: '50+', label: 'Proyek Selesai' },
  { value: '15+', label: 'Tahun Pengalaman' },
  { value: '30+', label: 'Tenaga Ahli' },
  { value: '100%', label: 'Kepuasan Klien' },
]

const AKLI_LABEL = 'Keanggotaan'
const AKLI_HEADING = 'Anggota resmi AKLI'
const AKLI_DESCRIPTION = 'Keanggotaan AKLI memastikan setiap pekerjaan yang kami lakukan sesuai dengan standar nasional dan regulasi yang berlaku di Indonesia. Kami mematuhi semua prosedur keselamatan dan kualitas yang ditetapkan.'

// ─── Images ─────────────────────────────────────────────────
const HERO_IMAGE = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=500&fit=crop'
const VISION_IMAGE = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=500&fit=crop'

// ─── Render ─────────────────────────────────────────────────
const statsHTML = STATS.map(s => `
      <div>
        <div class="text-3xl md:text-5xl font-light text-white mb-1">${s.value}</div>
        <div class="text-[10px] tracking-[0.15em] text-white/30 uppercase">${s.label}</div>
      </div>`).join('')

const valuesHTML = VISION_VALUES.map(v =>
  `<span class="px-4 py-1.5 glass-panel text-xs text-white/60">${v}</span>`
).join('\n        ')

renderPage('About', PAGE_TITLE, `

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
        <p>${INTRO_PARAGRAPH_2}</p>
      </div>
      <div class="text-sm text-white/40 leading-relaxed space-y-4">
        <p>${INTRO_PARAGRAPH_3}</p>
        <p class="text-blue-400 font-medium">${INTRO_CTA}</p>
      </div>
    </div>
  </div>

  <!-- Section Divider -->
  <div class="section-divider my-4"></div>

  <!-- Hero Image -->
  <div class="rounded-2xl overflow-hidden my-2">
    <img src="${HERO_IMAGE}"
         alt="Construction site"
         class="w-full h-56 md:h-80 object-cover opacity-80 hover:opacity-100 transition-opacity duration-700">
  </div>

  <!-- Section Divider -->
  <div class="section-divider my-4"></div>

  <!-- Vision & Mission -->
  <div class="grid md:grid-cols-2 gap-0 overflow-hidden rounded-2xl">
    <div class="p-8 md:p-12 flex flex-col justify-center">
      <h3 class="text-2xl md:text-3xl font-light leading-tight mb-6 text-white/90">${VISION_HEADING}</h3>
      <p class="text-sm text-white/45 leading-relaxed mb-6">${VISION_DESCRIPTION}</p>
      <div class="flex flex-wrap gap-2">
        ${valuesHTML}
      </div>
    </div>
    <div class="relative">
      <img src="${VISION_IMAGE}"
           alt="Modern building"
           class="w-full h-64 md:h-full object-cover opacity-70">
      <div class="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent md:from-black/40"></div>
    </div>
  </div>

  <!-- Section Divider -->
  <div class="section-divider my-4"></div>

  <!-- Stats -->
  <div class="py-8 md:py-12 fade-section">
    <div class="flex items-center gap-2 mb-8">
      <span class="glow-dot text-blue-400"></span>
      <span class="text-[11px] tracking-[0.2em] text-white/50 uppercase">${STATS_LABEL}</span>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
      ${statsHTML}
    </div>
  </div>

  <!-- Section Divider -->
  <div class="section-divider my-4"></div>

  <!-- AKLI Membership -->
  <div class="py-8 md:py-12">
    <div class="flex flex-col md:flex-row gap-8 items-start">
      <div class="flex-1">
        <span class="text-[10px] tracking-[0.2em] text-white/30 uppercase">${AKLI_LABEL}</span>
        <h3 class="text-xl font-light mt-2 mb-4 text-white/80">${AKLI_HEADING}</h3>
        <p class="text-sm text-white/40 leading-relaxed">${AKLI_DESCRIPTION}</p>
      </div>
      <div class="w-24 h-24 glass-panel flex items-center justify-center flex-shrink-0">
        <span class="text-white/50 text-xs font-bold tracking-wider">AKLI</span>
      </div>
    </div>
  </div>

`)
