import Airtable from 'airtable';
import { Product, ProductCategory, ProductStatus, SkillLevel, UserBadge } from '@/types';

const API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY;
const BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;

if (!API_KEY || !BASE_ID) {
    console.warn('Airtable API Key or Base ID is missing. Using mock data.');
}

const base = new Airtable({ apiKey: API_KEY }).base(BASE_ID);

export const fetchAirtableProducts = async (): Promise<Product[]> => {
    try {
        // Fetch Makers first
        const makersRecords = await base('Makers').select({
            view: 'Grid view'
        }).all();

        const makersMap = new Map();
        makersRecords.forEach(m => {
            // Map by internal Record ID (for Linked Records)
            makersMap.set(m.id, m);
            // Also map by custom 'id' field (for text matching)
            const customId = m.get('id') as string;
            if (customId) makersMap.set(customId, m);
        });

        // Fetch Products
        const productRecords = await base('Products').select({
            view: 'Grid view'
        }).all();

        return productRecords.map(record => {
            // Resolve Creator
            const creatorIdRaw = record.get('creator_id');
            let makerRecord;

            if (Array.isArray(creatorIdRaw) && creatorIdRaw.length > 0) {
                // Linked Record (returns array of IDs)
                makerRecord = makersMap.get(creatorIdRaw[0]);
            } else if (typeof creatorIdRaw === 'string') {
                // Text match
                makerRecord = makersMap.get(creatorIdRaw);
            }

            // Construct Creator Object
            const creatorObj = makerRecord ? {
                id: (makerRecord.get('id') as string) || makerRecord.id,
                name: (makerRecord.get('name') as string) || 'Anonymous Maker',
                username: (makerRecord.get('username') as string) || 'anonymous',
                bio: (makerRecord.get('bio') as string) || '',
                location: (makerRecord.get('location') as string) || '',
                badge: (makerRecord.get('badge') as UserBadge) || 'Maker',
                credibility_score: (makerRecord.get('credibility_score') as number) || 100,
                avatar: makerRecord.get('avatar') ? (makerRecord.get('avatar') as any[])[0]?.url : undefined,
                products: [], // We don't populate reverse links here to avoid circular dep for now
                contributions: [],
                posts: []
            } : {
                id: 'unknown',
                name: 'Anonymous Maker',
                username: 'anonymous',
                bio: '',
                location: '',
                badge: 'Maker' as UserBadge,
                credibility_score: 100,
                products: [],
                contributions: [],
                posts: []
            };

            return {
                id: record.id,
                name: (record.get('name') as string) || 'Untitled Product',
                category: (record.get('category') as ProductCategory) || 'Other',
                description: (record.get('description') as string) || '',
                price: (record.get('price') as number) || 0,
                images: record.get('images') ? (record.get('images') as any[]).map((img: any) => img.url) : ['📦'],
                creator: creatorObj,
                status: (record.get('status') as ProductStatus) || 'Available',
                upvotes: (record.get('upvotes') as number) || 0,
                privacy_verified: (record.get('privacy_verified') as boolean) || false,
                launch_date: (record.get('launch_date') as string) || '',
                slug: (record.get('slug') as string) || '',
                skill_level: (record.get('skill_level') as SkillLevel) || 'Beginner',
                external_link: (record.get('external_link') as string) || ''
            };
        });
    } catch (error) {
        console.error('Error fetching from Airtable:', error);
        throw error;
    }
};

export const upvoteAirtableProduct = async (id: string, currentUpvotes: number) => {
    try {
        await base('Products').update(id, {
            'upvotes': currentUpvotes + 1
        });
    } catch (error) {
        console.error('Error upvoting in Airtable:', error);
        throw error;
    }
};
