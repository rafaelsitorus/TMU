import { renderPage } from './layout'

// ─── Editable text constants ────────────────────────────────
const PAGE_TITLE = 'Hubungi kami'

const HEADING = 'Kirim pesan<br>kepada kami.'
const DESCRIPTION = 'Kami siap membantu Anda. Isi form di samping atau hubungi kami langsung melalui kontak di bawah.'

renderPage('Contact', PAGE_TITLE, `

  <!-- Accent line -->
  <div class="accent-line mb-10"></div>

  <!-- Intro / Contact Form -->
  <div class="fade-section">
    <div class="grid md:grid-cols-2 gap-10 md:gap-16 py-6 border-b border-white/[0.04] pb-16">
      
      <!-- Left: info -->
      <div>
        <h2 class="text-3xl md:text-4xl font-light leading-tight tracking-tight text-white/90 mb-6">${HEADING}</h2>
        <p class="text-sm text-white/50 leading-relaxed mb-10">${DESCRIPTION}</p>

        <div class="space-y-6">
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 glass-panel rounded-xl flex items-center justify-center flex-shrink-0">
              <svg class="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            </div>
            <div>
              <span class="text-[10px] tracking-[0.2em] text-white/30 uppercase block mb-1">Telepon</span>
              <span class="text-sm text-white/80">+62 21 1234 5678</span>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="w-10 h-10 glass-panel rounded-xl flex items-center justify-center flex-shrink-0">
              <svg class="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </div>
            <div>
              <span class="text-[10px] tracking-[0.2em] text-white/30 uppercase block mb-1">Email</span>
              <span class="text-sm text-white/80">info@todomitra.co.id</span>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="w-10 h-10 glass-panel rounded-xl flex items-center justify-center flex-shrink-0">
              <svg class="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            </div>
            <div>
              <span class="text-[10px] tracking-[0.2em] text-white/30 uppercase block mb-1">Alamat</span>
              <span class="text-sm text-white/80">Jakarta Barat, DKI Jakarta<br>Indonesia</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Right: form -->
      <div>
        <form id="contact-form" class="space-y-5">
          <div>
            <label class="block text-[10px] tracking-[0.2em] text-white/40 uppercase mb-2">Nama Lengkap</label>
            <input type="text" name="name" required
              class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white/90 placeholder-white/20 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all"
              placeholder="Masukkan nama Anda">
          </div>

          <div>
            <label class="block text-[10px] tracking-[0.2em] text-white/40 uppercase mb-2">Email</label>
            <input type="email" name="email" required
              class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white/90 placeholder-white/20 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all"
              placeholder="email@contoh.com">
          </div>

          <div>
            <label class="block text-[10px] tracking-[0.2em] text-white/40 uppercase mb-2">No. Telepon</label>
            <input type="tel" name="phone"
              class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white/90 placeholder-white/20 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all"
              placeholder="+62 812 xxxx xxxx">
          </div>

          <div>
            <label class="block text-[10px] tracking-[0.2em] text-white/40 uppercase mb-2">Subjek</label>
            <select name="subject" required
              class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white/90 focus:outline-none focus:border-blue-400 focus:bg-[#1f1f1f] transition-all appearance-none">
              <option value="" disabled selected hidden>Pilih subjek</option>
              <option value="general" class="bg-[#1a1a1a] text-white">Pertanyaan Umum</option>
              <option value="quotation" class="bg-[#1a1a1a] text-white">Permintaan Penawaran</option>
              <option value="project" class="bg-[#1a1a1a] text-white">Konsultasi Proyek</option>
              <option value="partnership" class="bg-[#1a1a1a] text-white">Kerjasama</option>
              <option value="other" class="bg-[#1a1a1a] text-white">Lainnya</option>
            </select>
          </div>

          <div>
            <label class="block text-[10px] tracking-[0.2em] text-white/40 uppercase mb-2">Pesan</label>
            <textarea name="message" rows="5" required
              class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white/90 placeholder-white/20 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all resize-none"
              placeholder="Tulis pesan Anda di sini..."></textarea>
          </div>

          <button type="submit"
            class="w-full contact-pill inline-block py-3.5 rounded-full text-xs font-medium text-white/80 tracking-wider text-center flex items-center justify-center transition-all hover:text-white mt-4 border border-white/10">
            KIRIM PESAN
          </button>

          <div id="form-success" class="hidden text-center py-4">
            <div class="inline-flex items-center gap-2 px-5 py-2.5 bg-green-900/40 text-green-400 border border-green-500/30 rounded-full text-sm">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              Pesan berhasil dikirim!
            </div>
          </div>
        </form>
      </div>

    </div>
  </div>

  <!-- Map / Location -->
  <div class="fade-section py-10">
    <div class="flex items-center gap-2 mb-8">
      <span class="glow-dot text-blue-400"></span>
      <span class="text-[11px] tracking-[0.2em] text-white/50 uppercase">Lokasi Kantor</span>
    </div>
    
    <div class="grid md:grid-cols-2 gap-10">
      <div>
        <h3 class="text-xl md:text-2xl font-light text-white/90 mb-4">Kantor Pusat</h3>
        <p class="text-sm text-white/50 leading-relaxed mb-6">Jakarta Barat, DKI Jakarta<br>Indonesia</p>
        
        <div class="space-y-3">
          <p class="text-sm text-white/40"><span class="text-white/70 block mb-1">Senin – Jumat</span> 08.00 – 17.00 WIB</p>
          <div class="h-px w-8 bg-white/10"></div>
          <p class="text-sm text-white/40"><span class="text-white/70 block mb-1">Sabtu</span> 08.00 – 12.00 WIB</p>
          <div class="h-px w-8 bg-white/10"></div>
          <p class="text-sm text-white/40"><span class="text-white/70 block mb-1">Minggu</span> Tutup</p>
        </div>
      </div>
      
      <div class="glass-panel overflow-hidden rounded-2xl h-64 md:h-full min-h-[250px] flex flex-col items-center justify-center relative">
        <svg class="w-10 h-10 text-white/20 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>
        <span class="text-[10px] tracking-[0.2em] text-white/30 uppercase">Map Integration Here</span>
        
        <!-- Subtle decorative grid -->
        <div class="absolute inset-0 z-[-1]" style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0); background-size: 20px 20px;"></div>
      </div>
    </div>
  </div>

`)

// Wire up form submission
const form = document.getElementById('contact-form') as HTMLFormElement | null
const success = document.getElementById('form-success')
form?.addEventListener('submit', (e) => {
  e.preventDefault()
  // Simulate sending
  const btn = form.querySelector('button[type="submit"]') as HTMLButtonElement
  btn.textContent = 'MENGIRIM...'
  btn.disabled = true
  setTimeout(() => {
    form.style.display = 'none'
    success?.classList.remove('hidden')
  }, 1200)
})