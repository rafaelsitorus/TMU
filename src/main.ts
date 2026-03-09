import './style.css'
import { initThreeBackground } from './three-bg'
import { initCursor } from './cursor'
import { productCategories, brandHref } from './product-data'

interface CardData {
  href: string
  img: string
  label: string
  title: string
  grayscale?: boolean
}

const cards: CardData[] = [
  { href: '/about.html',     img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=800&fit=crop', label: 'About',        title: 'Mengenal<br>perusahaan kami' },
  { href: '/services.html',  img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=800&fit=crop', label: 'Our Services', title: 'Layanan<br>konstruksi', grayscale: true },
  { href: '/product.html',   img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=800&fit=crop', label: 'Product',      title: 'Produk<br>berkualitas tinggi' },
  { href: '/portfolio.html', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=800&fit=crop', label: 'Portfolio',    title: 'Proyek yang<br>telah selesai' },
]

const buildCard = (c: CardData) => `
  <a href="${c.href}" class="widget-card group relative overflow-hidden rounded-[2rem] flex-shrink-0 block aspect-square">
    <div class="absolute inset-0">
      <img src="${c.img}" alt="${c.label}" class="w-full h-full object-cover opacity-50 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700 ${c.grayscale ? 'grayscale' : ''}">
    </div>
    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10"></div>
    <div class="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-2 mb-3">
          <div class="w-2 h-2 bg-white rounded-sm"></div>
          <span class="text-[10px] font-medium tracking-[0.3em] text-white/60 uppercase">${c.label}</span>
        </div>
        <h3 class="text-xl md:text-2xl font-light text-white leading-snug tracking-wide">${c.title}</h3>
      </div>
      <span class="self-start px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full text-[11px] font-medium text-white/80 border border-white/20 group-hover:bg-white/25 transition-colors">READ</span>
    </div>
  </a>
`

// 5 sets for infinite scroll buffer
const repeated = [...cards, ...cards, ...cards, ...cards, ...cards]
const allCardsHTML = repeated.map(buildCard).join('')

const buildMobileCard = (c: CardData) => `
  <a href="${c.href}" class="group relative overflow-hidden rounded-[1.5rem] block aspect-[5/3]">
    <div class="absolute inset-0">
      <img src="${c.img}" alt="${c.label}" class="w-full h-full object-cover opacity-50 group-hover:opacity-75 transition-all duration-700 ${c.grayscale ? 'grayscale' : ''}">
    </div>
    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10"></div>
    <div class="absolute inset-0 p-6 flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-2 mb-2">
          <div class="w-2 h-2 bg-white rounded-sm"></div>
          <span class="text-[10px] font-medium tracking-[0.3em] text-white/60 uppercase">${c.label}</span>
        </div>
        <h3 class="text-xl font-light text-white leading-snug tracking-wide">${c.title}</h3>
      </div>
      <span class="self-start px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full text-[11px] font-medium text-white/80 border border-white/20">READ</span>
    </div>
  </a>
`
const mobileCardsHTML = cards.map(buildMobileCard).join('')

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="bg-black text-white">
  <div id="home-root" class="md:h-screen flex flex-col md:overflow-hidden relative">

    <!-- Navbar -->
    <nav class="flex-shrink-0 z-20 px-5 md:px-8 py-5 md:py-6 flex items-center gap-4">

      <!-- Logo -->
      <a href="/" class="group flex items-center gap-3 flex-shrink-0">
        <div class="w-11 h-11 border border-white/25 rounded-xl flex items-center justify-center group-hover:border-white/50 transition-all duration-300">
          <span class="text-white font-semibold text-[11px] tracking-[0.2em]">TMU</span>
        </div>
        <span class="hidden sm:block text-xs font-medium tracking-[0.18em] text-white/40 uppercase">PT. Todo Mitra Utama</span>
      </a>

      <!-- Spacer: pushes nav links toward right -->
      <div class="flex-1"></div>

      <!-- Desktop nav links (biased right) -->
      <div class="hidden md:flex items-center gap-1 mr-4">
        <a href="/about.html"     class="nav-pill nav-pill-lg">About</a>
        <a href="/services.html"  class="nav-pill nav-pill-lg">Our Services</a>
        <div class="relative" id="product-mega-wrap">
          <button class="nav-pill nav-pill-lg flex items-center gap-1.5" id="product-mega-btn">
            Product
            <svg class="w-3 h-3 opacity-50 transition-transform duration-200" id="product-mega-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
          </button>
          <div id="product-mega-panel" class="mega-panel hidden">
            <div class="flex gap-0">
              ${productCategories.map(cat => `
                <div class="mega-col">
                  <span class="mega-cat-title">${cat.name}</span>
                  ${cat.brands.map(b => `<a href="${brandHref(cat.slug, b.slug)}" class="mega-brand-link">${b.name}</a>`).join('')}
                </div>
              `).join('')}
            </div>
          </div>
        </div>
        <a href="/portfolio.html" class="nav-pill nav-pill-lg">Portfolio</a>
      </div>

      <!-- Right: Contact + Mobile hamburger -->
      <div class="flex items-center gap-3">
        <a href="/contact.html" class="contact-pill hidden sm:inline-block px-6 py-2.5 rounded-full text-xs font-medium text-white/80 tracking-[0.2em] uppercase">
          Contact Us
        </a>
        <button id="nav-open" class="md:hidden w-10 h-10 flex items-center justify-center text-white/50 hover:text-white transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>
    </nav>
    <!-- Mobile drawer -->
    <div id="nav-drawer" class="fixed inset-0 z-50 hidden md:hidden">
      <div id="nav-overlay" class="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
      <div class="absolute right-0 inset-y-0 w-60 bg-black flex flex-col p-6 shadow-2xl border-l border-white/[0.07]">
        <button id="nav-close" class="self-end mb-8 text-white/40 hover:text-white transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
        <div class="flex flex-col gap-1">
          <a href="/about.html"     class="nav-pill block text-center">About</a>
          <a href="/services.html"  class="nav-pill block text-center">Our Services</a>
          <button class="nav-pill block text-center w-full mob-product-toggle">Product ▾</button>
          <div class="mob-product-menu hidden pl-2">
            ${productCategories.map(cat => `
              <button class="mob-cat-toggle">${cat.name} ›</button>
              <div class="mob-cat-brands hidden">
                ${cat.brands.map(b => `<a href="${brandHref(cat.slug, b.slug)}" class="mob-brand-link">${b.name}</a>`).join('')}
              </div>
            `).join('')}
          </div>
          <a href="/portfolio.html" class="nav-pill block text-center">Portfolio</a>
        </div>
        <a href="/contact.html" class="contact-pill mt-6 block text-center px-4 py-2.5 rounded-full text-[10px] font-medium tracking-[0.2em] uppercase text-white/80">
          Contact Us
        </a>
      </div>
    </div>

    <!-- Tagline + Cards wrapper -->
    <div class="flex-1 flex flex-col md:overflow-hidden">

      <!-- Tagline: centered in its own zone between navbar and carousel -->
      <div class="flex-none flex items-center justify-center px-4" style="height: clamp(60px, 12vh, 140px);">
        <h1 class="mt-6 md:mt-16 text-lg md:text-2xl lg:text-[1.75rem] font-light tracking-wide text-white/70 text-center">
          Konstruksi profesional untuk masa depan.
        </h1>
      </div>

      <!-- Mobile: vertical cards -->
      <div class="md:hidden px-4 pb-6 space-y-4">
        ${mobileCardsHTML}
      </div>

      <!-- Desktop: horizontal carousel -->
      <div id="carousel" class="hidden md:block flex-1 overflow-x-auto overflow-y-hidden hide-scrollbar">
        <div id="track" class="flex h-full items-center"> ${allCardsHTML}
        </div>
      </div>

    </div>

  </div><!-- end #home-root hero -->

    <!-- Footer -->
    <footer class="z-10 bg-[#0a0a0a] border-t border-white/[0.06]">
      <div class="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20">

        <!-- Top row -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-14">

          <!-- Brand -->
          <div class="md:col-span-1">
            <div class="w-12 h-12 border border-white/20 rounded-xl flex items-center justify-center mb-5">
              <span class="text-white font-semibold text-[11px] tracking-[0.25em]">TMU</span>
            </div>
            <p class="text-sm text-white/40 leading-relaxed mb-4">Konstruksi mekanikal & elektrikal profesional untuk Indonesia yang lebih baik.</p>
            <span class="text-[10px] tracking-[0.15em] text-white/25 uppercase">Anggota AKLI</span>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="text-[10px] tracking-[0.25em] text-white/50 uppercase mb-5">Halaman</h4>
            <nav class="flex flex-col gap-3">
              <a href="/about.html" class="text-sm text-white/40 hover:text-white transition-colors">About</a>
              <a href="/services.html" class="text-sm text-white/40 hover:text-white transition-colors">Our Services</a>
              <a href="/product.html" class="text-sm text-white/40 hover:text-white transition-colors">Product</a>
              <a href="/portfolio.html" class="text-sm text-white/40 hover:text-white transition-colors">Portfolio</a>
              <a href="/contact.html" class="text-sm text-white/40 hover:text-white transition-colors">Contact</a>
            </nav>
          </div>

          <!-- Contact Info -->
          <div>
            <h4 class="text-[10px] tracking-[0.25em] text-white/50 uppercase mb-5">Kontak</h4>
            <div class="space-y-4">
              <div>
                <span class="text-[10px] tracking-[0.15em] text-white/30 uppercase block mb-1">Telepon</span>
                <a href="tel:+622112345678" class="text-sm text-white/60 hover:text-white transition-colors">+62 21 1234 5678</a>
              </div>
              <div>
                <span class="text-[10px] tracking-[0.15em] text-white/30 uppercase block mb-1">WhatsApp</span>
                <a href="https://wa.me/6281234567890" target="_blank" class="text-sm text-white/60 hover:text-white transition-colors">+62 812 3456 7890</a>
              </div>
              <div>
                <span class="text-[10px] tracking-[0.15em] text-white/30 uppercase block mb-1">Email</span>
                <a href="mailto:info@todomitra.co.id" class="text-sm text-white/60 hover:text-white transition-colors">info@todomitra.co.id</a>
              </div>
            </div>
          </div>

          <!-- Address -->
          <div>
            <h4 class="text-[10px] tracking-[0.25em] text-white/50 uppercase mb-5">Alamat</h4>
            <p class="text-sm text-white/40 leading-relaxed mb-4">Jakarta Barat<br>DKI Jakarta, Indonesia</p>
            <div>
              <span class="text-[10px] tracking-[0.15em] text-white/30 uppercase block mb-1">Jam Operasional</span>
              <p class="text-sm text-white/40">Senin – Jumat: 08.00 – 17.00</p>
              <p class="text-sm text-white/40">Sabtu: 08.00 – 12.00</p>
            </div>
          </div>

        </div>

        <!-- Divider -->
        <div class="h-px bg-white/[0.06] mb-8"></div>

        <!-- Bottom row -->
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <span class="text-[10px] md:text-[11px] tracking-[0.15em] text-white/30 uppercase">© 2026 PT. Todo Mitra Utama. All rights reserved.</span>
          <div class="flex items-center gap-5">
            <a href="https://wa.me/6281234567890" target="_blank" class="text-white/25 hover:text-white/70 transition-colors">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
            <a href="mailto:info@todomitra.co.id" class="text-white/25 hover:text-white/70 transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </a>
            <a href="tel:+622112345678" class="text-white/25 hover:text-white/70 transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            </a>
          </div>
        </div>

      </div>
    </footer>

  </div><!-- end outer wrapper -->
`

// ─── Mobile nav drawer ───────────────────────────────────────
const navDrawer   = document.getElementById('nav-drawer')!
const navOverlay  = document.getElementById('nav-overlay')!
document.getElementById('nav-open')?.addEventListener('click', () => navDrawer.classList.remove('hidden'))
document.getElementById('nav-close')?.addEventListener('click', () => navDrawer.classList.add('hidden'))
navOverlay.addEventListener('click', () => navDrawer.classList.add('hidden'))

// ─── Product mega-menu (desktop) ─────────────────────────────
const megaBtn   = document.getElementById('product-mega-btn')!
const megaPanel = document.getElementById('product-mega-panel')!
const megaArrow = document.getElementById('product-mega-arrow')!
const megaWrap  = document.getElementById('product-mega-wrap')!

megaBtn.addEventListener('click', () => {
  const open = !megaPanel.classList.contains('hidden')
  megaPanel.classList.toggle('hidden', open)
  megaArrow.style.transform = open ? '' : 'rotate(180deg)'
})

// Close mega-menu on outside click
document.addEventListener('click', (e) => {
  if (!megaWrap.contains(e.target as Node)) {
    megaPanel.classList.add('hidden')
    megaArrow.style.transform = ''
  }
})

// ─── Product accordion (mobile drawer) ──────────────────────
document.querySelectorAll('.mob-product-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const menu = btn.nextElementSibling as HTMLElement
    menu?.classList.toggle('hidden')
  })
})
document.querySelectorAll('.mob-cat-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const brands = btn.nextElementSibling as HTMLElement
    brands?.classList.toggle('hidden')
  })
})

// ─── Three.js wireframe background ──────────────────────────
const mainDiv = document.getElementById('home-root')!
initThreeBackground(mainDiv)

// ─── Custom cursor ───────────────────────────────────────────
initCursor()

// ─── Layout: exactly 3 square cards with gaps, centered ────────
const carousel = document.getElementById('carousel')!
const track = document.getElementById('track')!
const CARD_COUNT = cards.length // 4
const GAP = 80 // px gap between cards
const SIDE_PAD = 40 // px padding on left/right of visible area

function sizeCards() {
  const viewW = carousel.clientWidth
  const available = viewW - SIDE_PAD * 2
  const cardW = Math.floor((available - GAP * 2) / 3) // 3 visible, 2 gaps between them
  const cardMin = 200
  const w = Math.max(cardW, cardMin)

  track.style.gap = `${GAP}px`
  track.style.paddingLeft = `${SIDE_PAD}px`
  track.style.paddingRight = `${SIDE_PAD}px`

  track.querySelectorAll<HTMLElement>('.widget-card').forEach(c => {
    c.style.width = `${w}px`
    c.style.minWidth = `${w}px`
  })
}
sizeCards()
window.addEventListener('resize', () => {
  sizeCards()
  // Re-center after resize
  carousel.scrollLeft = getOneSetWidth() * 2
})

function getOneSetWidth() {
  const allW = track.querySelectorAll('.widget-card')
  if (!allW.length) return 0
  const cw = (allW[0] as HTMLElement).offsetWidth
  return (cw + GAP) * CARD_COUNT // width of 4 cards + 4 gaps
}

// ─── Auto-scroll ────────────────────────────────────────────
let isPaused = false
let isDragging = false
const AUTO_SPEED = 0.4 // px per frame — gentle

function autoScrollLoop() {
  requestAnimationFrame(autoScrollLoop)
  if (!carousel.offsetWidth) return // hidden on mobile
  if (!isPaused && !isDragging) {
    carousel.scrollLeft += AUTO_SPEED
    wrapScroll()
  }
}

function wrapScroll() {
  const setW = getOneSetWidth()
  if (setW <= 0) return
  // We have 5 sets (0..4). Keep position within sets 1-3
  const maxScroll = setW * 4
  const minScroll = setW
  if (carousel.scrollLeft >= maxScroll) {
    carousel.scrollLeft -= setW
  } else if (carousel.scrollLeft < minScroll) {
    carousel.scrollLeft += setW
  }
}

// Initial position: wait for layout to be fully ready (critical for Safari)
function initScroll() {
  // Skip if carousel is hidden (mobile)
  if (!carousel.offsetWidth) { setTimeout(initScroll, 500); return }
  const setW = getOneSetWidth()
  if (setW <= 0) {
    // Layout not ready yet (common in Safari) — retry next frame
    requestAnimationFrame(initScroll)
    return
  }
  // Disable any smooth-scroll override then jump to middle set
  carousel.style.scrollBehavior = 'auto'
  ;(carousel as any).style.webkitScrollBehavior = 'auto'
  carousel.scrollLeft = setW * 2
  requestAnimationFrame(autoScrollLoop)
}

// Use both DOMContentLoaded-safety and load for Safari
if (document.readyState === 'complete') {
  requestAnimationFrame(initScroll)
} else {
  window.addEventListener('load', () => requestAnimationFrame(initScroll))
}

// Hover pause
carousel.addEventListener('mouseenter', () => { isPaused = true })
carousel.addEventListener('mouseleave', () => { isPaused = false })

// ─── Drag scroll (desktop) ──────────────────────────────────
let startX = 0
let scrollStart = 0
let dragMoved = 0

carousel.addEventListener('mousedown', (e) => {
  isDragging = true
  startX = e.pageX
  scrollStart = carousel.scrollLeft
  dragMoved = 0
  carousel.style.cursor = 'grabbing'
})

window.addEventListener('mousemove', (e) => {
  if (!isDragging) return
  e.preventDefault()
  const dx = e.pageX - startX
  dragMoved = Math.abs(dx)
  carousel.scrollLeft = scrollStart - dx
})

window.addEventListener('mouseup', () => {
  if (!isDragging) return
  isDragging = false
  carousel.style.cursor = ''
  wrapScroll()
  if (dragMoved > 6) {
    const blocker = (ev: Event) => { ev.preventDefault(); ev.stopPropagation() }
    carousel.addEventListener('click', blocker, { capture: true, once: true })
  }
})

// ─── Touch: native scroll + wrapping ────────────────────────
carousel.addEventListener('scroll', () => { wrapScroll() }, { passive: true })
carousel.addEventListener('touchstart', () => { isPaused = true }, { passive: true })
carousel.addEventListener('touchend', () => { setTimeout(() => { isPaused = false }, 2500) })
