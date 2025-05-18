document.addEventListener('DOMContentLoaded', function() {
  const languageToggle = document.getElementById('language-toggle');
  const languageText = document.querySelector('.language-text');
  
  // Translations
  const translations = {
    en: {
      // Navigation
      "nav.home": "Home",
      "nav.services": "Services",
      "nav.portfolio": "Portfolio",
      "nav.about": "About",
      "nav.contact": "Contact",

      // Hero Section
      "hero.title": "We are here to capture your beautiful moments",
      "hero.subtitle": "Professional photography services for all your special occasions",
      "hero.cta": "Explore Gallery",

      // Portfolio Section
      "portfolio.title": "These are our latest work",
      "portfolio.subtitle": "Explore our most recent photography projects",
      "portfolio.item1.title": "Company Grand Opening Ceremony",
      "portfolio.item1.description": "We captured the essence of this corporate milestone with elegant and professional photography.",
      "portfolio.item2.title": "Wedding Photography",
      "portfolio.item2.description": "Our creative approach to event photography ensured that every important moment was captured with style.",
      "portfolio.item3.title": "Portrait Session",
      "portfolio.item3.description": "We documented this special occasion with a blend of candid and posed shots that tell the complete story.",
      "portfolio.viewGallery": "View Gallery",
      "portfolio.pageTitle": "Our Portfolio",
      "portfolio.backToGallery": "Back to Gallery",
      "portfolio.filters.all": "All",
      "portfolio.filters.weddings": "Weddings",
      "portfolio.filters.events": "Events",
      "portfolio.filters.portraits": "Portraits",
      "portfolio.filters.commercial": "Commercial",

      // Services Section
      "services.title": "Here are our services",
      "services.browseAll": "Browse All Services",
      "services.photography.title": "Photography",
      "services.photography.description": "Professional photography services for events, portraits, products, and more. We use state-of-the-art equipment to deliver stunning images.",
      "services.photography.feature1": "High-resolution images with professional editing",
      "services.photography.feature2": "Multiple camera setups for comprehensive coverage",
      "services.photography.feature3": "Fast turnaround times with online gallery delivery",
      "services.videography.title": "Videography",
      "services.videography.description": "Cinematic video production services that capture the emotion and energy of your special moments with professional editing and color grading.",
      "services.videography.feature1": "4K video recording with professional audio",
      "services.videography.feature2": "Drone aerial footage for stunning perspectives",
      "services.videography.feature3": "Professional editing with music and color grading",
      "services.events.title": "Events",
      "services.events.description": "Comprehensive coverage for weddings, corporate events, parties, and other special occasions with customized packages to suit your needs.",
      "services.events.feature1": "Full-day coverage options with multiple photographers",
      "services.events.feature2": "Combination of candid and posed photography",
      "services.events.feature3": "Custom packages for any size event",
      "services.editing.title": "Photo Editing",
      "services.editing.description": "Professional retouching and editing services to enhance your images with color correction, skin retouching, and creative effects.",
      "services.editing.feature1": "Professional retouching and color correction",
      "services.editing.feature2": "Creative effects and artistic enhancements",
      "services.editing.feature3": "Batch processing for consistent look across all images",
      "services.pageTitle": "Our Services",
      "services.pageDescription": "We offer a comprehensive range of photography and videography services to meet all your needs. Each service is customizable to fit your specific requirements.",
      "services.custom.title": "Need a custom package?",
      "services.custom.description": "We can create a tailored solution that perfectly fits your specific requirements and budget.",
      "services.custom.button": "Contact Us",

      // CTA Section
      "cta.title": "Need help with professional photography?",
      "cta.subtitle": "Let's work together!",
      "cta.button": "Contact Us",

      // About Page
      "about.title": "About Us",
      "about.intro": "Founded in 2015, LENS5 has established itself as a premier photography studio dedicated to capturing life's most precious moments with creativity, passion, and technical excellence.",
      "about.mission": "Our mission is to transform ordinary moments into extraordinary memories through the art of photography. We believe that every image tells a story, and we're committed to telling yours with authenticity and artistic vision.",
      "about.approach": "Our approach combines technical expertise with a keen eye for detail and composition. We work closely with each client to understand their unique vision and deliver results that exceed expectations.",

      // Contact Page
      "contact.title": "Contact Us",
      "contact.description": "We'd love to hear from you! Whether you have a question about our services, pricing, or just want to say hello, we're here to help.",
      "contact.email.title": "Email Us",
      "contact.phone.title": "Call Us",
      "contact.hours.title": "Business Hours",
      "contact.hours.monday": "Monday",
      "contact.hours.tuesday": "Tuesday",
      "contact.hours.wednesday": "Wednesday",
      "contact.hours.thursday": "Thursday",
      "contact.hours.friday": "Friday",
      "contact.hours.saturday": "Saturday",
      "contact.hours.sunday": "Sunday",
      "contact.hours.closed": "Closed",

      // Footer
      "footer.about": "About",
      "footer.services": "Services",
      "footer.portfolio": "Portfolio",
      "footer.contact": "Contact",
      "footer.copyright": "© 2023 LENS5. All rights reserved.",
    },



    
    ar: {
      // Navigation
      "nav.home": "الرئيسية",
      "nav.services": "الخدمات",
      "nav.portfolio": "معرض الأعمال",
      "nav.about": "من نحن",
      "nav.contact": "اتصل بنا",

      // Hero Section
      "hero.title": "نحن هنا لالتقاط لحظاتك الجميلة",
      "hero.subtitle": "خدمات تصوير احترافية لجميع مناسباتك الخاصة",
      "hero.cta": "استكشف المعرض",

      // Portfolio Section
      "portfolio.title": "هذه هي أحدث أعمالنا",
      "portfolio.subtitle": "استكشف أحدث مشاريع التصوير لدينا",
      "portfolio.item1.title": "حفل افتتاح الشركة الكبير",
      "portfolio.item1.description": "التقطنا جوهر هذا الحدث المؤسسي المهم بتصوير أنيق واحترافي.",
      "portfolio.item2.title": "تصوير حفلات الزفاف",
      "portfolio.item2.description": "نهجنا الإبداعي في تصوير الفعاليات يضمن التقاط كل لحظة مهمة بأسلوب ودقة.",
      "portfolio.item3.title": "جلسة تصوير شخصية",
      "portfolio.item3.description": "وثقنا هذه المناسبة الخاصة بمزيج من اللقطات العفوية والمنظمة التي تروي القصة الكاملة.",
      "portfolio.viewGallery": "عرض المعرض",
      "portfolio.pageTitle": "معرض أعمالنا",
      "portfolio.backToGallery": "العودة إلى المعرض",
      "portfolio.filters.all": "الكل",
      "portfolio.filters.weddings": "حفلات الزفاف",
      "portfolio.filters.events": "الفعاليات",
      "portfolio.filters.portraits": "الصور الشخصية",
      "portfolio.filters.commercial": "التصوير التجاري",

      // Services Section
      "services.title": "هذه هي خدماتنا",
      "services.browseAll": "تصفح جميع الخدمات",
      "services.photography.title": "التصوير",
      "services.photography.description": "خدمات تصوير احترافية للفعاليات والبورتريه والمنتجات والمزيد. نستخدم أحدث المعدات لتقديم صور مذهلة.",
      "services.photography.feature1": "صور عالية الدقة مع تحرير احترافي",
      "services.photography.feature2": "إعدادات كاميرا متعددة لتغطية شاملة",
      "services.photography.feature3": "أوقات تسليم سريعة مع معرض صور عبر الإنترنت",
      "services.videography.title": "تصوير الفيديو",
      "services.videography.description": "خدمات إنتاج فيديو سينمائية تلتقط عاطفة وطاقة لحظاتك الخاصة مع مونتاج احترافي وتصحيح الألوان.",
      "services.videography.feature1": "تسجيل فيديو بدقة 4K مع صوت احترافي",
      "services.videography.feature2": "لقطات جوية بالدرون لمناظر مذهلة",
      "services.videography.feature3": "مونتاج احترافي مع موسيقى وتصحيح ألوان",
      "services.events.title": "الفعاليات",
      "services.events.description": "تغطية شاملة لحفلات الزفاف والفعاليات المؤسسية والحفلات والمناسبات الخاصة الأخرى مع باقات مخصصة لتناسب احتياجاتك.",
      "services.events.feature1": "خيارات تغطية ليوم كامل مع مصورين متعددين",
      "services.events.feature2": "مزيج من التصوير العفوي والمنظم",
      "services.events.feature3": "باقات مخصصة لأي حجم من الفعاليات",
      "services.editing.title": "تحرير الصور",
      "services.editing.description": "خدمات تعديل وتحسين احترافية لتعزيز صورك مع تصحيح الألوان وتحسين البشرة والتأثيرات الإبداعية.",
      "services.editing.feature1": "تحسين احترافي وتصحيح الألوان",
      "services.editing.feature2": "تأثيرات إبداعية وتحسينات فنية",
      "services.editing.feature3": "معالجة دفعات للحصول على مظهر متناسق في جميع الصور",
      "services.pageTitle": "خدماتنا",
      "services.pageDescription": "نقدم مجموعة شاملة من خدمات التصوير الفوتوغرافي والفيديو لتلبية جميع احتياجاتك. كل خدمة قابلة للتخصيص لتناسب متطلباتك المحددة.",
      "services.custom.title": "هل تحتاج إلى باقة مخصصة؟",
      "services.custom.description": "يمكننا إنشاء حل مخصص يناسب متطلباتك المحددة وميزانيتك بشكل مثالي.",
      "services.custom.button": "اتصل بنا",

      // CTA Section
      "cta.title": "هل تحتاج مساعدة في التصوير الاحترافي؟",
      "cta.subtitle": "لنعمل معًا!",
      "cta.button": "اتصل بنا",

      // About Page
      "about.title": "من انا",
      "about.intro": "تأسست LENS5 في عام 2015، وأصبحت استوديو تصوير رائدًا مكرسًا لالتقاط أثمن لحظات الحياة بإبداع وشغف وتميز تقني.",
      "about.mission": "مهمتنا هي تحويل اللحظات العادية إلى ذكريات استثنائية من خلال فن التصوير. نؤمن بأن كل صورة تروي قصة، ونحن ملتزمون برواية قصتك بأصالة ورؤية فنية.",
      "about.approach": "نهجنا يجمع بين الخبرة التقنية والعين الحادة للتفاصيل والتكوين. نعمل بشكل وثيق مع كل عميل لفهم رؤيته الفريدة وتقديم نتائج تفوق التوقعات.",

      // Contact Page
      "contact.title": "اتصل بنا",
      "contact.description": "يسعدنا أن نسمع منك! سواء كان لديك سؤال حول خدماتنا أو الأسعار أو ترغب فقط في إلقاء التحية، نحن هنا للمساعدة.",
      "contact.email.title": "راسلنا عبر البريد الإلكتروني",
      "contact.phone.title": "اتصل بنا",
      "contact.hours.title": "ساعات العمل",
      "contact.hours.monday": "الاثنين",
      "contact.hours.tuesday": "الثلاثاء",
      "contact.hours.wednesday": "الأربعاء",
      "contact.hours.thursday": "الخميس",
      "contact.hours.friday": "الجمعة",
      "contact.hours.saturday": "السبت",
      "contact.hours.sunday": "الأحد",
      "contact.hours.closed": "مغلق",

      // Footer
      "footer.about": "من نحن",
      "footer.services": "الخدمات",
      "footer.portfolio": "معرض الأعمال",
      "footer.contact": "اتصل بنا",
      "footer.copyright": "© 2023 LENS5. جميع الحقوق محفوظة.",
    }
  };
  
  // Check for saved language preference
  let currentLanguage = localStorage.getItem('language') || 'en';
  
  // Set initial language
  setLanguage(currentLanguage);
  
  // Language toggle button
  if (languageToggle) {
    languageToggle.addEventListener('click', function() {
      currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
      setLanguage(currentLanguage);
      localStorage.setItem('language', currentLanguage);
    });
  }
  
  // Function to set language
  function setLanguage(lang) {
    // Update language text
    if (languageText) {
      languageText.textContent = lang.toUpperCase();
    }
    
    // Set direction
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Update all elements with data-lang-key attribute
    const elements = document.querySelectorAll('[data-lang-key]');
    elements.forEach(element => {
      const key = element.getAttribute('data-lang-key');
      if (translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });
  }
});