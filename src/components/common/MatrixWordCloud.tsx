import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = [
    "learn to code",
    "community",
    "doable hardware",
    "next-gen creators",
    "ai experimentation",
    "smart kits",
    "vetted projects",
    "open source",
    "physical tech",
    "build the future",
    "low code",
    "robotics",
    "innovation",
    "traction",
    "makerspace"
];

interface FallingWord {
    id: string;
    text: string;
    lane: number;
    duration: number;
    delay: number;
    fontSize: number;
    opacity: number;
}

const LANES_COUNT = 12; // More lanes for better distribution
const ANIMATION_DISTANCE = 850;

export default function MatrixWordCloud() {
    const [fallingWords, setFallingWords] = useState<FallingWord[]>([]);

    useEffect(() => {
        const initialWords: FallingWord[] = [];
        const wordsPerLane = 3;

        for (let l = 0; l < LANES_COUNT; l++) {
            for (let i = 0; i < wordsPerLane; i++) {
                const duration = 25 + Math.random() * 10; // More uniform speed
                // Strictly space out words in the same lane
                const baseDelay = (i * (duration / wordsPerLane));
                const randomOffset = Math.random() * 2;
                const delay = -(baseDelay + randomOffset);

                initialWords.push({
                    id: `word-${l}-${i}`,
                    text: words[Math.floor(Math.random() * words.length)],
                    lane: l,
                    duration,
                    delay,
                    fontSize: 12 + (l % 3) * 3, // Consistent sizing for readability
                    opacity: 0.15 + (l % 4) * 0.1, // Consistent opacity variations
                });
            }
        }
        setFallingWords(initialWords);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-80">
            <AnimatePresence>
                {fallingWords.map((word) => (
                    <motion.div
                        key={word.id}
                        initial={{ y: -100, opacity: 0 }}
                        animate={{
                            y: ANIMATION_DISTANCE,
                            opacity: [0, word.opacity, word.opacity, 0]
                        }}
                        transition={{
                            duration: word.duration,
                            delay: word.delay,
                            ease: "linear",
                            repeat: Infinity,
                            opacity: {
                                times: [0, 0.1, 0.9, 1],
                                duration: word.duration,
                                repeat: Infinity
                            }
                        }}
                        style={{
                            position: 'absolute',
                            // Horizontal distribution across the circle
                            left: `${5 + (word.lane * (90 / (LANES_COUNT - 1)))}%`,
                            fontSize: `${word.fontSize}px`,
                            translateX: '-50%' // Center word in its lane
                        }}
                        className="font-mono font-extrabold text-primary whitespace-nowrap uppercase tracking-[0.25em] blur-[0.2px]"
                    >
                        {word.text}
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}
