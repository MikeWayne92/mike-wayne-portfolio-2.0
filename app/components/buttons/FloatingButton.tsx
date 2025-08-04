import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { resolvePublicPath } from '../../utils/pathUtils';

const FloatingButton = () => {
    // Vertical position state
    const [positionY, setPositionY] = useState(0);
    const [directionY, setDirectionY] = useState(1);
    
    // Horizontal position state
    const [positionX, setPositionX] = useState(0);
    const [directionX, setDirectionX] = useState(1);
    
    // Screen-based bounds
    const [horizontalBounds, setHorizontalBounds] = useState({ min: -10, max: 10 });
    
    // Randomization factors
    const [randomFactor, setRandomFactor] = useState(Math.random() * 0.5 + 0.5);
    
    const [hovering, setHovering] = useState(false);
    
    // Update horizontal bounds based on screen width
    const updateHorizontalBounds = () => {
        const screenWidth = window.innerWidth;
        // Use a percentage of the screen width for bounds
        // More space on wider screens, less on mobile
        const boundFactor = screenWidth >= 1024 ? 0.15 : screenWidth >= 768 ? 0.10 : 0.05;
        const maxBound = Math.round(screenWidth * boundFactor);
        setHorizontalBounds({ min: -maxBound, max: maxBound });
    };
    
    // Check for mobile device and update bounds on mount and resize
    useEffect(() => {
        const handleResize = () => {
            updateHorizontalBounds();
        };
        
        // Check initially
        handleResize();
        
        // Add resize listener
        window.addEventListener('resize', handleResize);
        
        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    // Periodically update random factor for organic movement
    useEffect(() => {
        const randomInterval = setInterval(() => {
            setRandomFactor(Math.random() * 0.5 + 0.5);
        }, 2000);
        
        return () => clearInterval(randomInterval);
    }, []);
    
    // Anti-gravity floating animation - vertical
    useEffect(() => {
        const floatInterval = setInterval(() => {
            // If hovering, intensify the floating effect
            const speed = hovering ? 1.5 : 0.5 * randomFactor;
            
            if (positionY > 15) {
                setDirectionY(-1);
            } else if (positionY < -15) {
                setDirectionY(1);
            }
            setPositionY(prev => prev + directionY * speed);
        }, 30);
        
        return () => clearInterval(floatInterval);
    }, [positionY, directionY, hovering, randomFactor]);
    
    // Horizontal floating animation
    useEffect(() => {
        const floatInterval = setInterval(() => {
            // Slower horizontal movement with randomization
            const speed = hovering ? 0.8 : 0.3 * randomFactor;
            
            if (positionX > horizontalBounds.max) {
                setDirectionX(-1);
            } else if (positionX < horizontalBounds.min) {
                setDirectionX(1);
            }
            setPositionX(prev => prev + directionX * speed);
        }, 40); // Slightly different interval for more organic movement
        
        return () => clearInterval(floatInterval);
    }, [positionX, directionX, hovering, randomFactor, horizontalBounds]);
    
    // Resolve the path to the PDF file
    const pdfPath = resolvePublicPath('/MCollinsDataOps.pdf');

    // Variant for initial mount animation
    const containerVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: { 
                type: "spring",
                stiffness: 100,
                delay: 0.3
            }
        }
    };

    // Glowing button styles with hover and active states
    const getButtonStyles = (isHovered: boolean, isActive: boolean) => {
        const baseStyles = {
            '--glow-color': 'rgb(217, 176, 255)',
            '--glow-spread-color': 'rgba(191, 123, 255, 0.781)',
            '--enhanced-glow-color': 'rgb(231, 206, 255)',
            '--btn-color': 'rgb(100, 61, 136)',
            border: '.25em solid var(--glow-color)',
            padding: '1em 3em',
            fontSize: '15px',
            fontWeight: 'bold',
            borderRadius: '1em',
            outline: 'none',
            position: 'relative',
            transition: 'all 0.3s',
            cursor: 'pointer',
            textDecoration: 'none',
            display: 'inline-block',
            fontFamily: 'inherit',
            textShadow: '0 0 .5em var(--glow-color)',
        } as React.CSSProperties;

        if (isHovered) {
            return {
                ...baseStyles,
                color: 'var(--btn-color)',
                backgroundColor: 'var(--glow-color)',
                boxShadow: '0 0 1em .25em var(--glow-color), 0 0 4em 2em var(--glow-spread-color), inset 0 0 .75em .25em var(--glow-color)',
            } as React.CSSProperties;
        } else if (isActive) {
            return {
                ...baseStyles,
                color: 'var(--glow-color)',
                backgroundColor: 'var(--btn-color)',
                boxShadow: '0 0 0.6em .25em var(--glow-color), 0 0 2.5em 2em var(--glow-spread-color), inset 0 0 .5em .25em var(--glow-color)',
            } as React.CSSProperties;
        } else {
            return {
                ...baseStyles,
                color: 'var(--glow-color)',
                backgroundColor: 'var(--btn-color)',
                boxShadow: '0 0 1em .25em var(--glow-color), 0 0 4em 1em var(--glow-spread-color), inset 0 0 .75em .25em var(--glow-color)',
            } as React.CSSProperties;
        }
    };

    const [isButtonHovered, setIsButtonHovered] = useState(false);
    const [isButtonActive, setIsButtonActive] = useState(false);
    
    return (
        <section className="w-full relative bg-[#0E1016] py-4 md:py-8">
            <motion.div 
                className="w-full flex flex-col justify-center items-center relative z-20 mt-2 mb-6 md:mb-8"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.div
                    className="relative mb-2"
                    style={{ 
                        y: positionY,
                        x: positionX
                    }}
                    whileHover={{ 
                        scale: 1.1,
                        rotate: [0, -2, 2, -2, 0],
                        transition: { duration: 0.5 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    onHoverStart={() => setHovering(true)}
                    onHoverEnd={() => setHovering(false)}
                >
                    <a
                        href={pdfPath}
                        target="_blank"
                        download="MCollinsDataOps.pdf"
                        type="application/pdf"
                        rel="noopener noreferrer"
                        style={getButtonStyles(isButtonHovered, isButtonActive)}
                        data-blobity-tooltip="Download Resume"
                        onMouseEnter={() => setIsButtonHovered(true)}
                        onMouseLeave={() => setIsButtonHovered(false)}
                        onMouseDown={() => setIsButtonActive(true)}
                        onMouseUp={() => setIsButtonActive(false)}
                        onTouchStart={() => setIsButtonActive(true)}
                        onTouchEnd={() => setIsButtonActive(false)}
                    >
                        <span>RESUME</span>
                    </a>
                    <motion.div 
                        className="absolute inset-0 bg-white opacity-20 rounded-full blur-md -z-10"
                        animate={{
                            scale: [1, 1.05, 1],
                            opacity: [0.2, 0.3, 0.2],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default FloatingButton;