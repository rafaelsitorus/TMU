import { renderPage } from './layout'

renderPage('Our Services', 'Layanan konstruksi profesional', `

  <!-- Intro -->
  <div class="bg-white rounded-3xl p-8 md:p-12 text-gray-900">
    <div class="grid md:grid-cols-3 gap-8 md:gap-10">
      <div>
        <h2 class="text-3xl md:text-4xl font-light leading-tight tracking-tight">Solusi konstruksi menyeluruh.</h2>
      </div>
      <div class="text-sm text-gray-600 leading-relaxed space-y-4">
        <p>Kami menyediakan layanan konstruksi mekanikal dan elektrikal yang komprehensif. Dari perencanaan hingga perawatan, tim ahli kami siap mendukung setiap tahap proyek Anda.</p>
      </div>
      <div class="text-sm text-gray-500 leading-relaxed space-y-4">
        <p>Dengan pengalaman lebih dari 15 tahun, kami memahami kebutuhan unik setiap proyek dan memberikan solusi yang tepat sasaran dan efisien.</p>
        <p class="text-gray-900 font-medium">Hubungi kami untuk konsultasi.</p>
      </div>
    </div>
  </div>

  <!-- Image -->
  <div class="rounded-3xl overflow-hidden">
    <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=500&fit=crop"
         alt="Electrical work"
         class="w-full h-56 md:h-80 object-cover">
  </div>

  <!-- Services Grid -->
  <div class="bg-white rounded-3xl p-8 md:p-12 text-gray-900">
    <div class="flex items-center gap-2 mb-8">
      <span class="w-1.5 h-1.5 bg-gray-900 rounded-sm block"></span>
      <span class="text-[11px] tracking-[0.2em] text-gray-400 uppercase">Layanan Kami</span>
    </div>
    <div class="grid md:grid-cols-2 gap-5">

      <div class="bg-gray-50 rounded-2xl p-6">
        <div class="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>
        </div>
        <h4 class="font-medium text-gray-900 mb-2">Instalasi Mekanikal & Elektrikal</h4>
        <p class="text-sm text-gray-500 leading-relaxed">Pemasangan sistem kelistrikan, HVAC, plumbing, dan fire protection untuk gedung komersial dan industri.</p>
      </div>

      <div class="bg-gray-50 rounded-2xl p-6">
        <div class="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center mb-4">
          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
          </svg>
        </div>
        <h4 class="font-medium text-gray-900 mb-2">Konsultasi Teknis</h4>
        <p class="text-sm text-gray-500 leading-relaxed">Perencanaan dan desain sistem mekanikal elektrikal, termasuk studi kelayakan dan analisis kebutuhan energi.</p>
      </div>

      <div class="bg-gray-50 rounded-2xl p-6">
        <div class="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center mb-4">
          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
        </div>
        <h4 class="font-medium text-gray-900 mb-2">Maintenance & Repair</h4>
        <p class="text-sm text-gray-500 leading-relaxed">Perawatan berkala dan perbaikan sistem elektrikal untuk memastikan operasional yang optimal dan aman.</p>
      </div>

      <div class="bg-gray-50 rounded-2xl p-6">
        <div class="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
          </svg>
        </div>
        <h4 class="font-medium text-gray-900 mb-2">Energi Terbarukan</h4>
        <p class="text-sm text-gray-500 leading-relaxed">Instalasi sistem solar panel dan solusi energi terbarukan untuk efisiensi energi dan keberlanjutan.</p>
      </div>

    </div>
  </div>

  <!-- Process -->
  <div class="bg-[#111] rounded-3xl p-8 md:p-12">
    <div class="flex items-center gap-2 mb-8">
      <span class="w-1.5 h-1.5 bg-white rounded-sm block"></span>
      <span class="text-[11px] tracking-[0.2em] text-white/50 uppercase">Proses Kerja</span>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div>
        <div class="text-2xl font-light text-white/80 mb-3">01</div>
        <h4 class="text-sm font-medium text-white/90 mb-2">Konsultasi</h4>
        <p class="text-xs text-white/40 leading-relaxed">Analisis kebutuhan dan perencanaan proyek bersama klien.</p>
      </div>
      <div>
        <div class="text-2xl font-light text-white/80 mb-3">02</div>
        <h4 class="text-sm font-medium text-white/90 mb-2">Desain</h4>
        <p class="text-xs text-white/40 leading-relaxed">Pembuatan desain teknis dan gambar kerja detail.</p>
      </div>
      <div>
        <div class="text-2xl font-light text-white/80 mb-3">03</div>
        <h4 class="text-sm font-medium text-white/90 mb-2">Eksekusi</h4>
        <p class="text-xs text-white/40 leading-relaxed">Pelaksanaan pekerjaan dengan standar kualitas tinggi.</p>
      </div>
      <div>
        <div class="text-2xl font-light text-white/80 mb-3">04</div>
        <h4 class="text-sm font-medium text-white/90 mb-2">Serah Terima</h4>
        <p class="text-xs text-white/40 leading-relaxed">Pengujian, komisioning, dan serah terima proyek.</p>
      </div>
    </div>
  </div>

  <!-- CTA -->
  <div class="bg-white rounded-3xl p-8 md:p-12 text-gray-900">
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      <div>
        <h3 class="text-xl font-light mb-2">Butuh layanan konstruksi?</h3>
        <p class="text-sm text-gray-500">Hubungi tim kami untuk konsultasi gratis dan penawaran harga.</p>
      </div>
      <a href="/contact.html" class="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl text-sm font-medium text-white tracking-wider transition-colors text-center">
        HUBUNGI KAMI
      </a>
    </div>
  </div>

`)
