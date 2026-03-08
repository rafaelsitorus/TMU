import './style.css'

// Navbar Component (same as main page)
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
          <a href="/" class="nav-link">Home</a>
          <a href="/#about" class="nav-link">About</a>
          <a href="/#services" class="nav-link">Our Services</a>
          <a href="/product.html" class="nav-link active">Product</a>
          <a href="/#portfolio" class="nav-link">Portfolio</a>
          <a href="/#contact" class="btn-primary">Contact Us</a>
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
        <a href="/" class="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-lg">Home</a>
        <a href="/#about" class="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-lg">About</a>
        <a href="/#services" class="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-lg">Our Services</a>
        <a href="/product.html" class="block py-2 px-4 bg-primary/10 text-primary rounded-lg font-medium">Product</a>
        <a href="/#portfolio" class="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-lg">Portfolio</a>
        <a href="/#contact" class="block py-2 px-4 bg-primary text-white rounded-lg text-center">Contact Us</a>
      </div>
    </div>
  </nav>
`

// Product Hero
const createProductHero = () => `
  <section class="pt-20 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="text-center">
        <span class="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-6">
          🛠️ Produk & Peralatan
        </span>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Produk Berkualitas Tinggi
        </h1>
        <p class="text-lg text-white/80 max-w-2xl mx-auto">
          Kami menyediakan berbagai produk dan peralatan kelistrikan berkualitas untuk mendukung proyek konstruksi Anda
        </p>
      </div>
    </div>
    <div class="h-16 bg-gradient-to-b from-primary/0 to-white"></div>
  </section>
`

// Product Categories
const createProductCategories = () => `
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Kategori Produk</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">Pilih kategori produk yang sesuai dengan kebutuhan proyek Anda</p>
      </div>
      
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
          <div class="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <h3 class="font-bold text-gray-900 mb-2">Panel Listrik</h3>
          <p class="text-sm text-gray-600">Panel distribusi dan kontrol</p>
        </div>
        
        <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
          <div class="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
            </svg>
          </div>
          <h3 class="font-bold text-gray-900 mb-2">Solar Panel</h3>
          <p class="text-sm text-gray-600">Energi terbarukan</p>
        </div>
        
        <div class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
          <div class="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
            </svg>
          </div>
          <h3 class="font-bold text-gray-900 mb-2">Transformator</h3>
          <p class="text-sm text-gray-600">Step up & step down</p>
        </div>
        
        <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
          <div class="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"/>
            </svg>
          </div>
          <h3 class="font-bold text-gray-900 mb-2">Kabel & Aksesoris</h3>
          <p class="text-sm text-gray-600">Berbagai jenis kabel</p>
        </div>
      </div>
    </div>
  </section>
`

// Product List
const createProductList = () => `
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Produk Unggulan</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">Produk berkualitas dengan standar internasional</p>
      </div>
      
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Product 1 -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div class="relative">
            <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=250&fit=crop" alt="Panel Listrik" class="w-full h-48 object-cover">
            <span class="absolute top-4 left-4 bg-primary text-white text-xs px-3 py-1 rounded-full">Best Seller</span>
          </div>
          <div class="p-6">
            <h3 class="font-bold text-lg text-gray-900 mb-2">Panel Distribusi MDP</h3>
            <p class="text-gray-600 text-sm mb-4">Panel distribusi utama dengan kapasitas tinggi untuk gedung komersial dan industri</p>
            <div class="flex items-center justify-between">
              <span class="text-primary font-bold">Hubungi Kami</span>
              <button class="bg-secondary text-white px-4 py-2 rounded-lg text-sm hover:bg-secondary/90 transition-colors">
                Detail
              </button>
            </div>
          </div>
        </div>
        
        <!-- Product 2 -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div class="relative">
            <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=250&fit=crop" alt="Solar Panel" class="w-full h-48 object-cover">
            <span class="absolute top-4 left-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full">Eco Friendly</span>
          </div>
          <div class="p-6">
            <h3 class="font-bold text-lg text-gray-900 mb-2">Panel Surya 450W</h3>
            <p class="text-gray-600 text-sm mb-4">Panel surya monokristalin efisiensi tinggi untuk pembangkit listrik tenaga surya</p>
            <div class="flex items-center justify-between">
              <span class="text-primary font-bold">Hubungi Kami</span>
              <button class="bg-secondary text-white px-4 py-2 rounded-lg text-sm hover:bg-secondary/90 transition-colors">
                Detail
              </button>
            </div>
          </div>
        </div>
        
        <!-- Product 3 -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div class="relative">
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop" alt="Transformer" class="w-full h-48 object-cover">
          </div>
          <div class="p-6">
            <h3 class="font-bold text-lg text-gray-900 mb-2">Transformator 500 kVA</h3>
            <p class="text-gray-600 text-sm mb-4">Transformator distribusi tegangan menengah dengan efisiensi tinggi dan rendah rugi</p>
            <div class="flex items-center justify-between">
              <span class="text-primary font-bold">Hubungi Kami</span>
              <button class="bg-secondary text-white px-4 py-2 rounded-lg text-sm hover:bg-secondary/90 transition-colors">
                Detail
              </button>
            </div>
          </div>
        </div>
        
        <!-- Product 4 -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div class="relative">
            <img src="https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=400&h=250&fit=crop" alt="Cable" class="w-full h-48 object-cover">
          </div>
          <div class="p-6">
            <h3 class="font-bold text-lg text-gray-900 mb-2">Kabel NYY 4x70mm</h3>
            <p class="text-gray-600 text-sm mb-4">Kabel power underground untuk instalasi tegangan rendah dengan isolasi PVC</p>
            <div class="flex items-center justify-between">
              <span class="text-primary font-bold">Hubungi Kami</span>
              <button class="bg-secondary text-white px-4 py-2 rounded-lg text-sm hover:bg-secondary/90 transition-colors">
                Detail
              </button>
            </div>
          </div>
        </div>
        
        <!-- Product 5 -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div class="relative">
            <img src="https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=400&h=250&fit=crop" alt="Circuit Breaker" class="w-full h-48 object-cover">
            <span class="absolute top-4 left-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full">New</span>
          </div>
          <div class="p-6">
            <h3 class="font-bold text-lg text-gray-900 mb-2">Circuit Breaker ACB</h3>
            <p class="text-gray-600 text-sm mb-4">Air Circuit Breaker untuk proteksi arus lebih pada sistem tegangan rendah</p>
            <div class="flex items-center justify-between">
              <span class="text-primary font-bold">Hubungi Kami</span>
              <button class="bg-secondary text-white px-4 py-2 rounded-lg text-sm hover:bg-secondary/90 transition-colors">
                Detail
              </button>
            </div>
          </div>
        </div>
        
        <!-- Product 6 -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div class="relative">
            <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=250&fit=crop" alt="Generator" class="w-full h-48 object-cover">
          </div>
          <div class="p-6">
            <h3 class="font-bold text-lg text-gray-900 mb-2">Genset Diesel 500 kVA</h3>
            <p class="text-gray-600 text-sm mb-4">Generator set diesel untuk backup power dengan kapasitas besar dan handal</p>
            <div class="flex items-center justify-between">
              <span class="text-primary font-bold">Hubungi Kami</span>
              <button class="bg-secondary text-white px-4 py-2 rounded-lg text-sm hover:bg-secondary/90 transition-colors">
                Detail
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`

// Why Choose Us
const createWhyChooseUs = () => `
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span class="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Mengapa Memilih Kami
          </span>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Produk Berkualitas dengan Garansi Resmi
          </h2>
          <p class="text-gray-600 mb-8">
            Semua produk yang kami sediakan telah memenuhi standar kualitas internasional dan didukung dengan garansi resmi dari produsen.
          </p>
          
          <div class="space-y-4">
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900">Produk Original</h4>
                <p class="text-gray-600 text-sm">Semua produk dijamin 100% original dari distributor resmi</p>
              </div>
            </div>
            
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900">Garansi Resmi</h4>
                <p class="text-gray-600 text-sm">Didukung garansi resmi dari produsen untuk setiap produk</p>
              </div>
            </div>
            
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900">Support Teknis</h4>
                <p class="text-gray-600 text-sm">Tim teknis berpengalaman siap membantu instalasi dan konsultasi</p>
              </div>
            </div>
            
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900">Harga Kompetitif</h4>
                <p class="text-gray-600 text-sm">Harga terbaik langsung dari distributor untuk proyek Anda</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="relative">
          <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=500&fit=crop" alt="Quality Products" class="rounded-2xl shadow-xl">
          <div class="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-lg">
            <div class="text-3xl font-bold">100%</div>
            <div class="text-sm">Produk Original</div>
          </div>
        </div>
      </div>
    </div>
  </section>
`

// CTA Section
const createCTASection = () => `
  <section class="py-16 bg-gradient-to-r from-primary to-primary/90">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center text-white">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Butuh Konsultasi Produk?
        </h2>
        <p class="text-white/80 mb-8 max-w-2xl mx-auto">
          Tim kami siap membantu Anda memilih produk yang tepat sesuai dengan kebutuhan proyek konstruksi Anda
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <a href="/#contact" class="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Hubungi Kami
          </a>
          <a href="/" class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
            Kembali ke Home
          </a>
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
            <li><a href="/" class="text-gray-400 hover:text-white transition-colors">Home</a></li>
            <li><a href="/#about" class="text-gray-400 hover:text-white transition-colors">About</a></li>
            <li><a href="/#services" class="text-gray-400 hover:text-white transition-colors">Services</a></li>
            <li><a href="/product.html" class="text-gray-400 hover:text-white transition-colors">Product</a></li>
            <li><a href="/#portfolio" class="text-gray-400 hover:text-white transition-colors">Portfolio</a></li>
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
    ${createProductHero()}
    ${createProductCategories()}
    ${createProductList()}
    ${createWhyChooseUs()}
    ${createCTASection()}
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
