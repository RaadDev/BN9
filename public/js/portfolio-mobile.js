/**
 * Portfolio Mobile JavaScript
 * Enhanced mobile support for portfolio and lightbox functionality
 */

document.addEventListener('DOMContentLoaded', function() {
  // Check if we're on a mobile device
  const isMobile = window.innerWidth <= 992;
  
  // Portfolio elements
  const portfolioGrid = document.querySelector('.portfolio-grid');
  const portfolioGallery = document.querySelector('.portfolio-gallery');
  const portfolioFilters = document.querySelector('.portfolio-filters');
  const lightbox = document.querySelector('.lightbox');
  
  // If portfolio elements don't exist, exit early
  if (!portfolioGrid && !portfolioGallery) return;
  
  // ===== Mobile Filter Dropdown =====
  if (isMobile && portfolioFilters) {
    // Create filter dropdown for mobile
    createMobileFilterDropdown();
  }
  
  // ===== Lazy Loading for Images =====
  initLazyLoading();
  
  // ===== Touch Support for Lightbox =====
  if (lightbox) {
    initTouchSupport();
  }
  
  // ===== Resize Handler =====
  window.addEventListener('resize', handleResize);
  
  /**
   * Create mobile filter dropdown
   */
  function createMobileFilterDropdown() {
    // Get all filter buttons
    const filterButtons = document.querySelectorAll('.portfolio-filter-btn');
    if (!filterButtons.length) return;
    
    // Create select element
    const select = document.createElement('select');
    select.className = 'portfolio-filters-select';
    select.setAttribute('aria-label', 'Filter portfolio');
    
    // Add options based on filter buttons
    filterButtons.forEach(button => {
      const option = document.createElement('option');
      option.value = button.getAttribute('data-filter');
      option.textContent = button.textContent;
      if (button.classList.contains('active')) {
        option.selected = true;
      }
      select.appendChild(option);
    });
    
    // Add change event listener
    select.addEventListener('change', function() {
      const category = this.value;
      filterPortfolio(category);
    });
    
    // Only replace buttons with dropdown on small screens
    if (window.innerWidth <= 576) {
      // Hide buttons and show dropdown
      filterButtons.forEach(button => button.style.display = 'none');
      portfolioFilters.appendChild(select);
    }
  }
  
  /**
   * Filter portfolio items
   * @param {string} category - Category to filter by
   */
  function filterPortfolio(category) {
    const items = document.querySelectorAll('.portfolio-item');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Update active state in dropdown
    const dropdown = document.querySelector('.portfolio-filters-select');
    if (dropdown) {
      Array.from(dropdown.options).forEach(option => {
        if (option.value === category) {
          option.selected = true;
        }
      });
    }
    
    // Update active state in buttons
    const buttons = document.querySelectorAll('.portfolio-filter-btn');
    buttons.forEach(button => {
      if (button.getAttribute('data-filter') === category) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
    
    // Filter grid items
    if (items.length) {
      items.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (category === 'all' || itemCategory === category) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    }
    
    // Filter gallery items
    if (galleryItems.length) {
      galleryItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (category === 'all' || itemCategory === category) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    }
  }
  
  /**
   * Initialize lazy loading for images
   */
  function initLazyLoading() {
    // Get all portfolio images
    const images = document.querySelectorAll('.portfolio-item-image img, .gallery-item img');
    
    if (!images.length) return;
    
    // Create intersection observer
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute('data-src');
          
          if (src) {
            img.src = src;
            img.addEventListener('load', () => {
              img.classList.add('loaded');
            });
            observer.unobserve(img);
          }
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    });
    
    // Observe each image
    images.forEach(img => {
      // Store original src in data-src
      if (img.src && !img.getAttribute('data-src')) {
        img.setAttribute('data-src', img.src);
        // Set a placeholder or very small version
        img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E';
      }
      imageObserver.observe(img);
    });
  }
  
  /**
   * Initialize touch support for lightbox
   */
  function initTouchSupport() {
    const lightboxContent = document.querySelector('.lightbox-content');
    if (!lightboxContent) return;
    
    let touchStartX = 0;
    let touchEndX = 0;
    
    // Touch start event
    lightboxContent.addEventListener('touchstart', function(e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    // Touch end event
    lightboxContent.addEventListener('touchend', function(e) {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
    
    /**
     * Handle swipe gesture
     */
    function handleSwipe() {
      const swipeThreshold = 50;
      const prevBtn = document.querySelector('.lightbox-prev');
      const nextBtn = document.querySelector('.lightbox-next');
      
      if (touchEndX < touchStartX - swipeThreshold) {
        // Swipe left - next image
        if (nextBtn) nextBtn.click();
      }
      
      if (touchEndX > touchStartX + swipeThreshold) {
        // Swipe right - previous image
        if (prevBtn) prevBtn.click();
      }
    }
  }
  
  /**
   * Handle window resize
   */
  function handleResize() {
    const newIsMobile = window.innerWidth <= 992;
    
    // If transitioning between mobile and desktop
    if (newIsMobile !== isMobile) {
      // Reload page to apply correct layout
      // Alternatively, you could dynamically adjust the layout here
      location.reload();
    }
  }
  
  /**
   * Enhanced lightbox for mobile
   */
  function enhanceLightbox() {
    const lightbox = document.querySelector('.lightbox');
    if (!lightbox) return;
    
    // Add double-tap to zoom
    let lastTap = 0;
    const lightboxImage = document.querySelector('.lightbox-image');
    
    if (lightboxImage) {
      lightboxImage.addEventListener('touchend', function(e) {
        const currentTime = new Date().getTime();
        const tapLength = currentTime - lastTap;
        
        if (tapLength < 300 && tapLength > 0) {
          // Double tap detected
          toggleImageZoom(e);
          e.preventDefault();
        }
        
        lastTap = currentTime;
      });
    }
    
    /**
     * Toggle image zoom on double-tap
     */
    function toggleImageZoom(e) {
      const img = e.target;
      
      if (img.classList.contains('zoomed')) {
        // Zoom out
        img.classList.remove('zoomed');
        img.style.transform = '';
      } else {
        // Zoom in
        img.classList.add('zoomed');
        
        // Zoom to touch position
        const touch = e.changedTouches[0];
        const rect = img.getBoundingClientRect();
        
        const offsetX = (touch.clientX - rect.left) / rect.width;
        const offsetY = (touch.clientY - rect.top) / rect.height;
        
        img.style.transformOrigin = `${offsetX * 100}% ${offsetY * 100}%`;
        img.style.transform = 'scale(2.5)';
      }
    }
  }
  
  // Initialize enhanced lightbox
  enhanceLightbox();
});

/**
 * Open lightbox with enhanced mobile support
 * @param {Object} item - Portfolio item data
 * @param {number} index - Index of the image to show
 */
function openLightbox(item, index) {
  // Check if lightbox already exists
  let lightbox = document.querySelector('.lightbox');
  
  // If not, create it
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    document.body.appendChild(lightbox);
  }
  
  // Clear existing content
  lightbox.innerHTML = '';
  
  // Create lightbox content
  const content = document.createElement('div');
  content.className = 'lightbox-content';
  
  // Create image container
  const imageContainer = document.createElement('div');
  imageContainer.className = 'lightbox-image-container';
  
  // Create image element
  const image = document.createElement('img');
  image.className = 'lightbox-image';
  image.src = item.images[index];
  image.alt = item.title;
  
  // Add loading indicator
  image.style.opacity = '0';
  const loader = document.createElement('div');
  loader.className = 'lightbox-loader';
  imageContainer.appendChild(loader);
  
  // When image loads, show it and remove loader
  image.onload = function() {
    image.style.opacity = '1';
    if (loader.parentNode) {
      loader.parentNode.removeChild(loader);
    }
  };
  
  imageContainer.appendChild(image);
  content.appendChild(imageContainer);
  
  // Create caption
  const caption = document.createElement('div');
  caption.className = 'lightbox-caption';
  caption.textContent = item.title;
  content.appendChild(caption);
  
  // Create thumbnails if there are multiple images
  if (item.images.length > 1) {
    const thumbnails = document.createElement('div');
    thumbnails.className = 'lightbox-thumbnails';
    
    item.images.forEach((src, i) => {
      const thumb = document.createElement('div');
      thumb.className = 'lightbox-thumbnail';
      if (i === index) {
        thumb.classList.add('active');
      }
      
      const thumbImg = document.createElement('img');
      thumbImg.src = src;
      thumbImg.alt = '';
      thumb.appendChild(thumbImg);
      
      thumb.addEventListener('click', function() {
        openLightbox(item, i);
      });
      
      thumbnails.appendChild(thumb);
    });
    
    content.appendChild(thumbnails);
  }
  
  // Create close button
  const closeBtn = document.createElement('button');
  closeBtn.className = 'lightbox-close';
  closeBtn.innerHTML = '&times;';
  closeBtn.setAttribute('aria-label', 'Close lightbox');
  closeBtn.addEventListener('click', closeLightbox);
  content.appendChild(closeBtn);
  
  // Create navigation buttons if there are multiple images
  if (item.images.length > 1) {
    // Previous button
    const prevBtn = document.createElement('button');
    prevBtn.className = 'lightbox-nav lightbox-prev';
    prevBtn.innerHTML = '&#10094;';
    prevBtn.setAttribute('aria-label', 'Previous image');
    prevBtn.addEventListener('click', function() {
      const newIndex = index === 0 ? item.images.length - 1 : index - 1;
      openLightbox(item, newIndex);
    });
    content.appendChild(prevBtn);
    
    // Next button
    const nextBtn = document.createElement('button');
    nextBtn.className = 'lightbox-nav lightbox-next';
    nextBtn.innerHTML = '&#10095;';
    nextBtn.setAttribute('aria-label', 'Next image');
    nextBtn.addEventListener('click', function() {
      const newIndex = index === item.images.length - 1 ? 0 : index + 1;
      openLightbox(item, newIndex);
    });
    content.appendChild(nextBtn);
  }
  
  // Add content to lightbox
  lightbox.appendChild(content);
  
  // Show lightbox
  lightbox.style.display = 'flex';
  setTimeout(() => {
    lightbox.classList.add('active');
  }, 10);
  
  // Prevent body scrolling
  document.body.style.overflow = 'hidden';
  
  // Close lightbox when clicking outside content
  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
  
  // Keyboard navigation
  document.addEventListener('keydown', handleKeyDown);
  
  /**
   * Handle keyboard navigation
   */
  function handleKeyDown(e) {
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft' && item.images.length > 1) {
      const newIndex = index === 0 ? item.images.length - 1 : index - 1;
      openLightbox(item, newIndex);
    } else if (e.key === 'ArrowRight' && item.images.length > 1) {
      const newIndex = index === item.images.length - 1 ? 0 : index + 1;
      openLightbox(item, newIndex);
    }
  }
  
  /**
   * Close lightbox
   */
  function closeLightbox() {
    lightbox.classList.remove('active');
    setTimeout(() => {
      lightbox.style.display = 'none';
      document.body.style.overflow = '';
    }, 300);
    
    // Remove keyboard event listener
    document.removeEventListener('keydown', handleKeyDown);
  }
}