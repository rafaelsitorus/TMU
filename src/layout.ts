import './style.css'
import { initCursor } from './cursor'
import { productCategories, brandHref } from './product-data'

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

/** Build the expandable product tree for sidebar */
function buildProductTree(isActive: boolean): string {
  const opClass = isActive ? 'opacity-100' : 'opacity-30 hover:opacity-60'
  const catTree = productCategories.map(cat => `
    <button class="sidebar-cat-toggle" data-cat="${cat.slug}">
      <svg class="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
      ${cat.name}
    </button>
    <div class="sidebar-cat-brands hidden" data-cat-brands="${cat.slug}">
      ${cat.brands.map(b => `<a href="${brandHref(cat.slug, b.slug)}" class="sidebar-brand-link">${b.name}</a>`).join('')}
    </div>
  `).join('')

  return `<div class="block mb-7 transition-opacity duration-300 ${opClass}">
    <button class="sidebar-product-toggle flex items-center gap-2 mb-1 w-full text-left">
      ${isActive ? '<span class="w-1.5 h-1.5 bg-white rounded-sm block flex-shrink-0"></span>' : ''}
      <span class="text-[11px] font-medium tracking-[0.2em] uppercase">Product</span>
      <svg class="w-3 h-3 ml-auto opacity-40 transition-transform duration-200 product-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
    </button>
    <p class="text-[10px] tracking-wider text-white/40 uppercase leading-relaxed ${isActive ? 'pl-3.5' : ''}">Produk berkualitas tinggi.</p>
    <div class="sidebar-product-list hidden mt-2 pl-3.5 space-y-0.5">
      ${catTree}
    </div>
  </div>`
}

/** Highlight the sidebar brand link that matches the current URL */
function _highlightActiveBrand() {
  const brandSlug = new URLSearchParams(window.location.search).get('brand')
  document.querySelectorAll<HTMLAnchorElement>('.sidebar-brand-link').forEach(a => {
    const url = new URL(a.href)
    a.classList.toggle('active-brand', !!brandSlug && url.searchParams.get('brand') === brandSlug)
  })
}

/** Swap only the main content + page-title without touching the sidebar */
export function updateMainContent(content: string, pageTitle: string) {
  const main = document.querySelector('main > div') as HTMLElement | null
  if (main) main.innerHTML = content
  // Update the page title line in sidebar
  const titleEl = document.querySelector<HTMLElement>('.sidebar-page-title')
  if (titleEl) titleEl.textContent = pageTitle
  // Re-highlight active brand
  _highlightActiveBrand()
}

export function renderPage(activeLabel: string, pageTitle: string, content: string) {

  const sidebar = navItems.map(n => {
    const a = n.label === activeLabel
    // Product gets a special expandable tree
    if (n.label === 'Product') return buildProductTree(a)
    return `<a href="${n.href}" class="block mb-7 transition-opacity duration-300 ${a ? 'opacity-100' : 'opacity-30 hover:opacity-60'}">
      <div class="flex items-center gap-2 mb-1">
        ${a ? '<span class="w-1.5 h-1.5 bg-white rounded-sm block flex-shrink-0"></span>' : ''}
        <span class="text-[11px] font-medium tracking-[0.2em] uppercase">${n.label}</span>
      </div>
      <p class="text-[10px] tracking-wider text-white/40 uppercase leading-relaxed ${a ? 'pl-3.5' : ''}">${n.desc}</p>
    </a>`
  }).join('')

  const mobileLinks = navItems.map(n => {
    if (n.label === 'Product') {
      return `<button class="block w-full text-left py-3 border-b border-white/[0.06] text-[11px] tracking-[0.2em] uppercase transition-colors mob-page-product-toggle ${n.label === activeLabel ? 'text-white' : 'text-white/50 hover:text-white'}">Product ▾</button>
      <div class="mob-page-product-menu hidden pl-3 border-b border-white/[0.06]">
        ${productCategories.map(cat => `
          <button class="mob-cat-toggle">${cat.name} ›</button>
          <div class="mob-cat-brands hidden">
            ${cat.brands.map(b => `<a href="${brandHref(cat.slug, b.slug)}" class="mob-brand-link">${b.name}</a>`).join('')}
          </div>
        `).join('')}
      </div>`
    }
    return `<a href="${n.href}" class="block py-3 border-b border-white/[0.06] text-[11px] tracking-[0.2em] uppercase transition-colors ${n.label === activeLabel ? 'text-white' : 'text-white/50 hover:text-white'}">${n.label}</a>`
  }).join('')

  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class="min-h-screen bg-black text-white">

  <!-- ── Desktop sidebar ── -->
  <aside class="hidden lg:flex flex-col fixed inset-y-0 left-0 w-80 xl:w-[360px] z-20 bg-black border-r border-white/[0.06] px-8 py-8 overflow-y-hidden">
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
      <h1 class="text-lg font-light text-white/80 leading-relaxed sidebar-page-title">${pageTitle}</h1>
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
    <div class="space-y-5 md:space-y-6">${content}</div>
  </main>

</div>`

  // wire mobile nav
  document.getElementById('mob-btn')?.addEventListener('click', () =>
    document.getElementById('mob-drawer')?.classList.remove('hidden'))
  document.getElementById('mob-close')?.addEventListener('click', () =>
    document.getElementById('mob-drawer')?.classList.add('hidden'))
  document.getElementById('mob-overlay')?.addEventListener('click', () =>
    document.getElementById('mob-drawer')?.classList.add('hidden'))

  // Helper: open/close product list + rotate arrow
  function setProductListOpen(open: boolean) {
    const list  = document.querySelector('.sidebar-product-list')  as HTMLElement | null
    const arrow = document.querySelector('.product-arrow')          as HTMLElement | null
    if (!list) return
    list.classList.toggle('hidden', !open)
    if (arrow) arrow.style.transform = open ? 'rotate(180deg)' : ''
  }

  // Sidebar: Product toggle (click entire row — label or arrow)
  document.querySelectorAll('.sidebar-product-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const list = btn.parentElement?.querySelector('.sidebar-product-list') as HTMLElement
      if (list) {
        const nowOpen = !list.classList.contains('hidden')
        setProductListOpen(nowOpen ? false : true)
      }
    })
  })

  // Sidebar: Category toggle — whole button (name + arrow) is clickable
  document.querySelectorAll('.sidebar-cat-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const brands = btn.nextElementSibling as HTMLElement
      if (brands) {
        brands.classList.toggle('hidden')
        btn.classList.toggle('open')
      }
    })
  })

  // Auto-expand product list and active category on load
  const sp = new URLSearchParams(window.location.search)
  const activeCatSlug = sp.get('cat')
  if (window.location.pathname.includes('product')) {
    setProductListOpen(true)
    if (activeCatSlug) {
      const brandsEl = document.querySelector(`[data-cat-brands="${activeCatSlug}"]`) as HTMLElement | null
      const toggleEl = document.querySelector(`[data-cat="${activeCatSlug}"]`)
      if (brandsEl) brandsEl.classList.remove('hidden')
      if (toggleEl) toggleEl.classList.add('open')
    }
  }

  // SPA navigation for brand links — update URL + fire custom event
  function handleBrandLinkClick(e: Event) {
    // If we're NOT already on the product page, let the browser navigate normally 
    // so it properly loads product.ts instead of staying dead on about.ts/etc.
    const isProductPage = window.location.pathname.includes('product.html')
    if (!isProductPage) return

    const a = e.currentTarget as HTMLAnchorElement
    if (!a.href.includes('product.html')) return
    
    e.preventDefault()
    if (a.href === window.location.href) return
    
    history.pushState({}, '', a.href)
    window.dispatchEvent(new CustomEvent('spa-navigate'))
  }

  document.querySelectorAll<HTMLAnchorElement>('.sidebar-brand-link, .mob-brand-link').forEach(a => {
    a.addEventListener('click', handleBrandLinkClick)
  })

  // Highlight the currently active brand in the sidebar
  _highlightActiveBrand()

  // Mobile drawer: Product toggle
  document.querySelectorAll('.mob-page-product-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const menu = btn.nextElementSibling as HTMLElement
      menu?.classList.toggle('hidden')
    })
  })

  // Mobile drawer: Category toggles
  document.querySelectorAll('.mob-cat-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const brands = btn.nextElementSibling as HTMLElement
      brands?.classList.toggle('hidden')
    })
  })

  initCursor()

  // ─── Theme toggle (light/dark) ──────────────────────────────
  const toggleHtml = `<button id="theme-toggle" class="theme-toggle-btn" title="Toggle light/dark mode">
    <svg class="theme-icon-sun" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
    <svg class="theme-icon-moon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
  </button>`
  document.body.insertAdjacentHTML('beforeend', toggleHtml)

  const themeBtn = document.getElementById('theme-toggle')!
  const htmlEl = document.documentElement
  function setTheme(mode: 'dark' | 'light') {
    htmlEl.setAttribute('data-theme', mode)
    localStorage.setItem('tmu-theme', mode)
  }
  const saved = localStorage.getItem('tmu-theme') as 'dark' | 'light' | null
  setTheme(saved || 'dark')
  themeBtn.addEventListener('click', () => {
    const current = htmlEl.getAttribute('data-theme') || 'dark'
    setTheme(current === 'dark' ? 'light' : 'dark')
  })
}
