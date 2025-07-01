import { Client, Databases, ID } from 'appwrite';

const client = new Client()
    .setEndpoint('https://nyc.cloud.appwrite.io/v1')
    .setProject('686323af001b56678e03');

const databases = new Databases(client);
const DATABASE_ID = '686323dd001839892922';
const MESSAGES_COLLECTION_ID = '686323e70018f9b03be2';

const messages = [
    { sender: 'Mr. Squid', text: 'Your entry about the beach reminded me of my own underwater adventures! The way you described the sunset was particularly poetic.', time: '11:32am' },
    { sender: 'Sharky', text: 'I noticed you\'ve been feeling stressed lately. Remember to take deep breaths, just like we do in the deep blue!', time: '10:15am' },
    { sender: 'Whale-O', text: 'Your journal entry about music was fascinating! Did you know whales have been singing their own songs for millions of years?', time: '9:45am' },
    { sender: 'Captain Starfish', text: 'Your creativity is really shining through in your latest entries. Keep exploring those ideas!', time: '9:22am' },
    { sender: 'Eelvis', text: 'Thank you for sharing your thoughts about family. It reminds me of my own school of fish!', time: '8:56am' },
    { sender: 'Mr. Squid', text: 'I\'ve noticed a pattern in your evening entries - you seem most creative after sunset. Shall we explore that?', time: 'Yesterday' },
    { sender: 'Raymond', text: 'Your goals for this month are ambitious and inspiring. Let\'s break them down into smaller steps!', time: 'Yesterday' },
    { sender: 'Sharky', text: 'Remember that challenge you wrote about last week? Look how far you\'ve come since then!', time: 'Yesterday' },
    { sender: 'Whale-O', text: 'Your entry about learning to cook made me smile. Everyone starts somewhere - even sea creatures!', time: '2 days ago' },
    { sender: 'Captain Starfish', text: 'I\'ve compiled some insights from your morning pages. Would you like to review them together?', time: '2 days ago' },
    { sender: 'Mr. Squid', text: 'Your writing style has evolved so much since we started. I\'m proud of your progress!', time: '3 days ago' },
    { sender: 'Eelvis', text: 'That travel story you shared was quite an adventure! It reminded me of my journey across the seven seas.', time: '3 days ago' },
    { sender: 'Raymond', text: 'I noticed you haven\'t written about your art project lately. Would you like to reflect on that?', time: '4 days ago' },
    { sender: 'Sharky', text: 'Your gratitude entries are always so thoughtful. They make my day brighter!', time: '4 days ago' },
    { sender: 'Mr. Squid', text: 'Looking back at your entries from last month, I see so much personal growth. Shall we discuss?', time: '5 days ago' }
];

async function addMessages() {
    console.log('Starting to add messages...');
    
    for (const message of messages) {
        try {
            await databases.createDocument(
                DATABASE_ID,
                MESSAGES_COLLECTION_ID,
                ID.unique(),
                message
            );
            console.log(`Added message from ${message.sender}`);
        } catch (error) {
            console.error(`Failed to add message from ${message.sender}:`, error);
        }
    }
    
    console.log('Finished adding messages!');
}

addMessages(); 