const announcements: string[] = [
    "🤖 NEW: Reachy mini by Pollen Robotics now live!",
    "🖨️ AI-powered Sticker Box by Hapiko is trending!",
    "🚀 machbar.io: Realizing doable smart hardware.",
    "🛠️ Join the community of 1,200+ makers.",
    "🤖 NEW: Reachy mini by Pollen Robotics now live!",
    "🖨️ AI-powered Sticker Box by Hapiko is trending!",
    "🚀 machbar.io: Realizing doable smart hardware.",
    "🛠️ Join the community of 1,200+ makers.",
];

export default function AnnouncementBar() {
    return (
        <div className="bg-accent text-white py-1.5 overflow-hidden whitespace-nowrap relative border-b border-accent-dark">
            <div className="flex animate-marquee">
                {announcements.map((text: string, i: number) => (
                    <span key={i} className="mx-8 font-bold text-xs tracking-widest uppercase flex items-center gap-2">
                        {text}
                        <span className="opacity-30">•</span>
                    </span>
                ))}
            </div>
        </div>
    );
}
