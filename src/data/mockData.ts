import { Product } from '@/types';

export const initialProducts: Product[] = [
    {
        id: 'mock-1',
        name: 'Krishna Companion Box',
        category: 'Assistant Boxes',
        description: 'Krishna Companion Box brings ancient wisdom into your daily life through conversational AI. Ask questions about life, dharma, karma, and receive personalized guidance based on the Bhagavad Gita.',
        price: 199,
        images: ['https://images.unsplash.com/photo-1546776310-eef45dd6d63c?w=800&q=80'],
        creator: {
            id: 'u1',
            name: 'Alex Maker',
            username: 'alex_maker',
            badge: 'Maker',
            credibility_score: 95,
            products: [],
            contributions: [],
            posts: []
        },
        status: 'Coming Soon',
        upvotes: 112,
        privacy_verified: true,
        launch_date: '2026-07-01',
        slug: 'krishna-companion-box',
        skill_level: 'Beginner'
    },
    {
        id: 'mock-2',
        name: 'Reachy Mini',
        category: 'Programmable Robotics',
        description: 'An open-source desktop robot designed for AI experimentation. Features 6 Degrees of Freedom and deep Hugging Face integration.',
        price: 299,
        images: ['https://cdn-uploads.huggingface.co/production/uploads/671faa3a541a76b548647676/uEa13KsL5wtQREVZ1ixwc.png'],
        creator: {
            id: 'pollen',
            name: 'Pollen Robotics',
            username: 'pollen_robotics',
            badge: 'Maker',
            credibility_score: 98,
            products: [],
            contributions: [],
            posts: [
                {
                    id: 'pm-1',
                    author: {} as any,
                    content: "Reachy Mini is now shipping! Can't wait to see what you build. 🦾 #opensource #robotics",
                    images: ['https://www.pollen-robotics.com/wp-content/uploads/2025/06/Reachy_mini_website_stuff00558988-ezgif.com-video-to-gif-converter.gif'],
                    hashtags: ['opensource', 'robotics'],
                    timestamp: '2025-08-01T10:00:00Z',
                    likes: 124,
                    replies: 12
                }
            ]
        },
        status: 'Available',
        upvotes: 245,
        privacy_verified: true,
        launch_date: '2025-08-01',
        slug: 'reachy-mini',
        skill_level: 'Beginner'
    }
];
