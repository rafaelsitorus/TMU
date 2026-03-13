import { renderPage } from './layout'

// ─── Editable text constants ────────────────────────────────
const PAGE_TITLE = 'Layanan konstruksi profesional'

const INTRO_HEADING = 'Solusi konstruksi menyeluruh.'
const INTRO_PARAGRAPH_1 = 'Kami menyediakan layanan konstruksi mekanikal dan elektrikal yang komprehensif. Dari perencanaan hingga perawatan, tim ahli kami siap mendukung setiap tahap proyek Anda.'
const INTRO_PARAGRAPH_2 = 'Dengan pengalaman lebih dari 15 tahun, kami memahami kebutuhan unik setiap proyek dan memberikan solusi yang tepat sasaran dan efisien.'
const INTRO_CTA = 'Hubungi kami untuk konsultasi.'

const HERO_IMAGE = 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=500&fit=crop'

const SERVICES_LABEL = 'Layanan Kami'

interface ServiceItem {
  name: string
  description: string
  colorBg: string
  colorBorder: string
  colorText: string
  iconPath: string
  iconPath2?: string  // optional second path (e.g. gear icon)
}

const SERVICES: ServiceItem[] = [
  {
    name: 'Instalasi Mekanikal & Elektrikal',
    description: 'Pemasangan sistem kelistrikan, HVAC, plumbing, dan fire protection untuk gedung komersial dan industri.',
    colorBg: 'bg-blue-600/20', colorBorder: 'border-blue-500/30', colorText: 'text-blue-400',
    iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    name: 'Konsultasi Teknis',
    description: 'Perencanaan dan desain sistem mekanikal elektrikal, termasuk studi kelayakan dan analisis kebutuhan energi.',
    colorBg: 'bg-amber-500/20', colorBorder: 'border-amber-400/30', colorText: 'text-amber-400',
    iconPath: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
  },
  {
    name: 'Maintenance & Repair',
    description: 'Perawatan berkala dan perbaikan sistem elektrikal untuk memastikan operasional yang optimal dan aman.',
    colorBg: 'bg-green-600/20', colorBorder: 'border-green-500/30', colorText: 'text-green-400',
    iconPath: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
    iconPath2: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z',
  },
  {
    name: 'Energi Terbarukan',
    description: 'Instalasi sistem solar panel dan solusi energi terbarukan untuk efisiensi energi dan keberlanjutan.',
    colorBg: 'bg-purple-600/20', colorBorder: 'border-purple-500/30', colorText: 'text-purple-400',
    iconPath: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z',
  },
]

const PROCESS_LABEL = 'Proses Kerja'
const WORK_DOCS_LABEL = 'Dokumentasi Proses'

interface ProcessStep {
  number: string
  title: string
  description: string
}

const PROCESS_STEPS: ProcessStep[] = [
  { number: '01', title: 'Konsultasi', description: 'Analisis kebutuhan dan perencanaan proyek bersama klien.' },
  { number: '02', title: 'Desain', description: 'Pembuatan desain teknis dan gambar kerja detail.' },
  { number: '03', title: 'Eksekusi', description: 'Pelaksanaan pekerjaan dengan standar kualitas tinggi.' },
  { number: '04', title: 'Serah Terima', description: 'Pengujian, komisioning, dan serah terima proyek.' },
]

const CTA_HEADING = 'Butuh layanan konstruksi?'
const CTA_DESCRIPTION = 'Hubungi tim kami untuk konsultasi gratis dan penawaran harga.'
const CTA_BUTTON = 'HUBUNGI KAMI'

interface WorkDocItem {
  title: string
  image: string
}

const WORK_DOCS: WorkDocItem[] = [
  { title: 'Cubicle TM Data Center', image: '/Screenshot 2026-03-13 at 20.58.10.png' },
  { title: 'Genset Perkins Data Center', image: '/Screenshot 2026-03-13 at 20.58.40.png' },
  { title: 'Genset FG Wilson', image: '/Screenshot 2026-03-13 at 20.59.16.png' },
  { title: 'Genset Perkins', image: '/Screenshot 2026-03-13 at 20.59.47.png' },
  { title: 'Genset Cummins', image: '/Screenshot 2026-03-13 at 21.00.11.png' },
  { title: 'Genset Mitsubishi', image: '/Screenshot 2026-03-13 at 21.00.47.png' },
  { title: 'Genset Caterpilar', image: '/Screenshot 2026-03-13 at 21.01.17.png' },
  { title: 'Fire Suppression System', image: '/Screenshot 2026-03-13 at 21.01.45.png' },
]

// ─── Build HTML helpers ─────────────────────────────────────
const servicesHTML = SERVICES.map(s => `
      <div class="glass-panel p-6">
        <div class="w-10 h-10 ${s.colorBg} border ${s.colorBorder} rounded-xl flex items-center justify-center mb-4">
          <svg class="w-5 h-5 ${s.colorText}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${s.iconPath}"/>
            ${s.iconPath2 ? `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${s.iconPath2}"/>` : ''}
          </svg>
        </div>
        <h4 class="font-medium text-white/85 mb-2">${s.name}</h4>
        <p class="text-sm text-white/40 leading-relaxed">${s.description}</p>
      </div>`).join('\n')

const processHTML = PROCESS_STEPS.map(p => `
      <div class="relative">
        <div class="text-2xl font-light text-blue-400/60 mb-3">${p.number}</div>
        <h4 class="text-sm font-medium text-white/80 mb-2">${p.title}</h4>
        <p class="text-xs text-white/35 leading-relaxed">${p.description}</p>
      </div>`).join('')

const workDocsHTML = WORK_DOCS.map(item => `
      <article class="glass-panel overflow-hidden rounded-2xl">
        <img src="${item.image}" alt="${item.title}" class="w-full h-52 object-cover">
        <div class="p-5">
          <h4 class="text-sm md:text-base font-medium text-white/85">${item.title}</h4>
        </div>
      </article>`).join('')

// ─── Render ─────────────────────────────────────────────────
renderPage('Our Services', PAGE_TITLE, `

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

  <!-- Image -->
  <div class="rounded-2xl overflow-hidden my-2">
    <img src="${HERO_IMAGE}"
         alt="Electrical work"
         class="w-full h-56 md:h-80 object-cover opacity-80 hover:opacity-100 transition-opacity duration-700">
  </div>

  <!-- Section Divider -->
  <div class="section-divider my-4"></div>

  <!-- Services Grid -->
  <div class="py-8 fade-section">
    <div class="flex items-center gap-2 mb-8">
      <span class="glow-dot text-blue-400"></span>
      <span class="text-[11px] tracking-[0.2em] text-white/50 uppercase">${SERVICES_LABEL}</span>
    </div>
    <div class="grid md:grid-cols-2 gap-5">
      ${servicesHTML}
    </div>
  </div>

  <!-- Section Divider -->
  <div class="section-divider my-4"></div>

  <!-- Process -->
  <div class="py-8 md:py-12 fade-section">
    <div class="flex items-center gap-2 mb-8">
      <span class="glow-dot text-purple-400"></span>
      <span class="text-[11px] tracking-[0.2em] text-white/50 uppercase">${PROCESS_LABEL}</span>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
      ${processHTML}
    </div>
  </div>

  <!-- Section Divider -->
  <div class="section-divider my-4"></div>

  <!-- Work Documentation Widgets -->
  <div class="py-8 md:py-10 fade-section">
    <div class="flex items-center gap-2 mb-7">
      <span class="glow-dot text-blue-400"></span>
      <span class="text-[11px] tracking-[0.2em] text-white/50 uppercase">${WORK_DOCS_LABEL}</span>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      ${workDocsHTML}
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
