import { renderPage } from './layout'

renderPage('Portfolio', 'Proyek yang telah selesai', `

  <!-- Intro -->
  <div class="bg-white rounded-3xl p-8 md:p-12 text-gray-900">
    <div class="grid md:grid-cols-3 gap-8 md:gap-10">
      <div>
        <h2 class="text-3xl md:text-4xl font-light leading-tight tracking-tight">Rekam jejak proyek kami.</h2>
      </div>
      <div class="text-sm text-gray-600 leading-relaxed space-y-4">
        <p>Selama lebih dari 15 tahun, kami telah menyelesaikan berbagai proyek konstruksi mekanikal dan elektrikal di seluruh Indonesia dengan hasil yang memuaskan.</p>
      </div>
      <div class="text-sm text-gray-500 leading-relaxed space-y-4">
        <p>Setiap proyek adalah bukti komitmen kami terhadap kualitas, ketepatan waktu, dan kepuasan klien.</p>
        <p class="text-gray-900 font-medium">Lihat apa yang telah kami capai.</p>
      </div>
    </div>
  </div>

  <!-- Featured Project -->
  <div class="bg-white rounded-3xl overflow-hidden text-gray-900">
    <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=500&fit=crop"
         alt="Commercial Building"
         class="w-full h-56 md:h-80 object-cover">
    <div class="p-8 md:p-12">
      <span class="text-[10px] tracking-[0.2em] text-blue-600 uppercase font-medium">Featured Project</span>
      <h3 class="text-2xl font-light text-gray-900 mt-2 mb-6">Gedung Perkantoran Jakarta Barat</h3>
      <div class="grid md:grid-cols-3 gap-6">
        <p class="text-sm text-gray-600 leading-relaxed">Instalasi sistem mekanikal dan elektrikal lengkap untuk gedung perkantoran 12 lantai di kawasan bisnis Jakarta Barat.</p>
        <div class="space-y-3">
          <div>
            <span class="text-[10px] tracking-[0.15em] text-gray-400 uppercase block">Klien</span>
            <span class="text-sm text-gray-700">PT. Developer Indonesia</span>
          </div>
          <div>
            <span class="text-[10px] tracking-[0.15em] text-gray-400 uppercase block">Tahun</span>
            <span class="text-sm text-gray-700">2024</span>
          </div>
        </div>
        <div class="space-y-3">
          <div>
            <span class="text-[10px] tracking-[0.15em] text-gray-400 uppercase block">Nilai Proyek</span>
            <span class="text-sm text-gray-700">Rp 15 Miliar</span>
          </div>
          <div>
            <span class="text-[10px] tracking-[0.15em] text-gray-400 uppercase block">Status</span>
            <span class="text-sm text-green-600 font-medium">Selesai</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Project Grid -->
  <div class="grid md:grid-cols-2 gap-5 md:gap-6">
    <div class="bg-white rounded-3xl overflow-hidden text-gray-900">
      <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=300&fit=crop"
           alt="Office Building" class="w-full h-44 object-cover">
      <div class="p-6">
        <span class="text-[10px] tracking-[0.15em] text-gray-400 uppercase">Komersial · 2023</span>
        <h4 class="font-medium text-gray-900 mt-1 mb-2">Mall Retail & Entertainment Center</h4>
        <p class="text-sm text-gray-500 leading-relaxed">Instalasi elektrikal dan sistem pendingin untuk pusat perbelanjaan modern di Jakarta.</p>
      </div>
    </div>

    <div class="bg-white rounded-3xl overflow-hidden text-gray-900">
      <img src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&h=300&fit=crop"
           alt="Factory" class="w-full h-44 object-cover">
      <div class="p-6">
        <span class="text-[10px] tracking-[0.15em] text-gray-400 uppercase">Industri · 2023</span>
        <h4 class="font-medium text-gray-900 mt-1 mb-2">Pabrik Manufaktur Cikarang</h4>
        <p class="text-sm text-gray-500 leading-relaxed">Instalasi panel distribusi dan sistem kelistrikan pabrik manufaktur skala besar.</p>
      </div>
    </div>

    <div class="bg-white rounded-3xl overflow-hidden text-gray-900">
      <img src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&h=300&fit=crop"
           alt="Residential" class="w-full h-44 object-cover">
      <div class="p-6">
        <span class="text-[10px] tracking-[0.15em] text-gray-400 uppercase">Residensial · 2022</span>
        <h4 class="font-medium text-gray-900 mt-1 mb-2">Apartemen Premium Alam Sutera</h4>
        <p class="text-sm text-gray-500 leading-relaxed">Sistem mekanikal elektrikal lengkap untuk tower apartemen 25 lantai.</p>
      </div>
    </div>

    <div class="bg-white rounded-3xl overflow-hidden text-gray-900">
      <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=300&fit=crop"
           alt="Solar Project" class="w-full h-44 object-cover">
      <div class="p-6">
        <span class="text-[10px] tracking-[0.15em] text-gray-400 uppercase">Energi · 2024</span>
        <h4 class="font-medium text-gray-900 mt-1 mb-2">Solar Farm Karawang</h4>
        <p class="text-sm text-gray-500 leading-relaxed">Instalasi solar panel 2MW untuk kawasan industri di Karawang, Jawa Barat.</p>
      </div>
    </div>
  </div>

  <!-- Testimonial -->
  <div class="bg-[#111] rounded-3xl p-8 md:p-12">
    <div class="flex items-center gap-2 mb-8">
      <span class="w-1.5 h-1.5 bg-white rounded-sm block"></span>
      <span class="text-[11px] tracking-[0.2em] text-white/50 uppercase">Testimoni Klien</span>
    </div>
    <blockquote class="text-xl md:text-2xl font-light text-white/80 leading-relaxed mb-6">
      "Kerjasama dengan TMU sangat memuaskan. Tim mereka profesional, tepat waktu, dan hasil pekerjaannya berkualitas tinggi. Kami sangat merekomendasikan."
    </blockquote>
    <div>
      <div class="text-sm text-white/60">— Project Manager</div>
      <div class="text-[10px] tracking-[0.15em] text-white/30 uppercase mt-1">PT. Developer Indonesia</div>
    </div>
  </div>

  <!-- CTA -->
  <div class="bg-white rounded-3xl p-8 md:p-12 text-gray-900">
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      <div>
        <h3 class="text-xl font-light mb-2">Punya proyek yang ingin dikerjakan?</h3>
        <p class="text-sm text-gray-500">Hubungi kami untuk diskusi kebutuhan proyek Anda.</p>
      </div>
      <a href="/contact.html" class="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl text-sm font-medium text-white tracking-wider transition-colors text-center">
        MULAI PROYEK
      </a>
    </div>
  </div>

`)
