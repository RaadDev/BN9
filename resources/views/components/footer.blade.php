<!-- resources/views/components/footer.blade.php -->
<footer class="footer">
    <div class="container">
        <div class="footer-content">
            <!-- Brand -->
            <div class="footer-brand">
                <div class="footer-logo">
                    <i data-lucide="camera"></i>
                    <h3>BN9</h3>
                </div>
            </div>

            <!-- Quick Links -->
            <div class="footer-links">
                <a href="{{ url('/services') }}" data-lang-key="footer.services">Services</a>
                <a href="{{ url('/portfolio') }}" data-lang-key="footer.portfolio">Portfolio</a>
                <a href="{{ url('/about') }}" data-lang-key="footer.about">About</a>
                <a href="{{ url('/contact') }}" data-lang-key="footer.contact">Contact</a>
            </div>

            <!-- Contact & Social -->
            <div class="footer-contact">
                <div class="footer-info">
                    <p>BN9@gmail.com</p>
                    <p>+966537167683</p>
                </div>
<div class="footer-social">
    <a href="http://wa.me/966537167683" target="_blank" rel="noopener noreferrer" class="contact-social-item">
        <img src="{{ asset('images/icon/whatsapp.png') }}" alt="WhatsApp">
    </a>
    <a href="https://www.youtube.com/@iii_995" target="_blank" rel="noopener noreferrer" class="contact-social-item">
        <img src="{{ asset('images/icon/youtube.png') }}" alt="YouTube">
    </a>
    <a href="https://tiktok.com/@iii_995" target="_blank" rel="noopener noreferrer" class="contact-social-item">
        <img src="{{ asset('images/icon/tiktok.png') }}" alt="TikTok" >
    </a>
    <a href="https://t.me/iii_995" target="_blank" rel="noopener noreferrer" class="contact-social-item">
        <img src="{{ asset('images/icon/telegram.png') }}" alt="Telegram">
    </a>
    <a href="https://snapchat.com/add/ibndr9i" target="_blank" rel="noopener noreferrer" class="contact-social-item">
        <img src="{{ asset('images/icon/snapchat.png') }}" alt="Snapchat">
    </a>
</div>

            </div>
        </div>

        <!-- Copyright -->
        <div class="footer-copyright">
            <p>© RAAD ALSHAMMARI. All rights reserved</p>
        </div>
    </div>
</footer>
