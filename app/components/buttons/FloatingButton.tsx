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
    
    // Randomization factors
    const [randomFactor, setRandomFactor] = useState(Math.random() * 0.5 + 0.5);
    
    const [hovering, setHovering] = useState(false);
    
    // Check for mobile device on mount and resize
    useEffect(() => {
        const checkMobile = () => {
            // Mobile check logic can be added here if needed in the future
        };
        
        // Check initially
        checkMobile();
        
        // Add resize listener
        window.addEventListener('resize', checkMobile);
        
        // Cleanup
        return () => window.removeEventListener('resize', checkMobile);
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
            
            if (positionX > 10) {
                setDirectionX(-1);
            } else if (positionX < -10) {
                setDirectionX(1);
            }
            setPositionX(prev => prev + directionX * speed);
        }, 40); // Slightly different interval for more organic movement
        
        return () => clearInterval(floatInterval);
    }, [positionX, directionX, hovering, randomFactor]);
    
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
                        rel="noopener noreferrer"
                        className="bg-[#e4ded7] text-black font-bold py-3 px-6 md:py-4 md:px-8 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 text-sm md:text-base"
                        data-blobity-tooltip="Download Resume"
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