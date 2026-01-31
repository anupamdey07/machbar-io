import clsx from 'clsx';

interface TrustIndicatorProps {
    verified?: boolean;
    vetted?: boolean;
    gdpr?: boolean;
    openSource?: boolean;
    className?: string;
}

const indicators = [
    { key: 'verified', label: 'Privacy Verified', icon: '🔒' },
    { key: 'vetted', label: 'Personally Vetted', icon: '✓' },
    { key: 'gdpr', label: 'GDPR Compliant', icon: '🛡️' },
    { key: 'openSource', label: 'Open Source Hardware', icon: '⚡' },
];

export default function TrustIndicator({
    verified = false,
    vetted = false,
    gdpr = false,
    openSource = false,
    className,
}: TrustIndicatorProps) {
    const props = { verified, vetted, gdpr, openSource };

    const activeIndicators = indicators.filter(
        (indicator) => props[indicator.key as keyof typeof props]
    );

    if (activeIndicators.length === 0) {
        return null;
    }

    return (
        <div className={clsx('flex flex-wrap gap-3', className)}>
            {activeIndicators.map((indicator) => (
                <div
                    key={indicator.key}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-trust/10 text-trust text-sm font-medium"
                >
                    <span className="text-base">{indicator.icon}</span>
                    <span>{indicator.label}</span>
                </div>
            ))}
        </div>
    );
}
