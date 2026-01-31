import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useProductStore } from '@/store/useProductStore';

export default function LeaderboardPage() {
    const navigate = useNavigate();
    const { products, upvoteProduct } = useProductStore();

    return (
        <div className="bg-background min-h-screen py-20">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
                    <div className="max-w-2xl">
                        <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Community Rankings</span>
                        <h1 className="font-heading text-5xl font-bold text-primary mb-6">
                            Smart Product Leaderboard
                        </h1>
                        <p className="text-xl text-charcoal/70">
                            The definitive list of hardware projects with real traction, ranked by the community.
                            New products are reset every Monday.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <button className="px-4 py-2 bg-white rounded-xl border border-background-light text-sm font-bold text-primary hover:bg-background-light transition-colors">
                            This Week
                        </button>
                        <button className="px-4 py-2 text-sm font-bold text-charcoal/40 hover:text-primary transition-colors">
                            All Time
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-[40px] shadow-soft border border-background-light overflow-hidden">
                    <div className="hidden md:grid grid-cols-[80px_1fr_150px_100px] gap-6 p-6 bg-secondary/30 border-b border-background-light text-sm font-bold text-primary/60 uppercase tracking-widest">
                        <div className="text-center">Rank</div>
                        <div>Product</div>
                        <div className="text-center">Points</div>
                        <div className="text-center">Status</div>
                    </div>

                    <div className="divide-y divide-background-light">
                        {products.map((product, index) => (
                            <motion.div
                                key={product.id}
                                layout
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="hover:bg-background/5 transition-colors group"
                            >
                                <Link
                                    to={`/products/${product.slug}`}
                                    className="p-6 grid grid-cols-1 md:grid-cols-[80px_1fr_150px_100px] items-center gap-6 block"
                                >
                                    <div className="flex flex-col items-center gap-2">
                                        <span className="text-xl font-bold text-charcoal/20">#{index + 1}</span>
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                upvoteProduct(product.id);
                                            }}
                                            className="p-2 hover:bg-secondary rounded-xl transition-colors group/upvote"
                                            aria-label="Upvote"
                                        >
                                            <svg
                                                className="w-5 h-5 text-charcoal/40 group-hover/upvote:text-accent group-hover/upvote:scale-125 transition-all"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 4l-8 8h16l-8-8z" />
                                            </svg>
                                        </button>
                                    </div>

                                    <div className="flex gap-6 items-center">
                                        <div className="w-20 h-20 bg-background rounded-2xl flex items-center justify-center text-4xl border border-background-light shrink-0 group-hover:scale-105 transition-transform overflow-hidden">
                                            {product.images[0]?.startsWith('http') || product.images[0]?.startsWith('/') ? (
                                                <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                                            ) : (
                                                product.images[0] || '📦'
                                            )}
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-3 mb-1">
                                                <h3 className="font-heading font-bold text-xl text-primary group-hover:text-accent transition-colors">
                                                    {product.name}
                                                </h3>
                                                <span className="text-[10px] font-bold text-charcoal/40 bg-background-light px-2 py-0.5 rounded uppercase tracking-wider">
                                                    {product.category}
                                                </span>
                                            </div>
                                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-charcoal/60">
                                                <span>by <span className="underline decoration-secondary underline-offset-2 cursor-pointer font-medium hover:text-accent transition-colors">{product.creator.name}</span></span>
                                                <span className={`font-bold ${product.skill_level === 'Beginner' ? 'text-mint' :
                                                        product.skill_level === 'Intermediate' ? 'text-accent' :
                                                            'text-primary'
                                                    }`}>
                                                    {product.skill_level}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-center gap-1">
                                        <span className="text-2xl font-bold text-primary">{product.upvotes}</span>
                                        <span className="text-xs font-bold text-charcoal/30 uppercase tracking-widest">Points</span>
                                    </div>

                                    <div className="flex justify-center">
                                        {product.status === 'Coming Soon' ? (
                                            <span className="flex items-center gap-1.5 px-3 py-1 bg-yellow-400/10 rounded-full border border-yellow-400/20">
                                                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
                                                <span className="text-[10px] font-bold text-yellow-600 uppercase tracking-widest">Coming Soon</span>
                                            </span>
                                        ) : (
                                            <span className="flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Available</span>
                                            </span>
                                        )}
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-20 text-center">
                    <p className="text-charcoal/40 text-sm mb-6">
                        Want to see your product here? Submit it for verification.
                    </p>
                    <button
                        onClick={() => navigate('/contact')}
                        className="btn-primary px-10 py-4"
                    >
                        Submit a Product
                    </button>
                </div>
            </div>
        </div>
    );
}
