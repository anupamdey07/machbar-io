import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Product } from '@/types';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            className="group relative bg-white rounded-3xl border border-background-light overflow-hidden hover:shadow-2xl transition-all duration-300"
        >
            <Link to={`/products/${product.slug}`} className="block">
                {/* Visual Header */}
                <div className="aspect-[16/9] bg-secondary/30 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-500 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />

                    {product.images[0]?.startsWith('http') || product.images[0]?.startsWith('/') ? (
                        <img
                            src={product.images[0]}
                            alt={product.name}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        product.images[0] || '🛠️'
                    )}

                    <div className="absolute top-4 right-4 z-20">
                        {product.status === 'Available' ? (
                            <span className="flex items-center gap-1.5 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full border border-emerald-500/20 shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Available</span>
                            </span>
                        ) : (
                            <span className="flex items-center gap-1.5 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full border border-yellow-400/20 shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                                <span className="text-[10px] font-bold text-yellow-600 uppercase tracking-widest">Coming Soon</span>
                            </span>
                        )}
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-[10px] font-bold text-primary/40 bg-background px-2 py-0.5 rounded uppercase tracking-widest border border-background-light">
                            {product.category}
                        </span>
                        <div className="ml-auto">
                            <span className={`text-[10px] font-bold uppercase tracking-wider ${product.skill_level === 'Beginner' ? 'text-mint' :
                                product.skill_level === 'Intermediate' ? 'text-accent' : 'text-primary'
                                }`}>
                                {product.skill_level}
                            </span>
                        </div>
                    </div>

                    <h3 className="font-heading font-bold text-xl text-primary mb-2 group-hover:text-accent transition-colors">
                        {product.name}
                    </h3>

                    <p className="text-sm text-charcoal/60 line-clamp-2 mb-4">
                        {product.description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-background-light">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-background flex items-center justify-center text-[10px] border border-background-light overflow-hidden">
                                {product.creator.avatar ? (
                                    <img src={product.creator.avatar} alt={product.creator.name} className="w-full h-full object-cover" />
                                ) : (
                                    '👤'
                                )}
                            </div>
                            <span className="text-xs font-medium text-charcoal/70">{product.creator.name}</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1 text-charcoal/40">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                </svg>
                                <span className="text-xs font-bold">{product.upvotes}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
