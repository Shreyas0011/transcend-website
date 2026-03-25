import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import Lenis from 'lenis'

const SmoothScroll = () => {
    const { pathname } = useLocation();
    const lenisRef = useRef(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 0.8,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1.2,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        })

        lenisRef.current = lenis;

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            lenis.destroy()
            lenisRef.current = null;
        }
    }, [])

    useEffect(() => {
        // Reset scroll position on route change
        const resetScroll = () => {
            if (lenisRef.current) {
                lenisRef.current.scrollTo(0, { immediate: true });
            }
            window.scrollTo(0, 0);
        };

        // Immediate reset
        resetScroll();

        // Delayed reset as a safety measure for lazy-loaded content
        const timeoutId = setTimeout(resetScroll, 50);

        return () => clearTimeout(timeoutId);
    }, [pathname]);

    return null
}

export default SmoothScroll
