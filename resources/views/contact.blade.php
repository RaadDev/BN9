<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us - LENS5 Photography</title>
    <meta name="description" content="Contact LENS5 Photography for professional photography services">
<link rel="stylesheet" href="{{ asset('css/styles.css') }}">

</head>
<body>
       <!-- Header -->
     <header class="navbar">
     @include('components.header')
    </header>

    <main class="page-content">
        <section class="contact-page">
            <div class="container">
                <h1 class="page-title" data-lang-key="contact.title">Contact Us</h1>
                <p class="page-description" data-lang-key="contact.description">We'd love to hear from you! Whether you have a question about our services, pricing, or just want to say hello, we're here to help.</p>

                <div class="contact-social">
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

                <div class="contact-info">
                    <div class="contact-info-item">
                        <i data-lucide="mail"></i>
                        <div>
                            <h3 data-lang-key="contact.email.title">Email Us</h3>
                            <p>BN9@gmail.com</p>
                        </div>
                    </div>

                    <div class="contact-info-item">
                        <i data-lucide="phone"></i>
                        <div>
                            <h3 data-lang-key="contact.phone.title">Call Us</h3>
                            <p>+966537167683</p>
                        </div>
                    </div>
                </div>

                <div class="contact-hours">
                    <h3 data-lang-key="contact.hours.title">Business Hours</h3>
                    <ul>
                        <li><span data-lang-key="contact.hours.sunday">Sunday</span>: 9:00 AM - 6:00 PM </li>
                        <li><span data-lang-key="contact.hours.monday">Monday</span>: 9:00 AM - 6:00 PM</li>
                        <li><span data-lang-key="contact.hours.tuesday">Tuesday</span>: 9:00 AM - 6:00 PM</li>
                        <li><span data-lang-key="contact.hours.wednesday">Wednesday</span>: 9:00 AM - 6:00 PM</li>
                        <li><span data-lang-key="contact.hours.thursday">Thursday</span>: 9:00 AM - 6:00 PM</li>
                        <li><span data-lang-key="contact.hours.friday">Friday</span>: <span data-lang-key="contact.hours.closed">Closed</span></li>
                        <li><span data-lang-key="contact.hours.saturday">Saturday</span>: 10:00 AM - 4:00 PM</li>
                    </ul>
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