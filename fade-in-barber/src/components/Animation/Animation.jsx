import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './Animation.css';

const ScrollAnimation = ({ children }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (inView && !isVisible) {
            setIsVisible(true);
        }
    }, [inView, isVisible]);

    const transitionStyle = {
        transition: 'opacity 0.4s ease-in-out',
        opacity: isVisible ? 1 : 0,
    };

    return (
        <div ref={ref} className="scroll-animation" style={transitionStyle}>
            {children}
        </div>
    );
};

export default ScrollAnimation;
