import { Client, Databases } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://nyc.cloud.appwrite.io/v1')
    .setProject('686323af001b56678e03');

const databases = new Databases(client);

// These IDs will be available in your Appwrite console
// Database -> Select your database -> Look for "Database ID"
// Collection -> Select your collection -> Look for "Collection ID"
const DATABASE_ID = '686323dd001839892922';
const MESSAGES_COLLECTION_ID = '686323e70018f9b03be2';

export { client, databases, DATABASE_ID, MESSAGES_COLLECTION_ID }; 