import { renderPage } from './layout'

// ─── Editable text constants ────────────────────────────────
const PAGE_TITLE = 'Proyek yang telah selesai'

const INTRO_HEADING = 'Rekam jejak proyek kami.'
const INTRO_PARAGRAPH_1 = 'Selama lebih dari 15 tahun, kami telah menyelesaikan berbagai proyek konstruksi mekanikal dan elektrikal di seluruh Indonesia dengan hasil yang memuaskan.'
const INTRO_PARAGRAPH_2 = 'Setiap proyek adalah bukti komitmen kami terhadap kualitas, ketepatan waktu, dan kepuasan klien.'
const INTRO_CTA = 'Lihat apa yang telah kami capai.'

// ─── Featured project ───────────────────────────────────────
const FEATURED_LABEL = 'Featured Project'
const FEATURED_TITLE = 'Gedung Perkantoran Jakarta Barat'
const FEATURED_DESCRIPTION = 'Instalasi sistem mekanikal dan elektrikal lengkap untuk gedung perkantoran 12 lantai di kawasan bisnis Jakarta Barat.'
const FEATURED_CLIENT = 'PT. Developer Indonesia'
const FEATURED_YEAR = '2024'
const FEATURED_VALUE = 'Rp 15 Miliar'
const FEATURED_STATUS = 'Selesai'
const FEATURED_IMAGE = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=500&fit=crop'

// ─── Project grid ───────────────────────────────────────────
interface Project {
  category: string
  title: string
  description: string
  image: string
}

const PROJECTS: Project[] = [
  { category: 'Komersial · 2023', title: 'Mall Retail & Entertainment Center', description: 'Instalasi elektrikal dan sistem pendingin untuk pusat perbelanjaan modern di Jakarta.', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop' },
  { category: 'Industri · 2023', title: 'Pabrik Manufaktur Cikarang', description: 'Instalasi panel distribusi dan sistem kelistrikan pabrik manufaktur skala besar.', image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&h=400&fit=crop' },
  { category: 'Residensial · 2022', title: 'Apartemen Premium Alam Sutera', description: 'Sistem mekanikal elektrikal lengkap untuk tower apartemen 25 lantai.', image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&h=400&fit=crop' },
  { category: 'Energi · 2024', title: 'Solar Farm Karawang', description: 'Instalasi solar panel 2MW untuk kawasan industri di Karawang, Jawa Barat.', image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop' },
]

// ─── Testimonial ────────────────────────────────────────────
const TESTIMONIAL_LABEL = 'Testimoni Klien'
const TESTIMONIAL_QUOTE = '"Kerjasama dengan TMU sangat memuaskan. Tim mereka profesional, tepat waktu, dan hasil pekerjaannya berkualitas tinggi. Kami sangat merekomendasikan."'
const TESTIMONIAL_AUTHOR = '— Project Manager'
const TESTIMONIAL_COMPANY = 'PT. Developer Indonesia'

// ─── CTA ────────────────────────────────────────────────────
const CTA_HEADING = 'Punya proyek yang ingin dikerjakan?'
const CTA_DESCRIPTION = 'Hubungi kami untuk diskusi kebutuhan proyek Anda.'
const CTA_BUTTON = 'MULAI PROYEK'

// ─── Build HTML helpers ─────────────────────────────────────
const projectsHTML = PROJECTS.map(p => `
    <div class="img-overlay-card">
      <img src="${p.image}"
           alt="${p.title}" class="w-full h-56 object-cover opacity-50">
      <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
      <div class="absolute bottom-0 left-0 right-0 p-6">
        <span class="text-[10px] tracking-[0.15em] text-white/40 uppercase">${p.category}</span>
        <h4 class="font-medium text-white/90 mt-1 mb-2">${p.title}</h4>
        <p class="text-sm text-white/40 leading-relaxed">${p.description}</p>
      </div>
    </div>`).join('\n')

// ─── Render ─────────────────────────────────────────────────
renderPage('Portfolio', PAGE_TITLE, `

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

  <!-- Featured Project -->
  <div class="img-overlay-card">
    <img src="${FEATURED_IMAGE}"
         alt="${FEATURED_TITLE}"
         class="w-full h-64 md:h-96 object-cover opacity-50">
    <div class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20"></div>
    <div class="absolute bottom-0 left-0 right-0 p-8 md:p-12">
      <span class="text-[10px] tracking-[0.2em] text-blue-400 uppercase font-medium">${FEATURED_LABEL}</span>
      <h3 class="text-2xl md:text-3xl font-light text-white/90 mt-2 mb-6">${FEATURED_TITLE}</h3>
      <div class="grid md:grid-cols-3 gap-6">
        <p class="text-sm text-white/50 leading-relaxed">${FEATURED_DESCRIPTION}</p>
        <div class="space-y-3">
          <div>
            <span class="text-[10px] tracking-[0.15em] text-white/30 uppercase block">Klien</span>
            <span class="text-sm text-white/60">${FEATURED_CLIENT}</span>
          </div>
          <div>
            <span class="text-[10px] tracking-[0.15em] text-white/30 uppercase block">Tahun</span>
            <span class="text-sm text-white/60">${FEATURED_YEAR}</span>
          </div>
        </div>
        <div class="space-y-3">
          <div>
            <span class="text-[10px] tracking-[0.15em] text-white/30 uppercase block">Nilai Proyek</span>
            <span class="text-sm text-white/60">${FEATURED_VALUE}</span>
          </div>
          <div>
            <span class="text-[10px] tracking-[0.15em] text-white/30 uppercase block">Status</span>
            <span class="text-sm text-green-400 font-medium">${FEATURED_STATUS}</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Section Divider -->
  <div class="section-divider my-4"></div>

  <!-- Project Grid -->
  <div class="grid md:grid-cols-2 gap-5 md:gap-6 fade-section">
    ${projectsHTML}
  </div>

  <!-- Section Divider -->
  <div class="section-divider my-4"></div>

  <!-- Testimonial -->
  <div class="py-8 md:py-12">
    <div class="flex items-center gap-2 mb-8">
      <span class="glow-dot text-blue-400"></span>
      <span class="text-[11px] tracking-[0.2em] text-white/50 uppercase">${TESTIMONIAL_LABEL}</span>
    </div>
    <blockquote class="text-xl md:text-2xl font-light text-white/70 leading-relaxed mb-6">
      ${TESTIMONIAL_QUOTE}
    </blockquote>
    <div>
      <div class="text-sm text-white/50">${TESTIMONIAL_AUTHOR}</div>
      <div class="text-[10px] tracking-[0.15em] text-white/25 uppercase mt-1">${TESTIMONIAL_COMPANY}</div>
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
