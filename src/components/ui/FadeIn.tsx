import React, { useEffect, useState, useRef } from 'react';
interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}
export function FadeIn({
  children,
  delay = 0,
  className = ''
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`} style={{
    transitionDelay: `${delay}ms`
  }}>
      {children}
    </div>;
}