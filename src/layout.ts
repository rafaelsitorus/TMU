import './style.css'
import { initCursor } from './cursor'

interface NavItem {
  href: string
  label: string
  desc: string
}

const navItems: NavItem[] = [
  { href: '/about.html',     label: 'About',        desc: 'Mengenal perusahaan kami.' },
  { href: '/services.html',  label: 'Our Services', desc: 'Layanan konstruksi profesional.' },
  { href: '/product.html',   label: 'Product',      desc: 'Produk berkualitas tinggi.' },
  { href: '/portfolio.html', label: 'Portfolio',     desc: 'Proyek yang telah selesai.' },
]

export function renderPage(activeLabel: string, pageTitle: string, content: string) {

  const sidebar = navItems.map(n => {
    const a = n.label === activeLabel
    return `<a href="${n.href}" class="block mb-7 transition-opacity duration-300 ${a ? 'opacity-100' : 'opacity-30 hover:opacity-60'}">
      <div class="flex items-center gap-2 mb-1">
        ${a ? '<span class="w-1.5 h-1.5 bg-white rounded-sm block flex-shrink-0"></span>' : ''}
        <span class="text-[11px] font-medium tracking-[0.2em] uppercase">${n.label}</span>
      </div>
      <p class="text-[10px] tracking-wider text-white/40 uppercase leading-relaxed ${a ? 'pl-3.5' : ''}">${n.desc}</p>
    </a>`
  }).join('')

  const mobileLinks = navItems.map(n =>
    `<a href="${n.href}" class="block py-3 border-b border-white/[0.06] text-[11px] tracking-[0.2em] uppercase transition-colors ${n.label === activeLabel ? 'text-white' : 'text-white/50 hover:text-white'}">${n.label}</a>`
  ).join('')

  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class="min-h-screen bg-black text-white">

  <!-- ── Desktop sidebar ── -->
  <aside class="hidden lg:flex flex-col fixed inset-y-0 left-0 w-80 xl:w-[360px] z-20 bg-black border-r border-white/[0.06] px-8 py-8 overflow-y-auto">
    <a href="/" class="mb-10 inline-flex">
      <div class="w-11 h-11 border border-white/20 rounded-xl flex items-center justify-center hover:border-white/40 transition-colors">
        <span class="text-white font-semibold text-[11px] tracking-[0.25em]">TMU</span>
      </div>
    </a>

    <div class="mb-8">
      <div class="flex items-center gap-2 mb-3">
        <span class="w-1.5 h-1.5 bg-white rounded-sm block"></span>
        <span class="text-[11px] font-medium tracking-[0.25em] text-white/60 uppercase">${activeLabel}</span>
      </div>
      <h1 class="text-lg font-light text-white/80 leading-relaxed">${pageTitle}</h1>
    </div>

    <div class="h-px bg-white/[0.08] mb-8"></div>

    <nav class="flex-1">${sidebar}</nav>

    <div class="pt-6 mt-auto border-t border-white/[0.06]">
      <span class="block text-[10px] tracking-[0.15em] text-white/25 uppercase mb-3">PT. Todo Mitra Utama</span>
      <a href="/contact.html" class="contact-pill inline-block px-5 py-2 rounded-full text-[11px] font-medium tracking-[0.2em] uppercase text-white/80">Contact Us</a>
    </div>
  </aside>

  <!-- ── Mobile header ── -->
  <header class="lg:hidden sticky top-0 z-30 bg-black/95 backdrop-blur-md border-b border-white/[0.06]">
    <div class="flex items-center justify-between px-4 py-3">
      <a href="/" class="flex items-center gap-3">
        <div class="w-9 h-9 border border-white/20 rounded-lg flex items-center justify-center">
          <span class="text-white font-semibold text-[10px] tracking-[0.2em]">TMU</span>
        </div>
        <span class="text-[10px] font-medium tracking-[0.15em] text-white/50 uppercase">${activeLabel}</span>
      </a>
      <button id="mob-btn" class="w-9 h-9 flex items-center justify-center text-white/50 hover:text-white transition-colors">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </div>
  </header>

  <!-- ── Mobile drawer ── -->
  <div id="mob-drawer" class="fixed inset-0 z-40 hidden lg:hidden">
    <div id="mob-overlay" class="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
    <div class="absolute right-0 inset-y-0 w-64 bg-black p-6 flex flex-col shadow-2xl">
      <button id="mob-close" class="self-end mb-6 text-white/50 hover:text-white transition-colors">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
      <a href="/" class="block py-3 border-b border-white/[0.06] text-[11px] tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors">Home</a>
      ${mobileLinks}
      <a href="/contact.html" class="contact-pill mt-6 block text-center px-4 py-2.5 rounded-full text-[11px] font-medium tracking-[0.2em] uppercase text-white/80">Contact Us</a>
    </div>
  </div>

  <!-- ── Content ── -->
  <main class="lg:ml-80 xl:ml-[360px] p-4 md:p-6 xl:p-8 pb-16">
    <div class="max-w-5xl space-y-5 md:space-y-6">${content}</div>
  </main>

</div>`

  // wire mobile nav
  document.getElementById('mob-btn')?.addEventListener('click', () =>
    document.getElementById('mob-drawer')?.classList.remove('hidden'))
  document.getElementById('mob-close')?.addEventListener('click', () =>
    document.getElementById('mob-drawer')?.classList.add('hidden'))
  document.getElementById('mob-overlay')?.addEventListener('click', () =>
    document.getElementById('mob-drawer')?.classList.add('hidden'))

  initCursor()
}
