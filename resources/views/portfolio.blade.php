<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio - LENS5 Photography</title>
    <meta name="description" content="Explore our photography portfolio showcasing our best work">
<link rel="stylesheet" href="{{ asset('css/styles.css') }}">
<link rel="stylesheet" href="{{ asset('css/portfolio.css') }}">
<link rel="stylesheet" href="{{ asset('css/portfolio-mobile.css') }}">


</head>
<body>


         <!-- Header -->
    <header class="navbar">
     @include('components.header')
    </header>

   <!-- Main Content -->
        <main>
        
  <!-- Page Banner -->
  <section class="page-banner">
    <div class="container">
      <h1 data-i18n="portfolioTitle">Our Portfolio</h1>
      <p data-i18n="portfolioSubtitle">Explore our collection of photography work</p>
    </div>
  </section>

  <!-- Portfolio Section -->
  <section class="portfolio-section">
    <div class="container">
      <!-- Portfolio Controls -->
      <div class="portfolio-controls">
        <div class="portfolio-filters">
          <button class="filter-btn active" data-filter="all" data-i18n="all">All</button>
          <button class="filter-btn" data-filter="wedding" data-i18n="wedding">Wedding</button>
          <button class="filter-btn" data-filter="portrait" data-i18n="portrait">Portrait</button>
          <button class="filter-btn" data-filter="fashion" data-i18n="fashion">Fashion</button>
          <button class="filter-btn" data-filter="product" data-i18n="product">Product</button>
          <button class="filter-btn" data-filter="family" data-i18n="family">Family</button>
        </div>
                  <!-- View Toggle -->
            <div class="view-toggle">
                <button class="view-btn active" data-view="grid" aria-label="Grid View">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                </button>
                <button class="view-btn" data-view="gallery" aria-label="Gallery View">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                </button>
            </div>

      <!-- Portfolio Grid -->
      <div id="portfolio-grid" class="portfolio-grid">
        <!-- Portfolio items will be dynamically added here -->
      </div>

      <!-- Load More Button -->
      <div class="load-more">
        <button id="load-more-btn" class="btn btn-primary" data-i18n="loadMore">Load More</button>
      </div>
    </div>
  </section>

  <!-- Lightbox -->
  <div id="lightbox" class="lightbox">
    <div class="lightbox-content">
      <img id="lightbox-image" src="/placeholder.svg" alt="Lightbox Image">
      <div class="lightbox-caption" id="lightbox-caption"></div>
      <div class="lightbox-counter" id="lightbox-counter"></div>
      <button id="lightbox-close" class="lightbox-close" aria-label="Close Lightbox">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
      <button id="lightbox-prev" class="lightbox-nav lightbox-prev" aria-label="Previous Image">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
      </button>
      <button id="lightbox-next" class="lightbox-nav lightbox-next" aria-label="Next Image">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </button>
      <div id="lightbox-thumbnails" class="lightbox-thumbnails"></div>
    </div>
  </div>
    </main>


    <!-- Footer -->
@include('components.footer')


    <script src="{{ asset('js/main.js') }}"></script>
    <script src="{{ asset('js/theme.js') }}"></script>
    <script src="{{ asset('js/language.js') }}"></script>
    <script src="{{ asset('js/portfolio.js') }}"></script>
    <script src="{{ asset('js/portfolio-mobile.js') }}"></script>

</body>
</html>