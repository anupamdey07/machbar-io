// Re-export products from JSON (SQLite-synced)
// This file is the TypeScript interface for the JSON data.
// Do NOT edit products.json directly — use the /addproduct bot command instead.

import productsDataRaw from './products.json';

// Type assertion: the JSON matches our Product[] structure
export const productsData: import('@/types').Product[] = productsDataRaw as any;
