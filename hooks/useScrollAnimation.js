'use client';
import { useEffect, useRef, useState } from 'react';

export default function useScrollAnimation(initialVisible = true) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(initialVisible);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Don't unobserve - keep observing for re-entry
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -10px 0px',
            },
        );

        // Small delay to ensure proper initial state
        const timeoutId = setTimeout(() => {
            observer.observe(element);
        }, 100);

        return () => {
            clearTimeout(timeoutId);
            observer.disconnect();
        };
    }, []);

    return [ref, isVisible];
}
