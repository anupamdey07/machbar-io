import { useState } from 'react';
import { motion } from 'framer-motion';

export default function LineArtRobot({ className }: { className?: string }) {
    const [isSmiling, setIsSmiling] = useState(false);

    return (
        <motion.svg
            viewBox="0 0 200 200"
            className={`${className} cursor-pointer hover:text-accent transition-colors outline-none select-none`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={() => setIsSmiling(!isSmiling)}
            whileTap={{ scale: 0.95 }}
        >
            {/* Invisible Hit Target */}
            <rect width="200" height="200" fill="transparent" stroke="none" />

            {/* Outline Head */}
            <rect x="50" y="60" width="100" height="90" rx="20" />

            {/* Antennas */}
            <line x1="100" y1="60" x2="100" y2="30" />
            <motion.circle
                cx="100" cy="25" r="5" fill="currentColor"
                animate={{ y: isSmiling ? -5 : 0 }}
            />

            <line x1="70" y1="60" x2="60" y2="45" />
            <line x1="130" y1="60" x2="140" y2="45" />

            {/* Eyes */}
            <g className="eyes">
                <motion.circle cx="80" cy="95" r="10" animate={{ scaleY: isSmiling ? 0.8 : 1 }} />
                <motion.circle cx="80" cy="95" r="3" fill="currentColor" animate={{ scaleY: isSmiling ? 0.8 : 1 }} />

                <motion.circle cx="120" cy="95" r="10" animate={{ scaleY: isSmiling ? 0.8 : 1 }} />
                <motion.circle cx="120" cy="95" r="3" fill="currentColor" animate={{ scaleY: isSmiling ? 0.8 : 1 }} />
            </g>

            {/* Mouth Grille or Smile */}
            {isSmiling ? (
                <motion.path
                    d="M 75 125 Q 100 155 125 125"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5 }}
                    strokeWidth="3"
                />
            ) : (
                <g>
                    <rect x="75" y="125" width="50" height="10" rx="5" />
                    <line x1="85" y1="125" x2="85" y2="135" />
                    <line x1="95" y1="125" x2="95" y2="135" />
                    <line x1="105" y1="125" x2="105" y2="135" />
                    <line x1="115" y1="125" x2="115" y2="135" />
                </g>
            )}

            {/* Ears */}
            <motion.rect
                x="35" y="90" width="15" height="30" rx="5"
                animate={{ rotate: isSmiling ? -10 : 0, x: isSmiling ? -2 : 0 }}
            />
            <motion.rect
                x="150" y="90" width="15" height="30" rx="5"
                animate={{ rotate: isSmiling ? 10 : 0, x: isSmiling ? 2 : 0 }}
            />
        </motion.svg>
    );
}
