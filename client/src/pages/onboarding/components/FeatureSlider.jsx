import { useState, useEffect, useCallback } from 'react';
import { Heading } from '../../../components';

function FeatureSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const features = [
    {
      icon: '📱',
      title: 'Mode hors-ligne',
      description: 'Utilisable sans connexion internet',
    },
    {
      icon: '👥',
      title: 'Collaboration',
      description: 'Partagez vos listes instantanément',
    },
    {
      icon: '🔒',
      title: 'Auto-hébergement',
      description: 'Gardez le contrôle de vos données',
    },
  ];

  const handleSlideChange = useCallback(
    (newIndex) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentSlide(newIndex);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const handleNextSlide = useCallback(() => {
    const newIndex = (currentSlide + 1) % features.length;
    handleSlideChange(newIndex);
  }, [currentSlide, features.length, handleSlideChange]);

  const handlePrevSlide = useCallback(() => {
    const newIndex = (currentSlide - 1 + features.length) % features.length;
    handleSlideChange(newIndex);
  }, [currentSlide, features.length, handleSlideChange]);

  useEffect(() => {
    const timer = setInterval(handleNextSlide, 5000);
    return () => clearInterval(timer);
  }, [handleNextSlide]);

  return (
    <div className="feature-slider">
      <button onClick={handlePrevSlide} className="slider-button" disabled={isAnimating}>
        ←
      </button>

      <div className={`slider-content ${isAnimating ? 'animating' : ''}`}>
        <div className="feature-icon">{features[currentSlide].icon}</div>
        <Heading level={2}>{features[currentSlide].title}</Heading>
        <p>{features[currentSlide].description}</p>
      </div>

      <button onClick={handleNextSlide} className="slider-button" disabled={isAnimating}>
        →
      </button>

      <div className="slider-dots">
        {features.map((_, index) => (
          <button
            key={index}
            className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => handleSlideChange(index)}
            disabled={isAnimating}
          />
        ))}
      </div>
    </div>
  );
}

export default FeatureSlider;
