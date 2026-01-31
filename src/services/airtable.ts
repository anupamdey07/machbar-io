import Airtable from 'airtable';
import { Product, ProductCategory, ProductStatus, SkillLevel } from '@/types';

const API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY;
const BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;

if (!API_KEY || !BASE_ID) {
    console.warn('Airtable API Key or Base ID is missing. Using mock data.');
}

const base = new Airtable({ apiKey: API_KEY }).base(BASE_ID);

export const fetchAirtableProducts = async (): Promise<Product[]> => {
    try {
        const records = await base('Products').select({
            view: 'Grid view' // Ensure this matches the view name in Airtable
        }).all();

        return records.map(record => ({
            id: record.id,
            name: record.get('Name') as string,
            category: record.get('Category') as ProductCategory,
            description: record.get('Description') as string,
            price: record.get('Price') as number,
            images: record.get('Images') ? (record.get('Images') as any[]).map(img => img.url) : ['📦'],
            creator: {
                id: (record.get('Creator') as string[])?.[0] || 'unknown',
                name: (record.get('CreatorName') as string) || 'Anonymous Maker',
                username: (record.get('CreatorUsername') as string) || 'anonymous_maker',
                bio: (record.get('CreatorBio') as string) || '',
                location: (record.get('CreatorLocation') as string) || '',
                badge: 'Maker',
                credibility_score: 100,
                products: [],
                contributions: [],
                posts: []
            },
            status: record.get('Status') as ProductStatus || 'Available',
            upvotes: (record.get('Upvotes') as number) || 0,
            privacy_verified: record.get('Privacy Verified') as boolean || false,
            launch_date: record.get('Launch Date') as string || '',
            slug: record.get('Slug') as string || '',
            skill_level: record.get('Skill Level') as SkillLevel || 'Beginner',
            external_link: record.get('External Link') as string
        }));
    } catch (error) {
        console.error('Error fetching from Airtable:', error);
        throw error;
    }
};

export const upvoteAirtableProduct = async (id: string, currentUpvotes: number) => {
    try {
        await base('Products').update(id, {
            'Upvotes': currentUpvotes + 1
        });
    } catch (error) {
        console.error('Error upvoting in Airtable:', error);
        throw error;
    }
};
