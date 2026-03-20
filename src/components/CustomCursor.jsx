import React, { useEffect, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        let rafId;
        const onMouseMove = (e) => {
            rafId = requestAnimationFrame(() => {
                document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
                document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
            });
        };

        const onMouseDown = () => setIsClicked(true);
        const onMouseUp = () => setIsClicked(false);

        // Optimized event delegation for hover states
        const onMouseOver = (e) => {
            const target = e.target.closest('a, button, [role="button"], .interactive');
            if (target) setIsHovered(true);
            else setIsHovered(false);
        };

        window.addEventListener('mousemove', onMouseMove, { passive: true });
        window.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mouseup', onMouseUp);
        window.addEventListener('mouseover', onMouseOver, { passive: true });

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mouseup', onMouseUp);
            window.removeEventListener('mouseover', onMouseOver);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <div className={`custom-cursor-dot ${isHovered ? 'hovered' : ''} ${isClicked ? 'clicked' : ''}`} />
    );
};

export default CustomCursor;
