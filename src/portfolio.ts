import { renderPage } from './layout'

// ─── Editable text constants ────────────────────────────────
const PAGE_TITLE = 'Proyek yang telah selesai'

const INTRO_HEADING = 'Rekam jejak proyek kami.'
const INTRO_PARAGRAPH_1 = 'Selama lebih dari 15 tahun, kami telah menyelesaikan berbagai proyek konstruksi mekanikal dan elektrikal di seluruh Indonesia dengan hasil yang memuaskan.'
const INTRO_PARAGRAPH_2 = 'Setiap proyek adalah bukti komitmen kami terhadap kualitas, ketepatan waktu, dan kepuasan klien.'
const INTRO_CTA = 'Lihat apa yang telah kami capai.'

// ─── Featured project ───────────────────────────────────────
const FEATURED_LABEL = 'Featured Project'
const FEATURED_TITLE = 'Four Seasons Hotel Jakarta'
const FEATURED_DESCRIPTION = 'Proyek Four Seasons Hotel Jakarta'
const FEATURED_IMAGE = '/portofolio4.png'

// ─── Project grid ───────────────────────────────────────────
interface Project {
  title: string
  description: string
  image: string
}

const PROJECTS: Project[] = [
  { title: 'IPC (Pelabuhan Tanjung Priok)', description: 'Proyek  pada IPC (Pelabuhan Tanjung Priok), Jakarta.', image: '/portofolio2.png' },
  { title: 'Universitas Terbuka (UT)', description: 'Proyek pada Universitas Terbuka (UT).', image: '/portofolio3.png' },
  { title: 'Bandara Halim Perdana Kusuma', description: 'Proyek pada Bandara Halim Perdana Kusuma, Jakarta.', image: '/portofolio1.png' },
  { title: 'Angkas Pura II', description: 'Proyek pada Angkas Pura II, Bandara Internasonal Soekarno-Hatta, Jakarta.', image: '/portofolio5.png' },
  { title: 'Ritz Carlton Hotel', description: 'Proyek pada Ritz Carlton Hotel, Jakarta.', image: '/portofolio6.png' },
  { title: 'Apartement Gading Mediterania', description: 'Proyek pada Apartement Gading Mediterania, Jakarta.', image: '/portofolio7.png' },
  { title: 'Rumah Sakit Harapan Kita', description: 'Proyek pada Rumah Sakit Harapan Kita, Jakarta.', image: '/portofolio8.png' },
  { title: 'RSUP Nasional DR Cipto Mangunkusomo', description: 'Proyek pada RSUP Nasional DR Cipto Mangunkusomo', image: '/portofolio9.png' },
]

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
      <div class="max-w-2xl">
        <p class="text-sm text-white/50 leading-relaxed">${FEATURED_DESCRIPTION}</p>
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
