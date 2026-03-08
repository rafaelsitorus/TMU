import './style.css'

// Navbar Component
const createNavbar = () => `
  <nav class="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <a href="/" class="flex items-center gap-3">
            <div class="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-xl">TMU</span>
            </div>
            <div class="hidden sm:block">
              <span class="text-primary font-bold text-lg">PT. TODO MITRA UTAMA</span>
            </div>
          </a>
        </div>
        
        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-8">
          <a href="#home" class="nav-link active">Home</a>
          <a href="#about" class="nav-link">About</a>
          <a href="#services" class="nav-link">Our Services</a>
          <a href="/product.html" class="nav-link">Product</a>
          <a href="#portfolio" class="nav-link">Portfolio</a>
          <a href="#contact" class="btn-primary">Contact Us</a>
        </div>
        
        <!-- Mobile menu button -->
        <div class="lg:hidden">
          <button id="mobile-menu-btn" class="text-gray-700 hover:text-primary p-2 focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path id="menu-icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Mobile Navigation -->
    <div id="mobile-menu" class="lg:hidden hidden bg-white border-t">
      <div class="px-4 py-4 space-y-3">
        <a href="#home" class="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-lg">Home</a>
        <a href="#about" class="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-lg">About</a>
        <a href="#services" class="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-lg">Our Services</a>
        <a href="/product.html" class="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-lg">Product</a>
        <a href="#portfolio" class="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-lg">Portfolio</a>
        <a href="#contact" class="block py-2 px-4 bg-primary text-white rounded-lg text-center">Contact Us</a>
      </div>
    </div>
  </nav>
`

// Hero Section
const createHeroSection = () => `
  <section id="home" class="pt-20 min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="animate-slideInLeft">
          <span class="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            🏗️ Anggota Resmi AKLI
          </span>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            PT. TODO MITRA 
            <span class="text-primary">UTAMA</span>
          </h1>
          <p class="text-lg text-gray-600 mb-8 leading-relaxed">
            Perusahaan konstruksi profesional yang bergerak di bidang instalasi kelistrikan dan infrastruktur. 
            Berlokasi di Kota Adm. Jakarta Barat, Indonesia dengan komitmen tinggi terhadap kualitas dan keamanan.
          </p>
          <div class="flex flex-wrap gap-4">
            <a href="#contact" class="btn-primary">
              Hubungi Kami
            </a>
            <a href="#services" class="btn-outline">
              Lihat Layanan
            </a>
          </div>
        </div>
        <div class="animate-slideInRight">
          <div class="relative">
            <div class="absolute -top-4 -left-4 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"></div>
            <div class="absolute -bottom-4 -right-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
            <div class="relative bg-white rounded-2xl shadow-2xl p-8">
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop" alt="Konstruksi" class="rounded-xl w-full h-64 object-cover mb-6">
              <div class="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div class="text-3xl font-bold text-primary">10+</div>
                  <div class="text-sm text-gray-500">Tahun Pengalaman</div>
                </div>
                <div>
                  <div class="text-3xl font-bold text-secondary">100+</div>
                  <div class="text-sm text-gray-500">Proyek Selesai</div>
                </div>
                <div>
                  <div class="text-3xl font-bold text-accent">20+</div>
                  <div class="text-sm text-gray-500">Tim Profesional</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`

// About Section
const createAboutSection = () => `
  <section id="about" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <span class="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
          Tentang Kami
        </span>
        <h2 class="section-title">Mengenal PT. TODO MITRA UTAMA</h2>
        <p class="section-subtitle">
          Perusahaan konstruksi terpercaya dengan standar kualitas internasional
        </p>
      </div>
      
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="relative">
          <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=500&fit=crop" alt="Tim Profesional" class="rounded-2xl shadow-xl w-full">
          <div class="absolute -bottom-6 -right-6 bg-secondary text-white p-6 rounded-xl shadow-lg">
            <div class="text-4xl font-bold">AKLI</div>
            <div class="text-sm">Anggota Resmi</div>
          </div>
        </div>
        
        <div>
          <h3 class="text-2xl font-bold text-gray-900 mb-6">
            Leader Terdepan di Bidang Konstruksi Kelistrikan
          </h3>
          <p class="text-gray-600 mb-6 leading-relaxed">
            PT. TODO MITRA UTAMA adalah perusahaan konstruksi yang berlokasi di Kota Adm. Jakarta Barat, Indonesia. 
            Sebagai anggota resmi Asosiasi AKLI, kami berkomitmen untuk memberikan layanan konstruksi berkualitas tinggi 
            dengan mengutamakan standar keamanan dan profesionalisme.
          </p>
          <p class="text-gray-600 mb-8 leading-relaxed">
            Dengan pengalaman luas dalam bidang instalasi kelistrikan, kami telah menangani berbagai proyek infrastruktur 
            dan pembangunan komersial berkapasitas besar di seluruh Indonesia.
          </p>
          
          <!-- Certifications -->
          <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
            <div class="bg-gray-50 p-3 rounded-lg text-center">
              <span class="text-xs font-semibold text-primary">ISO 9001</span>
            </div>
            <div class="bg-gray-50 p-3 rounded-lg text-center">
              <span class="text-xs font-semibold text-primary">ISO 14001</span>
            </div>
            <div class="bg-gray-50 p-3 rounded-lg text-center">
              <span class="text-xs font-semibold text-primary">ISO 45001</span>
            </div>
            <div class="bg-gray-50 p-3 rounded-lg text-center">
              <span class="text-xs font-semibold text-primary">ISO 22000</span>
            </div>
            <div class="bg-gray-50 p-3 rounded-lg text-center">
              <span class="text-xs font-semibold text-primary">ISO 27001</span>
            </div>
            <div class="bg-gray-50 p-3 rounded-lg text-center">
              <span class="text-xs font-semibold text-primary">SMK3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`

// Services Section
const createServicesSection = () => `
  <section id="services" class="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <span class="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4">
          Layanan Kami
        </span>
        <h2 class="section-title">Jasa Konstruksi Profesional</h2>
        <p class="section-subtitle">
          Berdasarkan data registrasi resmi dari LPJK Kementerian Pekerjaan Umum
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="service-card">
          <div class="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
            <svg class="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <h3 class="text-lg font-bold text-gray-900 mb-2">EL002</h3>
          <p class="text-gray-600 text-sm">Jasa Pelaksana Instalasi Pembangkit Tenaga Listrik daya maksimum 10 MW</p>
        </div>
        
        <div class="service-card">
          <div class="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
            <svg class="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
            </svg>
          </div>
          <h3 class="text-lg font-bold text-gray-900 mb-2">EL003</h3>
          <p class="text-gray-600 text-sm">Jasa Pelaksana Instalasi Pembangkit Tenaga Listrik Energi Baru dan Terbarukan</p>
        </div>
        
        <div class="service-card">
          <div class="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
            <svg class="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
            </svg>
          </div>
          <h3 class="text-lg font-bold text-gray-900 mb-2">EL006</h3>
          <p class="text-gray-600 text-sm">Jasa Pelaksana Konstruksi Jaringan Distribusi Tenaga Listrik Tegangan Menengah</p>
        </div>
        
        <div class="service-card">
          <div class="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
            <svg class="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
            </svg>
          </div>
          <h3 class="text-lg font-bold text-gray-900 mb-2">EL007</h3>
          <p class="text-gray-600 text-sm">Jasa Pelaksana Konstruksi Instalasi Jaringan Distribusi Tenaga Listrik Tegangan Rendah</p>
        </div>
      </div>
      
      <div class="mt-8 text-center">
        <p class="text-gray-500 mb-4">Dan 4 layanan konstruksi lainnya yang terdaftar resmi</p>
        <a href="#contact" class="btn-secondary inline-flex items-center gap-2">
          Konsultasi Gratis
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
`

// Portfolio Section
const createPortfolioSection = () => `
  <section id="portfolio" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <span class="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
          Portfolio
        </span>
        <h2 class="section-title">Proyek yang Telah Kami Kerjakan</h2>
        <p class="section-subtitle">
          Berbagai proyek infrastruktur dan kelistrikan yang telah berhasil kami selesaikan
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="group relative overflow-hidden rounded-2xl shadow-lg">
          <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop" alt="Project 1" class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500">
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="absolute bottom-0 left-0 right-0 p-6">
              <h3 class="text-white font-bold text-lg">Instalasi Panel Listrik</h3>
              <p class="text-gray-300 text-sm">Proyek Industri Manufacturing</p>
            </div>
          </div>
        </div>
        
        <div class="group relative overflow-hidden rounded-2xl shadow-lg">
          <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop" alt="Project 2" class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500">
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="absolute bottom-0 left-0 right-0 p-6">
              <h3 class="text-white font-bold text-lg">Pembangkit Listrik Solar</h3>
              <p class="text-gray-300 text-sm">Energi Terbarukan</p>
            </div>
          </div>
        </div>
        
        <div class="group relative overflow-hidden rounded-2xl shadow-lg">
          <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop" alt="Project 3" class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500">
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="absolute bottom-0 left-0 right-0 p-6">
              <h3 class="text-white font-bold text-lg">Jaringan Distribusi</h3>
              <p class="text-gray-300 text-sm">Tegangan Menengah</p>
            </div>
          </div>
        </div>
        
        <div class="group relative overflow-hidden rounded-2xl shadow-lg">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop" alt="Project 4" class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500">
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="absolute bottom-0 left-0 right-0 p-6">
              <h3 class="text-white font-bold text-lg">Instalasi Gedung</h3>
              <p class="text-gray-300 text-sm">Proyek Komersial</p>
            </div>
          </div>
        </div>
        
        <div class="group relative overflow-hidden rounded-2xl shadow-lg">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop" alt="Project 5" class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500">
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="absolute bottom-0 left-0 right-0 p-6">
              <h3 class="text-white font-bold text-lg">High Rise Building</h3>
              <p class="text-gray-300 text-sm">Sistem Kelistrikan</p>
            </div>
          </div>
        </div>
        
        <div class="group relative overflow-hidden rounded-2xl shadow-lg">
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop" alt="Project 6" class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500">
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="absolute bottom-0 left-0 right-0 p-6">
              <h3 class="text-white font-bold text-lg">Infrastruktur Listrik</h3>
              <p class="text-gray-300 text-sm">Proyek Pemerintah</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`

// Contact Section
const createContactSection = () => `
  <section id="contact" class="py-20 bg-gradient-to-br from-primary to-primary/90">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12">
        <div class="text-white">
          <span class="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Hubungi Kami
          </span>
          <h2 class="text-3xl md:text-4xl font-bold mb-6">
            Siap Memulai Proyek Anda?
          </h2>
          <p class="text-white/80 mb-8 leading-relaxed">
            Hubungi kami untuk konsultasi gratis mengenai kebutuhan konstruksi dan instalasi kelistrikan Anda. 
            Tim profesional kami siap membantu mewujudkan proyek Anda.
          </p>
          
          <div class="space-y-4">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <div>
                <div class="font-semibold">Alamat</div>
                <div class="text-white/80">Kota Adm. Jakarta Barat, Indonesia</div>
              </div>
            </div>
            
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <div class="font-semibold">Email</div>
                <div class="text-white/80">info@todomitrautama.com</div>
              </div>
            </div>
            
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <div>
                <div class="font-semibold">Telepon</div>
                <div class="text-white/80">+62 21 xxxx xxxx</div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="bg-white rounded-2xl p-8 shadow-2xl">
          <h3 class="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h3>
          <form id="contact-form" class="space-y-4">
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                <input type="text" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="Nama Anda">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="email@example.com">
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">No. Telepon</label>
              <input type="tel" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="+62 xxx xxxx xxxx">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Layanan yang Dibutuhkan</label>
              <select class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
                <option>Pilih Layanan</option>
                <option>Instalasi Pembangkit Tenaga Listrik</option>
                <option>Energi Baru dan Terbarukan</option>
                <option>Jaringan Distribusi Tegangan Menengah</option>
                <option>Jaringan Distribusi Tegangan Rendah</option>
                <option>Lainnya</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
              <textarea rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none" placeholder="Jelaskan kebutuhan proyek Anda..."></textarea>
            </div>
            <button type="submit" class="w-full btn-primary">
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
`

// Footer
const createFooter = () => `
  <footer class="bg-gray-900 text-white py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span class="text-white font-bold">TMU</span>
            </div>
            <span class="font-bold">PT. TODO MITRA UTAMA</span>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed">
            Perusahaan konstruksi profesional yang bergerak di bidang instalasi kelistrikan dan infrastruktur.
          </p>
        </div>
        
        <div>
          <h4 class="font-bold mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li><a href="#home" class="text-gray-400 hover:text-white transition-colors">Home</a></li>
            <li><a href="#about" class="text-gray-400 hover:text-white transition-colors">About</a></li>
            <li><a href="#services" class="text-gray-400 hover:text-white transition-colors">Services</a></li>
            <li><a href="/product.html" class="text-gray-400 hover:text-white transition-colors">Product</a></li>
            <li><a href="#portfolio" class="text-gray-400 hover:text-white transition-colors">Portfolio</a></li>
          </ul>
        </div>
        
        <div>
          <h4 class="font-bold mb-4">Sertifikasi</h4>
          <ul class="space-y-2">
            <li class="text-gray-400 text-sm">ISO 9001 - Quality Management</li>
            <li class="text-gray-400 text-sm">ISO 14001 - Environmental</li>
            <li class="text-gray-400 text-sm">ISO 45001 - Health & Safety</li>
            <li class="text-gray-400 text-sm">SMK3 PP 50/2012</li>
          </ul>
        </div>
        
        <div>
          <h4 class="font-bold mb-4">Kontak</h4>
          <ul class="space-y-2">
            <li class="text-gray-400 text-sm">Kota Adm. Jakarta Barat</li>
            <li class="text-gray-400 text-sm">Indonesia</li>
            <li class="text-gray-400 text-sm">info@todomitrautama.com</li>
          </ul>
        </div>
      </div>
      
      <div class="border-t border-gray-800 pt-8 text-center">
        <p class="text-gray-400 text-sm">
          © 2026 PT. TODO MITRA UTAMA. All rights reserved. | Anggota Resmi AKLI
        </p>
      </div>
    </div>
  </footer>
`

// Initialize App
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${createNavbar()}
  <main>
    ${createHeroSection()}
    ${createAboutSection()}
    ${createServicesSection()}
    ${createPortfolioSection()}
    ${createContactSection()}
  </main>
  ${createFooter()}
`

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn')
const mobileMenu = document.getElementById('mobile-menu')

mobileMenuBtn?.addEventListener('click', () => {
  mobileMenu?.classList.toggle('hidden')
})

// Close mobile menu when clicking a link
const mobileMenuLinks = mobileMenu?.querySelectorAll('a')
mobileMenuLinks?.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu?.classList.add('hidden')
  })
})

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const href = this.getAttribute('href')
    if (href) {
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
  })
})

// Active nav link on scroll
const sections = document.querySelectorAll('section')
const navLinks = document.querySelectorAll('.nav-link')

window.addEventListener('scroll', () => {
  let current = ''
  sections.forEach(section => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (scrollY >= sectionTop - 100) {
      current = section.getAttribute('id') || ''
    }
  })

  navLinks.forEach(link => {
    link.classList.remove('active')
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active')
    }
  })
})

// Contact Form Handler
const contactForm = document.getElementById('contact-form')
contactForm?.addEventListener('submit', (e) => {
  e.preventDefault()
  alert('Terima kasih! Pesan Anda telah terkirim. Tim kami akan segera menghubungi Anda.')
})
