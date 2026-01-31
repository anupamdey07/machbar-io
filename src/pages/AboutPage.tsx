import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function AboutPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);

    return (
        <div ref={containerRef} className="relative bg-background overflow-hidden">
            {/* Animated Background Elements */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    style={{ y, opacity }}
                    className="absolute top-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
                />
                <motion.div
                    style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '-30%']), opacity }}
                    className="absolute bottom-20 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
                />
                <motion.div
                    style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '70%']), opacity }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-mint/5 rounded-full blur-3xl"
                />
            </div>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20">
                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-center max-w-5xl mx-auto"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mb-8"
                        >
                            <span className="inline-block px-6 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent font-bold text-sm tracking-widest uppercase mb-8">
                                Our Story
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="font-heading text-6xl md:text-8xl lg:text-9xl font-black text-primary mb-8 lowercase tracking-tighter leading-[0.9]"
                        >
                            machbar<span className="text-accent">.</span>io
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="space-y-6 mb-12"
                        >
                            <p className="text-2xl md:text-3xl text-charcoal/90 font-light leading-relaxed max-w-3xl mx-auto">
                                The onramp from <span className="font-bold text-primary">curiosity</span> to your first <span className="font-bold text-accent">hardware project</span>.
                            </p>
                            <p className="text-lg md:text-xl text-charcoal/60 max-w-2xl mx-auto">
                                Discover curated, consumer-ready products for the next generation of creators.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="flex items-center justify-center gap-3 text-sm font-mono tracking-widest uppercase"
                        >
                            <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                            <span className="text-charcoal/40">Imagined in Berlin</span>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-6 h-10 border-2 border-charcoal/20 rounded-full flex items-start justify-center p-2"
                    >
                        <div className="w-1 h-2 bg-accent rounded-full"></div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Vision Section - Immersive */}
            <section className="relative py-32 overflow-hidden">
                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="relative bg-gradient-to-br from-white via-secondary/50 to-white p-16 rounded-[60px] border border-background-light shadow-2xl backdrop-blur-sm">
                            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
                            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary/10 rounded-full blur-2xl"></div>

                            <h2 className="font-heading text-5xl md:text-6xl font-black mb-8 text-primary tracking-tight">
                                Our Vision
                            </h2>
                            <div className="space-y-6 text-lg md:text-xl text-charcoal/80 leading-relaxed">
                                <p>
                                    We believe the path to creation should be <span className="font-bold text-primary">approachable</span>, <span className="font-bold text-accent">guided</span>, and <span className="font-bold text-mint">rewarding</span>.
                                </p>
                                <p>
                                    By focusing on products with real traction and refined documentation, we help curious beginners transition into confident makers.
                                </p>
                                <p className="text-2xl font-light text-primary/90 italic">
                                    Our platform isn't just a shop—it's a learning ecosystem for smart, tangible technology.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Quote Section - Cinematic */}
            <section className="relative py-32 bg-primary text-secondary overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]"></div>
                </div>

                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="max-w-5xl mx-auto text-center"
                    >
                        <div className="relative inline-block">
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="absolute -top-12 -left-12 text-9xl text-accent/30 font-serif"
                            >
                                "
                            </motion.div>
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="absolute -bottom-12 -right-12 text-9xl text-accent/30 font-serif rotate-180"
                            >
                                "
                            </motion.div>

                            <blockquote className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold leading-tight px-16 py-8 italic">
                                Come out of the era of staring at screens.
                                <br />
                                <span className="text-accent">Start creating, making,</span>
                                <br />
                                and connecting with <span className="underline decoration-accent decoration-4 underline-offset-8">physical objects</span>.
                            </blockquote>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Core Differentiators - Bento Grid Style */}
            <section className="relative py-32">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <h2 className="font-heading text-5xl md:text-6xl font-black text-primary mb-6 tracking-tight">
                            What Makes Us Different
                        </h2>
                        <p className="text-xl text-charcoal/60 max-w-2xl mx-auto">
                            Four pillars that define our approach to hardware education
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                        {[
                            {
                                title: 'Guided Path',
                                description: 'Curated "Start Here" guides for every product, taking you from unboxing to first hello-world.',
                                icon: '🧭',
                                gradient: 'from-mint/20 to-mint/5',
                                accentColor: 'mint',
                            },
                            {
                                title: 'Verified Traction',
                                description: 'We only feature products with proven community support and refined documentation.',
                                icon: '✅',
                                gradient: 'from-accent/20 to-accent/5',
                                accentColor: 'accent',
                            },
                            {
                                title: 'Learning Ecosystem',
                                description: 'Move beyond consumption. Build skills in coding, hardware assembly, and AI implementation.',
                                icon: '🎓',
                                gradient: 'from-primary/20 to-primary/5',
                                accentColor: 'primary',
                            },
                            {
                                title: 'Tangible Connection',
                                description: 'Focus on physical devices that interact with the real world, not just browser tabs.',
                                icon: '📦',
                                gradient: 'from-trust/20 to-trust/5',
                                accentColor: 'trust',
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                className={`relative group bg-gradient-to-br ${item.gradient} p-10 rounded-[40px] border border-background-light shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden`}
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative z-10">
                                    <div className="text-7xl mb-6 group-hover:scale-110 transition-transform duration-500">
                                        {item.icon}
                                    </div>
                                    <h3 className="font-heading font-black text-3xl mb-4 text-primary group-hover:text-accent transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-lg text-charcoal/70 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>

                                <div className={`absolute bottom-0 left-0 w-full h-1 bg-${item.accentColor} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Closing CTA */}
            <section className="relative py-32 bg-gradient-to-br from-secondary via-background to-secondary">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h2 className="font-heading text-4xl md:text-6xl font-black text-primary mb-8 tracking-tight">
                            Join the Movement
                        </h2>
                        <p className="text-xl md:text-2xl text-charcoal/70 mb-12 leading-relaxed">
                            We're building this for the love of creation. To inspire and be inspired.
                            <br />
                            <span className="text-primary font-bold">Your journey starts here.</span>
                        </p>
                        <motion.a
                            href="/explore"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block btn-primary px-12 py-5 text-lg shadow-2xl shadow-primary/30"
                        >
                            Explore Products
                        </motion.a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
