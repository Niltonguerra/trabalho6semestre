import { ChatService } from '../services/chat.service';
export declare class ChatController {
    private readonly chatService;
    constructor(chatService: ChatService);
    createRoom(name: string, participants: string[]): Promise<import("../schemas/chatRoom.schema").ChatRoom>;
    sendMessage(sender: string, chatRoom: string, content: string): Promise<import("../schemas/message.schema").Message>;
    getMessages(roomId: string): Promise<import("../schemas/message.schema").Message[]>;
}
