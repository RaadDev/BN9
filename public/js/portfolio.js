document.addEventListener('DOMContentLoaded', function() {
    // بيانات المعرض - استبدلها بمشاريعك الفعلية
    const portfolioData = [
        {
            id: 1,
            title: "تصوير حفلات الزفاف",
            category: "wedding",
            description: "التقاط اللحظات الجميلة في يومك المميز",
            images: [
"/images/portfolio/wedding/wwww.jpg", 
"/images/portfolio/wedding/d3-1.jpg", 
"/images/portfolio/wedding/d3-2.jpg", 
"/images/portfolio/wedding/d3-6.jpg", 
"/images/portfolio/wedding/d3-7.jpg",
            ],
            thumbnail: "/images/portfolio/wedding/thum-4.jpg"
        },
        {
            id: 2,
            title: "جلسات البورتريه",
            category: "portrait",
            description: "تصوير بورتريه احترافي للأفراد",
            images: [
                "https://source.unsplash.com/random/800x600/?portrait,1",
                "https://source.unsplash.com/random/800x600/?portrait,2",
                "https://source.unsplash.com/random/800x600/?portrait,3"
            ],
            thumbnail: "/images/portfolio/Portrait/thum-3.jpg"
        },
        {
            id: 4,
            title: "تصوير الأزياء",
            category: "commercial",
            description: "تصوير أزياء راقي للمجلات",
            images: [
                "https://source.unsplash.com/random/800x600/?fashion,1",
                "https://source.unsplash.com/random/800x600/?fashion,2",
                "https://source.unsplash.com/random/800x600/?fashion,3"
            ],
            thumbnail: "/images/portfolio/Commercial/thum-1.jpg"
        },
        {
            id: 5,
            title: "تصوير المنتجات",
            category: "commercial",
            description: "تصوير احترافي للمنتجات للتجارة الإلكترونية",
            images: [
                "https://source.unsplash.com/random/800x600/?product,1",
                "https://source.unsplash.com/random/800x600/?product,2",
                "https://source.unsplash.com/random/800x600/?product,3"
            ],
            thumbnail: "/images/portfolio/Commercial/thum-1.jpg"
        },
        {
            id: 6,
            title: "تصوير المناسبات",
            category: "event",
            description: "تغطية شاملة للمناسبات والفعاليات",
            images: [
                "https://source.unsplash.com/random/800x600/?event,1",
                "https://source.unsplash.com/random/800x600/?event,2",
                "https://source.unsplash.com/random/800x600/?event,3"
            ],
            thumbnail: "/images/portfolio/Commercial/thum-1.jpg"
        }
    ];

    // متغيرات لتتبع الحالة الحالية
    let currentFilter = 'all';
    let currentView = 'grid';
    let currentImageIndex = 0;
    let currentItemIndex = 0;
    let visibleItems = 6;

    // عناصر DOM
    const portfolioGrid = document.getElementById('portfolio-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const viewButtons = document.querySelectorAll('.view-btn');
    const loadMoreBtn = document.getElementById('load-more-btn');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxNext = document.getElementById('lightbox-next');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxCounter = document.getElementById('lightbox-counter');
    const lightboxThumbnails = document.getElementById('lightbox-thumbnails');

    // تهيئة المعرض
    function initPortfolio() {
        renderPortfolio();
        setupEventListeners();
    }

    // عرض المعرض بناءً على الفلتر والعرض الحاليين
    function renderPortfolio() {
        // مسح الشبكة
        if (!portfolioGrid) return;
        portfolioGrid.innerHTML = '';
        
        // فلترة البيانات
        const filteredData = currentFilter === 'all' 
            ? portfolioData 
            : portfolioData.filter(item => item.category === currentFilter);
        
        // تحديد عدد العناصر المرئية
        const visibleData = filteredData.slice(0, visibleItems);
        
        // إخفاء أو إظهار زر "تحميل المزيد"
        if (loadMoreBtn) {
            if (visibleData.length < filteredData.length) {
                loadMoreBtn.style.display = 'block';
            } else {
                loadMoreBtn.style.display = 'none';
            }
        }
        
        // عرض العناصر بناءً على طريقة العرض الحالية
        if (currentView === 'grid') {
            renderGridView(visibleData);
        } else {
            renderGalleryView(visibleData);
        }
    }

    // عرض طريقة العرض الشبكي (مع العناوين والأوصاف)
    function renderGridView(data) {
        if (!portfolioGrid) return;
        portfolioGrid.className = 'portfolio-grid';
        
        data.forEach((item, index) => {
            const portfolioItem = document.createElement('div');
            portfolioItem.className = 'portfolio-item';
            portfolioItem.setAttribute('data-item-id', item.id);
            portfolioItem.setAttribute('data-index', index);
            
            portfolioItem.innerHTML = `
                <div class="portfolio-item-inner">
                    <div class="portfolio-image">
                        <img src="${item.thumbnail}" alt="${item.title}">
                        <div class="portfolio-overlay">
                            <span class="view-project">عرض المشروع</span>
                        </div>
                    </div>
                    <div class="portfolio-content">
                        <h3>${item.title}</h3>
                        <span class="category">${getCategoryName(item.category)}</span>
                        <p>${item.description}</p>
                    </div>
                </div>
            `;
            
            // جعل عنصر المعرض بأكمله قابل للنقر
            portfolioItem.addEventListener('click', function() {
                openLightbox(item, 0);
            });
            
            portfolioGrid.appendChild(portfolioItem);
        });
    }

    // عرض طريقة عرض المعرض (الصور فقط)
    function renderGalleryView(data) {
        if (!portfolioGrid) return;
        portfolioGrid.className = 'portfolio-gallery';
        
        data.forEach((item, index) => {
            // بالنسبة لطريقة عرض المعرض، سنعرض جميع الصور من كل عنصر
            item.images.forEach((imageUrl, imageIndex) => {
                const galleryItem = document.createElement('div');
                galleryItem.className = 'gallery-item';
                galleryItem.setAttribute('data-item-id', item.id);
                galleryItem.setAttribute('data-index', index);
                galleryItem.setAttribute('data-image-index', imageIndex);
                
                galleryItem.innerHTML = `
                    <div class="gallery-image">
                        <img src="${imageUrl}" alt="${item.title} - صورة ${imageIndex + 1}">
                        <div class="gallery-overlay">
                            <span class="view-image">عرض الصورة</span>
                        </div>
                    </div>
                `;
                
                // جعل عنصر المعرض بأكمله قابل للنقر
                galleryItem.addEventListener('click', function() {
                    openLightbox(item, imageIndex);
                });
                
                portfolioGrid.appendChild(galleryItem);
            });
        });
    }

    // فتح صندوق الضوء مع العنصر والصورة المحددين
    function openLightbox(item, imageIndex) {
        if (!lightbox || !lightboxImage || !lightboxCaption) {
            console.error("Lightbox elements not found");
            return;
        }
        
        currentItemIndex = portfolioData.findIndex(i => i.id === item.id);
        currentImageIndex = imageIndex;
        
        // تحديث محتوى صندوق الضوء
        updateLightboxContent();
        
        // إظهار صندوق الضوء
        lightbox.style.display = 'flex';
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // منع التمرير
        
        // إنشاء صور مصغرة لجميع الصور في هذا العنصر
        renderLightboxThumbnails(item);
        
        console.log("Lightbox opened", item, imageIndex);
    }

    // تحديث محتوى صندوق الضوء بناءً على الفهارس الحالية
    function updateLightboxContent() {
        const item = portfolioData[currentItemIndex];
        const totalImages = item.images.length;
        
        // تحديث الصورة والتسمية والعداد
        lightboxImage.src = item.images[currentImageIndex];
        lightboxCaption.textContent = `${item.title} - ${getCategoryName(item.category)}`;
        lightboxCounter.textContent = `صورة ${currentImageIndex + 1} من ${totalImages}`;
        
        // تحديث الصورة المصغرة النشطة
        const thumbnails = document.querySelectorAll('.lightbox-thumbnail');
        thumbnails.forEach((thumb, index) => {
            if (index === currentImageIndex) {
                thumb.classList.add('active');
            } else {
                thumb.classList.remove('active');
            }
        });
    }

    // عرض صور مصغرة لجميع الصور في العنصر الحالي
    function renderLightboxThumbnails(item) {
        if (!lightboxThumbnails) return;
        
        lightboxThumbnails.innerHTML = '';
        
        item.images.forEach((imageUrl, index) => {
            const thumbnail = document.createElement('div');
            thumbnail.className = `lightbox-thumbnail ${index === currentImageIndex ? 'active' : ''}`;
            thumbnail.innerHTML = `<img src="${imageUrl}" alt="صورة مصغرة ${index + 1}">`;
            
            thumbnail.addEventListener('click', () => {
                currentImageIndex = index;
                updateLightboxContent();
            });
            
            lightboxThumbnails.appendChild(thumbnail);
        });
    }

    // الانتقال إلى الصورة التالية
    function nextImage() {
        const item = portfolioData[currentItemIndex];
        currentImageIndex = (currentImageIndex + 1) % item.images.length;
        updateLightboxContent();
    }

    // الانتقال إلى الصورة السابقة
    function prevImage() {
        const item = portfolioData[currentItemIndex];
        currentImageIndex = (currentImageIndex - 1 + item.images.length) % item.images.length;
        updateLightboxContent();
    }

    // إغلاق صندوق الضوء
    function closeLightbox() {
        if (!lightbox) return;
        
        lightbox.style.display = 'none';
        lightbox.classList.remove('active');
        document.body.style.overflow = ''; // استعادة التمرير
    }

    // إعداد جميع مستمعي الأحداث
    function setupEventListeners() {
        // أزرار الفلتر
        if (filterButtons) {
            filterButtons.forEach(btn => {
                btn.addEventListener('click', () => {
                    // تحديث حالة النشاط
                    filterButtons.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    
                    // تحديث الفلتر وإعادة العرض
                    currentFilter = btn.getAttribute('data-filter');
                    visibleItems = 6; // إعادة تعيين العناصر المرئية عند تغيير الفلتر
                    renderPortfolio();
                });
            });
        }
        
        // أزرار طريقة العرض
        if (viewButtons) {
            viewButtons.forEach(btn => {
                btn.addEventListener('click', () => {
                    // تحديث حالة النشاط
                    viewButtons.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    
                    // تحديث طريقة العرض وإعادة العرض
                    currentView = btn.getAttribute('data-view');
                    renderPortfolio();
                });
            });
        }
        
        // زر تحميل المزيد
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => {
                visibleItems += 3; // إظهار 3 عناصر إضافية
                renderPortfolio();
            });
        }
        
        // التنقل في صندوق الضوء
        if (lightboxNext) {
            lightboxNext.addEventListener('click', nextImage);
        }
        
        if (lightboxPrev) {
            lightboxPrev.addEventListener('click', prevImage);
        }
        
        if (lightboxClose) {
            lightboxClose.addEventListener('click', closeLightbox);
        }
        
        // إغلاق صندوق الضوء عند النقر خارج الصورة
        if (lightbox) {
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) {
                    closeLightbox();
                }
            });
        }
        
        // التنقل باستخدام لوحة المفاتيح
        document.addEventListener('keydown', (e) => {
            if (lightbox && lightbox.classList.contains('active')) {
                if (e.key === 'Escape') {
                    closeLightbox();
                } else if (e.key === 'ArrowRight') {
                    // في الواجهة العربية، السهم الأيمن يعني السابق
                    prevImage();
                } else if (e.key === 'ArrowLeft') {
                    // في الواجهة العربية، السهم الأيسر يعني التالي
                    nextImage();
                }
            }
        });
    }

    // الحصول على اسم الفئة بالعربية
    function getCategoryName(category) {
        const categoryNames = {
            'wedding': 'زفاف',
            'portrait': 'بورتريه',
            'landscape': 'مناظر طبيعية',
            'event': 'مناسبات',
            'commercial': 'تجاري'
        };
        
        return categoryNames[category] || category;
    }

    // بدء تشغيل المعرض
    initPortfolio();
});