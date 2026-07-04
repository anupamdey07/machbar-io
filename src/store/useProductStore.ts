import { create } from 'zustand';
import { CommunityPost, Product } from '@/types';
import { productsData } from '@/data/products';

interface ProductStore {
    products: Product[];
    posts: CommunityPost[];
    isLoading: boolean;
    error: string | null;
    fetchProducts: () => Promise<void>;
    upvoteProduct: (id: string) => Promise<void>;
}

// Helper to sort products: Real images first, then by upvotes
const sortProducts = (a: Product, b: Product) => {
    const aIsPlaceholder = !a.images || a.images.length === 0;
    const bIsPlaceholder = !b.images || b.images.length === 0;

    if (!aIsPlaceholder && bIsPlaceholder) return -1;
    if (aIsPlaceholder && !bIsPlaceholder) return 1;

    return b.upvotes - a.upvotes;
};

// Extract posts from product creators
const extractPosts = (products: Product[]): CommunityPost[] => {
    const posts: CommunityPost[] = [];
    for (const p of products) {
        if (p.creator?.posts) {
            posts.push(...p.creator.posts);
        }
    }
    return posts;
};

export const useProductStore = create<ProductStore>((set, get) => ({
    // Initialize with products from SQLite-synced JSON
    products: productsData,
    posts: extractPosts(productsData),
    isLoading: false,
    error: null,
    fetchProducts: async () => {
        // Products are loaded synchronously from JSON at import time.
        // This method is kept for future API integration.
        set({ isLoading: false });
    },
    upvoteProduct: async (id) => {
        const product = get().products.find(p => p.id === id);
        if (!product) return;

        // Optimistic update
        set((state) => ({
            products: [...state.products]
                .map((p) => (p.id === id ? { ...p, upvotes: p.upvotes + 1 } : p))
                .sort(sortProducts),
        }));

        // Note: Upvotes are local-only for now.
        // Future: sync back to SQLite when online backend is available.
        console.log(`👍 Upvoted: ${product.name} (${product.upvotes + 1})`);
    },
}));
