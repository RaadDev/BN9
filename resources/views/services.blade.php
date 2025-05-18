<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Services - LENS5 Photography</title>
    <meta name="description" content="Explore our photography and videography services for all your needs">
<link rel="stylesheet" href="{{ asset('css/styles.css') }}">

</head>
<body>

     <!-- Header -->
    <header class="navbar">
     @include('components.header')
    </header>


    <main class="page-content">
        <section class="services-page">
            <div class="container">
                <h1 class="page-title" data-lang-key="services.pageTitle">Our Services</h1>
                <p class="page-description" data-lang-key="services.pageDescription">We offer a comprehensive range of photography and videography services to meet all your needs. Each service is customizable to fit your specific requirements.</p>

                <div class="services-page-grid">
                    <!-- Service 1 -->
                    <div class="service-page-card">
                        <div class="service-page-image">
                            <img src="{{ asset('images/portfolio/wwww.jpg') }}" alt="Photography">
                        </div>
                        <div class="service-page-content">
                            <h2 class="service-page-title" data-lang-key="services.photography.title">Photography</h2>
                            <p class="service-page-description" data-lang-key="services.photography.description">Professional photography services for events, portraits, products, and more. We use state-of-the-art equipment to deliver stunning images.</p>
                            <ul class="service-page-features">
                                <li><i data-lucide="check"></i> <span data-lang-key="services.photography.feature1">High-resolution images with professional editing</span></li>
                                <li><i data-lucide="check"></i> <span data-lang-key="services.photography.feature2">Multiple camera setups for comprehensive coverage</span></li>
                                <li><i data-lucide="check"></i> <span data-lang-key="services.photography.feature3">Fast turnaround times with online gallery delivery</span></li>
                            </ul>
                        </div>
                    </div>

                    <!-- Service 2 -->
                    <div class="service-page-card">
                        <div class="service-page-image">
                            <img src="{{ asset('images/portfolio/wwww.jpg') }}" alt="Videography">
                        </div>
                        <div class="service-page-content">
                            <h2 class="service-page-title" data-lang-key="services.videography.title">Videography</h2>
                            <p class="service-page-description" data-lang-key="services.videography.description">Cinematic video production services that capture the emotion and energy of your special moments with professional editing and color grading.</p>
                            <ul class="service-page-features">
                                <li><i data-lucide="check"></i> <span data-lang-key="services.videography.feature1">4K video recording with professional audio</span></li>
                                <li><i data-lucide="check"></i> <span data-lang-key="services.videography.feature2">Drone aerial footage for stunning perspectives</span></li>
                                <li><i data-lucide="check"></i> <span data-lang-key="services.videography.feature3">Professional editing with music and color grading</span></li>
                            </ul>
                        </div>
                    </div>

                    <!-- Service 3 -->
                    <div class="service-page-card">
                        <div class="service-page-image">
                            <img src="{{ asset('images/portfolio/wwww.jpg') }}" alt="Events">
                        </div>
                        <div class="service-page-content">
                            <h2 class="service-page-title" data-lang-key="services.events.title">Events</h2>
                            <p class="service-page-description" data-lang-key="services.events.description">Comprehensive coverage for weddings, corporate events, parties, and other special occasions with customized packages to suit your needs.</p>
                            <ul class="service-page-features">
                                <li><i data-lucide="check"></i> <span data-lang-key="services.events.feature1">Full-day coverage options with multiple photographers</span></li>
                                <li><i data-lucide="check"></i> <span data-lang-key="services.events.feature2">Combination of candid and posed photography</span></li>
                                <li><i data-lucide="check"></i> <span data-lang-key="services.events.feature3">Custom packages for any size event</span></li>
                            </ul>
                        </div>
                    </div>

                    <!-- Service 4 -->
                    <div class="service-page-card">
                        <div class="service-page-image">
                            <img src="{{ asset('images/portfolio/wwww.jpg') }}" alt="Photo Editing">
                        </div>
                        <div class="service-page-content">
                            <h2 class="service-page-title" data-lang-key="services.editing.title">Photo Editing</h2>
                            <p class="service-page-description" data-lang-key="services.editing.description">Professional retouching and editing services to enhance your images with color correction, skin retouching, and creative effects.</p>
                            <ul class="service-page-features">
                                <li><i data-lucide="check"></i> <span data-lang-key="services.editing.feature1">Professional retouching and color correction</span></li>
                                <li><i data-lucide="check"></i> <span data-lang-key="services.editing.feature2">Creative effects and artistic enhancements</span></li>
                                <li><i data-lucide="check"></i> <span data-lang-key="services.editing.feature3">Batch processing for consistent look across all images</span></li>
                            </ul>
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