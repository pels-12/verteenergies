import { useEffect, useRef, useState } from 'react';

type AnimationType = 'fade-in-up' | 'fade-in-down' | 'fade-in-left' | 'fade-in-right' | 'scale-in' | 'zoom-in' | 'slide-in-left' | 'slide-in-right';

export const useScrollAnimation = (animationType: AnimationType = 'fade-in-up', options?: {
  threshold?: number;
  margin?: string;
  once?: boolean;
  delay?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const currentElement = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (options?.delay) {
            setTimeout(() => setIsVisible(true), options.delay);
          } else {
            setIsVisible(true);
          }
          if (options?.once) {
            observer.unobserve(entry.target);
          }
        } else if (!options?.once) {
          setIsVisible(false);
        }
      },
      {
        threshold: options?.threshold || 0.1,
        rootMargin: options?.margin || '0px',
      }
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  const animationClasses: Record<AnimationType, string> = {
    'fade-in-up': 'transition-all duration-700 ease-out transform',
    'fade-in-down': 'transition-all duration-700 ease-out transform',
    'fade-in-left': 'transition-all duration-700 ease-out transform',
    'fade-in-right': 'transition-all duration-700 ease-out transform',
    'scale-in': 'transition-all duration-700 ease-out transform',
    'zoom-in': 'transition-all duration-700 ease-out transform',
    'slide-in-left': 'transition-all duration-700 ease-out transform',
    'slide-in-right': 'transition-all duration-700 ease-out transform',
  };

  const initialStates: Record<AnimationType, string> = {
    'fade-in-up': isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
    'fade-in-down': isVisible ? 'opacity-100 -translate-y-0' : 'opacity-0 -translate-y-8',
    'fade-in-left': isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8',
    'fade-in-right': isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8',
    'scale-in': isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
    'zoom-in': isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-110',
    'slide-in-left': isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12',
    'slide-in-right': isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12',
  };

  return {
    ref,
    className: `${animationClasses[animationType]} ${initialStates[animationType]}`,
    isVisible,
  };
};
