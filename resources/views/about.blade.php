<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Us - BN9 Photography</title>
    <meta name="description" content="Learn about BN9 Photography studio and our team of professional photographers">
<link rel="stylesheet" href="{{ asset('css/styles.css') }}">
<link rel="stylesheet" href="{{ asset('css/portfolio-mobile.css') }}">

</head>
<body>

    <!-- Header -->
     <header class="navbar">
     @include('components.header')
    </header>

    <main class="page-content">
        <section class="about-hero">
            <div class="about-hero-background">
                <div class="about-hero-overlay"></div>
                <img src="{{ asset('images/ggggg.jpg') }}" alt="About BN9">
            </div>
            <div class="container about-hero-content">
                <h1 class="page-title" data-lang-key="about.title">About me</h1>
                <div class="page-divider"></div>
            </div>
        </section>

        <section class="about-content">
            <div class="container">
                <div class="about-grid">
                    <div class="about-text">
                        <div class="about-section">
                            <h2 class="about-section-title">Our Story</h2>
                            <p class="about-section-text" data-lang-key="about.intro">Founded in 2015, LENS5 has established itself as a premier photography studio dedicated to capturing life's most precious moments with creativity, passion, and technical excellence.</p>
                        </div>
                        <div class="about-section">
                            <h2 class="about-section-title">Our Mission</h2>
                            <p class="about-section-text" data-lang-key="about.mission">Our mission is to transform ordinary moments into extraordinary memories through the art of photography. We believe that every image tells a story, and we're committed to telling yours with authenticity and artistic vision.</p>
                        </div>
                        <div class="about-section">
                            <h2 class="about-section-title">Our Approach</h2>
                            <p class="about-section-text" data-lang-key="about.approach">Our approach combines technical expertise with a keen eye for detail and composition. We work closely with each client to understand their unique vision and deliver results that exceed expectations.</p>
                        </div>
                    </div>
                    <div class="about-image">
                        <img src="{{ asset('images/ff.jpg') }}" alt="About LENS5 Photography Studio">
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