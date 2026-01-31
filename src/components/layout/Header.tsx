import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const query = searchQuery.trim().toLowerCase();
        if (!query) return;

        // Check for direct page matches
        const pageMatch = navItems.find(item =>
            item.label.toLowerCase() === query ||
            item.path.slice(1).toLowerCase() === query
        );

        if (pageMatch) {
            navigate(pageMatch.path);
            setSearchQuery('');
            return;
        }

        // Secondary pages matches
        const secondaryPages = [
            { label: 'About', path: '/about' },
            { label: 'Trust', path: '/trust' },
            { label: 'Cart', path: '/cart' },
            { label: 'Profile', path: '/profile/pollen' },
        ];

        const secondaryMatch = secondaryPages.find(page =>
            page.label.toLowerCase() === query ||
            page.path.slice(1).toLowerCase() === query
        );

        if (secondaryMatch) {
            navigate(secondaryMatch.path);
            setSearchQuery('');
            return;
        }

        navigate(`/explore?search=${encodeURIComponent(searchQuery)}`);
        setSearchQuery('');
    };

    const navItems = [
        { label: 'Explore', path: '/explore' },
        { label: 'Community', path: '/community' },
        { label: 'Blog', path: '/blog' },
        { label: 'Leaderboard', path: '/leaderboard' },
    ];

    const handleExploreClick = () => {
        // Simple navigation is handled by Link, we just close menu if mobile
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 glass border-b border-background-light">
            <div className="container-custom">
                <div className="flex items-center justify-between h-20">
                    {/* Logo + Primary Nav */}
                    <div className="flex items-center gap-10">
                        <Link to="/" className="flex items-start gap-4 group">
                            <div className="text-5xl group-hover:scale-110 transition-transform h-10 flex items-center shrink-0">
                                🤖
                            </div>
                            <div className="flex flex-col">
                                <span className="font-heading font-black text-3xl text-primary leading-[1.2] lowercase tracking-tighter">
                                    machbar.io
                                </span>
                                <span className="text-[9px] font-mono text-trust-dark font-bold tracking-[0.2em] animate-pulse opacity-40 uppercase -mt-1 ml-0.5">
                                    ... launching soon
                                </span>
                            </div>
                        </Link>

                        <nav className="hidden md:flex items-center gap-6">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className="text-sm font-medium text-charcoal/70 hover:text-primary transition-colors"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Center Search Bar */}
                    <div className="hidden lg:block flex-1 max-w-2xl mx-8">
                        <form onSubmit={handleSearch}>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Ask anything you want to do with smart products..."
                                    className="w-full px-4 py-2 pl-10 pr-4 rounded-xl border border-background-light bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm text-charcoal"
                                />
                                <svg
                                    className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal/40"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </div>
                        </form>
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center gap-4">
                        {/* Notifications */}
                        <button className="p-2 hover:bg-background-light rounded-lg transition-colors hidden md:block group">
                            <svg
                                className="w-5 h-5 text-charcoal/70 group-hover:text-primary"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                />
                            </svg>
                        </button>

                        {/* Cart */}
                        <button
                            onClick={() => navigate('/cart')}
                            className="p-2 hover:bg-background-light rounded-lg transition-colors hidden md:block group"
                        >
                            <svg className="w-5 h-5 text-charcoal/70 group-hover:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </button>

                        {/* Profile */}
                        <button
                            onClick={() => navigate('/profile/pollen')}
                            className="p-2 hover:bg-background-light rounded-lg transition-colors hidden md:block group"
                        >
                            <svg className="w-5 h-5 text-charcoal/70 group-hover:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 hover:bg-background-light rounded-lg"
                        >
                            <svg
                                className="w-6 h-6 text-charcoal"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMobileMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <motion.div
                    initial={false}
                    animate={{ height: isMobileMenuOpen ? 'auto' : 0 }}
                    className="md:hidden overflow-hidden overflow-y-auto"
                >
                    <div className="py-4 border-t border-background-light">
                        <nav className="flex flex-col gap-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={handleExploreClick}
                                    className="text-sm font-medium text-charcoal/70 hover:text-primary transition-colors"
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <Link
                                to="/cart"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-sm font-medium text-charcoal/70 hover:text-primary transition-colors"
                            >
                                Cart
                            </Link>
                            <Link
                                to="/login"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-sm font-medium text-charcoal/70 hover:text-primary transition-colors"
                            >
                                Profile
                            </Link>
                        </nav>
                    </div>
                </motion.div>
            </div>
        </header>
    );
}
