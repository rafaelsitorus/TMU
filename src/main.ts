import './style.css'

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

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="h-screen bg-black text-white flex flex-col overflow-hidden">

    <!-- Logo & Tagline -->
    <div class="flex flex-col items-center justify-center pt-10 md:pt-12 pb-6 md:pb-8 flex-shrink-0 z-10">
      <a href="/" class="group mb-5">
        <div class="w-14 h-14 border border-white/25 rounded-2xl flex items-center justify-center hover:border-white/50 transition-all duration-300 group-hover:scale-105">
          <span class="text-white font-semibold text-base tracking-[0.2em]">TMU</span>
        </div>
      </a>
      <h1 class="text-xl md:text-2xl lg:text-[1.75rem] font-light tracking-wide text-white/80 text-center px-4">
        Konstruksi profesional untuk masa depan.
      </h1>
    </div>

    <!-- Carousel -->
    <div id="carousel" class="flex-1 overflow-x-auto overflow-y-hidden hide-scrollbar">
      <div id="track" class="flex h-full items-center"> ${allCardsHTML}
      </div>
    </div>

    <!-- Bottom Bar (no border, seamless) -->
    <div class="flex-shrink-0 z-10">
      <div class="max-w-7xl mx-auto px-5 md:px-8 py-4 flex justify-between items-center">
        <div class="flex items-center gap-2">
          <div class="w-2 h-2 bg-white rounded-sm"></div>
          <span class="text-[10px] md:text-xs font-medium tracking-[0.15em] text-white/50 uppercase">PT. TODO MITRA UTAMA</span>
        </div>
        <a href="/contact.html" class="px-5 md:px-6 py-2 md:py-2.5 bg-blue-600 hover:bg-blue-500 rounded-lg text-[11px] md:text-sm font-medium text-white transition-colors tracking-wider uppercase">
          Contact Us
        </a>
      </div>
    </div>

  </div>
`

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
  if (!isPaused && !isDragging) {
    carousel.scrollLeft += AUTO_SPEED
    wrapScroll()
  }
  requestAnimationFrame(autoScrollLoop)
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
