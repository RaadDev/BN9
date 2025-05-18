<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LENS5 - Professional Photography Services</title>
    <meta name="description" content="Professional photography services for all your special moments">
<link rel="stylesheet" href="{{ asset('css/styles.css') }}">

</head>
<body>
    <!-- Header -->
     <header class="navbar">
     @include('components.header')
    </header>
<main>
    <!-- Hero Section -->
    <section class="hero">
    <div class="hero-background" style="background-image: url('{{ asset('images/hero.jpg') }}');"></div>
            <div class="hero-overlay"></div>
        </div>
        <div class="container hero-content">
            <h1 class="hero-title" data-lang-key="hero.title">We are here to capture your beautiful moments</h1>
            <p class="hero-subtitle" data-lang-key="hero.subtitle">Professional photography services for all your special occasions</p>
            <a href="{{ url('/portfolio') }}" class="button hero-button" data-lang-key="hero.cta">Explore Gallery</a>
        </div>
        <div class="scroll-indicator">
            <i data-lucide="chevron-down"></i>
        </div>
    </section>


    
    <!-- Portfolio Section -->
    <section class="portfolio-section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title" data-lang-key="portfolio.title">These are our latest work</h2>
                <div class="section-divider"></div>
            </div>

<div class="portfolio-grid">
    <!-- Portfolio Item 1 -->
    <div class="portfolio-item">
        <div class="portfolio-image">
            <img src="{{ asset('images/portfolio/wwww.jpg') }}" alt="Company event">
            <div class="portfolio-overlay"></div>
        </div>
                    <div class="portfolio-content">
                        <h3 class="portfolio-title" data-lang-key="portfolio.item1.title">Company Grand Opening Ceremony</h3>
                        <p class="portfolio-description" data-lang-key="portfolio.item1.description">We captured the essence of this corporate milestone with elegant and professional photography.</p>
                        <a href="{{ url('/portfolio') }}" class="button outline-button" data-lang-key="portfolio.viewGallery">View Gallery</a>
                    </div>
                </div>

    <!-- Portfolio Item 2 -->
    <div class="portfolio-item">
        <div class="portfolio-image">
            <img src="{{ asset('images/portfolio/wwww.jpg') }}" alt="Wedding photography">
            <div class="portfolio-overlay"></div>
        </div>
                    <div class="portfolio-content">
                        <h3 class="portfolio-title" data-lang-key="portfolio.item2.title">Wedding Photography</h3>
                        <p class="portfolio-description" data-lang-key="portfolio.item2.description">Our creative approach to event photography ensured that every important moment was captured with style.</p>
                        <a href="{{ url('/portfolio') }}" class="button outline-button" data-lang-key="portfolio.viewGallery">View Gallery</a>
                    </div>
                </div>

    <!-- Portfolio Item 3 -->
    <div class="portfolio-item">
        <div class="portfolio-image">
            <img src="{{ asset('images/portfolio/wwww.jpg') }}" alt="Portrait photography">
            <div class="portfolio-overlay"></div>
        </div>
                    <div class="portfolio-content">
                        <h3 class="portfolio-title" data-lang-key="portfolio.item3.title">Portrait Session</h3>
                        <p class="portfolio-description" data-lang-key="portfolio.item3.description">We documented this special occasion with a blend of candid and posed shots that tell the complete story.</p>
                        <a href="{{ url('/portfolio') }}" class="button outline-button" data-lang-key="portfolio.viewGallery">View Gallery</a>
                    </div>
                </div>
            </div>

            <div class="section-footer">
                <a href="{{ url('/portfolio') }}" class="button primary-button">View All Projects</a>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section class="services-section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title" data-lang-key="services.title">Here are our services</h2>
                <div class="section-divider"></div>
            </div>

            <div class="services-grid">
                <!-- Service 1 -->
                <div class="service-card">
                    <div class="service-icon">
                        <i data-lucide="camera"></i>
                    </div>
                    <h3 class="service-title" data-lang-key="services.photography.title">Photography</h3>
                    <p class="service-description" data-lang-key="services.photography.description">Professional photography services for events, portraits, products, and more. We use state-of-the-art equipment to deliver stunning images.</p>
                    <ul class="service-features">
                        <li><i data-lucide="check"></i> <span data-lang-key="services.photography.feature1">High-resolution images with professional editing</span></li>
                        <li><i data-lucide="check"></i> <span data-lang-key="services.photography.feature2">Multiple camera setups for comprehensive coverage</span></li>
                    </ul>
                </div>

                <!-- Service 2 -->
                <div class="service-card">
                    <div class="service-icon">
                        <i data-lucide="video"></i>
                    </div>
                    <h3 class="service-title" data-lang-key="services.videography.title">Videography</h3>
                    <p class="service-description" data-lang-key="services.videography.description">Cinematic video production services that capture the emotion and energy of your special moments with professional editing.</p>
                    <ul class="service-features">
                        <li><i data-lucide="check"></i> <span data-lang-key="services.videography.feature1">4K video recording with professional audio</span></li>
                        <li><i data-lucide="check"></i> <span data-lang-key="services.videography.feature2">Drone aerial footage for stunning perspectives</span></li>
                    </ul>
                </div>

                <!-- Service 3 
                <div class="service-card">
                    <div class="service-icon">
                        <i data-lucide="calendar"></i>
                    </div>
                    <h3 class="service-title" data-lang-key="services.events.title">Events</h3>
                    <p class="service-description" data-lang-key="services.events.description">Comprehensive coverage for weddings, corporate events, parties, and other special occasions with customized packages.</p>
                    <ul class="service-features">
                        <li><i data-lucide="check"></i> <span data-lang-key="services.events.feature1">Full-day coverage options with multiple photographers</span></li>
                        <li><i data-lucide="check"></i> <span data-lang-key="services.events.feature2">Combination of candid and posed photography</span></li>
                    </ul>
                </div> -->

                <!-- Service 4 -->
                <div class="service-card">
                    <div class="service-icon">
                        <i data-lucide="brush"></i>
                    </div>
                    <h3 class="service-title" data-lang-key="services.editing.title">Photo Editing</h3>
                    <p class="service-description" data-lang-key="services.editing.description">Professional retouching and editing services to enhance your images with color correction, skin retouching, and creative effects.</p>
                    <ul class="service-features">
                        <li><i data-lucide="check"></i> <span data-lang-key="services.editing.feature1">Professional retouching and color correction</span></li>
                        <li><i data-lucide="check"></i> <span data-lang-key="services.editing.feature2">Creative effects and artistic enhancements</span></li>
                    </ul>
                </div>
            </div>

            <div class="section-footer">
                <a href="{{ url('/services') }}" class="button primary-button">
                    <span data-lang-key="services.browseAll">Browse All Services</span>
                    <i data-lucide="arrow-right"></i>
                </a>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
        <div class="cta-background">
            <div class="cta-overlay"></div>
        </div>
        <div class="container">
            <div class="cta-content">
                <div class="cta-text">
                    <span class="cta-tag" data-lang-key="cta.subtitle">Let's work together!</span>
                    <h2 class="cta-title" data-lang-key="cta.title">Need help with professional photography?</h2>
                    <div class="cta-buttons">
                        <a href="{{ url('/contact') }}" class="button cta-button" data-lang-key="cta.button">Contact Us</a>
                        <a href="{{ url('/portfolio') }}" class="button outline-button">View Our Work</a>
                    </div>
                </div>
                <div class="cta-image">
                                <img src="{{ asset('images/portfolio/wedding/wwww.jpg') }}" alt="Photography showcase">
                    <div class="cta-icon">
                        <i data-lucide="camera"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

    <!-- Footer -->
@include('components.footer')



<script src="{{ asset('js/main.js') }}"></script>
<script src="{{ asset('js/theme.js') }}"></script>
<script src="{{ asset('js/language.js') }}"></script>
    <script src="{{ asset('js/portfolio-mobile.js') }}"></script>

</body>
</html>