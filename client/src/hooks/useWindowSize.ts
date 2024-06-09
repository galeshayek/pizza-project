import { useState, useEffect } from 'react';

function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { width: innerWidth, height: innerHeight , sm: 640, md: 768, lg: 1024, xl: 1280   };
}

export default function useWindowSize() {
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
}
