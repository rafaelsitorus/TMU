import { renderPage } from './layout'

renderPage('About', 'Mengenal perusahaan kami', `

  <!-- Intro -->
  <div class="bg-white rounded-3xl p-8 md:p-12 text-gray-900">
    <div class="grid md:grid-cols-3 gap-8 md:gap-10">
      <div>
        <h2 class="text-3xl md:text-4xl font-light leading-tight tracking-tight">Membangun masa depan konstruksi Indonesia.</h2>
      </div>
      <div class="text-sm text-gray-600 leading-relaxed space-y-4">
        <p>PT. Todo Mitra Utama adalah perusahaan konstruksi yang bergerak di bidang mekanikal dan elektrikal. Berkantor pusat di Jakarta Barat, kami telah melayani berbagai proyek komersial dan industri dengan standar kualitas tertinggi.</p>
        <p>Sebagai anggota AKLI (Asosiasi Kontraktor Listrik dan Mekanikal Indonesia), kami berkomitmen untuk memberikan layanan profesional dan terpercaya.</p>
      </div>
      <div class="text-sm text-gray-500 leading-relaxed space-y-4">
        <p>Kami percaya bahwa infrastruktur kelistrikan yang handal adalah fondasi bagi kemajuan. Setiap proyek yang kami kerjakan mencerminkan dedikasi kami terhadap kualitas dan keselamatan.</p>
        <p class="text-gray-900 font-medium">Mulai membangun bersama kami.</p>
      </div>
    </div>
  </div>

  <!-- Hero Image -->
  <div class="rounded-3xl overflow-hidden">
    <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=500&fit=crop"
         alt="Construction site"
         class="w-full h-56 md:h-80 object-cover">
  </div>

  <!-- Vision & Mission -->
  <div class="bg-white rounded-3xl overflow-hidden text-gray-900">
    <div class="grid md:grid-cols-2">
      <div class="p-8 md:p-12 flex flex-col justify-center">
        <h3 class="text-2xl md:text-3xl font-light leading-tight mb-6">Menjadi mitra konstruksi terpercaya di Indonesia.</h3>
        <p class="text-sm text-gray-600 leading-relaxed mb-6">Kami berkomitmen untuk menjadi perusahaan konstruksi mekanikal dan elektrikal terdepan yang mengutamakan inovasi, kualitas, dan kepuasan pelanggan dalam setiap proyek.</p>
        <div class="flex flex-wrap gap-2">
          <span class="px-4 py-1.5 bg-gray-100 rounded-full text-xs text-gray-600">Inovasi</span>
          <span class="px-4 py-1.5 bg-gray-100 rounded-full text-xs text-gray-600">Kualitas</span>
          <span class="px-4 py-1.5 bg-gray-100 rounded-full text-xs text-gray-600">Keselamatan</span>
          <span class="px-4 py-1.5 bg-gray-100 rounded-full text-xs text-gray-600">Integritas</span>
        </div>
      </div>
      <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=500&fit=crop"
           alt="Modern building"
           class="w-full h-64 md:h-full object-cover">
    </div>
  </div>

  <!-- Stats -->
  <div class="bg-[#111] rounded-3xl p-8 md:p-12">
    <div class="flex items-center gap-2 mb-8">
      <span class="w-1.5 h-1.5 bg-white rounded-sm block"></span>
      <span class="text-[11px] tracking-[0.2em] text-white/50 uppercase">Pencapaian</span>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
      <div>
        <div class="text-3xl md:text-4xl font-light text-white mb-1">50+</div>
        <div class="text-[10px] tracking-[0.15em] text-white/40 uppercase">Proyek Selesai</div>
      </div>
      <div>
        <div class="text-3xl md:text-4xl font-light text-white mb-1">15+</div>
        <div class="text-[10px] tracking-[0.15em] text-white/40 uppercase">Tahun Pengalaman</div>
      </div>
      <div>
        <div class="text-3xl md:text-4xl font-light text-white mb-1">30+</div>
        <div class="text-[10px] tracking-[0.15em] text-white/40 uppercase">Tenaga Ahli</div>
      </div>
      <div>
        <div class="text-3xl md:text-4xl font-light text-white mb-1">100%</div>
        <div class="text-[10px] tracking-[0.15em] text-white/40 uppercase">Kepuasan Klien</div>
      </div>
    </div>
  </div>

  <!-- AKLI Membership -->
  <div class="bg-white rounded-3xl p-8 md:p-12 text-gray-900">
    <div class="flex flex-col md:flex-row gap-8 items-start">
      <div class="flex-1">
        <span class="text-[10px] tracking-[0.2em] text-gray-400 uppercase">Keanggotaan</span>
        <h3 class="text-xl font-light mt-2 mb-4">Anggota resmi AKLI</h3>
        <p class="text-sm text-gray-600 leading-relaxed">Keanggotaan AKLI memastikan setiap pekerjaan yang kami lakukan sesuai dengan standar nasional dan regulasi yang berlaku di Indonesia. Kami mematuhi semua prosedur keselamatan dan kualitas yang ditetapkan.</p>
      </div>
      <div class="w-24 h-24 bg-gray-100 rounded-2xl flex items-center justify-center flex-shrink-0">
        <span class="text-gray-400 text-xs font-bold tracking-wider">AKLI</span>
      </div>
    </div>
  </div>

`)
