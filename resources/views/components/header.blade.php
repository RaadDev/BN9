
<header class="navbar">
        <div class="container">
            <div class="navbar-content">
                <a href="{{ url('/') }}"  class="logo">BN9</a>
                
                <!-- Desktop Navigation -->
                 <nav class="nav-desktop">
                <a href="{{ url('/') }}" class="nav-link {{ request()->is('/') ? 'active' : '' }}">Home</a>
                <a href="{{ url('/services') }}" class="nav-link {{ request()->is('services') ? 'active' : '' }}">Services</a>
                <a href="{{ url('/portfolio') }}" class="nav-link {{ request()->is('portfolio') ? 'active' : '' }}">Portfolio</a>
                <a href="{{ url('/about') }}" class="nav-link {{ request()->is('about') ? 'active' : '' }}">About</a>
            </nav>

                <div class="nav-actions">
                    <!-- Theme Toggle -->
                    <button id="theme-toggle" class="icon-button" aria-label="Toggle theme">
                        <i data-lucide="moon" class="theme-icon light-icon"></i>
                        <i data-lucide="sun" class="theme-icon dark-icon"></i>
                    </button>

                    <!-- Language Toggle -->
                    <button id="language-toggle" class="icon-button" aria-label="Toggle language">
                        <i data-lucide="globe" class="language-icon"></i>
                        <span class="language-text">EN</span>
                    </button>

                    <a href="contact" class="button primary-button">Contact</a>
                </div>

                <!-- Mobile Menu Button -->
                <button id="mobile-menu-button" class="mobile-menu-button" aria-label="Toggle menu">
                    <i data-lucide="menu"></i>
                </button>
            </div>
        </div>

        <!-- Mobile Navigation -->
        <div id="mobile-menu" class="mobile-menu">
               <nav class="container">
            <a href="{{ url('/') }}" class="mobile-nav-link {{ request()->is('/') ? 'active' : '' }}">Home</a>
            <a href="{{ url('/services') }}" class="mobile-nav-link {{ request()->is('services') ? 'active' : '' }}">Services</a>
            <a href="{{ url('/portfolio') }}" class="mobile-nav-link {{ request()->is('portfolio') ? 'active' : '' }}">Portfolio</a>
            <a href="{{ url('/about') }}" class="mobile-nav-link {{ request()->is('about') ? 'active' : '' }}">About</a>
            <a href="{{ url('/contact') }}" class="button primary-button mobile-button">Contact</a>
        </nav>
        </div>
    </header>