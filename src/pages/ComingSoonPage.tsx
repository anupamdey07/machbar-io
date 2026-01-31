import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ComingSoonPage() {
    const location = useLocation();

    // Format the pathname to a readable title
    let title = location.pathname.substring(1).replace(/-/g, ' ');
    if (location.pathname.startsWith('/products/')) {
        title = 'Product Coming Soon';
    } else if (!title) {
        title = 'Coming Soon';
    }

    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center bg-background text-center px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-24 h-24 bg-secondary rounded-3xl flex items-center justify-center text-5xl mb-8 shadow-soft border border-background-light"
            >
                🚧
            </motion.div>

            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4 capitalize">
                {title}
            </h1>

            <p className="text-xl text-charcoal/60 max-w-lg mb-10 leading-relaxed">
                We're currently building this feature. Check back later for updates as we continue to expand the machbar.io ecosystem.
            </p>

            <Link to="/" className="btn-primary px-8 py-3">
                Return Home
            </Link>
        </div>
    );
}
