// Image optimization utility
export const optimizeImage = (src, width = 'auto', height = 'auto') => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      // Set canvas dimensions
      canvas.width = width === 'auto' ? img.width : width;
      canvas.height = height === 'auto' ? img.height : height;
      
      // Draw and optimize image
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      
      // Convert to optimized format
      const optimizedSrc = canvas.toDataURL('image/webp', 0.8);
      resolve(optimizedSrc);
    };
    
    img.onerror = (error) => {
      console.error('Image optimization failed:', error);
      reject(error);
    };
    
    img.src = src;
  });
};

// Image preloading utility
export const preloadImages = (imageUrls) => {
  return Promise.all(
    imageUrls.map(url => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(url);
        img.onerror = () => reject(url);
        img.src = url;
      });
    })
  );
};

// Cache management
const imageCache = new Map();

export const getCachedImage = (src) => {
  return imageCache.get(src);
};

export const setCachedImage = (src, optimizedSrc) => {
  imageCache.set(src, optimizedSrc);
};

// Lazy loading utility
export const lazyLoadImage = (element, src) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = src;
        observer.unobserve(img);
      }
    });
  });

  observer.observe(element);
}; 