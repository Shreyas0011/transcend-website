import React, { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const onMouseMove = (e) => {
            if (!isVisible) setIsVisible(true);
            
            const { clientX, clientY } = e;
            
            // Direct DOM manipulation for maximum performance (lag-free)
            if (dotRef.current) {
                dotRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
            }
            if (ringRef.current) {
                ringRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
            }
        };

        const onMouseDown = () => setIsClicked(true);
        const onMouseUp = () => setIsClicked(false);
        const onMouseLeave = () => setIsVisible(false);
        const onMouseEnter = () => setIsVisible(true);

        const onMouseOver = (e) => {
            const target = e.target.closest('a, button, [role="button"], .interactive, input, textarea');
            if (target) setIsHovered(true);
            else setIsHovered(false);
        };

        window.addEventListener('mousemove', onMouseMove, { passive: true });
        window.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mouseup', onMouseUp);
        window.addEventListener('mouseover', onMouseOver, { passive: true });
        window.addEventListener('mouseenter', onMouseEnter);
        window.addEventListener('mouseleave', onMouseLeave);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mouseup', onMouseUp);
            window.removeEventListener('mouseover', onMouseOver);
            window.removeEventListener('mouseenter', onMouseEnter);
            window.removeEventListener('mouseleave', onMouseLeave);
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
