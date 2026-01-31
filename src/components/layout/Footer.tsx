import { Link } from 'react-router-dom';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerSections = [
        {
            title: 'Platform',
            links: [
                { label: 'Explore Products', path: '/explore' },
                { label: 'Leaderboard', path: '/leaderboard' },
                { label: 'Community', path: '/community' },
                { label: 'Blog', path: '/blog' },
            ],
        },
        {
            title: 'Company',
            links: [
                { label: 'About Us', path: '/about' },
                { label: 'Trust & Privacy', path: '/trust' },
                { label: 'Governance', path: '/governance' },
            ],
        },
        {
            title: 'Resources',
            links: [
                { label: 'API Docs', path: '/docs' },
                { label: 'Help Center', path: '/help' },
                { label: 'Contact', path: '/contact' },
            ],
        },
    ];

    const socialLinks = [
        { name: 'Twitter', icon: '𝕏', url: 'https://twitter.com' },
        { name: 'GitHub', icon: '⚙️', url: 'https://github.com' },
        { name: 'Hugging Face', icon: '🤗', url: 'https://huggingface.co' },
        { name: 'Discord', icon: '💬', url: 'https://discord.com' },
        { name: 'YouTube', icon: '▶️', url: 'https://youtube.com' },
        { name: 'Reddit', icon: '🔴', url: 'https://reddit.com' },
    ];

    return (
        <footer className="bg-primary text-secondary mt-20 border-t border-background-light">
            <div className="container-custom py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="text-3xl">
                                🤖
                            </div>
                            <span className="font-heading font-bold text-2xl text-secondary lowercase tracking-tighter">machbar.io</span>
                        </div>
                        <p className="text-secondary/70 text-sm mb-2 max-w-sm leading-relaxed">
                            The onramp from curiosity to your first hardware project.
                            Discover curated, consumer-ready products for the next-gen of creators.
                        </p>
                        <p className="text-secondary/40 text-xs mb-6 font-mono tracking-widest uppercase">
                            Imagined in Berlin
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-secondary/10 hover:bg-secondary/20 rounded-lg flex items-center justify-center transition-colors text-secondary group"
                                    aria-label={social.name}
                                >
                                    {social.name === 'Twitter' && (
                                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    )}
                                    {social.name === 'GitHub' && (
                                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    )}
                                    {social.name === 'Hugging Face' && (
                                        <svg className="w-5 h-5 fill-current" viewBox="0 0 95 88" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M47.21 0C28.39 0 13.07 15.32 13.07 34.14v19.72c0 18.82 15.32 34.14 34.14 34.14s34.14-15.32 34.14-34.14V34.14C81.35 15.32 66.03 0 47.21 0zm-13.5 28.29c3.49 0 6.32 2.83 6.32 6.32s-2.83 6.32-6.32 6.32-6.32-2.83-6.32-6.32 2.83-6.32 6.32-6.32zm27 0c3.49 0 6.32 2.83 6.32 6.32s-2.83 6.32-6.32 6.32-6.32-2.83-6.32-6.32 2.83-6.32 6.32-6.32zM47.21 68.5c-7.5 0-13.95-4.25-17.21-10.5h34.42c-3.26 6.25-9.71 10.5-17.21 10.5z" />
                                        </svg>
                                    )}
                                    {social.name === 'Discord' && (
                                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                                        </svg>
                                    )}
                                    {social.name === 'YouTube' && (
                                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                        </svg>
                                    )}
                                    {social.name === 'Reddit' && (
                                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
                                        </svg>
                                    )}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Sections */}
                    {footerSections.map((section) => (
                        <div key={section.title}>
                            <h3 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-secondary">
                                {section.title}
                            </h3>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.path}>
                                        <Link
                                            to={link.path}
                                            className="text-secondary/60 hover:text-secondary text-sm transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Section */}
                <div className="mt-12 pt-8 border-t border-secondary/10">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-secondary/40 text-sm">
                            © {currentYear} machbar.io. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm">
                            <Link to="/privacy" className="text-secondary/40 hover:text-secondary transition-colors">
                                Privacy Policy
                            </Link>
                            <Link to="/terms" className="text-secondary/40 hover:text-secondary transition-colors">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
