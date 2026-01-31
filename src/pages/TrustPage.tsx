import { motion } from 'framer-motion';
import TrustIndicator from '@/components/common/TrustIndicator';

export default function TrustPage() {
    return (
        <div className="py-20 bg-background">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-12">
                        <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Our Commitment</span>
                        <h1 className="font-heading text-5xl font-bold text-primary mb-6">
                            Trust & Transparency
                        </h1>
                        <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
                            We bridge the gap between complex hardware and consumer confidence through rigorous vetting and community oversight.
                        </p>
                    </div>

                    <div className="mb-16 flex justify-center">
                        <div className="bg-white p-6 rounded-3xl border border-background-light shadow-soft inline-flex">
                            <TrustIndicator
                                verified
                                vetted
                                gdpr
                                className="justify-center"
                            />
                        </div>
                    </div>

                    <div className="grid gap-8">
                        <section className="bg-white p-10 rounded-3xl border border-background-light shadow-sm hover:shadow-md transition-shadow">
                            <h2 className="font-heading text-2xl font-bold mb-4 flex items-center gap-4 text-primary">
                                <span className="bg-sage-dark/10 p-3 rounded-xl text-2xl">🧩</span>
                                Verified Traction
                            </h2>
                            <p className="text-charcoal/80 leading-relaxed text-lg">
                                We don't feature vaporware. Every product listed on machbar.io must demonstrate real community traction and functioning prototypes. We look for active Github repos, community forums, and successful early adopter phases.
                            </p>
                        </section>

                        <section className="bg-white p-10 rounded-3xl border border-background-light shadow-sm hover:shadow-md transition-shadow">
                            <h2 className="font-heading text-2xl font-bold mb-4 flex items-center gap-4 text-primary">
                                <span className="bg-sage-dark/10 p-3 rounded-xl text-2xl">📝</span>
                                Boundless Documentation
                            </h2>
                            <p className="text-charcoal/80 leading-relaxed text-lg">
                                Documentation is the soul of a smart product. We personally review user guides, API docs, and setup instructions to ensure they are beginner-accessible. If you can't build it with the provided guides, it doesn't stay on the first page.
                            </p>
                        </section>

                        <section className="bg-white p-10 rounded-3xl border border-background-light shadow-sm hover:shadow-md transition-shadow">
                            <h2 className="font-heading text-2xl font-bold mb-4 flex items-center gap-4 text-primary">
                                <span className="bg-sage-dark/10 p-3 rounded-xl text-2xl">🛡️</span>
                                Privacy & GDPR
                            </h2>
                            <p className="text-charcoal/80 leading-relaxed text-lg">
                                Smart products often handle sensitive data. We require makers to be transparent about data collection and storage. Our community "Privacy Shield" helps identify products that prioritize local execution over cloud-first architectures.
                            </p>
                        </section>

                        <section className="bg-secondary p-10 rounded-3xl shadow-soft">
                            <h2 className="font-heading text-2xl font-bold mb-6 text-primary">
                                Community Verification
                            </h2>
                            <p className="text-primary/70 leading-relaxed mb-6 text-lg">
                                Our platform isn't just a directory; it's a peer-verification system.
                            </p>
                            <ul className="grid sm:grid-cols-2 gap-4">
                                {[
                                    'Vetted by experienced makers',
                                    'Weekly leaderboard updates',
                                    'Peer-reviewed documentation',
                                    'Maker-to-Maker support forums',
                                    'Verified purchase feedback',
                                    'Transparency milestones'
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-primary/80 font-medium">
                                        <span className="text-trust text-xl">✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
