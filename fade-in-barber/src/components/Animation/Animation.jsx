import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './Animation.css';

const ScrollAnimation = ({ children }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (inView && !isVisible) {
            setIsVisible(true);
        }
    }, [inView, isVisible]);

    const transitionStyle = {
        transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
        transform: isVisible ? 'scale(1)' : 'scale(0.9)',
        opacity: isVisible ? 1 : 0,
    };

    return (
        <div ref={ref} className="scroll-animation" style={transitionStyle}>
            {children}
        </div>
    );
};

export default ScrollAnimation;
