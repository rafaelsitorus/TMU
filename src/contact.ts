import { renderPage } from './layout'

renderPage('Contact', 'Hubungi kami', `

  <!-- Compose Message Form -->
  <div class="bg-white rounded-3xl p-8 md:p-12 text-gray-900">
    <div class="grid md:grid-cols-2 gap-10 md:gap-14">

      <!-- Left: info -->
      <div>
        <h2 class="text-3xl md:text-4xl font-light leading-tight tracking-tight mb-6">Kirim pesan<br>kepada kami.</h2>
        <p class="text-sm text-gray-500 leading-relaxed mb-8">Kami siap membantu Anda. Isi form di samping atau hubungi kami langsung melalui kontak di bawah.</p>

        <div class="space-y-5">
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            </div>
            <div>
              <span class="text-[10px] tracking-[0.2em] text-gray-400 uppercase block mb-0.5">Telepon</span>
              <span class="text-sm text-gray-700">+62 21 1234 5678</span>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </div>
            <div>
              <span class="text-[10px] tracking-[0.2em] text-gray-400 uppercase block mb-0.5">Email</span>
              <span class="text-sm text-gray-700">info@todomitra.co.id</span>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            </div>
            <div>
              <span class="text-[10px] tracking-[0.2em] text-gray-400 uppercase block mb-0.5">Alamat</span>
              <span class="text-sm text-gray-700">Jakarta Barat, DKI Jakarta<br>Indonesia</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Right: form -->
      <form id="contact-form" class="space-y-5">
        <div>
          <label class="block text-[10px] tracking-[0.2em] text-gray-400 uppercase mb-2">Nama Lengkap</label>
          <input type="text" name="name" required
            class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-300 transition-all"
            placeholder="Masukkan nama Anda">
        </div>

        <div>
          <label class="block text-[10px] tracking-[0.2em] text-gray-400 uppercase mb-2">Email</label>
          <input type="email" name="email" required
            class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-300 transition-all"
            placeholder="email@contoh.com">
        </div>

        <div>
          <label class="block text-[10px] tracking-[0.2em] text-gray-400 uppercase mb-2">No. Telepon</label>
          <input type="tel" name="phone"
            class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-300 transition-all"
            placeholder="+62 812 xxxx xxxx">
        </div>

        <div>
          <label class="block text-[10px] tracking-[0.2em] text-gray-400 uppercase mb-2">Subjek</label>
          <select name="subject" required
            class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-300 transition-all">
            <option value="">Pilih subjek</option>
            <option value="general">Pertanyaan Umum</option>
            <option value="quotation">Permintaan Penawaran</option>
            <option value="project">Konsultasi Proyek</option>
            <option value="partnership">Kerjasama</option>
            <option value="other">Lainnya</option>
          </select>
        </div>

        <div>
          <label class="block text-[10px] tracking-[0.2em] text-gray-400 uppercase mb-2">Pesan</label>
          <textarea name="message" rows="5" required
            class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-300 transition-all resize-none"
            placeholder="Tulis pesan Anda di sini..."></textarea>
        </div>

        <button type="submit"
          class="w-full bg-gray-900 text-white py-3.5 rounded-xl text-xs font-medium tracking-[0.2em] uppercase hover:bg-gray-800 active:scale-[0.98] transition-all">
          Kirim Pesan
        </button>

        <div id="form-success" class="hidden text-center py-4">
          <div class="inline-flex items-center gap-2 px-5 py-2.5 bg-green-50 text-green-700 rounded-full text-sm">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            Pesan berhasil dikirim!
          </div>
        </div>
      </form>

    </div>
  </div>

  <!-- Map / Location -->
  <div class="bg-[#111] rounded-3xl p-8 md:p-12">
    <div class="flex items-center gap-2 mb-6">
      <span class="w-1.5 h-1.5 bg-white rounded-sm block"></span>
      <span class="text-[11px] tracking-[0.2em] text-white/50 uppercase">Lokasi Kantor</span>
    </div>
    <div class="grid md:grid-cols-2 gap-8">
      <div>
        <h3 class="text-xl font-light text-white mb-4">Kantor Pusat</h3>
        <p class="text-sm text-white/50 leading-relaxed mb-4">Jakarta Barat, DKI Jakarta<br>Indonesia</p>
        <div class="space-y-2">
          <p class="text-sm text-white/40"><span class="text-white/60">Senin – Jumat:</span> 08.00 – 17.00 WIB</p>
          <p class="text-sm text-white/40"><span class="text-white/60">Sabtu:</span> 08.00 – 12.00 WIB</p>
          <p class="text-sm text-white/40"><span class="text-white/60">Minggu:</span> Tutup</p>
        </div>
      </div>
      <div class="bg-white/5 rounded-2xl h-48 md:h-full min-h-[200px] flex items-center justify-center border border-white/[0.06]">
        <span class="text-[10px] tracking-[0.2em] text-white/20 uppercase">Map Placeholder</span>
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
  btn.textContent = 'Mengirim...'
  btn.disabled = true
  setTimeout(() => {
    form.style.display = 'none'
    success?.classList.remove('hidden')
  }, 1200)
})
