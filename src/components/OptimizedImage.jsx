import { useState } from 'react';

/**
 * OptimizedImage - A wrapper component for images with built-in optimization
 * Features:
 * - Loading state management with placeholder
 * - Lazy loading support
 * - Error handling
 * - Responsive image support via srcSet
 * - Smooth fade-in animation
 */
export const OptimizedImage = ({
  src,
  alt,
  srcSet,
  sizes,
  loading = 'lazy',
  className = '',
  style,
  placeholder = 'blur',
  onLoad,
  onError,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = (e) => {
    setIsLoaded(true);
    onLoad?.(e);
  };

  const handleError = (e) => {
    setHasError(true);
    onError?.(e);
  };

  const placeholderClasses = {
    blur: 'bg-gray-200 animate-pulse',
    none: '',
  };

  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      {/* Placeholder */}
      {!isLoaded && !hasError && placeholder !== 'none' && (
        <div className={`absolute inset-0 ${placeholderClasses[placeholder] || ''}`} />
      )}

      {/* Main Image */}
      <img
        src={src}
        alt={alt}
        srcSet={srcSet}
        sizes={sizes}
        loading={loading}
        className={`w-full h-full transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />

      {/* Error Fallback */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <span className="text-gray-400 text-sm">Image failed to load</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
