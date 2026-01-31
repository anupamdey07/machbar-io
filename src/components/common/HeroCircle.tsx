import { motion } from 'framer-motion';
import MatrixWordCloud from './MatrixWordCloud';
import LineArtRobot from './LineArtRobot';

export default function HeroCircle() {
    return (
        <div className="relative flex items-center justify-center py-0 w-full overflow-visible pointer-events-none">
            {/* The Blipping Circle Background */}
            <motion.div
                className="absolute w-[min(85vw,650px)] h-[min(85vw,650px)] rounded-full border-4 border-background-light bg-secondary/20 shadow-[-20px_-20px_60px_rgba(255,255,255,0.8),20px_20px_60px_rgba(0,0,0,0.1)]"
                animate={{
                    scale: [0.9, 1.1, 0.9],
                    backgroundColor: ["rgba(235, 233, 222, 0.15)", "rgba(235, 233, 222, 0.25)", "rgba(235, 233, 222, 0.15)"]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Static Content Container (Word Cloud & Robot) */}
            <div className="relative w-[min(85vw,650px)] h-[min(85vw,650px)] rounded-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-80">
                    <MatrixWordCloud />
                </div>

                {/* Robot with independent float animation */}
                <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10 pointer-events-auto"
                >
                    <LineArtRobot className="w-64 h-64 md:w-[400px] md:h-[400px] text-primary" />
                </motion.div>

                {/* Subtle highlight ring */}
                <div className="absolute inset-0 rounded-full border border-white/30 pointer-events-none" />
            </div>
        </div>
    );
}
