import React, { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let mouseX = 0, mouseY = 0; // Target pos
        let dotX = 0, dotY = 0;     // Dot current pos
        let ringX = 0, ringY = 0;   // Ring current pos
        let rafId;

        const lerp = (start, end, factor) => start + (end - start) * factor;

        const updateCursor = () => {
            // Speed settings (0.1 to 1.0)
            const dotFactor = 0.25;
            const ringFactor = 0.12;

            // Interpolate positions
            dotX = lerp(dotX, mouseX, dotFactor);
            dotY = lerp(dotY, mouseY, dotFactor);
            ringX = lerp(ringX, mouseX, ringFactor);
            ringY = lerp(ringY, mouseY, ringFactor);

            if (dotRef.current) {
                dotRef.current.style.transform = `translate3d(${dotX}px, ${dotY}px, 0)`;
            }
            if (ringRef.current) {
                ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
            }

            rafId = requestAnimationFrame(updateCursor);
        };

        const onMouseMove = (e) => {
            if (!isVisible) setIsVisible(true);
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const onMouseDown = () => setIsClicked(true);
        const onMouseUp = () => setIsClicked(false);
        const onMouseLeave = () => setIsVisible(false);
        const onMouseEnter = () => setIsVisible(true);

        const onMouseOver = (e) => {
            const target = e.target.closest('a, button, [role="button"], .interactive, input, textarea');
            setIsHovered(!!target);
        };

        window.addEventListener('mousemove', onMouseMove, { passive: true });
        window.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mouseup', onMouseUp);
        window.addEventListener('mouseover', onMouseOver, { passive: true });
        window.addEventListener('mouseenter', onMouseEnter);
        window.addEventListener('mouseleave', onMouseLeave);
        
        rafId = requestAnimationFrame(updateCursor);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mouseup', onMouseUp);
            window.removeEventListener('mouseover', onMouseOver);
            window.removeEventListener('mouseenter', onMouseEnter);
            window.removeEventListener('mouseleave', onMouseLeave);
            cancelAnimationFrame(rafId);
        };
    }, [isVisible]);

    return (
        <>
            <div 
                ref={dotRef}
                className={`custom-cursor-dot ${isHovered ? 'hovered' : ''} ${isClicked ? 'clicked' : ''} ${isVisible ? 'visible' : ''}`} 
            />
            <div 
                ref={ringRef}
                className={`custom-cursor-ring ${isHovered ? 'hovered' : ''} ${isClicked ? 'clicked' : ''} ${isVisible ? 'visible' : ''}`} 
            />
        </>
    );
};

export default CustomCursor;
