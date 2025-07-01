import { ID } from 'appwrite';
import { databases, DATABASE_ID, MESSAGES_COLLECTION_ID } from '../config/appwrite';

class MessageService {
    async getMessages() {
        try {
            const response = await databases.listDocuments(
                DATABASE_ID,
                MESSAGES_COLLECTION_ID
            );
            return response.documents;
        } catch (error) {
            console.error('Error fetching messages:', error);
            throw error;
        }
    }

    async addMessage(message) {
        try {
            const response = await databases.createDocument(
                DATABASE_ID,
                MESSAGES_COLLECTION_ID,
                ID.unique(),
                {
                    sender: message.sender,
                    text: message.text,
                    time: message.time
                }
            );
            return response;
        } catch (error) {
            console.error('Error adding message:', error);
            throw error;
        }
    }
}

export const messageService = new MessageService(); 