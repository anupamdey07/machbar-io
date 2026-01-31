
import Airtable from 'airtable';

const API_KEY = process.env.VITE_AIRTABLE_API_KEY;
const BASE_ID = process.env.VITE_AIRTABLE_BASE_ID;

console.log('Testing Airtable connection...');
console.log('BASE_ID:', BASE_ID);

if (!API_KEY) {
    console.error('ERROR: VITE_AIRTABLE_API_KEY is missing');
    process.exit(1);
}

const base = new Airtable({ apiKey: API_KEY }).base(BASE_ID);

async function test() {
    try {
        console.log('Attempting to fetch from "Products"...');
        const records = await base('Products').select({ maxRecords: 1 }).firstPage();
        console.log('Success! Found records:', records.length);
        if (records.length > 0) {
            console.log('First record fields:', Object.keys(records[0].fields));
        }
    } catch (e) {
        console.error('Failed to fetch from "Products":', e.message);

        try {
            console.log('Attempting to fetch from "Product"...');
            const records = await base('Product').select({ maxRecords: 1 }).firstPage();
            console.log('Success! Found records in "Product":', records.length);
        } catch (e2) {
            console.error('Failed to fetch from "Product":', e2.message);
        }
    }
}

test();
