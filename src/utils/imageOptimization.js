/**
 * Image Optimization Utilities
 * Helper functions for responsive images and CDN optimization
 */

/**
 * Generate responsive srcSet for Builder.io CDN images
 * @param {string} url - Base image URL
 * @param {array} widths - Array of widths to generate [320, 640, 960, 1280]
 * @returns {string} srcSet string for img srcSet attribute
 */
export const generateBuilderSrcSet = (url, widths = [320, 640, 960, 1280]) => {
  if (!url || typeof url !== 'string') return '';

  // Check if URL already has query params
  const separator = url.includes('?') ? '&' : '?';
  
  return widths
    .map(width => {
      const optimizedUrl = `${url}${separator}format=webp&width=${width}`;
      return `${optimizedUrl} ${width}w`;
    })
    .join(', ');
};

/**
 * Get responsive sizes attribute based on breakpoints
 * @param {object} options - Size configuration
 * @returns {string} sizes attribute for img sizes attribute
 */
export const getResponsiveSizes = (options = {}) => {
  const {
    mobile = '100vw',
    tablet = '80vw',
    desktop = '60vw',
  } = options;

  return `(max-width: 640px) ${mobile}, (max-width: 1024px) ${tablet}, ${desktop}`;
};

/**
 * Preload an image
 * Useful for critical above-the-fold images
 * @param {string} src - Image source URL
 */
export const preloadImage = (src) => {
  if (typeof window === 'undefined') return;

  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  document.head.appendChild(link);
};

/**
 * Check if image URL is from Builder.io CDN
 * @param {string} url - Image URL to check
 * @returns {boolean}
 */
export const isBuilderImage = (url) => {
  return url?.includes('cdn.builder.io');
};

/**
 * Check if image URL is from Unsplash CDN
 * @param {string} url - Image URL to check
 * @returns {boolean}
 */
export const isUnsplashImage = (url) => {
  return url?.includes('unsplash.com');
};

/**
 * Generate optimized URL for external images
 * Automatically adds optimization params based on the source
 * @param {string} url - Original image URL
 * @param {object} options - Optimization options
 * @returns {string} Optimized image URL
 */
export const optimizeImageUrl = (url, options = {}) => {
  if (!url) return '';

  const { width, format = 'webp', quality = 80 } = options;

  if (isBuilderImage(url)) {
    const separator = url.includes('?') ? '&' : '?';
    let optimized = `${url}${separator}format=${format}`;
    if (width) optimized += `&width=${width}`;
    return optimized;
  }

  if (isUnsplashImage(url)) {
    const separator = url.includes('?') ? '&' : '?';
    let optimized = `${url}${separator}fm=${format}`;
    if (width) optimized += `&w=${width}`;
    optimized += `&q=${quality}`;
    return optimized;
  }

  return url;
};

export default {
  generateBuilderSrcSet,
  getResponsiveSizes,
  preloadImage,
  isBuilderImage,
  isUnsplashImage,
  optimizeImageUrl,
};
